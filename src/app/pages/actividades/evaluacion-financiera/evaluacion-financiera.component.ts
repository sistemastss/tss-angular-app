import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {ActividadClass} from '../../../@classes/actividad.class';
import {EvaluacionFinancieraService} from '../../../services/servicios-esp/actividades/evaluacion-financiera.service';
import {HandlerModal} from '../../../@models/handler-modal';

@Component({
  selector: 'app-evaluacion-financiera',
  templateUrl: './evaluacion-financiera.component.html',
  styleUrls: ['./evaluacion-financiera.component.css']
})
export class EvaluacionFinancieraComponent extends ActividadClass implements OnInit {

  @ViewChild('pdfContainer') pdfContainer: ElementRef;

  form = new FormGroup({
    id        : new FormControl(),
    conclusion: new FormControl('', Validators.required),
  });

  cuentaBancariaForm: FormGroup;
  obligacionVigenteForm: FormGroup;
  obligacionVigenteRealForm: FormGroup;
  obligacionMoraForm: FormGroup;
  obligacionExtinguidaForm: FormGroup;

  // cuenta Bancaria
  cbModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  // obligacion Vigente
  ovModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  // obligacion Vigente real
  ovrModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  // obligacion Mora
  omModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };

  // obligacion Extinguida
  oeModal: HandlerModal = {
    showModal: false,
    isUpdate: false
  };


  cuentaBancaria = [];
  obligacionVigente = [];
  obligacionVigenteReal = [];
  obligacionMora = [];
  obligacionExtinguida = [];


  protected readonly codigo = 'EF';

  constructor(public _actividades: ActividadesService,
              protected _evaluacionFinanciera: EvaluacionFinancieraService,
              public dataService: DataService,
              public _ngxPermissions: NgxPermissionsService) {

    super(_actividades);
  }


  ngOnInit() {
    this.cuentaBancariaForm = this._evaluacionFinanciera.cuentaBancariaForm;
    this.obligacionVigenteForm = this._evaluacionFinanciera.obligacionVigenteForm;
    this.obligacionVigenteRealForm = this._evaluacionFinanciera.obligacionVigenteRealForm;
    this.obligacionMoraForm = this._evaluacionFinanciera.obligacionMoraForm;
    this.obligacionExtinguidaForm = this._evaluacionFinanciera.obligacionExtinguidaForm;

    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    this._evaluacionFinanciera.getCuentasBancarias(this.servicioEsp)
      .subscribe((res: any) => this.cuentaBancaria = res.data);

    this._evaluacionFinanciera.getObligacionesVigentes(this.servicioEsp)
      .subscribe((res: any) => this.obligacionVigente = res.data);

    this._evaluacionFinanciera.getObligacionesReales(this.servicioEsp)
      .subscribe((res: any) => this.obligacionVigenteReal = res.data);

    this._evaluacionFinanciera.getObligacionesMora(this.servicioEsp)
      .subscribe((res: any) => this.obligacionMora = res.data);

    this._evaluacionFinanciera.getObligacionesExtinguidas(this.servicioEsp)
      .subscribe((res: any) => this.obligacionExtinguida = res.data);

    if (this._actividades.canLoadResource(this.actividad)) {
      this.getValue();
    }
  }


  protected getValue(): void {
    // Solicitud get al servidor
    this._evaluacionFinanciera.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          const data = this._actividades.transformResponse(value.data);
          this.form.setValue(data);
        });
  }


  protected onSubmit() {
    const data = this.form.value;

    this._evaluacionFinanciera.post(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          this.setEstado('proceso');
          const response = this._actividades.transformResponse(value.data);
          this.form.setValue(response);
          alert('Se han guardado los datos exitosamente');

        },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const data = this.form.value;
    this.dataService.updateVerificacionLaboral(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          if (this.permissions.FRCE) {
            this.setEstado('proceso');
          }
          const response = this._actividades.transformResponse(value.data);
          this.form.setValue(response);
          alert('Se han actualizado los datos exitosamente');
        },
        err => this._actividades.handleError(err)
      );
  }







  // cuentas bancarias
  addCuentaBancaria() {
    this._evaluacionFinanciera.postCuentaBancaria(this.servicioEsp, this.cuentaBancariaForm.value)
      .subscribe((res: any) => {
        this.cuentaBancaria.push(res.data);
        this.closeModalCuentaBancaria();
      });
  }

  updateCuentaBancaria(id) {
    let item = null;
    this.cuentaBancaria.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.cbModal.showModal = true;
    this.cbModal.isUpdate = true;
    this.cuentaBancariaForm.setValue(item);
  }

  refreshCuentaBancaria() {
    const id = this.cuentaBancariaForm.get('id').value;
    this._evaluacionFinanciera.putCuentaBancaria(this.servicioEsp, id, this.cuentaBancariaForm.value)
      .subscribe(
        (res: any) => {
          this.cuentaBancaria = this.cuentaBancaria
            .map(value => value.id === res.data.id ? res.data : value);

          this.closeModalCuentaBancaria();

          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteCuentaBancaria(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._evaluacionFinanciera.deleteCuentaBancaria(this.servicioEsp, id)
        .subscribe(
          () => {
            this.cuentaBancaria = this.cuentaBancaria.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalCuentaBancaria() {
    this.cuentaBancariaForm.reset();
    this.cbModal.showModal = false;
    this.cbModal.isUpdate = false;
  }







  // obligaciones vigentes
  addObligacionVigente() {
    this._evaluacionFinanciera.postObligacionVigente(this.servicioEsp, this.obligacionVigenteForm.value)
      .subscribe((res: any) => {
        this.obligacionVigente.push(res.data);
        this.closeModalObligacionVigente();
      });
  }

  updateObligacionVigente(id) {
    let item = null;
    this.obligacionVigente.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.ovModal.showModal = true;
    this.ovModal.isUpdate = true;
    this.obligacionVigenteForm.setValue(item);
  }

  refreshObligacionVigente() {
    const id = this.obligacionVigenteForm.get('id').value;
    this._evaluacionFinanciera.putObligacionVigente(this.servicioEsp, id, this.obligacionVigenteForm.value)
      .subscribe(
        (res: any) => {
          this.obligacionVigente = this.obligacionVigente
            .map(value => value.id === res.data.id ? res.data : value);

          this.closeModalObligacionVigente();

          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteObligacionVigente(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._evaluacionFinanciera.deleteObligacionVigente(this.servicioEsp, id)
        .subscribe(
          () => {
            this.obligacionVigente = this.obligacionVigente.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalObligacionVigente() {
    this.obligacionVigenteForm.reset();
    this.ovModal.showModal = false;
    this.ovModal.isUpdate = false;
  }






  // obligaciones vigentes real
  addObligacionVigenteReal() {
    this._evaluacionFinanciera.postObligacionReal(this.servicioEsp, this.obligacionVigenteRealForm.value)
      .subscribe((res: any) => {
        this.obligacionVigenteReal.push(res.data);
        this.closeModalObligacionVigenteReal();
      });
  }

  updateObligacionVigenteReal(id) {
    let item = null;
    this.obligacionVigenteReal.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.ovrModal.showModal = true;
    this.ovrModal.isUpdate = true;
    this.obligacionVigenteRealForm.setValue(item);
  }

  refreshObligacionVigenteReal() {
    const id = this.obligacionVigenteRealForm.get('id').value;
    this._evaluacionFinanciera.putObligacionReal(this.servicioEsp, id, this.obligacionVigenteRealForm.value)
      .subscribe(
        (res: any) => {
          this.obligacionVigenteReal = this.obligacionVigenteReal
            .map(value => value.id === res.data.id ? res.data : value);

          this.closeModalObligacionVigenteReal();
          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteObligacionVigenteReal(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._evaluacionFinanciera.deleteObligacionReal(this.servicioEsp, id)
        .subscribe(
          () => {
            this.obligacionVigenteReal = this.obligacionVigenteReal.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalObligacionVigenteReal() {
    this.obligacionVigenteRealForm.reset();
    this.ovrModal.showModal = false;
    this.ovrModal.isUpdate = false;
  }






  // obligaciones mora
  addObligacionMora() {
    this._evaluacionFinanciera.postObligacionMora(this.servicioEsp, this.obligacionMoraForm.value)
      .subscribe((res: any) => {
        this.obligacionMora.push(res.data);
        this.closeModalObligacionMora();
      });
  }

  updateObligacionMora(id) {
    let item = null;
    this.obligacionMora.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.omModal.showModal = true;
    this.omModal.isUpdate = true;
    this.obligacionMoraForm.setValue(item);
  }

  refreshObligacionMora() {
    const id = this.obligacionMoraForm.get('id').value;
    this._evaluacionFinanciera.putObligacionMora(this.servicioEsp, id, this.obligacionMoraForm.value)
      .subscribe(
        (res: any) => {
          this.obligacionMora = this.obligacionMora
            .map(value => value.id === res.data.id ? res.data : value);

          this.closeModalObligacionMora();
          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteObligacionMora(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._evaluacionFinanciera.deleteObligacionMora(this.servicioEsp, id)
        .subscribe(
          () => {
            this.obligacionMora = this.obligacionMora.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalObligacionMora() {
    this.obligacionMoraForm.reset();
    this.omModal.showModal = false;
    this.omModal.isUpdate = false;
  }






  // obligaciones extinguidas
  addObligacionExtinguida() {
    this._evaluacionFinanciera.postObligacionExtinguida(this.servicioEsp, this.obligacionExtinguidaForm.value)
      .subscribe((res: any) => {
        this.obligacionExtinguida.push(res.data);
        this.closeModalObligacionExtinguida();
      });
  }

  updateObligacionExtinguida(id) {
    let item = null;
    this.obligacionExtinguida.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.oeModal.showModal = true;
    this.oeModal.isUpdate = true;
    this.obligacionExtinguidaForm.setValue(item);
  }

  refreshObligacionExtinguida() {
    const id = this.obligacionExtinguidaForm.get('id').value;
    this._evaluacionFinanciera.putObligacionExtinguida(this.servicioEsp, id, this.obligacionExtinguidaForm.value)
      .subscribe(
        (res: any) => {
          this.obligacionExtinguida = this.obligacionExtinguida
            .map(value => value.id === res.data.id ? res.data : value);

          this.closeModalObligacionExtinguida();
          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteObligacionExtinguida(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._evaluacionFinanciera.deleteObligacionExtinguida(this.servicioEsp, id)
        .subscribe(
          () => {
            this.obligacionExtinguida = this.obligacionExtinguida.filter(value => value.id !== id);
            },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalObligacionExtinguida() {
    this.obligacionExtinguidaForm.reset();
    this.oeModal.showModal = false;
    this.oeModal.isUpdate = false;
  }
}
