import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entorno-habitacional',
  templateUrl: './entorno-habitacional.component.html',
  styles: []
})
export class EntornoHabitacionalComponent implements OnInit {

  form = this.fb.group({
    id                    : '',
    tipoVivienda          : ['', Validators.required],
    tenencia              : ['', Validators.required],
    tiempoPermanencia     : ['', Validators.required],
    infoPropietario       : ['', Validators.required],
    fotografia            : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
