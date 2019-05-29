import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';
import {ActividadClass} from '../../../@classes/actividad.class';
import {NgxPermissionsService} from 'ngx-permissions';
import {VerificacionAcademicaService} from '../../../services/esp/actividades/verificacion-academica.service';
import {HandlerModal} from '../../../@models/handler-modal';

@Component({
  selector: 'app-verificacion-academica',
  templateUrl: './verificacion-academica.component.html',
  styleUrls: ['./verificacion-academica.component.css']
})
export class VerificacionAcademicaComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    id            : new FormControl(),
    nivel         : new FormControl('', Validators.required),
    institucion   : new FormControl('', Validators.required),
    titulo        : new FormControl('', Validators.required),
    anno          : new FormControl('', Validators.required),
    ciudad        : new FormControl('', Validators.required),
    confirmacion  : new FormControl(true, Validators.required),
    observacion   : new FormControl('', Validators.required),
  });

  verifiAcademicaModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  verificacionesAcademicas = [];

  protected readonly codigo = 'VA';

  constructor(public _actividades: ActividadesService,
              public dataService: DataService,
              protected _verificacionAcademica: VerificacionAcademicaService,
              protected _ngxPermissions: NgxPermissionsService) {
    super(_actividades);
  }


  ngOnInit() {
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    if (this._actividades.canLoadResource(this.actividad)) {
      this.getVerifAcademicas();
    }
  }

  onAceptarActividad(): void {
    this.setEstado('proceso');
  }


  protected getVerifAcademicas(): void {
    this._verificacionAcademica.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          this.verificacionesAcademicas = value.servicios;
        }
        // () => alert('Ocurrio un error inesperado al tratar de recuperar los datos')
      );
  }

  // referencias form
  addVerifAcademica() {
    this._verificacionAcademica.post(this.servicioEsp, this.form.value)
      .subscribe((res: any) => {
        this.verificacionesAcademicas.push(res.servicios);
        this.closeModalVerifAcademica();
      });
  }

  updateVerifAcademica(id) {
    let item = null;
    this.verificacionesAcademicas.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.verifiAcademicaModal.showModal = true;
    this.verifiAcademicaModal.isUpdate = true;
    this.form.setValue(item);
  }

  refreshVerifAcademica() {
    const id = this.form.get('id').value;
    this._verificacionAcademica.put(this.servicioEsp, id, this.form.value)
      .subscribe(
        (res: any) => {
          this.verificacionesAcademicas = this.verificacionesAcademicas
            .map(value => value.id === res.servicios.id ? res.servicios : value);

          this.closeModalVerifAcademica();
          alert('Datos actualizados correctamente');


        },
        (err: any) => this._actividades.handleError(err)
      );
  }

  deleteVerifAcademica(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._verificacionAcademica.delete(this.servicioEsp, id)
        .subscribe(
          () => {
            this.verificacionesAcademicas = this.verificacionesAcademicas.filter(value => value.id !== id);
            },
          (err: any) => this._actividades.handleError(err)
        );
    }
  }

  closeModalVerifAcademica() {
    this.form.reset();
    this.verifiAcademicaModal.showModal = false;
    this.verifiAcademicaModal.isUpdate = false;
  }

  reportarCliente() {
    const confirm = window.confirm('Esta seguro de alertar al evaluado?');

    if (! confirm) {
      return;
    }

    this.setEstado('alerta', () => {
      alert('Alerta enviada al analista EspInterface');
    });
  }

}
