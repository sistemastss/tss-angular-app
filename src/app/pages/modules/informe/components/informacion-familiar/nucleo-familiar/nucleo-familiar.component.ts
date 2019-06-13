import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nucleo-familiar',
  templateUrl: './nucleo-familiar.component.html',
  styles: []
})
export class NucleoFamiliarComponent implements OnInit {

  form = this.fb.group({
    id               : '',
    nombreConyuge    : '',
    edadConyuge      : ['', [Validators.max(120), Validators.min(1)]],
    identificacion   : ['', Validators.min(0)],
    lugarExpedicion  : '',
    fechaNacimiento  : '',
    lugarNacimiento  : '',
    ocupacion        : '',
    empresa          : '',
    telefono         : ['', Validators.min(0)],
    tiempoLaborado   : '',
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
