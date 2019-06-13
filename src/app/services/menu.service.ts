import { Injectable } from '@angular/core';
import {NgxPermissionsService} from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _menu = {
    administrador: [
      {
        path: './inicio',
        title: 'Control',
        icon: 'fa-tasks',
        color: 'bg-primary',
      },
      {
        path: './solicitud-servicio',
        title: 'Clientes',
        icon: 'fa-user',
        color: 'bg-danger',
        children: [
          {
            path: './solicitud-servicio/solicitud',
            title: 'Solicitar servicio',
            color: 'bg-success',
            icon: 'fa-plus'
          },
        ]
      }
    ],
    cliente: [
      {
        path: './inicio',
        title: 'Control',
        icon: 'fa-tasks',
        color: 'bg-primary'
      },
      {
        path  : './solicitud-servicio/solicitud',
        title : 'Solicitar servicio',
        color : 'bg-success',
        icon  : 'fa-plus',
      },
    ],
    analistaEsp: [
      {
        path: './operaciones/esp',
        title: 'E.S.P.',
        color: 'bg-warning',
        icon: 'settings'
      },
    ],
    freeLance: [
      {
        path: './operaciones/esp',
        title: 'E.S.P.',
        color: 'bg-warning',
        icon: 'settings'
      },
    ],
    directorOperaciones: [
      {
        path: './inicio',
        title: 'Servicios',
        icon: 'fa-tasks',
        color: 'bg-primary'
      },
      {
        path  : './solicitud-servicio/solicitud',
        title : 'Nuevo servicio',
        color : 'bg-success',
        icon  : 'fa-plus',
      },
    ]
  };

  men: Menu[] = [
    {
      path: '../dashboard',
      title: 'Control',
      icon: 'fa-tasks',
      rol: ['cls', 'frce', 'adg', 'frc']
    },
    {
      path: '../nuevo-servicio',
      title: 'Solicitud',
      icon: 'fa-tasks',
      rol: ['cls', 'frce', 'adg', 'frc']
    },
    {
      path: '../usuarios',
      title: 'Usuarios',
      icon: 'fa-tasks',
      rol: ['cls', 'frce', 'adg', 'frc']
    }
  ];

  constructor(private permissions: NgxPermissionsService) {}

  get menu() {
    const permissions = this.permissions.getPermissions();

    if (permissions.ADG) {
      return this._menu.administrador;

    } else if (permissions.CLI) {
      return this._menu.cliente;

    } else if (permissions.AESP) {
      return this._menu.analistaEsp;

    } else if (permissions.FRCE) {
      return this._menu.freeLance;

    } else if (permissions.DOPE) {
      return this._menu.directorOperaciones;

    }
  }
}

export interface Menu {
  path: string;
  title: string;
  icon?: string;
  rol: string[];
}
