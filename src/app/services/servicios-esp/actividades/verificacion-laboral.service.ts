import { Injectable } from '@angular/core';
import {Helper} from '../../../@classes/helper-class';
import {config} from '../../../@models/app-settings';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerificacionLaboralService {

  constructor(protected _http: HttpClient) { }

  get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'verificacion-laboral'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  post(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'verificacion-laboral'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  put(servicioEsp: number, verificacionLab: number, data: any) {
    const url = Helper.route(['servicio-esp', 'verificacion-laboral'], [servicioEsp, verificacionLab]);
    return this._http.put(url, data, config.httpOpts);
  }

  delete(servicioEsp: number, verificacionLab: number) {
    const url = Helper.route(['servicio-esp', 'verificacion-laboral'], [servicioEsp, verificacionLab]);
    return this._http.delete(url, config.httpOpts);
  }
}
