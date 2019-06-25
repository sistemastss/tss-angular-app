import { File } from '../../../@models/file.interface';

export interface Investigacion {
  lugar_desarrollo: string;
  descripcion: string;
  anexo?: File;
}
