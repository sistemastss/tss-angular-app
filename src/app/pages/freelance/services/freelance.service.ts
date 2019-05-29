import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../services/helper.service';
import { IProgramacion } from '../interfaces/programacion.interface';
import { IViatico } from '../interfaces/viatico.interface';

@Injectable({
  providedIn: 'root'
})
export class FreelanceService {

  constructor(
    private helper: HelperService,
    private http: HttpClient
  ) { }

  getProgramacion() {
    const route = this.helper.route(['esp', 'programacion'], 1);
    return this.http.get(route);
  }

  saveProgramacion(payload: IProgramacion) {
    const route = this.helper.route(['esp', 'programacion'], 1);
    return this.http.put(route, payload);
  }

  updateProgramacion(payload: IProgramacion) {
    const route = this.helper.route('programacion', payload.id);
    return this.http.put(route, payload);
  }

  getviaticos() {
    const route = this.helper.route(['esp', 'viaticos'], 1);
    return this.http.get(route);
  }

  saveViatico(payload: IViatico) {
    const route = this.helper.route(['esp', 'viaticos'], 1);
    return this.http.put(route, payload);
  }

  updateViatico(payload: IViatico) {
    const route = this.helper.route('viaticos', payload.id);
    return this.http.put(route, payload);
  }

  deleteViatico(payload: IViatico) {
    const route = this.helper.route('viaticos', payload.id);
    return this.http.delete(route);
  }
}
