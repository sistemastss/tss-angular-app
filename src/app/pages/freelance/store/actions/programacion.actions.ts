import { Action } from '@ngrx/store';
import { IProgramacion } from '../../interfaces/programacion.interface';

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

  constructor(public payload: IProgramacion) {}
}

export class SaveProgramacion implements Action {
  readonly type = ProgramacionActionTypes.SaveProgramacion;

  constructor(public payload: IProgramacion) {}
}

export class UpdateProgramacion implements Action {
  readonly type = ProgramacionActionTypes.UpdateProgramacion;

  constructor(public payload: IProgramacion) {}
}

export type ProgramacionActions =
  LoadProgramacion
  | LoadProgramacionSuccess
  | SaveProgramacion;
