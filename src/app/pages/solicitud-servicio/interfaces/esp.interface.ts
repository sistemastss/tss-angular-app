import { Evaluado } from './evaluado.interface';
import { File } from '../../../@models/file.interface';

export interface Esp {
  evaluado: Evaluado;
  lugar_esarrollo: string;
  observaciones: string;
  tipo_esp: string;
  anexo?: File;
  actividades: [{ actividad_id: number }];
}
