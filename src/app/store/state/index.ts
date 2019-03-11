import {ServicioEsp} from '../../@models/servicio-esp';
import {Investigacion} from '../../@models/Investigacion';

export interface ServicioEspState {
  readonly servicioEsp: ServicioEsp[];
}

export interface InvestigacionState {
  readonly investigacion: Investigacion[];
}
