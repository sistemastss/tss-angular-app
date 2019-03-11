import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../../../services/menu.service';
import {Menu} from '../../../utilities';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  menu: any;

  constructor(public router: Router,
              private menuService: MenuService,
              private ngxPermissionsService: NgxPermissionsService) {
  }

  ngOnInit() {
    const permissions = this.ngxPermissionsService.getPermissions();

    /**
     * validacion de roles
     */
    if (permissions.ADG) {
      this.menu = this.menuService.menu.administrador;

    } else if (permissions.CLI) {
      this.menu = this.menuService.menu.cliente;

    } else if (permissions.AESP) {
      this.menu = this.menuService.menu.analistaEsp;

    } else if (permissions.FRCE) {
      this.menu = this.menuService.menu.freeLance;

    } else if (permissions.DOPE) {
      this.menu = this.menuService.menu.directorOperaciones;

    }
  }

  onCardClick(event) {
    this.router.navigate([event.card.path]);
  }
}
