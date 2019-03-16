import {Action} from '@ngrx/store';
import {Investigacion} from '../../@models/Investigacion';

export enum InvestigacionActionTypes {
  CREAR = '[INVESTIGACION] CREAR',
  ACTUALIZAR = '[INVESTIGACION] ACTUALIZAR',
  ELIMINAR = '[INVESTIGACION] ELIMINAR',
  GUARDAR = '[INVESTIGACION] GUARDAR',
  REMOVER = '[INVESTIGACION] REMOVER'
}

export class CrearInvestigacion implements Action {
  readonly type = InvestigacionActionTypes.CREAR;
  constructor(public payload: Investigacion) {}
}

export class ActualizarInvestigacion implements Action {
  readonly type = InvestigacionActionTypes.ACTUALIZAR;
  constructor(public id: number, public payload: Investigacion) {}
}

export class EliminarInvestigacion implements Action {
  readonly type = InvestigacionActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export class GuardarInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.GUARDAR;
}

export class RemoverInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.REMOVER;
}

export type InvestigacionActions =
  ActualizarInvestigacion   |
  CrearInvestigacion        |
  ActualizarInvestigacion   |
  EliminarInvestigacion     |
  GuardarInvestigaciones    |
  RemoverInvestigaciones;
