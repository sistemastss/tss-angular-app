import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../@models/app-settings';
import {Helper} from '../../../@classes/helper-class';

@Injectable({
  providedIn: 'root'
})
export class HistorialJudicialService {

  constructor(protected _http: HttpClient) {}

  public getHistorialJudicial(servEsp: number) {
    const url = Helper.route(['servicio-esp', 'historial-judicial'], servEsp);
    return this._http.get(url, config.httpOpts);

  }

  public postHistorialJudicial(servEsp: number, data: object) {
    const url = Helper.route(['servicio-esp', 'historial-judicial'], servEsp);
    return this._http.post(url, data, config.httpOpts);

  }

  public putHistorialJudicial(servEsp: number, histJudicial: number, data: object) {
    const url = Helper.route(['servicio-esp', 'historial-judicial'], [servEsp, histJudicial]);
    return this._http.put(url, data, config.httpOpts);
  }

}
