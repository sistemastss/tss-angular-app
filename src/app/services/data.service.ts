import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BASE_API, config} from '../@models/app-settings';
import {map} from 'rxjs/operators';
import {CentroCosto} from '../@models/centro-costo';
import {Store} from '@ngrx/store';
import {CrearCentroCosto} from '../store/actions/centro-costo-action';

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



  /*static almacenarCentroCosto(centroCosto: CentroCosto) {
    localStorage.setItem('centroCosto', JSON.stringify(centroCosto));
  }*/


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

  getServiciosEsp() {
    return this.httpGet('servicio-esp');
  }

  getUsuarioServiciosEsp(usuarioId: number) {
    return this.httpGet(`usuario/${usuarioId}/servicios-esp`);
  }

  getFreelanceServiciosEsp(usuarioId: number) {
    return this.httpGet(`freelance/${usuarioId}/servicios-esp`);
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
  


  /**
   * actualizar estado esp
   * @param servicioEspId
   * @param body
   */
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
}
