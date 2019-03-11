import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActividadClass} from '../../../../@classes/actividad.class';
import {ActividadesService} from '../../../../services/actividades.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {NucleoFamiliarService} from '../../../../services/servicios-esp/actividades/visita-domiciliaria/nucleo-familiar.service';

@Component({
  selector: 'app-informacion-familiar',
  templateUrl: './informacion-familiar.component.html',
  styleUrls: ['./informacion-familiar.component.css']
})
export class InformacionFamiliarComponent extends ActividadClass implements OnInit {


  estado: string;

  toggleModalHijo: boolean;
  toggleModalInfoFlia: boolean;
  toggleModalReferencias: boolean;

  isUpdateHijo: boolean;
  isUpdateInfoFlia: boolean;
  isUpdateReferencias: boolean;

  form: FormGroup;
  hijoForm: FormGroup;
  infoFamiliarForm: FormGroup;
  referenciaForm: FormGroup;

  hijos = [];
  infoFamiliar = [];
  referencias = [];


  protected readonly codigo = 'VDS';

  constructor(protected _actividades: ActividadesService,
              protected _nucleoFamiliar:  NucleoFamiliarService,
              protected _ngxPermissions: NgxPermissionsService,
              protected cd: ChangeDetectorRef) {

    super(_actividades);
  }

  ngOnInit() {
    this.form = this._nucleoFamiliar.nucleoFamiliarForm;
    this.hijoForm = this._nucleoFamiliar.hijoForm;
    this.infoFamiliarForm = this._nucleoFamiliar.infoFamiliarForm;
    this.referenciaForm = this._nucleoFamiliar.referenciaForm;
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    this.getValue();
  }

  protected getValue(): void {
    const servicioEspId = this.servicioEsp;

    // Solicitud get al servidor que retorna el historial judicial del servicio esp
    this._nucleoFamiliar.get(servicioEspId)
      .subscribe(
        (value: any) => {

          console.log(value);
          this.estado = value.data.estado;

          this._nucleoFamiliar.getHijos(this.servicioEsp)
            .subscribe((res: any) => this.hijos = res.data);

          this._nucleoFamiliar.getInfoFamiliar(this.servicioEsp)
            .subscribe((res: any) => this.infoFamiliar = res.data);

          this._nucleoFamiliar.getReferencias(this.servicioEsp)
            .subscribe((res: any) => this.referencias = res.data);

          this.form.setValue(this._actividades.transformResponse(value.data));
        },
        () =>  {
          this.estado = 'aceptado';
        } // alert('Ocurrio un error inesperado al tratar de recuperar los datos')
      );
  }

  protected onSubmit() {
    const data = this.form.value;
    // se guarda la informacion
    this._nucleoFamiliar.post(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
            this.estado = value.data.estado;
            alert('Se han guardado los datos exitosamente');
            this.form.reset();
            this.form.setValue(this._actividades.transformResponse(value.data));

          },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }

  protected onUpdate(): void {
    const id = this.form.get('id').value;
    const data = this.form.value;
    // se actualiza la informacion
    this._nucleoFamiliar.put(this.servicioEsp, id, data)
      .subscribe(
        (value: any) => {
          if (this.permissions.FRCE) {
            this.estado = value.data.estado;
          }
          this.form.reset();
          alert('Se han actualizado los datos exitosamente');
          this.form.setValue(this._actividades.transformResponse(value.data));
        },
        err => alert(err.error.message)
      );
  }

  addHijos() {
    this._nucleoFamiliar.postHijo(this.servicioEsp, this.hijoForm.value)
      .subscribe((res: any) => {
        this.hijos.push(res.data);
        this.closeModalHijos();
      });
  }

  updateHijo(id) {
    let item = null;
    this.hijos.forEach(value => {
      if (value.id === id) {
        item = value;
      }
    });

    this.toggleModalHijo = true;
    this.isUpdateHijo = true;
    this.hijoForm.setValue(item);
  }

