import { keys } from 'ts-transformer-keys';

export interface Servicio {
  id: number;
  centroCosto: number;
  fecha: string;
  ciudad: string;
  solicitante: string;
  servicioSolicitado: string;
  estado: string;
  adjunto: string;
  informe: string;
  links?: string;
}

export const servicioKeys = keys<Servicio>();
