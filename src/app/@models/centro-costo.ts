export interface CentroCosto {
  clienteId: number;
  solicitante: string;
  telefonoSolicitante: number;
  emailSolicitante: string;
  numeroOrden?: number;
  anexo?: File;
  destinoFactura: string;
  tipoSociedad: string;
  tipoIdentificacion: string;
  numeroIdentificacion: number;
  telefonoFactura: number;
  emailFactura: string;
}
