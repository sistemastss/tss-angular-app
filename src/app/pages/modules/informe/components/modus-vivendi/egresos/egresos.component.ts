import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styles: []
})
export class EgresosComponent implements OnInit {

  form = this.fb.group({
    id                   : '',
    engresosMensuales    : ['', [Validators.required, Validators.min(1)]],
    descripcionGastos    : ['', Validators.required],
    personasDependientes : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
