import { Action } from '@ngrx/store';

export enum InformeActionTypes {
  LoadInforme         = '[Informe] Load Informe',
  LoadInformeSuccess  = '[Informe] Load Informe Success',
}

export class LoadInformes implements Action {
  readonly type = InformeActionTypes.LoadInforme;
}

export class LoadInformeSuccess implements Action {
  readonly type = InformeActionTypes.LoadInforme;
  constructor(public payload) { }
}

export type InformeActions =
  LoadInformes
  | LoadInformeSuccess;
