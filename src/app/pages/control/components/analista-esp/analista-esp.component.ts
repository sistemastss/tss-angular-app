import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServicioState } from '../../store/states';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { getServicios } from '../../store/selectors';
import { FetchServicios, RemoveServicios } from '../../store/actions/servicios.actions';
import { ModalServicioComponent } from '../modal-servicio/modal-servicio.component';
import { ActividadAplicadaService } from '../../../../shared/services/actividad-aplicada.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-analista-esp',
  templateUrl: './analista-esp.component.html',
  styles: []
})
export class AnalistaEspComponent implements OnInit, OnDestroy {

  servicios = [];
  actividades = [];
  freelances = [];
  selectedItem;

  modalRef: NgbModalRef;

  freelanceModel = {
    freelance_id: 0,
  };

  constructor(
    private store: Store<ServicioState>,
    private modalService: NgbModal,
    private helper: HelperService,
    private actividadAplicadaService: ActividadAplicadaService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.store.select(getServicios).subscribe(state => this.servicios = state);
    this.store.dispatch(new FetchServicios());
    this.dataService.getFreelances().subscribe(response => this.freelances = response)
  }

  ngOnDestroy() {
    console.log('Destroy aesp');
    this.store.dispatch(new RemoveServicios());
  }

  open(content, item) {
    this.modalRef = this.modalService.open(content);
    this.selectedItem = item;
  }

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }

  verDetalle(item: any) {
    const modalRef = this.modalService.open(ModalServicioComponent, { size: 'lg' });
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

  asignarFreelance() {
    ///
    const data = {
      usuario_id: this.freelanceModel.freelance_id,
      estado: 'asignado',
    };

    this.dataService.asignarVisitaDom(this.selectedItem.id, data).subscribe(
      () => {
        this.modalRef.close();
        this.actividades[this.actividades.indexOf(this.selectedItem)].estado = data.estado;
      },
      () => {
        alert('Ocurrio un error, intente mas tarde');
      }
    );
  }

  selectAction() {

  }
}
