import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  sections = [
    { path: 'programacion', title: 'Programación' },
    { path: 'seguimiento', title: 'Seguimiento' },
    { path: 'viaticos', title: 'Viatico' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
