
import { ControlActions, ControlActionTypes } from '../actions/control.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ControlActions): State {
  switch (action.type) {

    case ControlActionTypes.LoadControls:
      return state;

    default:
      return state;
  }
}
