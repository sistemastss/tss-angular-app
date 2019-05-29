import { File } from '../../../@models/file.interface';

export interface Investigacion {
  ciudad: string;
  descripcion: string;
  anexo?: File;
}
