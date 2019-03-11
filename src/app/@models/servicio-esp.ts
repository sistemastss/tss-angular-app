export interface ServicioEsp {
  id?: number;
  nombre: string;
  documento: number;
  departamento: string;
  ciudad: string;
  telefono: number;
  correo: string;
  ciudadDesarrollo: string;
  anexo?: string;
  observaciones: string;
  actividades: any[];
}
