import { Action } from '@ngrx/store';
import { Poligrafia } from '../../interfaces/poligrafia.interface';

export enum PoligrafiaActionTypes {
  Crear       = '[POLIGRAFIA] Crear Poligrafia',
  Almacenar   = '[POLIGRAFIA] Almacenar Poligrafia',
  Editar      = '[POLIGRAFIA] Editar Poligrafia',
  Eliminar    = '[POLIGRAFIA] Eliminar Poligrafia',
  Remover     = '[POLIGRAFIA] Remove Poligrafia'
}

export class CrearPoligrafia implements Action {

  readonly type = PoligrafiaActionTypes.Crear;
  constructor(public payload: Poligrafia) {}

}

export class AlmacenarPoligrafias implements Action {

  readonly type = PoligrafiaActionTypes.Almacenar;
  constructor() {}

}


export class EditarPoligrafia implements Action {

  readonly type = PoligrafiaActionTypes.Editar;
  constructor(public payload: Poligrafia, public id: number) {}

}

export class EliminarPoligrafia implements Action {

  readonly type = PoligrafiaActionTypes.Eliminar;
  constructor(public id: number) {}

}

export class RemoverPoligrafias implements Action {
  readonly type = PoligrafiaActionTypes.Remover;
}

export type PoligrafiaActions =
  CrearPoligrafia
  | AlmacenarPoligrafias
  | EditarPoligrafia
  | EliminarPoligrafia
  | RemoverPoligrafias;
