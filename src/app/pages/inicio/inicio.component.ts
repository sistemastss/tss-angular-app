import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../utilities';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-inicio',
  template: `<router-outlet></router-outlet>`,
  styleUrls: []
})
export class InicioComponent implements OnInit {

  menu: object[];

  constructor(private permissions: NgxPermissionsService, private router: Router, private menuService: MenuService) {
    console.log(this.permissions.getPermissions());
  }

  ngOnInit() {
  }

  onCardClick(event) {
  }

}
