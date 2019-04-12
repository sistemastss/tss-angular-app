import {Action} from '@ngrx/store';
import {Servicio} from '../../@models/servicio';

export enum ServiciosActionTypes {
  SOLICITAR = '[SERVICIOS] SOLICITAR',
  CARGAR = '[SERVICIOS] CARGAR',
  ELIMINAR = '[SERVICIOS] ELIMINAR',
  EDITAR = '[SERVICIOS] EDITAR',
  REMOVER = '[SERVICIOS] REMOVER',
}

export class SolicitarServicios implements Action {
  readonly type = ServiciosActionTypes.SOLICITAR;
}

export class CargarServicios implements Action {
  readonly type = ServiciosActionTypes.CARGAR;
  constructor(public payload: Servicio[]) {}
}

export class EditarServicio implements Action {
  readonly type = ServiciosActionTypes.EDITAR;
  constructor(public payload: Servicio, public id: number) {}
}

export class EliminarServicio implements Action {
  readonly type = ServiciosActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export class RemoverServicios implements Action {
  readonly type = ServiciosActionTypes.REMOVER;
}

export type ServiciosActions =
  CargarServicios
  | EditarServicio
  | EliminarServicio
  | RemoverServicios;
