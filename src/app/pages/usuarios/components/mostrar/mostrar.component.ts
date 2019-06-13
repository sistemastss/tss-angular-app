import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    api_token : '',
    active : '',
    created_at : '',
    updated_at : '',
  }, Validators.required);

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    this.usuarioService.get().subscribe(
      (res: any) => this.usuarios = res
    );
  }

  eliminar(id: any) {
    this.usuarioService.eliminar(id);
  }

  verDetalle(content, usuario) {
    this.form.setValue(usuario);
    this.modalService.open(content);
  }

  editar(usuario: any) {
    this.usuarioService.editar(usuario, usuario.id);
  }
}
