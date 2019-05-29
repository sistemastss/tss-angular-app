import { Action } from '@ngrx/store';
import { Esp } from '../../interfaces/esp.interface';
import { EspActions, EspActionTypes } from '../actions/esp.actions';


export function espReducer(state: Esp[] = [], action: EspActions): Esp[] {
  switch (action.type) {
    case EspActionTypes.Crear:
      return [...state, action.payload];

    case EspActionTypes.Editar:
      return [...state.map((value, index) => index === action.id ? action.payload : value)];

    case EspActionTypes.Eliminar:
      return [...state.filter((value, index) => index !== action.id)];

    case EspActionTypes.Remover:
      return [];

    default:
      return state;
  }
}
