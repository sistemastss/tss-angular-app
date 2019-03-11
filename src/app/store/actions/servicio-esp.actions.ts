import {Action} from '@ngrx/store';
import {ServicioEsp} from '../../@models/servicio-esp';

export enum ServicioEspActionTypes {
  CREAR = 'CREAR',
  EDITAR = 'EDITAR',
  ELIMINAR = 'ELIMINAR'
}

export class CrearServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.CREAR;
  constructor(public payload: ServicioEsp) {}
}


export class EditarServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.EDITAR;
  constructor(public payload: ServicioEsp) {}
}

export class EliminarServicioEsp implements Action {
  readonly type = ServicioEspActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export type ServicioEspActions = CrearServicioEsp | EditarServicioEsp | EliminarServicioEsp;
