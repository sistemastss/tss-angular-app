import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { EspActionTypes } from '../actions/esp.actions';
import { Store } from '@ngrx/store';
import { getCentroCosto, getEsps } from '../selectors';
import { EspService } from '../../../shared/services';
import { Router } from '@angular/router';


@Injectable()
export class EspEffects {

  @Effect()
  almacenarEsps$ = this.actions$.pipe(
    ofType(EspActionTypes.Almacenar),
    withLatestFrom(
      this.store.select(getCentroCosto),
      this.store.select(getEsps),
    ),
    map(([action, centro_costo, esps]) => ({ centro_costo, esps, })),
    tap(value => console.log(value)),
    mergeMap(value => this.espService.save(value).pipe(
      tap(() => this.redirect()),
      switchMap(() => EMPTY),
    )),
    catchError(() => swal('Ocurrio un error!', 'Intente mas tarde', 'error'))
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private espService: EspService,
    private router: Router,
  ) { }

  redirect() {
    this.router.navigate(['../dashboard/cl']);
  }

}
