import { Action } from '@ngrx/store';
import { CentroCosto } from '../../interfaces/centro-costo.interface';

export enum CentroCostoActionTypes {
  Crear = '[CentroCosto] Crear CentroCosto',
  Guardar = '[CentroCosto] Guardar CentroCosto',
  Remover = '[CentroCosto] Remover CentroCosto',
}

export class CrearCentroCosto implements Action {

  readonly type = CentroCostoActionTypes.Crear;
  constructor(public payload: CentroCosto) {}

}

export class GuardarCentroCosto implements Action {

  readonly type = CentroCostoActionTypes.Guardar;
  constructor(public payload: any) {}

}

export class RemoverCentroCosto implements Action {

  readonly type = CentroCostoActionTypes.Remover;

}

export type CentroCostoActions =
  CrearCentroCosto
  | GuardarCentroCosto
  | RemoverCentroCosto ;


