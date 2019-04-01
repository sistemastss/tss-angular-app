import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Type} from '../../utilities';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: []
})
export class DataTableComponent implements OnInit {

  Type = Type;

  @Output() onClick = new EventEmitter();

  /*columns = [
    { title: 'fecha', type: Type.date },
    { title: 'ciudad', type: Type.text },
    { title: 'nombre', type: Type.text },
    { title: 'departamento', type: Type.buttons },
    { title: 'actividades', type: Type.text },
    { title: 'estado', type: Type.text},
    { title: 'adjunto', type: Type.text }
  ];*/

  /*servicios = [
    {
      'fecha'         : new Date().getTime(),
      'ciudad'        : 'demo',
      'nombre'        : 'name',
      'departamento'  : 'asdas',
      'actividades'   : 'asdas',
      'adjunto'       : 'asdas'
    },
    {
      'fecha'         : new Date().getTime(),
      'ciudad'        : 'demo',
      'nombre'        : 'name',
      'departamento'  : 'asdas',
      'actividades'   : 'asdas',
      'adjunto'       : 'asdas'
    }
  ];*/

  @Input() columns: object[];
  @Input() data: object[];

  constructor() {
  }

  ngOnInit() {
  }
}

