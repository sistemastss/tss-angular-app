import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {ActividadClass} from '../../../@classes/actividad.class';
import {ComunService} from '../../../services/esp/actividades/comun.service';

@Component({
  selector: 'app-decadactilar',
  templateUrl: './decadactilar.component.html',
  styleUrls: ['./decadactilar.component.css']
})
export class DecadactilarComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    id: new FormControl(),
    adjunto             : new FormControl('', Validators.required),
    conclusion          : new FormControl('', Validators.required)
  });

  constructor(public actividadesService: ActividadesService,
              public dataService: DataService,
              public _comun: ComunService,
              public _ngxPermissions: NgxPermissionsService,
              public cd: ChangeDetectorRef) {

    super(actividadesService);
  }


  ngOnInit() {

    this.codigo = 'Dd';

    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);
    if (this._actividades.canLoadResource(this.actividad)) {
      this.getValue();
    }
  }


  protected getValue(): void {
    this._comun.getDecadactilar(this.servicioEsp)
      .subscribe(
        (value: any) => {

          const data = this._actividades.transformResponse(value.servicios);
          this.form.setValue(data);
        },
        () => alert('Ocurrio un error inesperado al tratar de recuperar los datos')
      );
  }

  protected onSubmit() {
    const data = this.form.value;

    const servicioEspId = this.servicioEsp;

    this._comun.postDecadactilar(servicioEspId, data)
      .subscribe(
        (value: any) => {

          this.setEstado('proceso');

          // this.currentActivityId = value.servicios.id;

          const dat = this._actividades.transformResponse(value.servicios);

          this.form.reset();
          this.form.setValue(dat);

          alert('Se han guardado los datos exitosamente');
        },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const data = this.form.value;
    const id = this.form.get('id').value;
    this._comun.putDecadactilar(this.servicioEsp, id, data)
      .subscribe(
        (value: any) => {
          if (this.permissions.FRCE) {
            this.setEstado('proceso');
          }

          alert('Se han actualizado los datos exitosamente');

          this.form.reset();
          this.form.setValue(this._actividades.transformResponse(value.servicios));

        },
        err => alert(err.error.message)
      );
  }


  setFileToForm(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.patchValue({
          adjunto: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  removeFile() {
    this.form.get('adjunto').setValue('');
  }

  checkFile() {
    const file = this.form.get('adjunto').value;
    console.log(file);

    return !(file.includes('servicios:application') || file === '');
  }

  checkTypeFile() {
    const file = this.form.get('adjunto').value;
    console.log(file);
    console.log('typo', typeof file);
    return file.includes('servicios:application') || file === '';
  }
}
