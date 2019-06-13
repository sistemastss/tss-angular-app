import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InfoPersonalService } from '../../../services/datos-personales/info-personal.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styles: []
})
export class InfoPersonalComponent implements OnInit {

  form = this.fb.group({
    id                  : null,
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

  dataLoaded = false;

  constructor(
    private fb: FormBuilder,
    private infoPersonalService: InfoPersonalService,
  ) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.infoPersonalService.get().subscribe(
      response => {
        this.form.setValue(response);
        this.dataLoaded = true;
      },
    );
  }

  save() {

    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;
    this.infoPersonalService.save(data).subscribe(
      () => alert('Datos guardados con exito'),
      () => alert('Ocurrio un error. Intente de nuevo')
    );
  }

  update() {
    const data = this.form.value;
    if (typeof data.id === 'number') {
      this.infoPersonalService.update(data).subscribe(
        () => alert('Datos actualizados con exito'),
        () => alert('Ocurrio un error. Intente de nuevo')
      );
    }
  }
}
