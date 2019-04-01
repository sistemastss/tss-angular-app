import { Injectable } from '@angular/core';
import {Helper} from '../../../../@classes/helper-class';
import {config} from '../../../../@models/app-settings';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoSalubridadService {

  constructor(protected _http: HttpClient) { }

  public get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'estado-salubridad'], servicioEsp);
    return this._http.get(url, config.httpOpts);

  }

  public post(servicioEsp: number, data: object) {
    const url = Helper.route(['servicio-esp', 'estado-salubridad'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);

  }

  public put(servicioEsp: number, estadoSalubridad: number, data: object) {
    const url = Helper.route(['servicio-esp', 'estado-salubridad'], [servicioEsp, estadoSalubridad]);
    return this._http.put(url, data, config.httpOpts);
  }


}
