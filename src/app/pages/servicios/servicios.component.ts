import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Servicio} from '../../@models/servicio';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios$: Observable<Servicio[]>;
  options: any;
  permissions: any;
  palancaModal: boolean;
  actividades$: any;

  constructor(private _store: Store<Servicio[]>) { }

  ngOnInit() {
    this.servicios$ = this._store.select('servicio');
  }

  filtrarServicios(value: string, value2: string) {
    
  }

  eliminarServicio(id: number) {
    
  }

  mostrarModal(id: number) {
    
  }

  cerrarModal() {

  }

  cargarActividad(actividad) {
    
  }
}
