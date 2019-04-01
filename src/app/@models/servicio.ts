interface CentroCosto {
  id: number;
  solicitante: string;
  email: string;
  telefono: number;
}

export interface Servicio {
  id: number;
  centroCosto: CentroCosto;
  ciudad?: string;
  anexo?: string;
  evaluado?: string;
  documento?: number;
  departamento?: string;
  telefono?: number;
  email?: string;
  direccion?: string;
  contexto?: string;
  descripcion?: string;
  observaciones?: string;
  tipoServicio?: string;
  tipoPoligrafia?: string;
  tipoEsp?: string;
  estado?: string;
  informe?: string;
  fechaCreacion: string;
  fechaActualizacion: string;
  links?: any;
}
