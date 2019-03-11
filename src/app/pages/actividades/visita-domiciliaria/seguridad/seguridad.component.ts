import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActividadesService} from '../../../../services/actividades.service';
import {DataService} from '../../../../services/data.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {ActividadClass} from '../../../../@classes/actividad.class';
import {SeguridadService} from '../../../../services/servicios-esp/actividades/visita-domiciliaria/seguridad.service';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent extends ActividadClass implements OnInit {

  estado: string;

  form = new FormGroup({
    /**nombreEvaluado                  : new FormControl('', Validators.required),
    documentoIdentidad              : new FormControl('', Validators.required),
    fechaExpedicion                 : new FormControl('', Validators.required),
    lugarExpedicion                 : new FormControl('', Validators.required),
    fechaNacimiento                 : new FormControl('', Validators.required),
    lugarNacimiento                 : new FormControl('', Validators.required),
    edad                            : new FormControl('', [Validators.required, Validators.max(120), Validators.min(0)]),
    libretaMilitar                  : new FormControl('', Validators.required),
    claseDistrito                   : new FormControl('', Validators.required),
    licenciaConduccion              : new FormControl('', Validators.required),
    categoriaClase                  : new FormControl('', Validators.required),
    estadoCivil                     : new FormControl('', Validators.required),
    celular                         : new FormControl('', Validators.required),
    telefono                        : new FormControl('', Validators.required),
    direccionActual                 : new FormControl('', Validators.required),
    barrio                          : new FormControl('', Validators.required),
    localidad                       : new FormControl('', Validators.required),
    ciudad                          : new FormControl('', Validators.required),
    email                           : new FormControl('', [Validators.required, Validators.email])*/
    id                              : new FormControl(),
    estado                          : new FormControl(),
    documento                       : new FormControl(false, Validators.required),
    libretaMilitar                  : new FormControl(false, Validators.required),
    licenciaConduccion              : new FormControl(false, Validators.required),
    tarjetaProfesional              : new FormControl(false, Validators.required),
    diplomaBachiller                : new FormControl(false, Validators.required),
    diplomaTecnico                  : new FormControl(false, Validators.required),
    diplomaTecnologo                : new FormControl(false, Validators.required),
    diplomaPregrado                 : new FormControl(false, Validators.required),
    diplomaPostgrado                : new FormControl(false, Validators.required),
    diplomaCursos                   : new FormControl(false, Validators.required),
    observaciones                   : new FormControl('', Validators.required)
  });

  protected readonly codigo = 'VDS';

  constructor(public _actividades: ActividadesService,
              public dataService: DataService,
              protected _seguridad: SeguridadService,
              public _ngxPermissions: NgxPermissionsService) {
    super(_actividades);
  }


  ngOnInit() {
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    this.getValue();

  }


  protected getValue(): void {
    // Solicitud get al servidor
    this._seguridad.get(this.servicioEsp)
      .subscribe(
        (value: any) => {
          this.estado = value.data.estado;
          this.form.setValue(this._actividades.transformResponse(value.data));
        },
        () =>  this.estado = 'aceptado'
      );
  }

  protected onSubmit() {
    const data = this.form.value;
    // se guarda la informacion
    this._seguridad.post(this.servicioEsp, data)
      .subscribe(
        (value: any) => {
          this.estado = value.data.estado;
          this.form.setValue(this._actividades.transformResponse(value.data));
          alert('Se han guardado los datos exitosamente');

        },
        err => alert('Ocurrio un error inesperado. Intentelo de nuevo')
      );
  }


  protected onUpdate(): void {
    const id = this.form.get('id').value;
    const data = this.form.value;
    // se guarda los datos
    this._seguridad.put(this.servicioEsp, id, data)
      .subscribe(
        (value: any) => {
          if (this.permissions.FRCE) {
            this.estado = value.data.estado;
          }
          this.form.setValue(this._actividades.transformResponse(value.data));
          alert('Se han actualizado los datos exitosamente');

        },
        err => this._actividades.handleError(err)
      );
  }

}

