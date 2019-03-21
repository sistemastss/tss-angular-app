interface CentroCosto {
  id: number;
  solicitante: string;
  email: string;
  telefono: number;
}

export interface Servicio {
  id: number;
  centroCosto: CentroCosto;
  fechaCreacion: string;
  ciudad?: string;
  solicitante: string;
  tipoServicio: string;
  informe: string;
  estado: string;
  datosEvaluado: Evaluado;
  links?: string;
}

export interface Evaluado {
  id: number;
  nombre: string;
  numeroIdentidad: number;
  ciudadDesarrollo: string;
  telefono: number;
  email: string;
  direccion: string;
  observaciones: string;
}
