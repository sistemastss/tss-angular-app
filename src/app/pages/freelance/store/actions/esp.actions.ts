import { Action } from '@ngrx/store';
import { IEsp } from '../../../control/interfaces/esp.interface';

export enum EspActionTypes {
  LoadEsps = '[Esp] Load Esps',
  LoadEspsSuccess = '[Esp] Load Esps Success',
  LoadEspsError = '[Esp] Load Esps Error',

}

export class LoadEsps implements Action {
  readonly type = EspActionTypes.LoadEsps;
}

export class LoadEspsSuccess implements Action {
  readonly type = EspActionTypes.LoadEspsSuccess;

  constructor(public payload: IEsp[]) {}
}

export class LoadEspsError implements Action {
  readonly type = EspActionTypes.LoadEspsError;
}


export type EspActions =
  LoadEsps
  | LoadEspsSuccess
  | LoadEspsError;
