import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MenuService} from '../../../services/menu.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {

  menu: object[];
  url: string;

  constructor(private router: Router,
              private menuService: MenuService) {
    this.menu = menuService.menu.administrador
      .filter(value => value['title'] === 'Clientes')
      .map(value => value['children'])
      // @ts-ignore
      .flat();
  }

  ngOnInit() {
  }

  onCardClick(event) {
    this.router.navigate([event.card.path]);
  }

}
