import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Servicio} from '../../../@models/servicio';
import {Store} from '@ngrx/store';
import {EspService} from '../../shared/services/esp.service';
import {ModalService} from '../../../services/modal/modal.service';

@Component({
  selector: 'app-freelance',
  templateUrl: './freelance.component.html',
  styles: []
})
export class FreelanceComponent implements OnInit {

  @Output() mostrarVentana = new EventEmitter();
  data: Servicio[];
  control = {
    id: 0,
    payload: null
  };

  constructor(
    private store: Store<any>,
    private espService: EspService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.store.select(state => state.servicio)
      .subscribe(data => this.data = data);
  }

  abrirVentana(item: Servicio) {
    this.mostrarVentana.emit(item);
  }

  aceptarServicio(payload: Servicio, index: number) {
    const confirm = window.confirm('Esta seguro de aceptar este servicio?');
    if (!confirm) {
      return;
    }
    payload.estado = 'aceptado';
    // this.store.dispatch(new EditarServicio(payload, index));
    // this.espService.actualizarServicioEsp(payload);
  }

  rechazarServicio(payload: Servicio, index: number) {
    const confirm = window.confirm('Esta seguro de rechazar este servicio?');
    if (!confirm) {
      return;
    }
    payload.estado = 'proceso';
    // this.store.dispatch(new EditarServicio(payload, index));

  }

  ventanaFechas(payload, index: number) {
    this.control.payload = payload;
    this.control.id = index;
    this.modalService.open();
  }

  asignarFecha() {
    const {id, payload} = this.control;
    payload.estado = 'desarrollo';
    // this.store.dispatch(new EditarServicio(payload, id));
    this.modalService.close();
  }
}
