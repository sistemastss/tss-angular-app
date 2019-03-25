import {EspActions, ServicioEspActionTypes} from '../actions/esp.actions';
import {CentroCosto} from '../../@models/centro-costo';
import {CentroCostoActions, CentroCostoActionTypes} from '../actions/centro-costo-actions';
import {Investigacion} from '../../@models/Investigacion';
import {InvestigacionActions, InvestigacionActionTypes} from '../actions/investigacion.actions';
import {Servicio} from '../../@models/servicio';
import {ServiciosActions, ServiciosActionTypes} from '../actions/servicios.actions';
import {Poligrafia} from '../../@models/poligrafia';
import {PoligrafiaActions, PoligrafiaActionTypes} from '../actions/poligrafia.actions';
import {ServicioEsp} from '../../@models/servicio-esp';

export function centroCostoReducer(state: CentroCosto, action: CentroCostoActions): CentroCosto {
  switch (action.type) {
    case CentroCostoActionTypes.CREAR:
      return {...state, ...action.payload};

    case CentroCostoActionTypes.REMOVER:
      return null;

    default:
      return state;
  }
}


export function servicioEspReducer(state: ServicioEsp[] = [], action: EspActions): any[] {
  switch (action.type) {
    case ServicioEspActionTypes.CREAR:
      return [...state, action.payload];

    case ServicioEspActionTypes.FILTRAR:
      return [...state.filter((value, index) => index === action.id)];

    case ServicioEspActionTypes.EDITAR:
      return [...state.map((value, index) => index === action.id ? action.payload : value)];

    case ServicioEspActionTypes.ELIMINAR:
      return [...state.filter((value, index) => index !== action.id)];

    case ServicioEspActionTypes.REMOVER:
      return [];

    default:
      return state;
  }
}

export function investigacionReducer(state: Investigacion[] = [], action: InvestigacionActions) {
  switch (action.type) {
    case InvestigacionActionTypes.CREAR:
      return [...state, action.payload];

    case InvestigacionActionTypes.EDITAR:
      return [...state.map((value, index) => index !== action.id ? value : action.payload)];

    case InvestigacionActionTypes.ELIMINAR:
      return [...state.filter((value, index) => index !== action.id)];

    case InvestigacionActionTypes.REMOVER:
      return [];

    default:
      return state;
  }
}


export function poligrafiaReducer(state: Poligrafia[] = [], action: PoligrafiaActions) {
  switch (action.type) {
    case PoligrafiaActionTypes.CREAR:
      return [...state, action.payload];

    case PoligrafiaActionTypes.EDITAR:
      return [...state.map((value, index) => index !== action.id ? value : action.payload)];

    case PoligrafiaActionTypes.ELIMINAR:
      return [...state.filter((value, index) => index !== action.id)];

    case PoligrafiaActionTypes.REMOVER:
      return [];

    default:
      return state;
  }
}

export function serviciosReducer(state: Servicio[] = [], action: ServiciosActions) {
  switch (action.type) {
    case ServiciosActionTypes.CARGAR:
      return [...state, ...action.payload];

    case ServiciosActionTypes.ELIMINAR:
      return [...state.filter(value => value.id !== action.id)];

    default:
      return state;
  }
}
