import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServicioState } from '../../store/states';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { getServicios } from '../../store/selectors';
import { FetchServicios } from '../../store/actions/servicios.actions';
import { DetalleServicioComponent } from '../detalle-servicio/detalle-servicio.component';
import { DetalleActividadesComponent } from '../detalle-actividades/detalle-actividades.component';

@Component({
  selector: 'app-analista-esp',
  templateUrl: './analista-esp.component.html',
  styles: []
})
export class AnalistaEspComponent implements OnInit {

  servicios = [];

  constructor(
    private store: Store<ServicioState>,
    private modalService: NgbModal,
    private helper: HelperService,
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
    const modalRef = this.modalService.open(DetalleServicioComponent, { size: 'lg' });
    modalRef.componentInstance.servicio = item;
  }

  verActividades(item: any) {
    this.modalService.open(DetalleActividadesComponent);
  }

  selectAction() {

  }
}
