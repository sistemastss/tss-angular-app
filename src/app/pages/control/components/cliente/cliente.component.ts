import { Component, ElementRef, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { Store } from '@ngrx/store';
import { ServicioState } from '../../store/states';
import { getServicios } from '../../store/selectors';
import { FetchServicios } from '../../store/actions/servicios.actions';
import { ModalServicioComponent } from '../modal-servicio/modal-servicio.component';
import { EspService } from 'src/app/pages/shared/services';
import { DetalleActividadesComponent } from '../detalle-actividades/detalle-actividades.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  servicios = [];

  constructor(
    private store: Store<ServicioState>,
    private modalService: NgbModal,
    private helper: HelperService,
    private espService: EspService,
  ) { }

  ngOnInit() {
    this.store.select(getServicios).subscribe(
      state => this.servicios = state
    );
    this.store.dispatch(new FetchServicios());
  }

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }

  verDetalle(item: any) {
    const modalRef = this.modalService.open(ModalServicioComponent, { size: 'lg' });
    modalRef.componentInstance.servicio = item;
  }

  verActividades(item: any) {
    this.espService.getActividades(item.id).subscribe(
      response => {
        const modalRef = this.modalService.open(DetalleActividadesComponent);
        modalRef.componentInstance.actividades = response;
      },
      () => alert('Este servicio no tiene actividades')
    );
  }
}
