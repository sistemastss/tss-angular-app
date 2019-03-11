import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './services/login.service';
import {BASE_API} from './@models/app-settings';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit {

  currentRoute: string;

  showNav = false;

  // login: boolean;

  constructor(
    private permissionsService: NgxPermissionsService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private http: HttpClient
  ) { this.getUrl(); }

  ngOnInit(): void {
    const permissions = [this.loginService.rol['codigo']];
    this.permissionsService.loadPermissions(permissions);
  }

  getUrl() {

  }
}
