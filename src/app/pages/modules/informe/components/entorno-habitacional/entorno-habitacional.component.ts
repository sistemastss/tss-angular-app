import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entorno-habitacional',
  templateUrl: './entorno-habitacional.component.html',
  styles: []
})
export class EntornoHabitacionalComponent implements OnInit {

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
  dataLoaded = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  saveAll() {}

}
