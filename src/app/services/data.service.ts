import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BASE_API, config} from '../@models/app-settings';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import { Observable, forkJoin } from 'rxjs';
import {CentroCosto} from '../pages/solicitud-servicio/interfaces/centro-costo.interface';
import {Esp} from '../pages/solicitud-servicio/interfaces/esp.interface';
import {Helper} from '../@classes';
import {Investigacion} from '../pages/solicitud-servicio/interfaces/Investigacion.interface';
import { getServicios } from '../pages/control/store/selectors';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  actividades = [
    {
      nombre: 'Historial judicial',
      codigo: 'HJ',
      path: '../actividades/historial-judicial'
    },
    {
      nombre: 'Visita domiciliaria',
      codigo: 'VDS',
      path: '../actividades/visita-domiciliaria'
    },
    {
      nombre: 'Verificación académica',
      codigo: 'VA',
      path: '../actividades/verificacion-academica'
    },
    {
      nombre: 'Verificacion laboral',
      codigo: 'VL',
      path: '../actividades/verificacion-laboral'
    },
    {
      nombre: 'Dictamen grafológico',
      codigo: 'DG',
      path: '../actividades/dictamen-grafologico'
    },
    {
      nombre: 'Decadactilar',
      codigo: 'Dd',
      path: '../actividades/decadactilar'
    },
    {
      nombre: 'Prueba psicotécnica',
      codigo: 'PP',
      path: '../actividades/prueba-psicotecnica'
    },
    {
      nombre: 'Poligrafía',
      codigo: 'PL',
      path: ''
    },
    // { nombre: 'Due Dilligence', codigo: 'DDL', path: '' },
    {
      nombre: 'Evaluacion financiera',
      codigo: 'EF',
      path: '../actividades/evaluacion-financiera'
    },
  ];

  constructor(private http: HttpClient,
              private store: Store<any>) {}


  almacenarCentroCosto(payload: CentroCosto) {
    const url = config.api + '/centro-costo';
    return this.http.post(url, payload).pipe(
      map((response: any) => response.data.id)
    );
  }

  almacenarEsp(centroCosto: number, payload: Esp[]) {
    const url = Helper.route(['centro-costo', 'servicio-esp'], centroCosto);
    return this.http.post(url, payload, config.httpOpts);
  }

  almacenarEspMasivo(centroCosto: number, payload: any) {
    const url = Helper.route(['centro-costo', 'servicio-esp-masivo'], centroCosto);
    return this.http.post(url, payload, config.httpOpts);
  }

  almacenarInvestigaciones(centroCosto: number, payload: Investigacion[]) {
    const url = Helper.route(['centro-costo', 'investigaciones'], centroCosto);
    return this.http.post(url, payload, config.httpOpts);
  }

  almacenarPoligrafias(centroCosto: number, payload: any[]) {
    const url = Helper.route(['centro-costo', 'poligrafia'], centroCosto);
    return this.http.post(url, payload, config.httpOpts);
  }

  cargarServicios() {
    return forkJoin(
      this.cargarEsps(),
      this.cargarInvestigaciones(),
      this.cargarPoligrafias()
    ).pipe(
      // @ts-ignore
      map((data: any) => data.flat())
    );
  }

  cargarEsps() {
    const url = config.api + '/servicio-esp';
    return this.http.get(url, config.httpOpts).pipe(
      map((value: any) => value.data as any[])
    );
  }

  cargarInvestigaciones() {
    const url = config.api + '/investigaciones';
    return this.http.get(url, config.httpOpts).pipe(
      map((value: any) => value.data as any[])
    );
  }

  cargarPoligrafias() {
    const url = config.api + '/poligrafia';
    return this.http.get(url, config.httpOpts).pipe(
      map((value: any) => value.data as any[])
    );
  }

  httpGet(url: string, baseApi = true) {
    if (baseApi) {
      return this.http.get(BASE_API + url, this.httpOptions);
    } else {
      return this.http.get(url, this.httpOptions);
    }
  }

  httpPost(url: string, body: object) {
    return this.http.post(BASE_API + url, body, this.httpOptions);
  }

  httpPut(url: string, body: object) {
    return this.http.put(BASE_API + url, body, this.httpOptions);
  }

  getFreelanceActividadesServicioEsp(usuarioId: number, servicioEspId: number) {
    return this.httpGet(`freelance/${usuarioId}/servicios-esp/${servicioEspId}`);
  }

  frelance() {
    return this.httpGet('freelance');
  }

  asignarFuncionario(body: object) {
    return this.httpPost('asignar-actividad', body);
  }

  getClientes() {
    return this.httpGet('clientes');
  }

  /**
   * Historial judicial
   */
  getHistorialJudicial(servicioEspId: number) {
    return this.httpGet(`servicio-esp/${servicioEspId}/historial-judicial`);
  }


  updateEstadoServicioEsp(servicioEspId: number, body: any) {
    return this.httpPut(`servicio-esp/${servicioEspId}`, body);
  }





  setEstadoSalubridad(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/estado-salubridad`, body);
  }

  getVerificacionLaboral(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/verificacion-laboral`);
  }

  setVerificacionLaboral(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/verificacion-laboral`, body);
  }

  updateVerificacionLaboral(id: number, body: any) {
    return this.httpPut('verificacion-laboral/' + id, body);
  }

  obtenerServicios() {
    const url = config.api + '/servicios';
    return this.http.get(url, config.httpOpts).pipe(
      map((value: any) => value.data)
    );
  }

  visitaDomiciliariaCompletada(servicioEsp: number) {
    return this.httpGet(`servicio-esp/${servicioEsp}/verificacion-laboral`);
  }


  setServicios(servicios) {
    const data = JSON.stringify(servicios);
    localStorage.setItem('servicios', data);
  }

  getServicios() {
    return JSON.parse(localStorage.getItem('servicios')) as [];
  }
}
