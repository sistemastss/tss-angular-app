import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  form = this.fb.group({
    nombre  : '',
    direccion : '',
    telefono  : ['', Validators.min(0)],
    celular : ['', Validators.min(0)],
    tipo_documento  : '',
    documento : ['', Validators.min(0)],
    ciudad  : '',
    rol_id  : '',
    email : '',
    contrasena  : '',
  }, Validators.required);

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  crear() {
    this.usuarioService.crear(this.form.value).subscribe(res => alert('Usuario creado con exito'));
  }
}
