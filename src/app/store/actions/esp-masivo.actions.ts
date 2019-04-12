import {Action} from '@ngrx/store';

export enum EspMasivoActionTypes {
  AGREGAR     = '[ESP_MASIVO] AGREGAR',
  ALMACENAR   = '[ESP_MASIVO] ALMACENAR',
  REMOVER     = '[ESP_MASIVO] REMOVER'
}


export class AgregarEspMasivo implements Action {
  readonly type = EspMasivoActionTypes.AGREGAR;
  constructor(public payload: any) {}
}


export class AlmacenarEspMasivo implements Action {
  readonly type = EspMasivoActionTypes.ALMACENAR;
  constructor(public centroCostoId: number) {}
}

export class RemoverEspMasivo implements Action {
  readonly type = EspMasivoActionTypes.REMOVER;
}

export type EspMasivoActions =
  AgregarEspMasivo
  | AlmacenarEspMasivo
  | RemoverEspMasivo;
