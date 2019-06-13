import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-estado-salud',
  templateUrl: './estado-salud.component.html',
  styles: []
})
export class EstadoSaludComponent implements OnInit {

  form = this.fb.group({
    id                     : '',
    tomaMedicamentos       : ['', Validators.required],
    sufreEnfermedades      : ['', Validators.required],
    tratamientoPsicologico : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
