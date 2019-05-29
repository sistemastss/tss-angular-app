import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { getCentroCosto, getPoligrafias } from '../selectors';
import { PoligrafiaService } from '../../../shared/services';
import { PoligrafiaActionTypes } from '../actions/poligrafia.actions';
import { Router } from '@angular/router';


@Injectable()
export class PoligrafiaEffects {

  @Effect()
  almacenarPoligrafias$ = this.actions$.pipe(
    ofType(PoligrafiaActionTypes.Almacenar),
    withLatestFrom(
      this.store.select(getCentroCosto),
      this.store.select(getPoligrafias),
    ),
    map(([action, centroCosto, poligrafias]) => ({ centroCosto, poligrafias, })),
    mergeMap(value => this.poligrafiaService.save(value).pipe(
      tap(() => this.redirect()),
      switchMap(() => EMPTY),
    )),
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private poligrafiaService: PoligrafiaService,
    private router: Router,
  ) {}

  redirect() {
    this.router.navigate(['../dashboard/cl']);
  }

}
