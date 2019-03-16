import {ServicioEsp} from '../../@models/servicio-esp';
import {Investigacion} from '../../@models/Investigacion';
import {CentroCosto} from '../../@models/centro-costo';

export interface CentroCostoState {
  readonly centroCosto: CentroCosto;
}

export interface ServicioEspState {
  readonly servicioEsp: ServicioEsp[];
}

export interface InvestigacionState {
  readonly investigacion: Investigacion[];
}
