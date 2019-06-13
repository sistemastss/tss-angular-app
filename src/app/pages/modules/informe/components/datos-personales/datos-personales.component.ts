import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EstadoSaludService } from '../../services/datos-personales/estado-salud.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styles: []
})
export class DatosPersonalesComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  saveAll() {
  }



}
