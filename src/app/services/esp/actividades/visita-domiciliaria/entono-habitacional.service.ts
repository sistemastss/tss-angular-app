import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Helper} from '../../../../@classes/helper-class';
import {config} from '../../../../@models/app-settings';

@Injectable({
  providedIn: 'root'
})
export class EntonoHabitacionalService {

  constructor(protected _http: HttpClient) { }

  public get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'informe2'], servicioEsp);
    return this._http.get(url, config.httpOpts);

  }

  public post(servicioEsp: number, data: object) {
    const url = Helper.route(['servicio-esp', 'informe2'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);

  }

  public put(servicioEsp: number, entornoHbt: number, data: object) {
    const url = Helper.route(['servicio-esp', 'informe2'], [servicioEsp, entornoHbt]);
    return this._http.put(url, data, config.httpOpts);
  }
}
