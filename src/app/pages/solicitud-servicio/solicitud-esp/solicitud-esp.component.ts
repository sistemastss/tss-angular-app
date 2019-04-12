import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioEsp } from '../../../@models/servicio-esp';
import { Store } from '@ngrx/store';
import { ServicioEspState } from '../../../store/state';
import { CrearServicioEsp, EditarServicioEsp, EliminarServicioEsp } from '../../../store/actions';
import { AlmacenarCentroCosto, Servicios } from '../../../store/actions';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
  selector: 'app-servicio-esp',
  templateUrl: './solicitud-esp.component.html',
  styles: []
})
export class SolicitudEspComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  form = new FormGroup({
    evaluado            : new FormControl('', Validators.required),
    tipoDocumento       : new FormControl('', Validators.required),
    documento           : new FormControl('', [Validators.required, Validators.minLength(6)]),
    ciudad              : new FormControl('', Validators.required),
    telefono            : new FormControl('', [Validators.required, Validators.minLength(7)]),
    email               : new FormControl('', [Validators.required, Validators.email]),
    direccion           : new FormControl('', Validators.required),
    observaciones       : new FormControl('', Validators.required),
    tipoEsp             : new FormControl('', Validators.required),
    anexo               : new FormControl(''),
    aceptarTerminos     : new FormControl(false, Validators.required)
  });

  control = {
    editar: false,
    id: 0
  };

  terminos = false;
  detalle: ServicioEsp;
  servicios: ServicioEsp[] = [];
  today = new Date().getTime();

  constructor(
    private store: Store<ServicioEspState>,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.form.setValue(
      {
        evaluado: 'asds',
        tipoDocumento: 'cc',
        documento: 12345678,
        ciudad: 'Bogota',
        telefono: 3600255,
        email: 'styven21121@gmail.com',
        direccion: 'cll 16 # 20 -16',
        observaciones: 'datos',
        tipoEsp: 'basico',
        anexo: '',
        aceptarTerminos: false
      });

    this.store.select(state => state.servicioEsp)
      .subscribe((value: ServicioEsp[]) => this.servicios = value);
  }

  obtenerServicio(index: number): ServicioEsp {
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
    this.store.dispatch(new CrearServicioEsp(data));
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
    this.store.dispatch(new EditarServicioEsp(this.detalle, id));
    this.cerrarVentana();
  }

  eliminarServicioEsp(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarServicioEsp(id));
  }

  cerrarVentana() {
    this.control.editar = false;
    this.control.id = 0;
    this.modalService.close();
    this.detalle = null;
  }

  guardarServiciosEsp() {
    const confirm = window.confirm('Esta seguro de solicitar los servicios?');
    if (!confirm) {
      return;
    }
    const servicio = Servicios.ESP;
    this.store.dispatch(new AlmacenarCentroCosto(servicio));
  }

  abrirVentanaTerminos() {
    this.terminos = true;
    this.modalService.open();
  }

  cerrarVentanaTerminos() {
    this.terminos = false;
  }
}

