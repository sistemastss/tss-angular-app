import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Helper} from '../../../@classes/helper-class';
import {config} from '../../../@models/app-settings';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  constructor(protected _http: HttpClient) { }

  getDecadactilar(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'decadactilar'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postDecadactilar(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'decadactilar'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putDecadactilar(servicioEsp: number, decadactilar: number, data: any) {
    const url = Helper.route(['servicio-esp', 'decadactilar'], [servicioEsp, decadactilar]);
    return this._http.put(url, data, config.httpOpts);
  }





  getDictamenGrafologico(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'dictamen-grafologico'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postDictamenGrafologico(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'dictamen-grafologico'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putDictamenGrafologico(servicioEsp: number, dicamenGrafologico: number, data: any) {
    const url = Helper.route(['servicio-esp', 'dictamen-grafologico'], [servicioEsp, dicamenGrafologico]);
    return this._http.put(url, data, config.httpOpts);
  }

}
