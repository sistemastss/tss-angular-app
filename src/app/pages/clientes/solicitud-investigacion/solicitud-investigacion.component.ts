import { AlmacenarCentroCosto, Servicios } from './../../../store/actions/centro-costo-action';
import { AlmacenarInvestigaciones } from './../../../store/actions/investigacion.action';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {InvestigacionState} from '../../../store/state';
import {InvestigacionService} from '../../../services/investigaciones/investigacion.service';
import {Investigacion} from '../../../@models/Investigacion';
import {
  EditarInvestigacion,
  CrearInvestigacion,
  EliminarInvestigacion,
} from '../../../store/actions/investigacion.action';

@Component({
  selector: 'app-request-investigacion',
  templateUrl: './solicitud-investigacion.component.html',
  styleUrls: ['./solicitud-investigacion.component.css']
})
export class SolicitudInvestigacionComponent implements OnInit {

  form = new FormGroup({
    ciudad        : new FormControl('', Validators.required),
    anexo         : new FormControl(''),
    descripcion   : new FormControl('', Validators.required)
  });

  investigaciones: Investigacion[];

  controlInvestigaciones = {
    editar: false,
    id: 0
  };

  constructor(private store: Store<InvestigacionState>,
              private investigacionService: InvestigacionService) {}

  ngOnInit() {
    this.store.select(state => state.investigacion)
      .subscribe((value: Investigacion[]) => this.investigaciones = value);
  }

  establecerFormulario(id: number) {
    window.scrollTo(0, 0);
    this.controlInvestigaciones.editar = true;
    this.controlInvestigaciones.id = id;
    const investigacion = this.investigaciones
      .filter(((value, index) => index === id))[0];
    this.form.setValue(investigacion);
  }

  crearInvestigacion() {
    const data = this.form.value;
    this.form.reset();
    this.store.dispatch(new CrearInvestigacion(data));
  }

  editarInvestigacion() {
    const id = this.controlInvestigaciones.id;
    const data = this.form.value;
    this.store.dispatch(new EditarInvestigacion(data, id));
    this.form.reset();
    this.controlInvestigaciones.editar = false;
    this.controlInvestigaciones.id = 0;
  }

  eliminarInvestigacion(id: number) {
    const confirm = window.confirm('Esta seguro de eliminar este servicio?');
    if (!confirm) {
      return;
    }
    this.store.dispatch(new EliminarInvestigacion(id));
  }


  guardarInvestigaciones() {
    this.store.dispatch(new AlmacenarCentroCosto(Servicios.INVESTIGACIONES));
  }
}
