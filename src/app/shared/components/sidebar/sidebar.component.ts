import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  routes = [
    {
      title: 'Dashboard',
      icon: 'fa-tachometer-alt',
      path: '/dashboard'
    },
    {
      title: 'Nuevo servicio',
      icon: 'fa-plus',
      path: '/nuevo-servicio'
    },
  ]

  rol: string;
  user: string;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.rol = this.auth.getUser().user.rol.codigo;
    this.user = this.auth.getUser().user;
  }

}
