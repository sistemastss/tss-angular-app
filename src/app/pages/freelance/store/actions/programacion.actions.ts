import { Action } from '@ngrx/store';
import { Programacion } from '../../../control/interfaces/programacion.interface';

export enum ProgramacionActionTypes {
  LoadProgramacion = '[Programacion] Load Programacion',
  LoadProgramacionSuccess = '[Programacion] Load Programacion Success',
  SaveProgramacion = '[Programacion] Save Programacion',
  UpdateProgramacion = '[Freelance] Load Freelances Success',

}

export class LoadProgramacion implements Action {
  readonly type = ProgramacionActionTypes.LoadProgramacion;
}

export class LoadProgramacionSuccess implements Action {
  readonly type = ProgramacionActionTypes.LoadProgramacionSuccess;

  constructor(public payload: Programacion) {}
}

export class SaveProgramacion implements Action {
  readonly type = ProgramacionActionTypes.SaveProgramacion;

  constructor(public payload: Programacion) {}
}

export class UpdateProgramacion implements Action {
  readonly type = ProgramacionActionTypes.UpdateProgramacion;

  constructor(public payload: Programacion) {}
}

export type ProgramacionActions =
  LoadProgramacion
  | LoadProgramacionSuccess
  | SaveProgramacion;
