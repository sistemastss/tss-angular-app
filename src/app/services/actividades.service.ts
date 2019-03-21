import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgxPermissionsService} from 'ngx-permissions';
import {DataService} from './data.service';
import {Helper} from '../@classes/helper-class';
import {config} from '../@models/app-settings';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private _http: HttpClient,
              private _ngxPermissions: NgxPermissionsService,
              private dataService: DataService) {
  }

  static storeActividades(actividades: any) {
    localStorage.setItem('actividades', JSON.stringify(actividades));
  }

  static getActividades() {
    return JSON.parse(localStorage.getItem('actividades')) || '';
  }


  storeServicioEsp = (servicioEsp: any) => {
    localStorage.setItem('servicioEsp', JSON.stringify(servicioEsp));
  }


  getServicioEsp = (): any => {
    return JSON.parse(localStorage.getItem('servicioEsp')) || '';
  }


  postAsignarActividad(actividadId: number, data: object) {
    const url = Helper.route(['actividad-aplicada', 'actividad-asignada'], actividadId);
    return this._http.post(url, data, config.httpOpts);
  }


  putEstadoActividad(actividadId, body: object) {
    const url = Helper.route(['actividad-aplicada'], actividadId);
    return this._http.put(url, body, config.httpOpts);
  }

  // todo eliminar si no se utilizan
  setEstadoActividad(codigo: string, estado: string) {

    const actividades = ActividadesService.getActividades();

    actividades.forEach((value) => {
      if (value.codigo === codigo) {
        value.estado = estado;
        return;
      }
    });

    ActividadesService.storeActividades(actividades);
  }

  getEstadoActividad(codigo: string) {
    const actividades = ActividadesService.getActividades();
    let estadoActividad = null;

    actividades.forEach((value) => {
      if (value.codigo === codigo) {
        estadoActividad = value.estado;
        return;
      }
    });

    return estadoActividad;

  }


  getActividad(codigo): any {
    // actividades de localstorage
    const actividades = ActividadesService.getActividades();
    let actividad: object = null;

    actividades.forEach(value => {
      if (value.codigo === codigo) {
        actividad = value;
        return;
      }
    });

    return actividad;
  }


  refreshActividad(actividad: any) {
    const codigo = actividad.codigo;
    const actividades = ActividadesService.getActividades()
      .map(value => (value.codigo === codigo) ? actividad : value);

    ActividadesService.storeActividades(actividades);
  }

  /**
   * cada vez que cambie una propiedad de la actividad
   * se actualiza la actividad en el localstorage
   *
   * @param codigo: se utiliza para buscar la actividad
   * en la coleccion de actividades del localstorage
   * @param handler: funcion que se ejecuta despues de realizar la asignacion
   */
  actividadProxy(codigo: string, handler = this.refreshActividad): any {
    const actividad = this.getActividad(codigo);

    return new Proxy(actividad, {

      set(target, propertyKey, value): boolean {
        target[propertyKey] = value;
        handler(target);
        return true;
      }

    });

  }


  canLoadResource = (actividad: any) => {
    return actividad.estado === 'proceso' ||
      actividad.estado === 'notificado' ||
      actividad.estado === 'completado' ||
      actividad.estado == 'alerta';
  }


  handleError = (err: any): void => {
    const errorCode = err.error.code;
    const errorMessage = err.error.message;

    if (errorCode === 422) {
      alert('Debe editarServicioEsp al menos un registro.');
    }

    if (errorCode === 409) {
      alert('Ya existe un registro asiciado a este servicio');
    }

    console.warn(errorMessage);
  }



  transformResponse = (response: any): object => {
    const value = Object.assign({}, response);

    delete value.timestamps;
    delete value.links;

    return value;
  }


  uploadInforme(servicioEsp, data) {
    const url = config.api + '/upload-informe/' + servicioEsp;
    return this._http.post(url, data).pipe(map(value => true));
  }
}
