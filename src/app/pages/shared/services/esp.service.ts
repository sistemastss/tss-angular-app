import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../services/helper.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EspService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  fetch() {
    const url = this.helper.route('esp');
    return this.http.get(url).pipe(
      map((value: any) => value.data)
    );
  }

  getActividades(id) {
    const url = this.helper.route(['esp', 'actividades-aplicadas'], id);
    return this.http.get(url).pipe(map((response: any) => response.data));
  }

  save(payload) {
    const url = this.helper.route('esp');
    return this.http.post(url, payload);
  }
}
