import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Helper} from '../../../../@classes/helper-class';
import {config} from '../../../../@models/app-settings';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(protected _http: HttpClient) { }

  get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'verificacion-documental'], [servicioEsp]);
    return this._http.get(url, config.httpOpts);
  }

  post(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'verificacion-documental'], [servicioEsp]);
    return this._http.post(url, data, config.httpOpts);
  }

  put(servicioEsp: number, seguridad, data: any) {
    const url = Helper.route(['servicio-esp', 'verificacion-documental'], [servicioEsp, seguridad]);
    return this._http.put(url, data, config.httpOpts);
  }
}
