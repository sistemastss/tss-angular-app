import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../../../services/helper.service';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { InformeService } from '../informe.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPersonalService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
    private informe: InformeService,
    private store: Store<any>,
  ) { }

  get() {
    const informeId = 1; // replace with sotore value
    const url = this.helper.route(['informe', 'informacion-personal'], informeId);
    return this.http.get(url).pipe(
      map((response: any) => response.data)
    );
  }

  save(payload) {
    const url = this.helper.route('informacion-personal');
    return this.http.post(payload, url);
  }

  update(payload) {
    const url = this.helper.route('informacion-personal');
    return this.http.put(payload, url);
  }

  delete(id) {
    const url = this.helper.route('informacion-personal');
    return this.http.delete(id);
  }
}
