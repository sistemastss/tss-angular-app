
import { InformeActions, InformeActionTypes } from '../actions/informe.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: InformeActions): State {
  switch (action.type) {

    case InformeActionTypes.LoadInforme:
      return state;

    default:
      return state;
  }
}
