import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from '../../@models/app-settings';
import {ServicioEsp} from '../../@models/servicio-esp';
import {Helper} from '../../@classes/helper-class';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EspService {

  constructor(private http: HttpClient) {}

  almacenarEsp(centroCosto: number, payload: ServicioEsp[]) {
    const url = Helper.route(['centro-costo', 'servicio-esp'], centroCosto);
    return this.http.post(url, payload, config.httpOpts);
  }

  cargarEsps() {
    const url = Helper.route('servicio-esp');
    return this.http.get(url, config.httpOpts).pipe(
      map((value: any) => value.servicios as any[])
    );
  }
}

