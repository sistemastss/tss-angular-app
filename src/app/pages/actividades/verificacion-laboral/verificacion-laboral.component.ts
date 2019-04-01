import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadClass} from '../../../@classes/actividad.class';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {HandlerModal} from '../../../@models/handler-modal';
import {VerificacionLaboralService} from '../../../services/esp/actividades/verificacion-laboral.service';

@Component({
  selector: 'app-verificacion-laboral',
  templateUrl: './verificacion-laboral.component.html',
  styleUrls: ['./verificacion-laboral.component.css']
})
export class VerificacionLaboralComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    empresa: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    periodo: new FormControl('', Validators.required),
    jefeInmediato: new FormControl('', Validators.required),
    cargoJefe: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    motivoRetiro: new FormControl('', Validators.required),
    confirmacion: new FormControl('', Validators.required),
    observaciones: new FormControl('', Validators.required)
  });


  verifLaboralModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  verificacionLaboral = [];

  constructor(public _actividades: ActividadesService,
              protected _verificacionLaboral: VerificacionLaboralService,
              public dataService: DataService,
              public _ngxPermissions: NgxPermissionsService) {

    super(_actividades);
  }

  ngOnInit() {
    this.codigo = 'VL';
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    if (this._actividades.canLoadResource(this.actividad)) {
      this.getVerifLaboral();
    }
  }


  onAceptarActividad(): void {
    this.setEstado('proceso');
  }


  protected getVerifLaboral(): void {
    this._verificacionLaboral.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          this.verificacionLaboral = value.servicios;
        }
        // () => alert('Ocurrio un error inesperado al tratar de recuperar los datos')
      );
  }


  // referencias form
  addVerifLaboral() {
    this._verificacionLaboral.post(this.servicioEsp, this.form.value)
      .subscribe((res: any) => {
        this.verificacionLaboral.push(res.servicios);
        this.closeModalVerifLaboral();
      });
  }

  updateVerifLaboral(id) {
    let item = null;
    this.verificacionLaboral.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.verifLaboralModal.showModal = true;
    this.verifLaboralModal.isUpdate = true;
    this.form.setValue(item);
  }

  refreshVerifLaboral() {
    const id = this.form.get('id').value;
    this._verificacionLaboral.put(this.servicioEsp, id, this.form.value)
      .subscribe(
        (res: any) => {
          this.verificacionLaboral = this.verificacionLaboral
            .map(value => value.id === res.servicios.id ? res.servicios : value);

          this.closeModalVerifLaboral();
          alert('Datos actualizados correctamente');

        },
        (err: any) => this._actividades.handleError(err)
      );
  }

  deleteVerifLaboral(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._verificacionLaboral.delete(this.servicioEsp, id)
        .subscribe(
          () => {
            this.verificacionLaboral = this.verificacionLaboral.filter(value => value.id !== id);
            },
          (err: any) => this._actividades.handleError(err)
        );
    }
  }

  closeModalVerifLaboral() {
    this.form.reset();
    this.verifLaboralModal.showModal = false;
    this.verifLaboralModal.isUpdate = false;
  }

  notificarAnalista(): void {
    super.notificarAnalista();

  }


  reportarCliente() {
    const confirm = window.confirm('Esta seguro de alertar al evaluado?');

    if (! confirm) {
      return;
    }

    this.setEstado('alerta', () => {
      alert('Alerta enviada al analista Esp');
    });
  }

}


