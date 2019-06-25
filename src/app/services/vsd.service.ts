import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class VsdService {

  constructor(private http: HttpClient,
              private helper: HelperService,) { }

  loadVsd(espId) {
    const url = this.helper.route(['esp', 'vsd'], espId);
    return this.http.get(url);
  }

  setVsd(vsdId) {
    localStorage.setItem('vsd', vsdId);
  }

  getVsd() {
    return localStorage.getItem('vsd');
  }

  removeVsd() {
    localStorage.removeItem('vsd');
  }
}
