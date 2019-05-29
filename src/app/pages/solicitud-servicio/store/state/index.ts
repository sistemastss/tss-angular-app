import { Esp } from '../../interfaces/esp.interface';
import { Investigacion } from '../../interfaces/Investigacion.interface';
import { Poligrafia } from '../../interfaces/poligrafia.interface';

export interface EspState {
  readonly esp: Esp[];
}

export interface EspMasivoState {
  readonly espMasivo: any;
}

export interface InvestigacionState {
  readonly investigacion: Investigacion[];
}

export interface PoligrafiaState {
  readonly poligrafia: Poligrafia[];
}
