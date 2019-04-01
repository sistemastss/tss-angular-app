import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadClass} from '../../../../@classes/actividad.class';
import {ActividadesService} from '../../../../services/actividades.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {EntonoHabitacionalService} from '../../../../services/esp/actividades/visita-domiciliaria/entono-habitacional.service';

@Component({
  selector: 'app-entorno-habitacional',
  templateUrl: './entorno-habitacional.component.html',
  styleUrls: ['./entorno-habitacional.component.css']
})
export class EntornoHabitacionalComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    id                    : new FormControl(),
    estado                : new FormControl(),
    tipoVivienda          : new FormControl('', Validators.required),
    tenencia              : new FormControl('', Validators.required),
    tiempoPermanencia     : new FormControl('', Validators.required),
    infoPropietario       : new FormControl('', Validators.required),
    fotografia            : new FormControl('', Validators.required),
    estadoGeneral         : new FormControl('', Validators.required),
    acabados              : new FormControl('', Validators.required),
    dotacion              : new FormControl('', Validators.required),
    salubridad            : new FormControl('', Validators.required),
    estrato               : new FormControl('', Validators.required),
    serviciosPublicos     : new FormControl('', Validators.required),
    distribucion          : new FormControl('', Validators.required),
    ciudad                : new FormControl('', Validators.required),
    barrio                : new FormControl('', Validators.required),
    localidad             : new FormControl('', Validators.required),
    viasAcceso            : new FormControl('', Validators.required),
    transportePublico     : new FormControl('', Validators.required),
    centrosAsistenciales  : new FormControl('', Validators.required),
    flujoVehicular        : new FormControl('', Validators.required),
    nivelSeguridad        : new FormControl('', Validators.required),
  });

  protected readonly codigo = 'VDS';

  protected estado: string;

  constructor(protected _actividades: ActividadesService,
              protected _entornoHabitacional: EntonoHabitacionalService,
              protected _ngxPermissions: NgxPermissionsService) {
    super(_actividades);
  }


  ngOnInit() {
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    this.getValue();
  }


  protected getValue(): void {
    // Solicitud get al servidor
    console.log(this.servicioEsp);
    this._entornoHabitacional.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          this.estado = value.servicios.estado;
          this.form.setValue(this._actividades.transformResponse(value.servicios));

        },
        () =>  this.estado = 'aceptado' // alert('Ocurrio un error inesperado al tratar de recuperar los datos')
      );
  }


  protected onSubmit() {
    const data = this.form.value;

    // se guarda la informacion
    this._entornoHabitacional.post(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          this.estado = value.servicios.estado;
          this.form.reset();
          this.form.setValue(this._actividades.transformResponse(value.servicios));
          alert('Se han guardado los datos exitosamente');

        },
        () => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const id = this.form.get('id').value;
    const data = this.form.value;

    this._entornoHabitacional.put(this.servicioEsp, id, data)
      .subscribe(
        (value: any) => {
          if (this.permissions.FRCE) {
            this.estado = value.servicios.estado;
          }

          this.form.reset();
          this.form.setValue(this._actividades.transformResponse(value.servicios));
          alert('Se han actualizado los datos exitosamente');

        },
        err => this._actividades.handleError(err)
      );
  }
}
