import { Injectable } from '@angular/core';
import {Servicio} from '../@models/servicio';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  constructor() { }

  filtrar(servicios: Servicio[], filtro, keys: string = null) {
    if (keys) {
      servicios.filter(servicio => {
        for (const key in servicio) {
          if (key === filtro) {
            return true;
          }
        }
      });
    }
  }
}
