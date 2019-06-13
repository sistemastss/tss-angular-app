import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { InformeActionTypes, InformeActions } from '../actions/informe.actions';


@Injectable()
export class InformeEffects {


  @Effect()
  loadInformes$ = this.actions$.pipe(
    ofType(InformeActionTypes.LoadInforme),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<InformeActions>) {}

}
