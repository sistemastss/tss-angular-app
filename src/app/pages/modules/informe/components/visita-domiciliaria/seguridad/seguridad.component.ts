import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent implements OnInit {

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

  ngOnInit() {
  }


  protected getValue(): void {
    // Solicitud get al servidor
  }

  protected onSubmit() {

  }


  protected onUpdate(): void {

  }


}

