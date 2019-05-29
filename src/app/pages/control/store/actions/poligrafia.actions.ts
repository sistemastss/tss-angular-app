import { Action } from '@ngrx/store';

export enum PoligrafiaActionTypes {
  FetchEsps = '[Esps] Fetch Esps',
  LoadEsps = '[Esps] Load Esps',
  RemoveEsps = '[Esps] Load Esps',
}

export class FetchPoligrafias implements Action {
  readonly type = PoligrafiaActionTypes.FetchEsps;
}

export class LoadPoligrafias implements Action {
  readonly type = PoligrafiaActionTypes.LoadEsps;
  constructor(public payload: any[]) {}
}

export class RemovePoligrafias {
  readonly type = PoligrafiaActionTypes.RemoveEsps;
}


export type ControlActions =
  FetchPoligrafias
  | LoadPoligrafias
  | RemovePoligrafias;
