import { Action } from '@ngrx/store';

export enum EspActionTypes {
  FetchEsps = '[Esps] Fetch Esps',
  LoadEsps = '[Esps] Load Esps',
  SearchByEsps = '[Esps] Search By Esps',
  RemoveEsps = '[Esps] Load Esps',
}

export class FetchEsp implements Action {
  readonly type = EspActionTypes.FetchEsps;
}

export class LoadEsps implements Action {
  readonly type = EspActionTypes.LoadEsps;
  constructor(public payload: any[]) {}
}

export class SearchByEsps implements Action {
  readonly type = EspActionTypes.SearchByEsps;
  constructor() {}
}
export class RemoveEsps {
  readonly type = EspActionTypes.RemoveEsps;
}


export type EspActions =
  FetchEsp
  | LoadEsps
  | SearchByEsps
  | RemoveEsps;
