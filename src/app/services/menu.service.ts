import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu = {
    administrador: [
      {
        path: './operaciones',
        title: 'Operaciones',
        icon: 'fa-tasks',
        color: 'bg-primary',
        children: [
          {
            path: './operaciones/esp',
            title: 'E.S.P.',
            color: 'bg-warning',
            icon: 'fa-check'
          },
          {
            path: './operaciones/investigaciones',
            title: 'Investigaciones.',
            color: 'bg-danger',
            icon: 'fa-check'
          },
        ],
      },
      {
        path: './clientes',
        title: 'Clientes',
        icon: 'fa-user',
        color: 'bg-danger',
        children: [
          {
            path: './clientes/solicitud',
            title: 'Nuevo servicio',
            color: 'bg-success',
            icon: 'fa-plus'
          },
        ]
      }
    ],
    cliente: [
      {
        path  : './clientes/solicitud',
        title : 'Nuevo servicio',
        color : 'bg-success',
        icon  : 'fa-plus',
      },
      {
        path: './operaciones',
        title: 'Seguimiento',
        icon: 'fa-tasks',
        color: 'bg-primary',
        children: [
          {
            path: './operaciones/esp',
            title: 'E.S.P.',
            color: 'bg-warning',
            icon: 'fa-check'
          },
          {
            path: './operaciones/investigaciones',
            title: 'Investigaciones.',
            color: 'bg-danger',
            icon: 'fa-check'
          },
        ],
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
        path: './operaciones/esp',
        title: 'E.S.P.',
        color: 'bg-warning',
        icon: 'settings'
      },
      {
        path: './clientes',
        title: 'Clientes',
        icon: 'fa-user',
        color: 'bg-danger',
        children: [
          {
            path: './clientes/solicitud',
            title: 'Nuevo servicio',
            color: 'bg-success',
            icon: 'fa-plus'
          },
        ]
      }
    ]
  };

  constructor() {}
}

