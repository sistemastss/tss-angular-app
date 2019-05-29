import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ProgramacionActions, ProgramacionActionTypes } from '../actions/programacion.actions';
import { FreelanceService } from '../../services/freelance.service';


@Injectable()
export class ProgramacionEffects {


  @Effect()
  loadProgramacion$ = this.actions$.pipe(
    ofType(ProgramacionActionTypes.LoadProgramacion),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY),
    // concatMap(() => this.freelanceService.getProgramacion()),
  );


  constructor(
    private actions$: Actions<ProgramacionActions>,
    private freelanceService: FreelanceService
  ) {}

}
