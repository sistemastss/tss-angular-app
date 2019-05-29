import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EstadoSaludService } from '../../services/datos-personales/estado-salud.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styles: []
})
export class DatosPersonalesComponent implements OnInit {

  form = this.fb.group({
    nombre              : ['', Validators.required],
    documento           : ['', Validators.required],
    fechaExpedicion     : ['', Validators.required],
    lugarExpedicion     : ['', Validators.required],
    libretaMilitar      : ['', Validators.required],
    lugarNacimiento     : ['', Validators.required],
    fechaNacimiento     : ['', Validators.required],
    edad                : ['', Validators.required],
    direccionResidencia : ['', Validators.required],
    barrio              : ['', Validators.required],
    localidad           : ['', Validators.required],
    ciudad              : ['', Validators.required],
    telefono            : ['', Validators.required],
    celular             : ['', Validators.required],
    estadoCivil         : ['', Validators.required],
    correo              : ['', Validators.required],
    licenciaConduccion  : ['', Validators.required],
    categoriaClase      : ['', Validators.required],
  });

  formEstadoSalud = this.fb.group({
    id                     : '',
    tomaMedicamentos       : ['', Validators.required],
    sufreEnfermedades      : ['', Validators.required],
    tratamientoPsicologico : ['', Validators.required],
  });

  formHabitosSalud = this.fb.group({
    id              : '',
    fuma            : [ false, Validators.required ],
    consumeAlcohol  : [ false, Validators.required ],
    consumeDrogas   : [ false, Validators.required ],
    realizaDeporte  : [ '', Validators.required ],
    hobbies         : [ '', Validators.required ],
  });

  constructor(
    private fb: FormBuilder,
    private estadoSaludService: EstadoSaludService,
  ) { }

  ngOnInit() {
    this.estadoSaludService.get().subscribe(
      (response: any) => this.formEstadoSalud.setValue(response.data)
    );
  }

  saveAll() {
    if (this.form.invalid || this.formEstadoSalud.invalid || this.formHabitosSalud.invalid) {
      alert('Por favor complete el formulario');
      // return;
    }

    this.estadoSaludService.save(this.formEstadoSalud.value);
  }



}
