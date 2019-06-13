import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
    private store: Store<any>,
  ) { }

  getId() {}
  setId() {}
  get() {
    const vsId = 1; // replace with vsid
    const url = this.helper.route('informe', vsId);
    this.http.get(url);
  }
}
