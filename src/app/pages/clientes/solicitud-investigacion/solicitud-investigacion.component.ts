import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlmacenarCentroCosto, Servicios } from '../../../store/actions/centro-costo-actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InvestigacionState } from '../../../store/state';
import { Investigacion } from '../../../@models/Investigacion';
import { ModalService } from '../../../services/modal/modal.service';
import {
  EditarInvestigacion,
  CrearInvestigacion,
  EliminarInvestigacion,
} from '../../../store/actions/investigacion.actions';

@Component({
  selector: 'app-request-investigacion',
  templateUrl: './solicitud-investigacion.component.html',
  styleUrls: ['./solicitud-investigacion.component.css']
})
export class SolicitudInvestigacionComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  form = new FormGroup({
    ciudad        : new FormControl('', Validators.required),
    descripcion   : new FormControl('', Validators.required),
    anexo         : new FormControl('')
  });

  control = {
    editar: false,
    id: 0
  };

  servicios: Investigacion[] = [];
  detalle: Investigacion;
  today = new Date().getTime();

  constructor(
    private store: Store<InvestigacionState>,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.store.select(state => state.investigacion)
      .subscribe((value: Investigacion[]) => this.servicios = value);
  }

  obtenerServicio(index: number): Investigacion {
    return Object.assign({}, this.servicios[index]);
  }

  cargarArchivo(event, editar = false) {
    const file = event.target.files[0];
    editar
      ? this.detalle.anexo = file.name
      : this.form.get('anexo').patchValue(file.name);
  }

  crearServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearInvestigacion(data));
    this.form.reset();
    this.inputFile.nativeElement.value = '';
  }

  verDetalle(index: number, editar: boolean = false) {
    this.control.id = index;
    this.control.editar = editar;
    this.detalle = this.obtenerServicio(index);
    this.modalService.open();
  }

  guardarCambios() {
    const id = this.control.id;
    this.store.dispatch(new EditarInvestigacion(this.detalle, id));
    this.cerrarVentana();
  }

  eliminarServicio(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarInvestigacion(id));
  }

  cerrarVentana() {
    this.control.editar = false;
    this.control.id = 0;
    this.modalService.close();
    this.detalle = null;
  }


  guardarServicios() {
    const confirm = window.confirm('Esta seguro de solicitar los servicios?');
    if (!confirm) {
      return;
    }
    const servicio = Servicios.INVESTIGACION;
    this.store.dispatch(new AlmacenarCentroCosto(servicio));
  }
}
