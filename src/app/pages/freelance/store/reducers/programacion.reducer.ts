
import { FreelanceActions, FreelanceActionTypes } from '../actions/freelance.actions';
import { ProgramacionActions, ProgramacionActionTypes } from '../actions/programacion.actions';

export interface State {

}

export const initialState: State = {

};

export function programacionReducer(state = initialState, action: ProgramacionActions): State {
  switch (action.type) {

    case ProgramacionActionTypes.LoadProgramacion:
    case ProgramacionActionTypes.LoadProgramacionSuccess:
      return state;

    default:
      return state;
  }
}
