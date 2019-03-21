import {ServicioEsp} from '../../@models/servicio-esp';
import {ServicioEspAction, ServicioEspActionTypes} from '../actions/servicio-esp.action';
import {CentroCosto} from '../../@models/centro-costo';
import {CentroCostoAction, CentroCostoActionTypes} from '../actions/centro-costo-action';
import {Investigacion} from '../../@models/Investigacion';
import {InvestigacionActions, InvestigacionActionTypes} from '../actions/investigacion.action';
import {Servicio} from '../../@models/servicio';
import {ServiciosAction, ServiciosActionTypes} from '../actions/servicios.action';

export const centroCostoReducer = (state: CentroCosto, action: CentroCostoAction): CentroCosto => {
  switch (action.type) {
    case CentroCostoActionTypes.CREAR:
      return {...state, ...action.payload};

    case CentroCostoActionTypes.REMOVER:
      return null;

    default:
      return state;
  }
};


export const servicioEspReducer = (state: any[] = [], action: ServicioEspAction): any[] => {
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
};

export const investigacionReducer = (state: Investigacion[] = [], action: InvestigacionActions) => {
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
};

export const serviciosReducer = (state: Servicio[] = [], action: ServiciosAction) => {
  switch (action.type) {
    case ServiciosActionTypes.CARGAR:
      return [...state, ...action.payload];

    case ServiciosActionTypes.ELIMINAR:
      return [...state.filter(value => value.id !== action.id)];

    default:
      return state;
  }
};
