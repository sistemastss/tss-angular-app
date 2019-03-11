import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActividadesService} from '../../../services/actividades.service';
import {DataService} from '../../../services/data.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {ActividadClass} from '../../../@classes/actividad.class';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-visita-domiciliaria',
  templateUrl: './visita-domiciliaria.component.html',
  styleUrls: ['./visita-domiciliaria.component.css']
})
export class VisitaDomiciliariaComponent extends ActividadClass implements OnInit, AfterViewInit {

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


  protected readonly codigo = 'VDS';


  constructor(public _actividades: ActividadesService,
              public dataService: DataService,
              public _ngxPermissions: NgxPermissionsService) {
    super(_actividades);
  }



  ngOnInit() {
    this.permissions = this._ngxPermissions.getPermissions();
    this.actividad = this._actividades.actividadProxy(this.codigo);

    // console.log(this.actividad);
    if (this._actividades.canLoadResource(this.actividad)) {
      this.getValue();
    }

    this.dataService.visitaDomiciliariaCompletada(this.servicioEsp)
      .subscribe((value: any) => {
        this.estado = value.data.estado;
        console.log(value);
      });

    if (this.actividad.estado === 'proceso' || this.actividad.estado === 'notificado' || this.actividad.estado === 'completado') {
      this.getValue();
      console.log('estado: proceso');
    }

  }


  ngAfterViewInit(): void {
  fromEvent(this.vdsElement.nativeElement, 'click').subscribe(
      event => {
        this.dataService.visitaDomiciliariaCompletada(this.servicioEsp)
          .subscribe((value: any) => {
            this.estado = value.data.estado;
          });
      }
    );
  }
}
