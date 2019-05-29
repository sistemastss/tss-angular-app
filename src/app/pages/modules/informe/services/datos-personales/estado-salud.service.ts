import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../../../services/helper.service';
import { InformeService } from '../informe.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoSaludService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
    private informe: InformeService,
  ) { }

  get() {
    const informeId = this.informe.getId();
    const route = this.helper.route('estado-salud/informe', informeId);
    return this.http.get(route);
  }

  save(payload) {
    const informeId = this.informe.getId();
    const route = this.helper.route('estado-salud/informe', informeId);
    return this.http.post(route, payload);
  }

  update() {

  }

  delete() {

  }
}
