import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  get() {
    const url = this.helper.route('roles');
    return this.http.get(url);
  }
}
