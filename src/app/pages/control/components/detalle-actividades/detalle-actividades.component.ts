import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-detalle-actividades',
  templateUrl: './detalle-actividades.component.html',
  styles: []
})
export class DetalleActividadesComponent implements OnInit {

  @Input() actividades: any;

  rol: any;

  constructor(
    private activedModal: NgbActiveModal,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.rol = this.authService.getUser().user.rol.codigo;
  }

}
