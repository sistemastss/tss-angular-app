import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServicioState } from '../../store/states';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { getServicios } from '../../store/selectors';
import { FetchServicios } from '../../store/actions/servicios.actions';
import { DetalleServicioComponent } from '../detalle-servicio/detalle-servicio.component';
import { DetalleActividadesComponent } from '../detalle-actividades/detalle-actividades.component';
import { ActividadService } from '../../../../shared/services/actividad.service';
import { ActividadAplicadaService } from '../../../../shared/services/actividad-aplicada.service';

@Component({
  selector: 'app-analista-esp',
  templateUrl: './analista-esp.component.html',
  styles: []
})
export class AnalistaEspComponent implements OnInit {

  servicios = [];
  actividades = [];

  constructor(
    private store: Store<ServicioState>,
    private modalService: NgbModal,
    private helper: HelperService,
    private actividadAplicadaService: ActividadAplicadaService,
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

  verActividades(content, espId) {
    this.actividadAplicadaService.getFromEsp(espId).subscribe(
      response => {
        this.actividades = response;
        this.modalService.open(content);
      }
    );
  }

  selectAction() {

  }
}
