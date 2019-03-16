import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from '../@models/app-settings';
import {Store} from '@ngrx/store';


import { LoginService } from './login.service';
import {ServicioEsp} from '../@models/servicio-esp';
import {Observable} from 'rxjs';
import {CrearServicioEsp} from '../store/actions/servicio-esp.action';

@Injectable({
  providedIn: 'root'
})
export class EspService {

  /**
   * 1. crear objeto de centro de costo en el localstorage
   * 2. añador servicios esp al centro de costo
   * 2.1. actualizar servicio esp
   * 2.2. eliminar servicio esp
   * 3. guardar servicio esp en la base de datos
   * 4.listar servicios esp creados por el clientes o
   * mostrar todos los servicios esp al adminstrador
   */

  constructor(private http: HttpClient,
              private store: Store<ServicioEsp>) {

  }

  crearServicioEsp(payload: any) {
    console.log(payload);
    this.store.dispatch(new CrearServicioEsp(payload));
  }

  centroCostoStore(centroCosto: object) {

    if (centroCosto['serviciosEsp'] == null) {
      centroCosto['serviciosEsp'] = [];
    }

    localStorage.setItem('centroCosto', JSON.stringify(centroCosto));
  }

  getCentroCostoStore() {
    return JSON.parse(localStorage.getItem('centroCosto'));
  }

  getServiciosEsp() {
    return this.getCentroCostoStore().serviciosEsp as object[];
  }

  getServicioEsp(id: number) {
    return this.getCentroCostoStore().serviciosEsp[id];
  }

  addServicioEsp(servicioEsp: object) {
    const centroCosto = this.getCentroCostoStore();

    centroCosto.serviciosEsp.push(servicioEsp);

    this.centroCostoStore(centroCosto);
  }

  updateServicioEsp(servicioEsp: object, id: number) {
    const centroCosto = this.getCentroCostoStore();

    centroCosto.serviciosEsp[id] = servicioEsp;

    this.centroCostoStore(centroCosto);
  }

  deleteServicioEsp(id: number) {
    const centroCosto = this.getCentroCostoStore();

    centroCosto.serviciosEsp.splice(id, 1);

    this.centroCostoStore(centroCosto);
  }

  removeCentroCostoStore() {
    localStorage.removeItem('centroCosto');
  }

  saveCentroCosto() {
    const data = this.getCentroCostoStore().centroCosto;
    return this.http.post(config.api + '/centro-costo', data);
  }

  saveServicioEsp(data) {
    const url = config.api + '/servicio-esp';
    return this.http.post(url, data, config.httpOpts);
  }

  deleteServEsp(id) {
    const url = config.api + '/servicio-esp/' + id;
    return this.http.delete(url, config.httpOpts);
  }
}

