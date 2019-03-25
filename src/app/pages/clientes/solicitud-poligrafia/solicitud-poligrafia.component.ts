import { AlmacenarCentroCosto, Servicios } from '../../../store/actions/centro-costo-actions';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PoligrafiaState } from '../../../store/state';
import { CrearPoligrafia, EditarPoligrafia, EliminarPoligrafia} from '../../../store/actions/poligrafia.actions';
import { ModalService } from '../../../services/modal/modal.service';
import { Poligrafia } from '../../../@models/poligrafia';

@Component({
  selector: 'app-solicitud-poligrafia',
  templateUrl: './solicitud-poligrafia.component.html',
  styleUrls: ['./solicitud-poligrafia.component.css']
})
export class SolicitudPoligrafiaComponent implements OnInit {

  form = new FormGroup({
    evaluado                : new FormControl('', Validators.required),
    documento               : new FormControl('', [Validators.required, Validators.minLength(6)]),
    departamento            : new FormControl('', Validators.required),
    ciudad                  : new FormControl('', Validators.required),
    telefono                : new FormControl('', [Validators.required, Validators.minLength(7)]),
    email                   : new FormControl('', [Validators.required, Validators.email]),
    contexto                : new FormControl('', Validators.required),
    tipoPoligrafia          : new FormControl('', Validators.required),
    anexo                   : new FormControl('')
  });

  control = {
    editar: false,
    id: 0
  };

  detalle: Poligrafia;
  servicios: Poligrafia[] = [];
  today = new Date().getTime();

  constructor(
    private store: Store<PoligrafiaState>,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.form.setValue(
      {
        evaluado: 'cristian',
        documento: 1026595856,
        departamento: 'Cundinamarca',
        ciudad: 'Bogota',
        telefono: 3600255,
        email: 'styven22121@gmail.com',
        contexto: 'contexto',
        tipoPoligrafia: 'pre-empleo',
        anexo: ''
      }
    );
    this.store.select(state => state.poligrafia)
      .subscribe(value => this.servicios = value);
  }

  obtenerServicio(index: number): Poligrafia {
    return Object.assign({}, this.servicios[index]);
  }

  cargarArchivo(event, editar = false) {
    const file = event.target.files[0];
    // console.log(this.form.get('anexo').value);
    editar
      ? this.detalle.anexo = file
      : this.form.get('anexo').patchValue(file);
  }

  crearServicio() {
    const data = this.form.value;
    this.store.dispatch(new CrearPoligrafia(data));
    // this.form.reset();
  }

  verDetalle(index: number, editar: boolean = false) {
    this.control.id = index;
    this.control.editar = editar;
    this.detalle = this.obtenerServicio(index);
    this.modalService.open();
  }

  guardarCambios() {
    const id = this.control.id;
    this.store.dispatch(new EditarPoligrafia(this.detalle, id));
    this.cerrarVentana();
  }

  eliminarServicio(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarPoligrafia(id));
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
    const servicio = Servicios.POLIGRAFIA;
    // this.store.dispatch(new AlmacenarCentroCosto(servicio));
  }
}