  refreshHijo() {
    const id = this.hijoForm.get('id').value;
    this._nucleoFamiliar.putHijo(this.servicioEsp, id, this.hijoForm.value)
      .subscribe(
        (res: any) => {
          this.hijos = this.hijos.map(value => value.id === res.data.id ? res.data : value);
          this.closeModalHijos();
          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteHijo(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._nucleoFamiliar.deleteHijo(this.servicioEsp, id)
        .subscribe(
          () => {
            this.hijos = this.hijos.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalHijos() {
    this.hijoForm.reset();
    this.toggleModalHijo = false;
    this.isUpdateHijo = false;
  }


  /**
   * informacion familiar form
   */

  addInfoFlia() {
    this._nucleoFamiliar.postInfoFamiliar(this.servicioEsp, this.infoFamiliarForm.value)
      .subscribe((res: any) => {
        this.infoFamiliar.push(res.data);
        this.closeModalInfoFlia();
      });
  }

  updateInfoFlia(id) {
    let item = null;
    this.infoFamiliar.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.toggleModalInfoFlia = true;
    this.isUpdateInfoFlia = true;
    this.infoFamiliarForm.setValue(item);
  }

  refreshInfoFlia() {
    const id = this.infoFamiliarForm.get('id').value;
    this._nucleoFamiliar.putInfoFamiliar(this.servicioEsp, id, this.infoFamiliarForm.value)
      .subscribe(
        (res: any) => {
          this.infoFamiliar = this.infoFamiliar.map(value => value.id === res.data.id ? res.data : value);
          this.closeModalInfoFlia();
          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteInfoFlia(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._nucleoFamiliar.deleteInfoFamiliar(this.servicioEsp, id)
        .subscribe(
          () => {
            this.infoFamiliar = this.infoFamiliar.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalInfoFlia() {
    this.infoFamiliarForm.reset();
    this.toggleModalInfoFlia = false;
    this.isUpdateInfoFlia = false;
  }



  /**
   * referencias form
   */

  addReferencia() {
    this._nucleoFamiliar.postReferencia(this.servicioEsp, this.referenciaForm.value)
      .subscribe((res: any) => {
        this.referencias.push(res.data);
        this.closeModalReferencia();
      });
  }

  updateReferencia(id) {
    let item = null;
    this.referencias.forEach(value => {
      if (value.id === id) {
        item = value;
        return;
      }
    });

    this.toggleModalReferencias = true;
    this.isUpdateReferencias = true;
    this.referenciaForm.setValue(item);
  }

  refreshReferencia() {
    const id = this.referenciaForm.get('id').value;
    this._nucleoFamiliar.putReferencia(this.servicioEsp, id, this.referenciaForm.value)
      .subscribe(
        (res: any) => {
          this.referencias = this.referencias.map(value => value.id === res.data.id ? res.data : value);
          this.closeModalReferencia();
          alert('Datos actualizados correctamente');
        },
        (error: any) => this._actividades.handleError(error)
      );
  }

  deleteReferencia(id) {
    const confirm = window.confirm('Eliminar definitivamente?');
    if (confirm) {
      this._nucleoFamiliar.deleteReferencia(this.servicioEsp, id)
        .subscribe(
          () => {
            this.referencias = this.referencias.filter(value => value.id !== id);
          },
          (error: any) => this._actividades.handleError(error)
        );
    }
  }

  closeModalReferencia() {
    this.referenciaForm.reset();
    this.toggleModalReferencias = false;
    this.isUpdateReferencias = false;
  }

  setFileToForm(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.patchValue({
          fotografia: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        console.log('resultado lectura', reader.result);
      };
    }
  }


  removeFile() {
    this.form.get('fotografia').setValue('');
  }

  checkFile() {
    const file = this.form.get('fotografia').value;
    console.log(file);

    return !(file.includes('data:application') || file === '');
  }

  checkTypeFile() {
    const file = this.form.get('fotografia').value;
    console.log(file);
    console.log('typo', typeof file);
    return file.includes('data:application') || file === '';
  }

}
