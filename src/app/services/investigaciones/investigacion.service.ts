import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../../@models/app-settings';
import {Helper} from '../../@classes';
import {Store} from '@ngrx/store';
import {InvestigacionState} from '../../store/state';
import {map} from 'rxjs/operators';
import {Investigacion} from '../../@models/Investigacion';


@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  constructor(
    private http: HttpClient,
    private store: Store<InvestigacionState>
  ) {}

  almacenarInvestigaciones(centroCosto: number, payload: Investigacion[]) {
    const url = Helper.route(['centro-costo', 'investigaciones'], centroCosto);
    return this.http.post(url, payload, config.httpOpts);
  }

  cargarInvestigaciones() {
    const url = config.api + '/investigaciones';
    return this.http.get(url, config.httpOpts).pipe(
      map((value: any) => value.data as any[])
    );
  }

}
