import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DataService} from '../../services/data.service';
import {Store} from '@ngrx/store';
import {CargarServicios, ServiciosActionTypes} from '../actions';
import {map, tap, withLatestFrom} from 'rxjs/operators';
import {Servicio} from '../../@models/servicio';

@Injectable()
export class CargarServiciosEffect {

  @Effect()
  servicios$ = this.actions$.pipe(
    ofType(ServiciosActionTypes.SOLICITAR),
    withLatestFrom(this.dataService.cargarInvestigaciones()),
    map(([payload, inv]) => inv),
    withLatestFrom(this.dataService.cargarEsps()),
    map(([inv, esp]) => inv.concat(esp)),
    withLatestFrom(this.dataService.cargarPoligrafias()),
    map(([invEsp, pol]) => invEsp.concat(pol)),
    tap(() => console.log('before load data')),
    map((data: Servicio[]) => new CargarServicios(data)),
    tap(() => console.log('before load data'))
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
