import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BASE_API} from '../@models/app-settings';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
  }

  login(username: string, password: string) {
     return this.http.post<Array<object>>(BASE_API + 'login', {username, password})
      .pipe(map(value => {
      if (value) {
        console.log(value);
        localStorage.setItem('currentUser', JSON.stringify(value));
      }
      return value;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
  }

  get rol() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser['rol'];
  }

  get token() {
    const apiToken = JSON.parse(localStorage.getItem('currentUser'));
    return apiToken['api_token'];
  }

  get user() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
