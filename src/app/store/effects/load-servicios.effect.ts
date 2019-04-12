import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DataService} from '../../services/data.service';
import {CargarServicios, ServiciosActionTypes} from '../actions';
import {map, switchMap } from 'rxjs/operators';
import {Servicio} from '../../@models/servicio';

@Injectable()
export class LoadServiciosEffect {

  @Effect()
  servicios$ = this.actions$.pipe(
    ofType(ServiciosActionTypes.SOLICITAR),
    switchMap(() => this.dataService.cargarServicios().pipe(
      map((data: Servicio[]) => new CargarServicios(data)),
    ))
  );

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}
