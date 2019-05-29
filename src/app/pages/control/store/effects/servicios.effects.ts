import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { LoadServicios, ServiciosActions, ServiciosActionTypes } from '../actions/servicios.actions';
import { DataService } from '../../services/data.service';


@Injectable()
export class ServicioEffects {

  @Effect()
  fetchServicios$ = this.actions$.pipe(
    ofType(ServiciosActionTypes.FetchServicios),
    mergeMap(() => this.controlService.fetchServicios().pipe(
      map(value => new LoadServicios(value)),
    )),
  );

  constructor(
    private actions$: Actions,
    private controlService: DataService,
  ) {}

}
