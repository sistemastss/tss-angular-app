import { Action } from '@ngrx/store';
import { Investigacion } from '../../interfaces/investigacion.interface';
import { EspActions, EspActionTypes } from '../actions/esp.actions';
import { InvestigacionActions, InvestigacionActionTypes } from '../actions/investigacion.actions';


export function investigacionReducer(state: Investigacion[] = [], action: InvestigacionActions): Investigacion[] {

  switch (action.type) {
    case InvestigacionActionTypes.Crear:
      return [...state, action.payload];

    case InvestigacionActionTypes.Editar:
      return [...state.map((value, index) => index === action.id ? action.payload : value)];

    case InvestigacionActionTypes.Eliminar:
      return [...state.filter((value, index) => index !== action.id)];

    case InvestigacionActionTypes.Remover:
      return [];

    default:
      return state;
  }
}
