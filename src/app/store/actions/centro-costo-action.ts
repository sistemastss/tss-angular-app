import {Action} from '@ngrx/store';
import {CentroCosto} from '../../@models/centro-costo';

export enum CentroCostoActionTypes {
  CREAR = '[CENTRO_COSTO] CREAR',
  ALMACENAR = '[CENTRO_COSTO] ALMACENAR',
  REMOVER = '[CENTRO_COSTO] REMOVER'
}

export enum Servicios {
  ESP = 'ESP',
  INVESTIGACIONES = 'INVESTIGACIONES'
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

export type CentroCostoAction =
  CrearCentroCosto      |
  AlmacenarCentroCosto  |
  RemoverCentroCosto ;
