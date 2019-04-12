import {Action} from '@ngrx/store';
import {CentroCosto} from '../../@models/centro-costo';

export enum CentroCostoActionTypes {
  CREAR = '[CENTRO_COSTO] CREAR',
  ALMACENAR = '[CENTRO_COSTO] ALMACENAR',
  REMOVER = '[CENTRO_COSTO] REMOVER'
}

export enum Servicios {
  ESP = 'ESP',
  ESP_MASIVO = 'ESP_MASIVO',
  INVESTIGACION = 'INVESTIGACION',
  POLIGRAFIA = 'POLIGRAFIA'
}

export class CrearCentroCosto implements Action {
  readonly type = CentroCostoActionTypes.CREAR;
  constructor(public payload: CentroCosto) {}
}

export class AlmacenarCentroCosto implements Action {
  readonly type = CentroCostoActionTypes.ALMACENAR;
  constructor(public payload: Servicios) {}
}

export class RemoverCentroCosto implements Action {
  readonly type = CentroCostoActionTypes.REMOVER;
}

export type CentroCostoActions =
  CrearCentroCosto      |
  AlmacenarCentroCosto  |
  RemoverCentroCosto ;
