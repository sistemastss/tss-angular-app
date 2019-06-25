import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.loginService.deauth();
    this.router.navigate(['/login'])
  }

}
