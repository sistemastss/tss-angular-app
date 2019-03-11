import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Helper} from '../../../../@classes/helper-class';
import {config} from '../../../../@models/app-settings';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NucleoFamiliarService {

  constructor(protected _http: HttpClient) { }

  nucleoFamiliarForm = new FormGroup({
    id                      : new FormControl(),
    estado                  : new FormControl(),
    nombre                  : new FormControl(''),
    edad                    : new FormControl('', [Validators.max(120), Validators.min(1)]),
    identificacion          : new FormControl('', Validators.min(0)),
    lugarExpedicion         : new FormControl(''),
    fechaNacimiento         : new FormControl(''),
    lugarNacimiento         : new FormControl(''),
    ocupacion               : new FormControl(''),
    empresa                 : new FormControl(''),
    telefono                : new FormControl('', Validators.min(0)),
    tiempoLaborado          : new FormControl(''),
    fotografia              : new FormControl(),
    observaciones           : new FormControl(''),
    // hijos                   : new FormBuilder().array([]),
    // informacionFamiliar     : new FormBuilder().array([]),
    // referencias             : new FormBuilder().array([])
  });


  hijoForm = new FormGroup({
    id          : new FormControl(),
    edad        : new FormControl('', [Validators.required, Validators.max(120), Validators.min(1)]),
    nombre      : new FormControl('', Validators.required),
    ocupacion   : new FormControl('', Validators.required),
    ubicacion   : new FormControl('', Validators.required)
  });


  infoFamiliarForm = new FormGroup({
    id                        : new FormControl(),
    nombre                    : new FormControl('', Validators.required),
    parentesco                : new FormControl('', Validators.required),
    edad                      : new FormControl('', [Validators.required, Validators.max(120), Validators.min(1)]),
    ocupacion                 : new FormControl('', Validators.required),
    telefono                  : new FormControl('', [Validators.required, Validators.min(0)]),
    ciudad                    : new FormControl('', Validators.required),
    viveConUd                 : new FormControl(false),
  });


  referenciaForm = new FormGroup({
    id            : new FormControl(),
    nombre        : new FormControl('', Validators.required),
    ocupacion     : new FormControl('', Validators.required),
    telefono      : new FormControl('', [Validators.required, Validators.min(0)]),
    ciudad        : new FormControl('', Validators.required),
    confirmacion  : new FormControl('', Validators.required)
  });


  // nucleo familiar
  get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'nucleo-familiar'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  post(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'nucleo-familiar'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  put(servicioEsp: number, nucleoFamiliar: number, data: any) {
    const url = Helper.route(['servicio-esp', 'nucleo-familiar'], [servicioEsp, nucleoFamiliar]);
    return this._http.put(url, data, config.httpOpts);
  }



  // hijos
  getHijos(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'hijos'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postHijo(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'hijos'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putHijo(servicioEsp: number, hijo: number, data: any) {
    const url = Helper.route(['servicio-esp', 'hijos'], [servicioEsp, hijo]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteHijo(servicioEsp: number, hijo: number) {
    const url = Helper.route(['servicio-esp', 'hijos'], [servicioEsp, hijo]);
    return this._http.delete(url, config.httpOpts);
  }



  // informacion familiar
  getInfoFamiliar(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'informacion-familiar'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postInfoFamiliar(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'informacion-familiar'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putInfoFamiliar(servicioEsp: number, infoFlia: number, data: any) {
    const url = Helper.route(['servicio-esp', 'informacion-familiar'], [servicioEsp, infoFlia]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteInfoFamiliar(servicioEsp: number, infoFlia: number) {
    const url = Helper.route(['servicio-esp', 'informacion-familiar'], [servicioEsp, infoFlia]);
    return this._http.delete(url, config.httpOpts);
  }



  // referencias
  getReferencias(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'referencias'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postReferencia(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'referencias'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putReferencia(servicioEsp: number, referencia: number, data: any) {
    const url = Helper.route(['servicio-esp', 'referencias'], [servicioEsp, referencia]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteReferencia(servicioEsp: number, referencia: number) {
    const url = Helper.route(['servicio-esp', 'referencias'], [servicioEsp, referencia]);
    return this._http.delete(url, config.httpOpts);
  }

}
