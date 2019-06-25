import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { RolService } from '../../services/rol.service';

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
    password  : '',
  }, Validators.required);

  roles = [];

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.rolService.get().subscribe((response: any) => this.roles = response);
  }

  crear() {
    this.usuarioService.crear(this.form.value)
      .subscribe(res => swal('Exito!', 'Usuario creado exitosamente!', 'success'));
  }
}
