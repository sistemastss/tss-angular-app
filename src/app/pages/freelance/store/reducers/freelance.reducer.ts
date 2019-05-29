
import { FreelanceActions, FreelanceActionTypes } from '../actions/freelance.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: FreelanceActions): State {
  switch (action.type) {

    case FreelanceActionTypes.LoadFreelances:
      return state;

    default:
      return state;
  }
}
