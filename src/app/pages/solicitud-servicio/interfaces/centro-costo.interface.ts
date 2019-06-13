export interface CentroCosto {
  cliente_id: number;
  solicitante: string;
  telefono_solicitante: number;
  email_solicitante: string;
  numero_orden?: number;
  anexo?: string;
  destino_factura: string;
  tipo_sociedad: string;
  tipo_identificacion: string;
  numero_identificacion: number;
  telefono_factura: number;
  email_factura: string;
}
