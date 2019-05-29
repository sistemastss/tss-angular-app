import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class EstudioSeguridadService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  get(vsdId) {
    const route = this.helper.route('informe/vsd',  vsdId);
    return this.http.get(route);

  }

  save(payload, vsdId) {
    const route = this.helper.route('informe/vsd',  vsdId);
    return this.http.post(route, payload);
  }
}
