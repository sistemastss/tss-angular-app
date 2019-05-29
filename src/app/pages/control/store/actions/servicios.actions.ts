import { Action } from '@ngrx/store';
import { Servicio } from '../../../../@models/servicio';

export enum ServiciosActionTypes {
  FetchServicios = '[Servicios] Fetch Servicios',
  LoadServicios = '[Servicios] Load Servicios',
  RemoveServicios = '[Servicios] Remove Servicios',
}

export class FetchServicios implements Action {
  readonly type = ServiciosActionTypes.FetchServicios;
}

export class LoadServicios implements Action {
  readonly type = ServiciosActionTypes.LoadServicios;
  constructor(public payload: Servicio[]) {}
}

export class RemoveServicios implements Action {
  readonly type = ServiciosActionTypes.RemoveServicios;
}

export type ServiciosActions =
  FetchServicios
  | LoadServicios
  | RemoveServicios;
