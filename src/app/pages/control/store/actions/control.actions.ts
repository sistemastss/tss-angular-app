import { Action } from '@ngrx/store';

export enum ControlActionTypes {
  LoadControls = '[Control] Load Controls',
  
  
}

export class LoadControls implements Action {
  readonly type = ControlActionTypes.LoadControls;
}


export type ControlActions = LoadControls;
