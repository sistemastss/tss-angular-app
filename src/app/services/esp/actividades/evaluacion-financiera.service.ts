import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Helper} from '../../../@classes/helper-class';
import {config} from '../../../@models/app-settings';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionFinancieraService {

  constructor(protected _http: HttpClient) { }


  cuentaBancariaForm = new FormGroup({
    id                : new FormControl(),
    tipoCuenta        : new FormControl('', Validators.required),
    entidad           : new FormControl('', Validators.required),
    ciudad            : new FormControl('', Validators.required),
    fechaApertura     : new FormControl('', Validators.required),
    estado            : new FormControl('', Validators.required),
  });



  obligacionVigenteForm = new FormGroup({
    id                  : new FormControl(),
    entidad             : new FormControl('', Validators.required),
    tipoCredito         : new FormControl('', Validators.required),
    valorAprobado       : new FormControl('', Validators.required),
    saldoActual          : new FormControl('', Validators.required),
    valorCuota          : new FormControl('', Validators.required),
  });



  obligacionVigenteRealForm = new FormGroup({
    id                  : new FormControl(),
    entidad             : new FormControl('', Validators.required),
    lineaCredito        : new FormControl('', Validators.required),
    fechaApertura       : new FormControl('', Validators.required),
    valorCargoFijo      : new FormControl('', Validators.required),
  });



  obligacionMoraForm = new FormGroup({
    id              : new FormControl(),
    entidad         : new FormControl('', Validators.required),
    tipoCredito     : new FormControl('', Validators.required),
    tiempoMora      : new FormControl('', Validators.required),
    montoMora       : new FormControl('', Validators.required),
  });



  obligacionExtinguidaForm = new FormGroup({
    id              : new FormControl(),
    entidad         : new FormControl('', Validators.required),
    fechaApertura   : new FormControl('', Validators.required),
    fechaCierre     : new FormControl('', Validators.required),
    tipoCredito     : new FormControl('', Validators.required),
    valor           : new FormControl('', Validators.required),
  });






  // evaluacion financiera
  get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'evaluacion-financiera'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  post(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'evaluacion-financiera'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  put(servicioEsp: number, evFinanciera: number, data: any) {
    const url = Helper.route(['servicio-esp', 'evaluacion-financiera'], [servicioEsp, evFinanciera]);
    return this._http.put(url, data, config.httpOpts);
  }

  delete(servicioEsp: number, evFinanciera: number) {
    const url = Helper.route(['servicio-esp', 'cuentas-bancarias'], [servicioEsp, evFinanciera]);
    return this._http.delete(url, config.httpOpts);
  }





  // Cuentas bancarias
  getCuentasBancarias(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'cuentas-bancarias'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postCuentaBancaria(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'cuentas-bancarias'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putCuentaBancaria(servicioEsp: number, cuentaBancaria: number, data: any) {
    const url = Helper.route(['servicio-esp', 'cuentas-bancarias'], [servicioEsp, cuentaBancaria]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteCuentaBancaria(servicioEsp: number, cuentaBancaria: number) {
    const url = Helper.route(['servicio-esp', 'cuentas-bancarias'], [servicioEsp, cuentaBancaria]);
    return this._http.delete(url, config.httpOpts);
  }





  // obligaciones extinguidas
  getObligacionesExtinguidas(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-extinguidas'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postObligacionExtinguida(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-extinguidas'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putObligacionExtinguida(servicioEsp: number, obgExtinguida: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-extinguidas'], [servicioEsp, obgExtinguida]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteObligacionExtinguida(servicioEsp: number, obgExtinguida: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-extinguidas'], [servicioEsp, obgExtinguida]);
    return this._http.delete(url, config.httpOpts);
  }





  // obligaciones mora
  getObligacionesMora(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-mora'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postObligacionMora(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-mora'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putObligacionMora(servicioEsp: number, obgMora: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-mora'], [servicioEsp, obgMora]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteObligacionMora(servicioEsp: number, obgMora: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-mora'], [servicioEsp, obgMora]);
    return this._http.delete(url, config.httpOpts);
  }







  // obligaciones vigentes
  getObligacionesVigentes(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-vigentes'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postObligacionVigente(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-vigentes'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putObligacionVigente(servicioEsp: number, obgVigente: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-vigentes'], [servicioEsp, obgVigente]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteObligacionVigente(servicioEsp: number, obgVigente: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-vigentes'], [servicioEsp, obgVigente]);
    return this._http.delete(url, config.httpOpts);
  }






  // obligaciones reales
  getObligacionesReales(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-reales'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postObligacionReal(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-reales'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putObligacionReal(servicioEsp: number, obgReales: number, data: any) {
    const url = Helper.route(['servicio-esp', 'obligaciones-reales'], [servicioEsp, obgReales]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteObligacionReal(servicioEsp: number, obgReales: number) {
    const url = Helper.route(['servicio-esp', 'obligaciones-reales'], [servicioEsp, obgReales]);
    return this._http.delete(url, config.httpOpts);
  }

}
