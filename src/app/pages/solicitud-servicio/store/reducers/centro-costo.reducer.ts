import { CentroCostoActions, CentroCostoActionTypes } from '../actions/centro-costo.actions';
import { CentroCosto } from '../../interfaces/centro-costo.interface';

export interface CentroCostoState {
  readonly centroCosto: CentroCosto;
}

// @ts-ignore
export function centroCostoReducer(state: CentroCosto = {}, action: CentroCostoActions): CentroCosto {
  switch (action.type) {
    case CentroCostoActionTypes.Crear:
      return { ...state, ...action.payload };

    case CentroCostoActionTypes.Remover:
      return null;

    default:
      return state;
  }
}
