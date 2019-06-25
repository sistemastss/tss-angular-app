import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  saveUser(user) {
    window.localStorage['currentUser'] = JSON.stringify(user);
  }

  destroyUser() {
    window.localStorage.removeItem('currentUser');
  }
  
  getUser() {
    const user = window.localStorage['currentUser'];
    
    if (!user) {
      return false;
    }

    return JSON.parse(user);
  }
}
