import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../../services/helper.service';
import { catchError, map } from 'rxjs/operators';
import { Programacion } from '../../interfaces/programacion.interface';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  get(vsdId) {
    const url = this.helper.route(['vsd', 'programacion'], 2);
    return this.http.get(url).pipe(
      map((data: any) => data.data),
      catchError(() => EMPTY),
    );
  }

  guardar(vsdId, payload) {
    const url = this.helper.route(['vsd', 'programacion'], vsdId);
    return this.http.post(url, payload);
  }

  actualizar(programacionId, payload) {
    const url = this.helper.route('programacion', programacionId);
    return this.http.put(url, payload);
  }
}
