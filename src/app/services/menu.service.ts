import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu = {
    administrador: [
      {
        path: './',
        title: 'Servicios',
        icon: 'fa-tasks',
        color: 'bg-primary'
      },
      {
        path: './clientes',
        title: 'Clientes',
        icon: 'fa-user',
        color: 'bg-danger',
        children: [
          {
            path: './clientes/solicitud',
            title: 'Solicitar servicio',
            color: 'bg-success',
            icon: 'fa-plus'
          },
        ]
      }
    ],
    cliente: [
      {
        path: './',
        title: 'Servicios',
        icon: 'fa-tasks',
        color: 'bg-primary'
      },
      {
        path  : './clientes/solicitud',
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
        path: './',
        title: 'Servicios',
        icon: 'fa-tasks',
        color: 'bg-primary'
      },
      {
        path  : './clientes/solicitud',
        title : 'Nuevo servicio',
        color : 'bg-success',
        icon  : 'fa-plus',
      },
    ]
  };

  constructor() {}
}

