import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styles: []
})
export class IngresosComponent implements OnInit {

  form = this.fb.group({
    id              : '',
    salario         : ['', [Validators.required, Validators.min(1)]],
    otrosIngresos   : ['', [Validators.required, Validators.min(1)]],
    salarioConyugue : ['', [Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
