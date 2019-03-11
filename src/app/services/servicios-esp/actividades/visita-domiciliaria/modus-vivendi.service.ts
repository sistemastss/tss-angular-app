import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Helper} from '../../../../@classes/helper-class';
import {config} from '../../../../@models/app-settings';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ModusVivendiService {

  constructor(private _http: HttpClient) { }


  // formularios
  modusVivendiForm = new FormGroup({
    id                      : new FormControl(),
    estado                  : new FormControl(),
    salario                 : new FormControl('', [Validators.required, Validators.min(1)]),
    otrosIngresos           : new FormControl('', [Validators.required, Validators.min(1)]),
    salarioConyugue         : new FormControl('', [Validators.required, Validators.min(1)]),
    engresosMensuales       : new FormControl('', [Validators.required, Validators.min(1)]),
    descripcionGastos       : new FormControl('', Validators.required),
    personasDependientes    : new FormControl('', Validators.required),
    analisisPatrimonial     : new FormControl('', Validators.required)
  });



  bienInmuebleForm = new FormGroup({
    id               : new FormControl(),
    tipo             : new FormControl('', Validators.required),
    direccion        : new FormControl('', Validators.required),
    telefono         : new FormControl('', Validators.required),
    ciudad           : new FormControl('', Validators.required),
    avaluo           : new FormControl('', Validators.required),
    hipoteca         : new FormControl(false, Validators.required),
  });



  bienMuebleForm = new FormGroup({
    id               : new FormControl(),
    clase            : new FormControl('', Validators.required),
    modelo           : new FormControl('', Validators.required),
    placa            : new FormControl('', Validators.required),
    avaluo           : new FormControl('', Validators.required),
    pignorado        : new FormControl(false, Validators.required),
  });



  refBancariaForm = new FormGroup({
    id               : new FormControl(),
    entidad           : new FormControl('', Validators.required),
    tipoCuenta        : new FormControl('', Validators.required)
  });



  capEndeudamientoForm = new FormGroup({
    id                : new FormControl(),
    descripcion       : new FormControl('', Validators.required),
    entidad           : new FormControl('', Validators.required),
    monto             : new FormControl('', Validators.required),
    estadoDeuda       : new FormControl('', Validators.required),
    valorMensual      : new FormControl('', Validators.required),
  });





  // modus vivendi
  get(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'modus-vivendi'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  post(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'modus-vivendi'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  put(servicioEsp: number, modusVivendi: number, data: any) {
    const url = Helper.route(['servicio-esp', 'modus-vivendi'], [servicioEsp, modusVivendi]);
    return this._http.put(url, data, config.httpOpts);
  }




  // bienes inmuebles
  getBienesInmuebles(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'bienes-inmuebles'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postBienInmueble(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'bienes-inmuebles'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putBienInmueble(servicioEsp: number, bienInmueble: number, data: any) {
    const url = Helper.route(['servicio-esp', 'bienes-inmuebles'], [servicioEsp, bienInmueble]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteBienInmueble(servicioEsp: number, bienInmueble: number) {
    const url = Helper.route(['servicio-esp', 'bienes-inmuebles'], [servicioEsp, bienInmueble]);
    return this._http.delete(url, config.httpOpts);
  }




  // bienes muebles
  getBienesMuebles(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'bienes-muebles'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postBienMueble(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'bienes-muebles'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putBienMueble(servicioEsp: number, bienMueble: number, data: any) {
    const url = Helper.route(['servicio-esp', 'bienes-muebles'], [servicioEsp, bienMueble]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteBienMueble(servicioEsp: number, bienMueble: number) {
    const url = Helper.route(['servicio-esp', 'bienes-muebles'], [servicioEsp, bienMueble]);
    return this._http.delete(url, config.httpOpts);
  }




  // referencias bancarias
  getRefBancarias(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'referencias-bancarias'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postRefBancaria(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'referencias-bancarias'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putRefBancaria(servicioEsp: number, refBancaria: number, data: any) {
    const url = Helper.route(['servicio-esp', 'referencias-bancarias'], [servicioEsp, refBancaria]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteRefBancaria(servicioEsp: number, refBancaria: number) {
    const url = Helper.route(['servicio-esp', 'referencias-bancarias'], [servicioEsp, refBancaria]);
    return this._http.delete(url, config.httpOpts);
  }





  // capacidad endeudamiento
  getCapEndeudamiento(servicioEsp: number) {
    const url = Helper.route(['servicio-esp', 'capacidad-endeudamiento'], servicioEsp);
    return this._http.get(url, config.httpOpts);
  }

  postCapEndeudamiento(servicioEsp: number, data: any) {
    const url = Helper.route(['servicio-esp', 'capacidad-endeudamiento'], servicioEsp);
    return this._http.post(url, data, config.httpOpts);
  }

  putCapEndeudamiento(servicioEsp: number, capEndeudamiento: number, data: any) {
    const url = Helper.route(['servicio-esp', 'capacidad-endeudamiento'], [servicioEsp, capEndeudamiento]);
    return this._http.put(url, data, config.httpOpts);
  }

  deleteCapEndeudamiento(servicioEsp: number, capEndeudamiento: number) {
    const url = Helper.route(['servicio-esp', 'capacidad-endeudamiento'], [servicioEsp, capEndeudamiento]);
    return this._http.delete(url, config.httpOpts);
  }

}
