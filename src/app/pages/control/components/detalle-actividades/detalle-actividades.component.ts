import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-actividades',
  templateUrl: './detalle-actividades.component.html',
  styles: []
})
export class DetalleActividadesComponent implements OnInit {

  @Input() actividades: any;

  constructor(
    private activedModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

}
