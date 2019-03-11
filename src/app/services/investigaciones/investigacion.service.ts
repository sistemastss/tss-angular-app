import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../../@models/app-settings';
import {Helper} from '../../@classes/helper-class';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {InvestigacionState} from '../../store/state';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  constructor(private _http: HttpClient,
              private _store: Store<InvestigacionState>) {}

  obtenerInvestigaciones() {
    const url = config.api + '/investigaciones';
    return this._http.get(url, config.httpOpts);
  }

  almacenarInvestigaciones(centroCostoId, payload) {
    const url = Helper.route(['centro-costo', 'investigaciones'], centroCostoId);
    return this._http.post(url, payload, config.httpOpts);
  }

  actualizarInvestigacion(investigacionId: number, data: any) {
    const url = config.api + 'investigaciones';
    return this._http.put(url, data, config.httpOpts);
  }

  eliminarInvestigacion(investigacionId: number) {
    const url = config.api + 'investigaciones';
    return this._http.delete(url, config.httpOpts);
  }

  obtenerEstadoInvestigaciones() {
    return this._store.select('investigacion');
  }

  aplicarActividades(actividades, id) {
    const data = {
      actividades: actividades
    };
    const url = `investigaciones/${id}/actividades`;

    return this._http.post(url, data, config.httpOpts);
  }
}
