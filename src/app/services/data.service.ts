import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_API } from '../@models/app-settings';

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

  constructor(private http: HttpClient) {}

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

  getServicioEsp(servicioEspId: number) {
    return this.httpGet(`servicio-esp/${servicioEspId}`);
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

  getServicioEspActividades(servicioEspId: number) {
    return this.httpGet(`servicio-esp/${servicioEspId}/actividades`);
  }

  getPersonasEvaluadas() {
    return this.httpGet('persona_evaluada');
  }

  getPersonaEvaluada(id: number) {
    return this.httpGet('persona_evaluada/' + id);
  }

  funcionarios(rolId) {
    return this.httpGet('funcionarios/' + rolId);
  }

  frelance() {
    return this.httpGet('freelance');
  }

  asignarFuncionario(body: object) {
    return this.httpPost('asignar-actividad', body);
  }

  asignarActividad(actividadId: number, body: object) {
    const url = `actividad-aplicada/${actividadId}/actividad-asignada`;
    return this.httpPost(url, body);
  }

  getActividadesAsignadas(userId: number) {
    return this.httpGet('actividades-asignadas/' + userId);
  }

  updateEstadoActividad(actividadId, body: object) {
    return this.httpPut('actividad-aplicada/' + actividadId, body);
  }

  updateEstadoVisitaDomciciliaria(servicioEspId, body) {
    return this.httpPut(`servicio-esp/${servicioEspId}/visita-domiciliaria`, body);
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

  setHistorialJudicial(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/historial-judicial`, body);
  }

  updateHistorialJudicial(historialJudicialId: number, body: any) {
    return this.httpPut('historial-judicial/' + historialJudicialId, body);
  }


  /**
   * actualizar estado esp
   * @param servicioEspId
   * @param body
   */
  updateEstadoServicioEsp(servicioEspId: number, body: any) {
    return this.httpPut(`servicio-esp/${servicioEspId}`, body);
  }

  /**
   *
   * Visita domiciliaria
   */

  getVerificacionDocumental(servicioEspId: number) {
    return this.httpGet(`servicio-esp/${servicioEspId}/verificacion-documental`);
  }

  setVerificacionDocumental(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/verificacion-documental`, body);
  }

  updateVerificacionDocumental(verificacionDocumentalId: number, body: any) {
    return this.httpPut('verificacion-documental/' + verificacionDocumentalId, body);
  }


  getEstadoSalubridad(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/estado-salubridad`);
  }

  setEstadoSalubridad(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/estado-salubridad`, body);
  }

  updateEstadoSalubridad(estadoSalubridadId: number, body: any) {
    return this.httpPut('estado-salubridad/' + estadoSalubridadId, body);
  }


  getNucleoFamiliar(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/nucleo-familiar`);
  }

  setNucleoFamiliar(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/nucleo-familiar`, body);
  }

  updateNucleoFamiliar(informacionFamiliarId: number, body: any) {
    return this.httpPut('nucleo-familiar/' + informacionFamiliarId, body);
  }


  getEntornoHabitacional(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/entorno-habitacional`);
  }

  setEntornoHabitacional(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/entorno-habitacional`, body);
  }

  updateEntornoHabitacional(entornoHabitacionalId: number, body: any) {
    return this.httpPut('entorno-habitacional/' + entornoHabitacionalId, body);
  }


  getModusVivendi(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/modus-vivendi`);
  }

  setModusVivendi(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/modus-vivendi`, body);
  }

  updateModusVivendi(entornoHabitacionalId: number, body: any) {
    return this.httpPut('modus-vivendi/' + entornoHabitacionalId, body);
  }


  visitaDomiciliariaCompletada(servicioEspId) {
    return this.httpGet(`servicio-esp/${servicioEspId}/visita-domiciliaria`);
  }


  /**
   * Verificacion laboral
   */


  getVerificacionLaboral(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/verificacion-laboral`);
  }

  setVerificacionLaboral(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/verificacion-laboral`, body);
  }

  updateVerificacionLaboral(id: number, body: any) {
    return this.httpPut('verificacion-laboral/' + id, body);
  }

  deleteVerificacionLaboral(id) {
    return this.http.delete(BASE_API + 'verificacion-laboral/' + id);
  }



  getDictamenGrafologico(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/dictamen-grafologico`);
  }

  setDictamenGrafologico(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/dictamen-grafologico`, body);
  }

  updateDictamenGrafologico(id: number, body: any) {
    return this.httpPut('dictamen-grafologico/' + id, body);
  }


  /**
   * Verificacion academica
   */

  getVerificacionAcademica(servicioEspId: any) {
    return this.httpGet(`servicio-esp/${servicioEspId}/verificacion-academica`);
  }

  setVerificacionAcademica(servicioEspId: number, body: any) {
    return this.httpPost(`servicio-esp/${servicioEspId}/verificacion-academica`, body);
  }

  updateVerificacionAcademica(id: number, body: any) {
    return this.httpPut('verificacion-academica/' + id, body);
  }

  deleteVerificacionAcademica(id) {
    return this.http.delete(BASE_API + 'verificacion-academica/' + id);
  }


}
