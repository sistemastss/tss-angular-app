import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { getCentroCosto, getInvestigaciones } from '../selectors';
import { InvestigacionActionTypes } from '../actions/investigacion.actions';
import { InvestigacionService } from '../../../shared/services/investigacion.service';
import { Router } from '@angular/router';


@Injectable()
export class InvestigacionEffects {

  @Effect()
  almacenarInvestigaciones$ = this.actions$.pipe(
    ofType(InvestigacionActionTypes.Almacenar),
    withLatestFrom(
      this.store.select(getCentroCosto),
      this.store.select(getInvestigaciones),
    ),
    map(([action, centroCosto, investigaciones]) => ({ centroCosto, investigaciones, })),
    mergeMap(value => this.investigacionService.save(value).pipe(
      tap(() => this.redirect()),
      switchMap(() => EMPTY),
    )),
  );

  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private investigacionService: InvestigacionService,
    private router: Router,
  ) {}

  redirect() {
    this.router.navigate(['../dashboard/cl']);
  }

}
