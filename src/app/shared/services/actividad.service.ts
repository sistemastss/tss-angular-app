import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../services/helper.service';
import { filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  espBasico = ['HJ', 'VDS', 'VA', 'VL'];
  espIntegral = [...this.espBasico, 'PL'];
  espAvanzado = [...this.espIntegral, 'EF'];

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  get(type: 'ESP' | 'INV' | 'POL') {
    const url = this.helper.route('actividades');
    return this.http.get(url).pipe(
      map((response: any) => response.data),
      map(value => value.filter(item => item.servicio.codigo === type)),
    );
  }
}
