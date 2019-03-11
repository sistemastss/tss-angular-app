import {Action} from '@ngrx/store';
import {CentroCosto} from '../../@models/centro-costo';

export enum CentroCostoActionTypes {
  CREAR = 'CREAR',
  ELIMINAR = 'ELIMINAR'
}

export class CrearCentroCosto implements Action {
  readonly type = CentroCostoActionTypes.CREAR;
  constructor(public payload: CentroCosto) {}
}

export class EliminarCentroCosto implements Action {
  readonly type = CentroCostoActionTypes.ELIMINAR;
}

export type CentroCostoActions = CrearCentroCosto| EliminarCentroCosto;
