import { Action } from '@ngrx/store';
import { Esp } from '../../interfaces/esp.interface';

export enum EspActionTypes {
  Crear       = '[ESP] Crear Esp',
  Almacenar   = '[ESP] Almacenar Esp',
  Editar      = '[ESP] Editar Esp',
  Eliminar    = '[ESP] Eliminar Esp',
  Remover     = '[ESP] Remover Esp'
}

export class CrearEsp implements Action {

  readonly type = EspActionTypes.Crear;
  constructor(public payload: Esp) {}

}

export class AlmacenarEsps implements Action {

  readonly type = EspActionTypes.Almacenar;
  constructor() {}

}


export class EditarEsp implements Action {

  readonly type = EspActionTypes.Editar;
  constructor(public payload: Esp, public id: number) {}

}

export class EliminarEsp implements Action {

  readonly type = EspActionTypes.Eliminar;
  constructor(public id: number) {}

}

export class RemoverEsps implements Action {
  readonly type = EspActionTypes.Remover;
}

export type EspActions =
  CrearEsp
  | AlmacenarEsps
  | EditarEsp
  | EliminarEsp
  | RemoverEsps;
