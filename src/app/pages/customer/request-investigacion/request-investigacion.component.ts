import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {InvestigacionState} from '../../../store/state';
import {InvestigacionService} from '../../../services/investigaciones/investigacion.service';
import {Observable} from 'rxjs';
import {Investigacion} from '../../../@models/Investigacion';
import {
  ActualizarInvestigacion,
  CrearInvestigacion,
  EliminarInvestigacion,
  GuardarInvestigaciones, RemoverInvestigaciones
} from '../../../store/actions/investigacion.action';

@Component({
  selector: 'app-request-investigacion',
  templateUrl: './request-investigacion.component.html',
  styleUrls: ['./request-investigacion.component.css']
})
export class RequestInvestigacionComponent implements OnInit {

  form = new FormGroup({
    ciudad        : new FormControl('', Validators.required),
    anexo         : new FormControl('', Validators.required),
    descripcion   : new FormControl('', Validators.required)
  });

  investigaciones$: Observable<Investigacion[]>;
  investigacionId: number;
  esActualizarInvestigacion: boolean;

  constructor(private _store: Store<InvestigacionState>,
              private _investigacion: InvestigacionService ) {}

  ngOnInit() {
    this.investigaciones$ = this._store.select('investigacion');
    this.esActualizarInvestigacion = false;
    // this.investigaciones$.subscribe(value => console.log(value));
  }

  crearInvestigacion() {
    const data = this.form.value;
    this._store.dispatch(new CrearInvestigacion(data));
    this.form.reset();
  }

  actualizarInvestigacion(investigacion: Investigacion, id: number) {
    this.esActualizarInvestigacion = true;
    this.investigacionId = id;
    this.form.setValue(investigacion);
  }

  cambiarIvestigacion() {
    const data = this.form.value;
    this._store.dispatch(new ActualizarInvestigacion(this.investigacionId, data));
    this.form.reset();
    this.investigacionId = null;
    this.esActualizarInvestigacion = false;
  }

  eliminarInvestigacion(i: number) {
    this._store.dispatch(new EliminarInvestigacion(i));
  }

  guardarInvestigaciones() {
    this._investigacion.obtenerEstadoInvestigaciones().subscribe(data => {
      data.forEach(value => {
        this._investigacion.almacenarInvestigaciones(1,  value).subscribe(
          respose => {
            console.log(respose);
            alert('Servicios de investigacion creados con exito');
          },
          error => console.log(error)
        );
      });
    });
  }
}
