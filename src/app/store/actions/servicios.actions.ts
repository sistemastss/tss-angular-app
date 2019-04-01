import {Action} from '@ngrx/store';
import {Servicio} from '../../@models/servicio';
import {Filtro} from '../../@models/filtro.enum';

export enum ServiciosActionTypes {
  SOLICITAR = '[SERVICIOS] SOLICITAR',
  CARGAR = '[SERVICIOS] CARGAR',
  FILTRAR = '[SERVICIOS] FILTRAR',
  ELIMINAR = '[SERVICIOS] ELIMINAR',
  REMOVER = '[SERVICIOS] REMOVER',
}

export class SolicitarServicios implements Action {
  readonly type = ServiciosActionTypes.SOLICITAR;
}

export class CargarServicios implements Action {
  readonly type = ServiciosActionTypes.CARGAR;
  constructor(public payload: Servicio[]) {}
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
  | EliminarServicio
  | RemoverServicios;
