import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ActividadClass } from '../../../../../../@classes';
import { HandlerModal } from '../../../../../../@models/handler-modal';
import { ActividadesService } from '../../../../../../services/actividades.service';
import { ModusVivendiService } from '../../../../../../services/esp/actividades/visita-domiciliaria/modus-vivendi.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-modus-vivendi',
  templateUrl: './modus-vivendi.component.html',
  styleUrls: ['./modus-vivendi.component.css']
})
export class ModusVivendiComponent extends ActividadClass implements OnInit {

  estado: string;

  bienInmuebleModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  bienMuebleModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  refBancariaModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  capDeudasModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  form: FormGroup;
  bienInmuebleForm: FormGroup;
  bienMuebleForm: FormGroup;
  refBancariaForm: FormGroup;
  capEndeudamientoForm: FormGroup;

  bienesInmuebles   = [];
  bienesMuebles     = [];
  refBancarias      = [];
  capEndeudamiento  = [];

  protected readonly codigo = 'VDS';

  constructor(protected _actividades: ActividadesService,
              protected _modusVivendi: ModusVivendiService,
              protected _ngxPermissions: NgxPermissionsService) {

    super(_actividades);
  }

  ngOnInit() {
    this.form = this._modusVivendi.modusVivendiForm;
    this.bienInmuebleForm = this._modusVivendi.bienInmuebleForm;
    this.bienMuebleForm = this._modusVivendi.bienMuebleForm;
    this.refBancariaForm = this._modusVivendi.refBancariaForm;
    this.capEndeudamientoForm = this._modusVivendi.capEndeudamientoForm;
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    this.getValue();
  }


