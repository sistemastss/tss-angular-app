import { Action } from '@ngrx/store';

export enum InvestigacionActionTypes {
  FetchEsps = '[Esps] Fetch Esps',
  LoadEsps = '[Esps] Load Esps',
  SearchByEsps = '[Esps] Search By Esps',
  RemoveEsps = '[Esps] Load Esps',
}

export class FetchInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.FetchEsps;
}

export class LoadInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.LoadEsps;
  constructor(public payload: any[]) {}
}

export class RemoveInvestigaciones {
  readonly type = InvestigacionActionTypes.RemoveEsps;
}


export type ControlActions =
  FetchInvestigaciones
  | LoadInvestigaciones
  | RemoveInvestigaciones;
