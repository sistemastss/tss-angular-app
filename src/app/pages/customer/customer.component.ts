import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
