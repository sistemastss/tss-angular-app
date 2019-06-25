import { File } from '../../../@models/file.interface';
import { Evaluado } from './evaluado.interface';

export interface Poligrafia {
  evaluado: Evaluado;
  lugar_desarrollo: string;
  contexto: string;
  tipo_poligrafia: string;
  anexo?: File;
}
