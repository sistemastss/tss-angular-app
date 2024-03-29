import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ControlActionTypes, ControlActions } from '../actions/control.actions';


@Injectable()
export class ControlEffects {


  @Effect()
  loadControls$ = this.actions$.pipe(
    ofType(ControlActionTypes.LoadControls),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ControlActions>) {}

}
