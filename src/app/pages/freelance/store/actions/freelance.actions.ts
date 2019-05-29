import { Action } from '@ngrx/store';

export enum FreelanceActionTypes {
  LoadFreelances = '[Freelance] Load Freelances',
  LoadFreelancesSuccess = '[Freelance] Load Freelances Success',
  LoadFreelancesError = '[Freelance] Load Freelances Success',

}

export class LoadFreelances implements Action {
  readonly type = FreelanceActionTypes.LoadFreelances;
}


export type FreelanceActions = LoadFreelances;
