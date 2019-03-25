export interface ServicioEsp {
  evaluado: string;
  documento: number;
  ciudadDesarrollo: string;
  telefono: number;
  email: string;
  direccion: string;
  observaciones: string;
  tipoEsp: string;
  anexo?: File;
  aceptarTerminos: boolean;
}
