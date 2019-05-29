import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModusVivendiService {

  formEgresos = this.fb.group({
    id                   : '',
    engresosMensuales    : ['', [Validators.required, Validators.min(1)]],
    descripcionGastos    : ['', Validators.required],
    personasDependientes : ['', Validators.required],
  });

  formIngresos = this.fb.group({
    id              : '',
    salario         : ['', [Validators.required, Validators.min(1)]],
    otrosIngresos   : ['', [Validators.required, Validators.min(1)]],
    salarioConyugue : ['', [Validators.required, Validators.min(1)]],
  });

  formBienInmueble = this.fb.group({
    id        : '',
    tipo      : ['', Validators.required],
    direccion : ['', Validators.required],
    telefono  : ['', Validators.required],
    ciudad    : ['', Validators.required],
    avaluo    : ['', Validators.required],
    hipoteca  : [false, Validators.required],
  });


  formBienMueble = this.fb.group({
    id        : '',
    clase     : ['', Validators.required],
    modelo    : ['', Validators.required],
    placa     : ['', Validators.required],
    avaluo    : ['', Validators.required],
    pignorado : [false, Validators.required],
  });

  formRefBancaria = this.fb.group({
    id         : '',
    entidad    : ['', Validators.required],
    tipoCuenta : ['', Validators.required],
  });

  formCapEndeudamiento = this.fb.group({
    id           : '',
    descripcion  : ['', Validators.required],
    entidad      : ['', Validators.required],
    monto        : ['', Validators.required],
    estadoDeuda  : ['', Validators.required],
    valorMensual : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }
}
