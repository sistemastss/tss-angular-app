import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Injectable()
export class EspEffects {


  @Effect()
  loadProgramacion$ = this.actions$.pipe(
    // ofType(ProgramaxcionActionTypes.LoadProgramacion),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
    // concatMap(() => this.freelanceService.getProgramacion()),
  );


  constructor(
    private actions$: Actions,
    // private freelanceService: FreelanceService
  ) {}

}
