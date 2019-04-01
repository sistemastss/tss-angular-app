import { ServicioEsp } from '../../@models/servicio-esp';
import { Investigacion } from '../../@models/Investigacion';
import { CentroCosto } from '../../@models/centro-costo';
import { Poligrafia } from '../../@models/poligrafia';
import {Servicio} from '../../@models/servicio';

export interface ServicioState {
  readonly servicio: Servicio[];
}

export interface CentroCostoState {
  readonly centroCosto: CentroCosto;
}

export interface ServicioEspState {
  readonly servicioEsp: ServicioEsp[];
}

export interface InvestigacionState {
  readonly investigacion: Investigacion[];
}

export interface PoligrafiaState {
  readonly poligrafia: Poligrafia[];
}
