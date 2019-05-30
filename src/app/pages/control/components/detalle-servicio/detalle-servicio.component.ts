import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';

@Component({
  selector: 'app-detalle-servicio-modal',
  templateUrl: './detalle-servicio.component.html',
  styles: []
})
export class DetalleServicioComponent implements OnInit {

  @Input() servicio;

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }

  constructor(
    private activeModal: NgbActiveModal,
    private helper: HelperService,
  ) { }

  ngOnInit() {
  }

}
