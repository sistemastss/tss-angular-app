import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuService} from '../../../services/menu.service';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuToggle: boolean;
  menuItemToggle: boolean;
  menuItems: object[];

  constructor(
    private router: Router,
    private _menu: MenuService,
    private loginService: LoginService
  ) {
    this.menuToggle = false;
    this.menuItemToggle = false;

    switch (loginService.rol['codigo']) {
      case 'ADG':
        this.menuItems = this._menu.menu;
        break;

      case 'CLI':
        this.menuItems = this._menu.menu;
        break;
    }
  }

  ngOnInit() {
  }

  onMenuTogle() {
    this.menuToggle = !this.menuToggle;
  }

  loadUrl(item: any) {
    this.menuToggle = false;
    this.router.navigate([item.route]).then();
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.loginService.logout();
  }
}
