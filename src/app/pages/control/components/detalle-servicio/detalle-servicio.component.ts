import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalle-servicio-modal',
  templateUrl: './detalle-servicio.component.html',
  styles: []
})
export class DetalleServicioComponent implements OnInit {

  @Input() servicio;

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

}
