import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../services/helper.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadAplicadaService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  getFromEsp(espId) {
    const url = this.helper.route(['esp', 'actividades-aplicadas'], espId);
    return this.http.get(url).pipe(
      map((value: any) => value.data)
    );
  }
}
