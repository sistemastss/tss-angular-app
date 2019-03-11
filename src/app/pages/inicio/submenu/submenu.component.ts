import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../utilities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styles: []
})
export class SubmenuComponent implements OnInit {

  subMenu: Menu;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.subMenu = JSON.parse(localStorage.getItem('subMenu'));
    console.log(this.subMenu);
  }

  goToSection(ev) {
    const route = ev['card']['route'];
    this.router.navigate([route]);
  }


}
