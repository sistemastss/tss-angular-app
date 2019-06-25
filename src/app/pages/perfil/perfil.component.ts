import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  form = this.fb.group({
    nombre  : '',
    direccion : '',
    telefono  : ['', Validators.min(0)],
    celular : ['', Validators.min(0)],
    tipo_documento  : '',
    documento : ['', Validators.min(0)],
    ciudad  : '',
    rol : '',
    email : '',
  }, Validators.required);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    const usuario = this.auth.getUser().user;
    this.form.setValue({
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      celular: usuario.celular,
      tipo_documento: usuario.tipo_documento,
      documento: usuario.documento,
      ciudad: usuario.ciudad,
      rol: usuario.rol.rol,
      email: usuario.email,
    });
  }

}
