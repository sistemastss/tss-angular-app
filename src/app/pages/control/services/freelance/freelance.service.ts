import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class FreelanceService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  setEsp(esp) {
    localStorage.setItem('esp', JSON.stringify(esp));
  }

  getEsp() {
    return JSON.parse(localStorage.getItem('esp'));
  }


  aceptarVisitaDom(espId, data) {
    const url = this.helper.route(['esp', 'vsd'], espId);
    return this.http.post(url, data);
  }

  rechazarVisitaDom(espId, data) {
    const url = this.helper.route(['esp', 'vsd'], espId);
    return this.http.post(url, data);
  }
}
