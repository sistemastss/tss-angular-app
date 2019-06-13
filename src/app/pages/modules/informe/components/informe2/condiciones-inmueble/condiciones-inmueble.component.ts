import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-condiciones-inmueble',
  templateUrl: './condiciones-inmueble.component.html',
  styles: []
})
export class CondicionesInmuebleComponent implements OnInit {

  form = this.fb.group({
    id                    : new FormControl(),
    estadoGeneral         : new FormControl('', Validators.required),
    acabados              : new FormControl('', Validators.required),
    dotacion              : new FormControl('', Validators.required),
    salubridad            : new FormControl('', Validators.required),
    estrato               : new FormControl('', Validators.required),
    serviciosPublicos     : new FormControl('', Validators.required),
    distribucion          : new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
