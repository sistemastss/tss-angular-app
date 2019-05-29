import { Poligrafia } from '../../interfaces/poligrafia.interface';
import { PoligrafiaActions, PoligrafiaActionTypes } from '../actions/poligrafia.actions';


export function poligrafiaReducer(state: Poligrafia[] = [], action: PoligrafiaActions): Poligrafia[] {

  switch (action.type) {
    case PoligrafiaActionTypes.Crear:
      return [...state, action.payload];

    case PoligrafiaActionTypes.Editar:
      return [...state.map((value, index) => index === action.id ? action.payload : value)];

    case PoligrafiaActionTypes.Eliminar:
      return [...state.filter((value, index) => index !== action.id)];

    case PoligrafiaActionTypes.Remover:
      return [];

    default:
      return state;
  }
}
