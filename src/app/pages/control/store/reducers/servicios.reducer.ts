import { ServiciosActions, ServiciosActionTypes } from '../actions/servicios.actions';
import { Servicio } from '../../../../@models/servicio';

export function serviciosReducer(state: Servicio[] = [], action: ServiciosActions): Servicio[] {
  switch (action.type) {

    case ServiciosActionTypes.LoadServicios:
      return [...state, ...action.payload ];

    case ServiciosActionTypes.RemoveServicios:
      return [];

    default:
      return state;
  }
}
