import { Injectable } from '@angular/core';
import { HelperService } from '../../../services/helper.service';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
    private store: Store<any>,
  ) { }

  getSeguimiento() {
    const url = this.helper.route(
      ['visita-domiciliaria', 'seguimiento'],
      1,
    );

    return this.http.get(url);
  }

  saveSeguimient(payload) {
    const url = this.helper.route(
      ['visita-domiciliaria', 'seguimiento'],
      1,
    );
    return this.http.post(url, payload);
  }
}
