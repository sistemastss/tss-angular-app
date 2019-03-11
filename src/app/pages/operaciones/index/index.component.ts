import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Router} from '@angular/router';

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
      .filter(value => value['title'] === 'Operaciones')
      .map(value => value['children'])
      // @ts-ignore
      .flat();
  }

  ngOnInit() {
    console.log(this.menu);
  }

  onCardClick(event) {
    console.log(event);
    this.router.navigate([event.card['path']]);

  }
}
