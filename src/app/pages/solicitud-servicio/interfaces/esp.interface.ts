import { Evaluado } from './evaluado.interface';
import { File } from '../../../@models/file.interface';

export interface Esp {
  evaluado: Evaluado;
  lugarDesarrollo: string;
  observaciones: string;
  tipoEsp: string;
  anexo?: File;
}
