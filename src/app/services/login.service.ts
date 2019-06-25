import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { config } from '../@models/app-settings';
import { HelperService } from './helper.service';
import { AuthService } from './auth/auth.service';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private helper: HelperService,
  ) { }

  login(credentials: {email: string, contrasena: string}) {
    const url = this.helper.route('login');

    return this.http.post(url, credentials, config.httpOpts).pipe(
      tap(user => {
        this.auth.saveUser(user);
      })
    );
  }

  deauth() {
    this.auth.destroyUser();
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

  get userId() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user.id;
  }
}
