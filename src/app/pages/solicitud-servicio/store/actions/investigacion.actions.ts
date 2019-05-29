import { Action } from '@ngrx/store';
import { Investigacion } from '../../interfaces/Investigacion.interface';

export enum InvestigacionActionTypes {
  Crear       = '[INVESTIGACION] Crear Investigacion',
  Almacenar   = '[INVESTIGACION] Almacenar Investigacion',
  Editar      = '[INVESTIGACION] Editar Investigacion',
  Eliminar    = '[INVESTIGACION] Eliminar Investigacion',
  Remover     = '[INVESTIGACION] Remover Investigacion'
}

export class CrearInvestigacion implements Action {

  readonly type = InvestigacionActionTypes.Crear;
  constructor(public payload: Investigacion) {}

}

export class AlmacenarInvestigaciones implements Action {

  readonly type = InvestigacionActionTypes.Almacenar;
  constructor() {}

}


export class EditarInvestigacion implements Action {

  readonly type = InvestigacionActionTypes.Editar;
  constructor(public payload: Investigacion, public id: number) {}

}

export class EliminarInvestigacion implements Action {

  readonly type = InvestigacionActionTypes.Eliminar;
  constructor(public id: number) {}

}

export class RemoverInvestigaciones implements Action {
  readonly type = InvestigacionActionTypes.Remover;
}

export type InvestigacionActions =
  CrearInvestigacion
  | AlmacenarInvestigaciones
  | EditarInvestigacion
  | EliminarInvestigacion
  | RemoverInvestigaciones;