  protected getValue(): void {
    this._modusVivendi.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          this.estado = value.servicios.estado;

          this._modusVivendi.getBienesInmuebles(this.servicioEsp)
            .subscribe((res: any) => this.bienesInmuebles = res.servicios);

          this._modusVivendi.getBienesMuebles(this.servicioEsp)
            .subscribe((res: any) => this.bienesMuebles = res.servicios);

          this._modusVivendi.getRefBancarias(this.servicioEsp)
            .subscribe((res: any) => this.refBancarias = res.servicios);

          this._modusVivendi.getCapEndeudamiento(this.servicioEsp)
            .subscribe((res: any) => this.capEndeudamiento = res.servicios);

          this.form.setValue(this._actividades.transformResponse(value.servicios));

        },
        () =>  {
          this.estado = 'aceptado';
        }
      );
  }

  protected onSubmit() {
    const data = this.form.value;

    // se guarda la informacion
    this._modusVivendi.post(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          this.estado = value.servicios.estado;
          alert('Se han guardado los datos exitosamente');
          this.form.reset();
          this.form.setValue(this._actividades.transformResponse(value.servicios));

        },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const id = this.form.get('id').value;
    const data = this.form.value;

    this._modusVivendi.put(this.servicioEsp, id, data)
      .subscribe(
        (value: any) => {
          if (this.permissions.FRCE) {
            this.estado = value.servicios.estado;
          }

          alert('Se han actualizado los datos exitosamente');
          this.form.reset();
          this.form.setValue(this._actividades.transformResponse(value.servicios));

        },
        err => this._actividades.handleError(err)
      );
  }


  // bienesInmuebles form
  addBienInmueble() {
    this._modusVivendi.postBienInmueble(this.servicioEsp, this.bienInmuebleForm.value)
      .subscribe((res: any) => {
        this.bienesInmuebles.push(res.servicios);
        this.closeModalBienInmueble();
      });
  }

  updateBienInmueble(id) {
    let item = null;
    this.bienesInmuebles.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.bienInmuebleModal.showModal = true;
    this.bienInmuebleModal.isUpdate = true;
    this.bienInmuebleForm.setValue(item);
  }

  refreshBienInmueble() {
    const id = this.bienInmuebleForm.get('id').value;
    this._modusVivendi.putBienInmueble(this.servicioEsp, id, this.bienInmuebleForm.value)
      .subscribe(
        (res: any) => {
          this.bienesInmuebles = this.bienesInmuebles
            .map(value => value.id === res.servicios.id ? res.servicios : value);

          this.closeModalBienInmueble();

          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteBienInmueble(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._modusVivendi.deleteBienInmueble(this.servicioEsp, id)
        .subscribe(
          () => {
            this.bienesInmuebles = this.bienesInmuebles.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalBienInmueble() {
    this.bienInmuebleForm.reset();
    this.bienInmuebleModal.showModal = false;
    this.bienInmuebleModal.isUpdate = false;
  }



  // bienes Muebles form
  addBienMueble() {
    this._modusVivendi.postBienMueble(this.servicioEsp, this.bienMuebleForm.value)
      .subscribe((res: any) => {
        this.bienesMuebles.push(res.servicios);
        this.closeModalBienMueble();
      });
  }

  updateBienMueble(id) {
    let item = null;
    this.bienesMuebles.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.bienMuebleModal.showModal = true;
    this.bienMuebleModal.isUpdate = true;
    this.bienMuebleForm.setValue(item);
  }

  refreshBienMueble() {
    const id = this.bienMuebleForm.get('id').value;
    this._modusVivendi.putBienMueble(this.servicioEsp, id, this.bienMuebleForm.value)
      .subscribe(
        (res: any) => {
          this.bienesMuebles = this.bienesMuebles
            .map(value => value.id === res.servicios.id ? res.servicios : value);

          this.closeModalBienMueble();

          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteBienMueble(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._modusVivendi.deleteBienMueble(this.servicioEsp, id)
        .subscribe(
          () => {
            this.bienesMuebles = this.bienesMuebles.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalBienMueble() {
    this.bienMuebleForm.reset();
    this.bienMuebleModal.showModal = false;
    this.bienMuebleModal.isUpdate = false;
  }



  // referencias form
  addRefBancaria() {
    this._modusVivendi.postRefBancaria(this.servicioEsp, this.refBancariaForm.value)
      .subscribe((res: any) => {
        this.refBancarias.push(res.servicios);
        this.closeModalRefBancaria();
      });
  }

  updateRefBancaria(id) {
    let item = null;
    this.refBancarias.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.refBancariaModal.showModal = true;
    this.refBancariaModal.isUpdate = true;
    this.refBancariaForm.setValue(item);
  }

  refreshRefBancaria() {
    const id = this.refBancariaForm.get('id').value;
    this._modusVivendi.putRefBancaria(this.servicioEsp, id, this.refBancariaForm.value)
      .subscribe(
        (res: any) => {
          this.refBancarias = this.refBancarias
            .map(value => value.id === res.servicios.id ? res.servicios : value);

          this.closeModalRefBancaria();

          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteRefBancaria(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._modusVivendi.deleteRefBancaria(this.servicioEsp, id)
        .subscribe(
          () => {
            this.refBancarias = this.refBancarias.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalRefBancaria() {
    this.refBancariaForm.reset();
    this.refBancariaModal.showModal = false;
    this.refBancariaModal.isUpdate = false;
  }


  // capacidad endeudamiento form
  addCapEndeudamiento() {
    this._modusVivendi.postCapEndeudamiento(this.servicioEsp, this.capEndeudamientoForm.value)
      .subscribe((res: any) => {
        this.capEndeudamiento.push(res.servicios);
        this.closeModalCapEndeudamiento();
      });
  }

  updateCapEndeudamiento(id) {
    let item = null;
    this.capEndeudamiento.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.capDeudasModal.showModal = true;
    this.capDeudasModal.isUpdate = true;
    this.capEndeudamientoForm.setValue(item);
  }

  refreshCapEndeudamiento() {
    const id = this.capEndeudamientoForm.get('id').value;
    this._modusVivendi.putCapEndeudamiento(this.servicioEsp, id, this.capEndeudamientoForm.value)
      .subscribe(
        (res: any) => {
          this.capEndeudamiento = this.capEndeudamiento
            .map(value => value.id === res.servicios.id ? res.servicios : value);

          this.closeModalCapEndeudamiento();

          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteCapEndeudamiento(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._modusVivendi.deleteCapEndeudamiento(this.servicioEsp, id)
        .subscribe(
          () => {
            this.capEndeudamiento = this.capEndeudamiento.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalCapEndeudamiento() {
    this.capEndeudamientoForm.reset();
    this.capDeudasModal.showModal = false;
    this.capDeudasModal.isUpdate = false;
  }
}
