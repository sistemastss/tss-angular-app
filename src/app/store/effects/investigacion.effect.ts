import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {InvestigacionService} from '../../services/investigaciones/investigacion.service';
import {InvestigacionActionTypes, RemoverInvestigaciones} from '../actions/investigacion.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Investigacion} from '../../@models/Investigacion';
import {Action, Store} from '@ngrx/store';
import {EMPTY, Observable} from 'rxjs';

@Injectable()
export class InvestigacionEffect {

  constructor(
    private actions$: Actions,
    private _store: Store<Investigacion[]>,
    private _investigacion: InvestigacionService
  ) {}

}
