import {Action} from '@ngrx/store';
import {Investigacion} from '../../@models/Investigacion';

export enum InvestigacionActionTypes {
  CREAR = '[INVESTIGACION] CREAR',
  EDITAR = '[INVESTIGACION] EDITAR',
  ELIMINAR = '[INVESTIGACION] ELIMINAR',
  ALMACENAR = '[INVESTIGACION] ALMACENAR',
  REMOVER = '[INVESTIGACION] REMOVER'
}

export class CrearInvestigacion implements Action {
  readonly type = InvestigacionActionTypes.CREAR;
  constructor(public payload: Investigacion) {}
}

export class EditarInvestigacion implements Action {
  readonly type = InvestigacionActionTypes.EDITAR;
  constructor(public payload: Investigacion, public id: number) {}
}

export class EliminarInvestigacion implements Action {
  readonly type = InvestigacionActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export class AlmacenarInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.ALMACENAR;
  constructor(public centroCostoId: number) {}
}

export class RemoverInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.REMOVER;
}

export type InvestigacionActions =
  EditarInvestigacion
  | CrearInvestigacion
  | EditarInvestigacion
  | EliminarInvestigacion
  | AlmacenarInvestigaciones
  | RemoverInvestigaciones;
