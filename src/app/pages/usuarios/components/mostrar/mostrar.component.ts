import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  usuarios = [];

  form = this.fb.group({
    id:   '',
    nombre  : '',
    direccion : '',
    telefono  : ['', Validators.min(0)],
    celular : ['', Validators.min(0)],
    tipo_documento  : '',
    documento : ['', Validators.min(0)],
    ciudad  : '',
    rol_id  : '',
    email : '',
  }, Validators.required);
  private roles: any;

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private rolService: RolService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.loadUsuarios();
    this.rolService.get().subscribe((response: any) => this.roles = response);
  }

  loadUsuarios() {
    this.usuarioService.get().subscribe(
      (res: any) => this.usuarios = res.data
    );
  }

  eliminar(id: any) {
    this.usuarioService.eliminar(id).subscribe(() => {
      swal('Eliminacion exitosa', 'Usuario eliminado con exito', 'success');
    });
  }

  verDetalle(content, usuario) {
    this.form.setValue({
      id: usuario.id,
      nombre: usuario.nombre,
      direccion: usuario.direccion,
      telefono: usuario.telefono,
      celular: usuario.celular,
      tipo_documento: usuario.tipo_documento,
      documento: usuario.documento,
      ciudad: usuario.ciudad,
      rol_id: usuario.rol.id,
      email: usuario.email,
    });
    this.modalService.open(content);
  }

  editar(usuario: any) {
    this.usuarioService.editar(usuario, usuario.id);
  }
}
