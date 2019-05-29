import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActividadClass } from '../../../../../../@classes';
import { ActividadesService } from '../../../../../../services/actividades.service';
import { DataService } from '../../../../../../services/data.service';
import { EstadoSalubridadService } from '../../../../../../services/esp/actividades/visita-domiciliaria/estado-salubridad.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-estado-salubridad',
  templateUrl: './estado-salubridad.component.html',
  styleUrls: ['./estado-salubridad.component.css']
})
export class EstadoSalubridadComponent extends ActividadClass implements OnInit {

  form = new FormGroup({
    id                          : new FormControl(),
    estado                      : new FormControl(),
    tomaMedicamentos            : new FormControl('', Validators.required),
    sufreEnfermedades           : new FormControl(''),
    tratamientoPsicologico      : new FormControl('', Validators.required),
    fuma                        : new FormControl(false, Validators.required),
    consumeAlcohol              : new FormControl(false, Validators.required),
    consumeDrogas               : new FormControl(false, Validators.required),
    realizaDeporte              : new FormControl('', Validators.required),
    hobbies                     : new FormControl('', Validators.required),
  });

  protected readonly codigo = 'VDS';

  protected estado: string;

  constructor(public _actividades: ActividadesService,
              public _data: DataService,
              protected _estadoSalubridad: EstadoSalubridadService,
              public _ngxPermissions: NgxPermissionsService) {
    super(_actividades);
  }


  ngOnInit() {
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    this.getValue();
  }


  protected getValue(): void {
    // Solicitud get al servidor que retorna el historial judicial del servicio esp
    this._estadoSalubridad.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          this.estado = value.servicios.estado;
          this.form.setValue(this._actividades.transformResponse(value.servicios));

        },
        err =>  {
          this.estado = 'aceptado';
          this._actividades.handleError(err);
        }
      );
  }

  protected onSubmit() {
    const data = this.form.value;

    // se guarda el historial judicial
    this._data.setEstadoSalubridad(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          this.estado = value.servicios.estado;
          this.form.reset();
          this.form.setValue(this._actividades.transformResponse(value.servicios));
          alert('Se han guardado los datos exitosamente');

        },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const id = this.form.get('id').value;
    const data = this.form.value;

    // se guarda el historial judicial
    this._estadoSalubridad.put(this.servicioEsp, id, data)
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
}
