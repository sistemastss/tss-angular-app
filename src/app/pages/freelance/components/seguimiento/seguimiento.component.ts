import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SeguimientoService } from '../../services/seguimiento.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  form: any;
  isLoadData = false;

  constructor(
    private fb: FormBuilder,
    private seguimientoService: SeguimientoService,
  ) { }

  ngOnInit() {
  }

  enviarCorreo() {

  }
}
