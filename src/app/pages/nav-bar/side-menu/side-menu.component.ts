import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from '../../../services/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  /*menu = [
    {
      title: 'Control',
      path: '/control'
    },
    {
      title: 'Nuevo servicio',
      path: '/nuevo-servicio'

    }
  ];*/

  menu = this.menuService.men;

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.router.config);
    // console.log(this.router.routerState);
  }


}
