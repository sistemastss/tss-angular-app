export interface IViatico {
  id?: number;
  fechaCreacion?: string;
  origen: string;
  destino: string;
  tarifa: number;
  estado?: string;
}
