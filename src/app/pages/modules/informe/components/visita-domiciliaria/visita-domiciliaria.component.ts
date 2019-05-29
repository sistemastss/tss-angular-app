import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgxPermissionsService} from 'ngx-permissions';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-visita-domiciliaria',
  templateUrl: './visita-domiciliaria.component.html',
  styleUrls: ['./visita-domiciliaria.component.css']
})
export class VisitaDomiciliariaComponent implements OnInit {

  @ViewChild('vdsElement') vdsElement: any;

  estado: string;

  /**
   * menu de seleccion de actividad
   */
  visitaDomicialiariaMenu = [
    {
      title: 'Visita Domiciliaria Seguridad',
      path: '../visita-domiciliaria/visita-domiciliaria-seguridad'
    },
    {
      title: 'Estado de Salubridad',
      path: '../visita-domiciliaria/salubridad'
    },
    {
      title: 'Informacion Familiar y Referencias',
      path: '../visita-domiciliaria/informacion-familiar'
    },
    {
      title: 'Entorno Habitacional',
      path: '../visita-domiciliaria/entorno-habitacional'
    },
    {
      title: 'Modus vivendi',
      path: '../visita-domiciliaria/modus-vivendi'
    }
  ];

  ngOnInit(): void {
  }
}
