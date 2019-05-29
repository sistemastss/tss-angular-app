import { File } from '../../../@models/file.interface';
import { Evaluado } from './evaluado.interface';

export interface Poligrafia {
  evaluado: Evaluado;
  lugarDesarrollo: string;
  contexto: string;
  tipoPoligrafia: string;
  anexo?: File;
}
