import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from '../../@models/app-settings';
import {ServicioEsp} from '../../@models/servicio-esp';
import {Helper} from '../../@classes';
import {map} from 'rxjs/operators';
import {Servicio} from '../../@models/servicio';

@Injectable({
  providedIn: 'root'
})
export class EspService {

  constructor(private http: HttpClient) {}

  almacenarEsp(centroCosto: number, payload: ServicioEsp[]) {
    const url = Helper.route(['centro-costo', 'servicio-esp'], centroCosto);
    return this.http.post(url, payload);
  }

  almacenarEspMasivo(centroCosto: number, payload: any) {
    const url = Helper.route(['centro-costo', 'servicio-esp-masivo'], centroCosto);
    return this.http.post(url, payload);
  }

  cargarEsps() {
    const url = config.api + '/servicio-esp';
    return this.http.get(url).pipe(
      map((value: any) => value.data as any[])
    );
  }

  actualizarServicioEsp(payload: Servicio) {
    const url = Helper.route('servicio-esp', payload.id);
    return this.http.put(url, payload);
  }
}

