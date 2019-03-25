import {Action} from '@ngrx/store';
import {ServicioEsp} from '../../@models/servicio-esp';

export enum ServicioEspActionTypes {
  CREAR       = '[ESP] CREAR',
  ALMACENAR   = '[ESP] ALMACENAR',
  EDITAR      = '[ESP] EDITAR',
  FILTRAR     = '[ESP] FILTRAR',
  ELIMINAR    = '[ESP] ELIMINAR',
  REMOVER     = '[ESP] REMOVER'
}

export class CrearServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.CREAR;
  constructor(public payload: ServicioEsp) {}
}

export class AlmacenarServiciosEsp implements Action {
  readonly type = ServicioEspActionTypes.ALMACENAR;
  constructor(public centroCostoId: number) {}
}

export class FiltrarServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.FILTRAR;
  constructor(public id: number) {}
}

export class EditarServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.EDITAR;
  constructor(public payload: ServicioEsp, public id: number) {}
}

export class EliminarServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export class RemoverServiciosEsp implements Action {
  readonly type = ServicioEspActionTypes.REMOVER;
}

export type EspActions =
  CrearServicioEsp
  | AlmacenarServiciosEsp
  | FiltrarServicioEsp
  | EditarServicioEsp
  | EliminarServicioEsp
  | RemoverServiciosEsp;
