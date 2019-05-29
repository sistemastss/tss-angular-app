import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HelperService } from '../../../services/helper.service';


@Injectable({
  providedIn: 'root'
})
export class InvestigacionService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) {}

  fetch() {
    const url = this.helper.route('investigacion');
    return this.http.get(url).pipe(
      map((value: any) => value.data)
    );
  }

  save(payload) {
    const url = this.helper.route('investigacion');
    return this.http.post(url, payload);
  }

}
