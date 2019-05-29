import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FreelanceActionTypes, FreelanceActions } from '../actions/freelance.actions';


@Injectable()
export class FreelanceEffects {


  @Effect()
  loadFreelances$ = this.actions$.pipe(
    ofType(FreelanceActionTypes.LoadFreelances),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<FreelanceActions>) {}

}
