import {Action} from '@ngrx/store';
import {Poligrafia} from '../../@models/poligrafia';

export enum PoligrafiaActionTypes {
  CREAR       = '[POLIGRAFIA] CREAR',
  ALMACENAR   = '[POLIGRAFIA] ALMACENAR',
  EDITAR      = '[POLIGRAFIA] EDITAR',
  ELIMINAR    = '[POLIGRAFIA] ELIMINAR',
  REMOVER     = '[POLIGRAFIA] REMOVER'
}

export class CrearPoligrafia implements Action {
  readonly type = PoligrafiaActionTypes.CREAR;
  constructor(public payload: Poligrafia) {}
}

export class AlmacenarPoligrafia implements Action {
  readonly type = PoligrafiaActionTypes.ALMACENAR;
  constructor(public centroCostoId: number) {}
}

export class EditarPoligrafia implements Action {
  readonly type = PoligrafiaActionTypes.EDITAR;
  constructor(public payload: Poligrafia, public id: number) {}
}

export class EliminarPoligrafia implements Action {
  readonly type = PoligrafiaActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export class RemoverPoligrafia implements Action {
  readonly type = PoligrafiaActionTypes.REMOVER;
}

export type PoligrafiaActions =
  CrearPoligrafia
  | AlmacenarPoligrafia
  | EditarPoligrafia
  | EliminarPoligrafia
  | RemoverPoligrafia;
