import {Action} from '@ngrx/store';
import {Servicio} from '../../@models/servicio';
import {Filtro} from '../../@models/filtro.enum';

export enum ServiciosActionTypes {
  SOLICITAR = '[SERVICIOS] SOLICITAR',
  CARGAR = '[SERVICIOS] CARGAR',
  FILTRAR = '[SERVICIOS] FILTRAR',
  ELIMINAR = '[SERVICIOS] ELIMINAR'
}

export class Solicitar implements Action {
  readonly type = ServiciosActionTypes.SOLICITAR;
}

export class Cargar implements Action {
  readonly type = ServiciosActionTypes.CARGAR;
  constructor(public payload: Servicio[]) {}
}

export class Filtrar implements Action {
  readonly type = ServiciosActionTypes.FILTRAR;
  constructor(public filtro: Filtro) {}
}

export class Eliminar implements Action {
  readonly type = ServiciosActionTypes.ELIMINAR;
  constructor(public id: number) {}
}

export type ServiciosAction =
  Solicitar |
  Cargar    |
  Filtrar   |
  Eliminar;
