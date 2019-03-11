import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActividadesService} from '../../services/actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit, OnDestroy {

  data: any;

  actividades: any;

  constructor(public  actividadesService: ActividadesService,
              private dataService: DataService) {

    this.data = actividadesService.getServicioEsp();

  }

  ngOnInit() {
    this.actividades  = this.dataService.actividades;
  }



  ngOnDestroy(): void {
  }



  isActividadAsignada(actividad: string): boolean {

    let flag = false;

    const actividades = ActividadesService.getActividades();

    actividades.forEach((value: any) => {
      if (value.codigo === actividad) {
        flag = true;
        return;
      }
    });

    return flag;
  }
}
