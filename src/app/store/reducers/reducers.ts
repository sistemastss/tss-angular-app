import {ServicioEsp} from '../../@models/servicio-esp';
import {ServicioEspActions, ServicioEspActionTypes} from '../actions/servicio-esp.actions';
import {CentroCosto} from '../../@models/centro-costo';
import {CentroCostoActions, CentroCostoActionTypes} from '../actions/centro-costo-actions';
import {Investigacion} from '../../@models/Investigacion';
import {InvestigacionActions, InvestigacionActionTypes} from '../actions/investigacion.action';

export const servicioEspReducer = (state: ServicioEsp[] = [], action: ServicioEspActions): ServicioEsp[] => {
  switch (action.type) {
    case ServicioEspActionTypes.CREAR:
      return [...state, action.payload];

    case ServicioEspActionTypes.EDITAR:
      return [...state.map(value => value.id === action.payload.id ? action.payload : value)];

    case ServicioEspActionTypes.ELIMINAR:
      return [...state.filter(value => value.id !== action.id)];
  }
};

export const centroCostoReducer = (state: CentroCosto, action: CentroCostoActions): CentroCosto => {
  switch (action.type) {
    case CentroCostoActionTypes.CREAR:
      return action.payload;

    case CentroCostoActionTypes.ELIMINAR:
      return null;
  }
};

export const investigacionReducer = (state: Investigacion[] = [], action: InvestigacionActions) => {
  switch (action.type) {
    case InvestigacionActionTypes.CREAR:
      return [...state, action.payload];

    case InvestigacionActionTypes.ACTUALIZAR:
      return [...state.map((value, index) => index !== action.id ? value : action.payload)];

    case InvestigacionActionTypes.ELIMINAR:
      return [...state.filter((value, index) => index !== action.id)];

    case InvestigacionActionTypes.GUARDAR:
      return state;

    case InvestigacionActionTypes.REMOVER:
      return [];

    default:
      return state;
  }
};
