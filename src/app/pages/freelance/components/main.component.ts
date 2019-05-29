import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {

  sections = [
    { path: 'programacion', title: 'Programación' },
    { path: 'viaticos', title: 'Viaticos' },
    { path: 'seguimiento', title: 'Seguimiento' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
