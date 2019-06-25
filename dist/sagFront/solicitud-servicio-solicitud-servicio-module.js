(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["solicitud-servicio-solicitud-servicio-module"],{

/***/ "./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrapper\">\r\n  <div class=\"container mt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 mx-auto\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h4 class=\"text-center\">Orden de servicio</h4>\r\n          </div>\r\n          <div class=\"card-body\" [formGroup]=\"form\">\r\n\r\n            <div class=\"card\">\r\n              <div class=\"card-body border-bottom\">\r\n                <h5>Datos de solicitud</h5>\r\n              </div>\r\n\r\n              <div class=\"card-body\">\r\n                <div class=\"form-group row\">\r\n                  <label for=\"solicitante\" class=\"col-sm-3 col-form-label\">\r\n                    Solicitante\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\" id=\"solicitante\"\r\n                           placeholder=\"Ingrese el nombre completo\"\r\n                           class=\"form-control\" formControlName=\"solicitante\">\r\n                    <div [hidden]=\"form.controls['solicitante'].valid  || form.controls['solicitante'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <!-- telefono solicitante -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"telefonoSolicitante\" class=\"col-sm-3 col-form-label\">\r\n                    Telefono del solicitante\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\" id=\"telefonoSolicitante\"\r\n                           placeholder=\"Ingrese el telefono del solicitante\"\r\n                           class=\"form-control\" formControlName=\"telefono_solicitante\">\r\n                    <div [hidden]=\"form.controls['telefono_solicitante'].valid  || form.controls['telefono_solicitante'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- email -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"emailSolicitante\" class=\"col-sm-3 col-form-label\">\r\n                    Email\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"email\" id=\"emailSolicitante\"\r\n                           placeholder=\"Ingrese un correo electronico valido\"\r\n                           class=\"form-control\"\r\n                           formControlName=\"email_solicitante\">\r\n                    <div [hidden]=\"form.controls['email_solicitante'].valid  || form.controls['email_solicitante'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- tiene orden compra -->\r\n\r\n                <div class=\"form-group row\">\r\n                  <label class=\"col-sm-3 col-form-label\">Orden de compra</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <div class=\"form-check form-check-inline\" >\r\n                      <input (click)=\"switchOrdenCompra(true)\"\r\n                             class=\"form-check-input\" type=\"radio\"\r\n                             name=\"tieneOrdenCompra\"\r\n                             value=\"true\"\r\n                             id=\"orden-si\">\r\n                      <label class=\"form-check-label\" for=\"orden-si\">Si</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline\">\r\n                      <input (click)=\"switchOrdenCompra(false)\"\r\n                             class=\"form-check-input\" type=\"radio\"\r\n                             name=\"tieneOrdenCompra\"\r\n                             value=\"false\"\r\n                             id=\"orden-no\"\r\n                             checked>\r\n                      <label class=\"form-check-label\" for=\"orden-no\">No</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- si tiene orden de compra -->\r\n                <div *ngIf=\"ordenCompra\" class=\"animated fade-in\">\r\n                  <!-- numero de orden -->\r\n                  <div class=\"form-group row\">\r\n                    <label for=\"num-orden-compra\" class=\"col-sm-3 col-form-label\">Numero de orden</label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input type=\"number\"\r\n                             class=\"form-control\"\r\n                             id=\"num-orden-compra\"\r\n                             placeholder=\"Ingrese el numero de la orden de compra\"\r\n                             formControlName=\"numero_orden\">\r\n                      <div [hidden]=\"form.controls['numero_orden'].valid  || form.controls['numero_orden'].pristine\">\r\n                        <div class=\"ng-invalid-feedback\">\r\n                          El campo es requerido\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- anexo de orden -->\r\n                  <div class=\"form-group row\">\r\n                    <label for=\"anexo\" class=\"col-sm-3 col-form-label\">Anexo</label>\r\n                    <div class=\"col-sm-9\">\r\n                      <input type=\"file\" class=\"form-control-file\" (change)=\"cargarArchivo($event)\" id=\"anexo\" #fileInput>\r\n                      <div [hidden]=\"form.controls['anexo'].valid  || form.controls['anexo'].pristine\">\r\n                        <div class=\"ng-invalid-feedback\">\r\n                          El campo es requerido\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card mt-3\">\r\n              <div class=\"card-body border-bottom mt-3\">\r\n                <h5>Datos de factura</h5>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <!-- factura -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"destinoFactura\" class=\"col-sm-3 col-form-label\">\r\n                    Facturar a\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\" id=\"destinoFactura\"\r\n                           placeholder=\"Ingrese el nombre del destinatario de la factura\"\r\n                           class=\"form-control\"\r\n                           formControlName=\"destino_factura\">\r\n                    <div [hidden]=\"form.controls['destino_factura'].valid  || form.controls['destino_factura'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- tipo sociedad -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"tipoSociedad\" class=\"col-sm-3 col-form-label\">\r\n                    Tipo de sociedad\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <select name=\"tipoSociedad\"\r\n                            class=\"form-control\"\r\n                            id=\"tipoSociedad\"\r\n                            formControlName=\"tipo_sociedad\">\r\n                      <option [selected]=\"true\" value=\"\">Seleccione</option>\r\n                      <option value=\"juridico\">Juridico</option>\r\n                      <option value=\"natural\">Natural</option>\r\n                    </select>\r\n                    <div [hidden]=\"form.controls['tipo_sociedad'].valid  || form.controls['tipo_sociedad'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- tipo identificacion -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"tipoDocumento\" class=\"col-sm-3 col-form-label\">\r\n                    Tipo de documento\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <select name=\"tipoIdentificacion\"\r\n                            class=\"form-control\"\r\n                            id=\"tipoDocumento\"\r\n                            formControlName=\"tipo_documento\">\r\n                      <option [selected]=\"true\" value=\"\">Seleccione</option>\r\n                      <option value=\"juridico\">Cedula</option>\r\n                      <option value=\"natural\">Nit</option>\r\n                    </select>\r\n                    <div [hidden]=\"form.controls['tipo_documento'].valid  || form.controls['tipo_documento'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- numero identificacion -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"numeroIdentificacion\" class=\"col-sm-3 col-form-label\">\r\n                    Numero de identificación\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\" id=\"numeroIdentificacion\"\r\n                           placeholder=\"Ingrese el numero de identificacion\"\r\n                           class=\"form-control\"\r\n                           formControlName=\"documento\">\r\n\r\n                    <div [hidden]=\"form.controls['documento'].valid  || form.controls['documento'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- telefono facturante-->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"telefonoFactura\" class=\"col-sm-3 col-form-label\">\r\n                    Telefono\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\" id=\"telefonoFactura\"\r\n                           placeholder=\"Telefono del facturante\"\r\n                           class=\"form-control\"\r\n                           formControlName=\"telefono_factura\">\r\n                    <div [hidden]=\"form.controls['telefono_factura'].valid  || form.controls['telefono_factura'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- email -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"emailFactura\" class=\"col-sm-3 col-form-label\">\r\n                    Email\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"email\" id=\"emailFactura\"\r\n                           placeholder=\"Ingrese un correo valido\"\r\n                           class=\"form-control\"\r\n                           formControlName=\"email_factura\">\r\n                    <div [hidden]=\"form.controls['email_factura'].valid  || form.controls['email_factura'].pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <!-- continuar -->\r\n            <div class=\"form-group mt-3\">\r\n              <div class=\"col-md-4 mx-auto\">\r\n                <button [disabled]=\"form.invalid\"\r\n                        (click)=\"solicitarServicio()\"\r\n                        class=\"btn btn-primary btn-block\">\r\n                  Siguiente\r\n                  <i class=\"fa fa-chevron-right\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CentroCostoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentroCostoComponent", function() { return CentroCostoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _store_actions_centro_costo_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/centro-costo.actions */ "./src/app/pages/solicitud-servicio/store/actions/centro-costo.actions.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CentroCostoComponent = /** @class */ (function () {
    function CentroCostoComponent(router, store, authService, helper, fb) {
        this.router = router;
        this.store = store;
        this.authService = authService;
        this.helper = helper;
        this.fb = fb;
        this.form = this.fb.group({
            usuario_id: '',
            solicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            telefono_solicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email_solicitante: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            destino_factura: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo_sociedad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo_documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            telefono_factura: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            email_factura: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
        this.ordenCompra = false;
        this.clientes = [];
    }
    CentroCostoComponent.prototype.ngOnInit = function () {
        this.form.setValue({
            usuario_id: '6',
            solicitante: 'alguien',
            telefono_solicitante: 12334323,
            email_solicitante: 'styven21121@gmail.com',
            destino_factura: 'alguien',
            tipo_sociedad: 'juridico',
            tipo_documento: 'cedula',
            documento: 123123412,
            telefono_factura: 123123,
            email_factura: 'styven21121@gmail.com'
        });
        var userId = this.authService.getUser().user.id;
        this.form.get('usuario_id').patchValue(userId);
    };
    CentroCostoComponent.prototype.cargarArchivo = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var allowedExtensions, file, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
                        file = event.target.files[0];
                        if (!allowedExtensions.test(file.name)) {
                            alert('Archivo no valido');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.helper.readFile(file)];
                    case 1:
                        base64 = _a.sent();
                        this.form.get('anexo').patchValue({
                            file_name: file.name,
                            blob: base64
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CentroCostoComponent.prototype.switchOrdenCompra = function (ordenCompra) {
        this.ordenCompra = ordenCompra;
        this.mostrarOrdenCompra();
    };
    CentroCostoComponent.prototype.mostrarOrdenCompra = function () {
        if (!this.ordenCompra) {
            if (this.form.get('numero_orden') && this.form.get('anexo')) {
                this.form.removeControl('numero_orden');
                this.form.removeControl('anexo');
            }
            return;
        }
        var numeroOrden = this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]);
        var anexo = this.fb.control('');
        this.form.addControl('numero_orden', numeroOrden);
        this.form.addControl('anexo', anexo);
    };
    CentroCostoComponent.prototype.solicitarServicio = function () {
        var data = this.form.value;
        this.store.dispatch(new _store_actions_centro_costo_actions__WEBPACK_IMPORTED_MODULE_5__["CrearCentroCosto"](data));
        this.router.navigate(['./nuevo-servicio/solicitud-servicios']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CentroCostoComponent.prototype, "fileInput", void 0);
    CentroCostoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-centro-costo',
            template: __webpack_require__(/*! ./centro-costo.component.html */ "./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CentroCostoComponent);
    return CentroCostoComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrapper\">\r\n  <div class=\"container mt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 mx-auto\">\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"text-center\">Orden de servicio</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <!-- Button -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-4 control-label\" for=\"ejemplo\">Descargar ejemplo</label>\r\n                <div class=\"col-md-8\">\r\n                  <a [href]=\"fileUrl\" target=\"_blank\" id=\"ejemplo\" class=\"btn btn-success\">\r\n                    <i class=\"fa fa-download\"></i>\r\n                    Descargar archivo de ejemplo\r\n                  </a>\r\n                  <span class=\"small d-block\">Descargue este archivo <br>Agregue la informacion y cargue este archivo</span>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- File Button -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-4 control-label\" for=\"file\">Subir archivo excel</label>\r\n                <div class=\"col-md-8\">\r\n                  <input id=\"file\" name=\"file\" class=\"input-file\" type=\"file\" required (change)=\"cargarArchivo($event)\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <!-- Button -->\r\n              <div class=\"form-group text-center\">\r\n                <button id=\"cargarEspMasivo\"\r\n                        name=\"cargarEspMasivo\"\r\n                        class=\"btn btn-primary\"\r\n                        (click)=\"guardarEspMasivos()\"\r\n                        [disabled]=\"form.status  == 'INVALID'\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                  Cargar ESP masivo\r\n                </button>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SolicitudEspMasivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEspMasivoComponent", function() { return SolicitudEspMasivoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SolicitudEspMasivoComponent = /** @class */ (function () {
    function SolicitudEspMasivoComponent(store, router, dataService) {
        this.store = store;
        this.router = router;
        this.dataService = dataService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            anexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.fileUrl = 'http://localhost:8000/images/demo.xls';
    }
    SolicitudEspMasivoComponent.prototype.ngOnInit = function () {
    };
    SolicitudEspMasivoComponent.prototype.cargarArchivo = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SolicitudEspMasivoComponent.prototype.guardarEspMasivos = function () {
        var _this = this;
        var data = this.form.value;
        console.log(data);
        this.store.select(function (state) { return state.centroCosto; })
            .subscribe(function (value) {
            _this.dataService.almacenarCentroCosto(value)
                .subscribe(function (id) {
                console.log(id);
                _this.dataService.almacenarEspMasivo(id, data)
                    .subscribe(function (res) {
                    console.log('servicios agregados');
                    _this.router.navigate(['/control']);
                });
            });
        });
    };
    SolicitudEspMasivoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-esp-masivo',
            template: __webpack_require__(/*! ./solicitud-esp-masivo.component.html */ "./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SolicitudEspMasivoComponent);
    return SolicitudEspMasivoComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"content-wrapper\">\r\n  <div class=\"container mt-3\">\r\n    <div *ngIf=\"actividades.length == 0\" class=\"d-flex justify-content-center align-content-center\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"actividades.length > 0\" class=\"row\">\r\n      <div class=\"col-md-10 mx-auto\">\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"text-center\">Orden de servicio</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <ng-container formGroupName=\"evaluado\">\r\n                <!-- Evaluado -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"evaluado\"\r\n                         class=\"col-sm-3 col-form-label\">\r\n                    Nombre del Evaluado\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\"\r\n                           class=\"form-control\"\r\n                           id=\"evaluado\"\r\n                           required=\"required\"\r\n                           placeholder=\"Nombre del evaluado\"\r\n                           formControlName=\"evaluado\">\r\n                    <div [hidden]=\"form.get('evaluado').get('evaluado').valid || form.get('evaluado').get('evaluado').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Tipo de documento -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"tipoDocumento\" class=\"col-sm-3 col-form-label\">Tipo de documento</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <select class=\"form-control\" formControlName=\"tipo_documento\" id=\"tipoDocumento\">\r\n                      <option value=\"cc\">C.C. Cedula</option>\r\n                      <option value=\"ti\">T.I. Tarjeta de identidad</option>\r\n                      <option value=\"ce\">C.E. Cedula de extrangeria</option>\r\n                      <option value=\"pa\">P.A. Pasaporte</option>\r\n                      <option value=\"pep\">P.E.P. Permiso especial de permanencia</option>\r\n                    </select>\r\n                    <div [hidden]=\"form.get('evaluado').get('tipo_documento').valid || form.get('evaluado').get('tipo_documento').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Documento de identidad -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"documento\" class=\"col-sm-3 col-form-label\">Numero de documento</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\"\r\n                           class=\"form-control\"\r\n                           id=\"documento\"\r\n                           placeholder=\"Documento de indentidad\"\r\n                           required=\"required\"\r\n                           formControlName=\"documento\">\r\n                    <div [hidden]=\"form.get('evaluado').get('documento').valid || form.get('evaluado').get('documento').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Telefono -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"telefono\" class=\"col-sm-3 col-form-label\">Telefono</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\"\r\n                           class=\"form-control\"\r\n                           id=\"telefono\"\r\n                           required=\"required\"\r\n                           placeholder=\"Telefono\"\r\n                           formControlName=\"telefono\">\r\n                    <div [hidden]=\"form.get('evaluado').get('telefono').valid  || form.get('evaluado').get('telefono').pristine \">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Email -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"email\" class=\"col-sm-3 col-form-label\">Email</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"email\"\r\n                           class=\"form-control\"\r\n                           id=\"email\"\r\n                           required=\"required\"\r\n                           placeholder=\"Email\"\r\n                           formControlName=\"email\">\r\n                    <div [hidden]=\"form.get('evaluado').get('email').valid  || form.get('evaluado').get('email').pristine \">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Direccion -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"direccion\" class=\"col-sm-3 col-form-label\">Dirección</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\"\r\n                           class=\"form-control\"\r\n                           id=\"direccion\"\r\n                           placeholder=\"Ingrese la dirección del evaluado\"\r\n                           required=\"required\"\r\n                           formControlName=\"direccion\">\r\n                    <div [hidden]=\"form.get('evaluado').get('direccion').valid  || form.get('evaluado').get('direccion').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Cargo -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"cargo\" class=\"col-sm-3 col-form-label\">Cargo</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\"\r\n                           class=\"form-control\"\r\n                           id=\"cargo\"\r\n                           placeholder=\"Cargo del evaluado\"\r\n                           required=\"required\"\r\n                           formControlName=\"cargo\">\r\n                    <div [hidden]=\"form.get('evaluado').get('cargo').valid  || form.get('evaluado').get('cargo').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </ng-container>\r\n\r\n              <!-- lugar de desarrollo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"lugarDesarrollo\" class=\"col-sm-3 col-form-label\">Lugar de desarrollo</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\"\r\n                         class=\"form-control\"\r\n                         id=\"lugarDesarrollo\"\r\n                         required=\"required\"\r\n                         placeholder=\"Lugar de desarrollo del servicio\"\r\n                         formControlName=\"lugar_desarrollo\">\r\n                  <div [hidden]=\"form.controls['lugar_desarrollo'].valid  || form.controls['lugar_desarrollo'].pristine\">\r\n                    <div class=\"ng-invalid-feedback\">\r\n                      El campo es requerido\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Observaciones -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"observaciones\" class=\"col-sm-3 col-form-label\">Observaciones</label>\r\n                <div class=\"col-sm-9\">\r\n                    <textarea\r\n                      cols=\"30\" rows=\"5\"\r\n                      class=\"form-control\"\r\n                      id=\"observaciones\"\r\n                      placeholder=\"Observaciones\"\r\n                      formControlName=\"observaciones\">\r\n                    </textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Anexo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"anexo\" class=\"col-sm-3 col-form-label\">\r\n                  Anexo\r\n                </label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"file\" id=\"anexo\" class=\"form-control-file\" (change)=\"cargarArchivo($event)\" #inputFile>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Tipo de servicio -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"anexo\" class=\"col-sm-3 col-form-label\">\r\n                  Tipo de servicio\r\n                </label>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"form-check\">\r\n                    <input (click)=\"selectActividades('basico')\" class=\"form-check-input\"\r\n                           type=\"radio\" name=\"tipo_esp\"\r\n                           id=\"basico\" value=\"basico\"\r\n                           formControlName=\"tipo_esp\"\r\n                           checked>\r\n                    <label class=\"form-check-label\" for=\"basico\">\r\n                      Basico (Historial judicial, Verificacion Academica, Verificacion Laboral, Visita Domiciliaria)\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <input (click)=\"selectActividades('integral')\" class=\"form-check-input\"\r\n                           type=\"radio\" name=\"tipo_esp\"\r\n                           id=\"integral\" value=\"integral\"\r\n                           formControlName=\"tipo_esp\">\r\n                    <label class=\"form-check-label\"for=\"integral\">\r\n                      Integral (Basico + Poligrafia)\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <input (click)=\"selectActividades('avanzado')\" class=\"form-check-input\"\r\n                           type=\"radio\" name=\"tipo_esp\"\r\n                           id=\"avanzado\" value=\"avanzado\"\r\n                           formControlName=\"tipo_esp\">\r\n                    <label class=\"form-check-label\" for=\"avanzado\">\r\n                      Avanzado (Integral + Estudio financiero)\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\">Actividades</label>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"form-check\" *ngFor=\"let value of actividades; index as i\">\r\n                    <input (click)=\"setDefaultEsp()\" [id]=\"value.id\" type=\"checkbox\" class=\"form-check-input\" name=\"actividades\" [value]=\"value.codigo\">\r\n                    <label [for]=\"i\"class=\"form-check-label\">{{ value.nombre }}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Aceptar terminos -->\r\n              <div class=\"form-check text-center mt-2\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"checkbox\"\r\n                       [value]=\"false\" id=\"aceptarTerminos\"\r\n                       formControlName=\"aceptar_terminos\"\r\n                       required>\r\n                <label (click)=\"openMdTerminos(mdTerminos)\"  class=\"form-check-label\" for=\"aceptarTerminos\">\r\n                  Aceptar terminos y condiciones\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mx-auto\">\r\n              <button class=\"btn btn-primary\"\r\n                      [disabled]=\"form.status == 'INVALID'\"\r\n                      (click)=\"crearServicio()\">\r\n                <i class=\"fa fa-plus\"></i>\r\n                Agregar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"servicios.length > 0\">\r\n    <div class=\"col-md-10 mx-auto col-sm-12 mt-3\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fas fa-table\"></i>\r\n          Servicios solicitados</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n              <tr class=\"text-capitalize\">\r\n                <th>fecha creacion</th>\r\n                <th>evaluado</th>\r\n                <th>datos del evaluado</th>\r\n                <th>tipo de ESP</th>\r\n                <th>hoja de vida</th>\r\n                <th>acciones</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n              <tr *ngFor=\"let item of servicios; index as i\">\r\n                <th>{{ today | date }}</th>\r\n                <th>{{ item.evaluado.evaluado }}</th>\r\n                <th>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-sm btn-success\"\r\n                            (click)=\"verDetalle(mdDetalle, i)\">\r\n                      <i class=\"fa fa-eye\"></i>\r\n                      Ver detalle\r\n                    </button>\r\n                  </div>\r\n                </th>\r\n                <th class=\"text-capitalize\">{{ item.tipo_esp }}</th>\r\n                <th class=\"text-capitalize\">{{ item.anexo ? 'Si' : 'No' }}</th>\r\n                <th>\r\n                  <div class=\"mx-auto\">\r\n                    <div class=\"custom-control-inline\" >\r\n                      <button class=\"btn btn-sm btn-primary\"\r\n                              (click)=\"verDetalle(mdDetalle, i, true)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                        Editar\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"custom-control-inline\">\r\n                      <button class=\"btn btn-sm btn-danger\"\r\n                              (click)=\"eliminarServicioEsp(i)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                        Eliminar\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer \">\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"guardarServiciosEsp()\">\r\n              <i class=\"fa fa-save\"></i>\r\n              Guardar servicios\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #mdDetalle let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Detalle del servicio</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\r\n      <span>&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <fieldset [disabled]=\"!control.editar\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <!--evaluado-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-evaluado\">Nombre del evaluado</label>\r\n            <input type=\"text\" id=\"m-evaluado\" class=\"form-control\" [(ngModel)]=\"detalle.evaluado.evaluado\">\r\n          </div>\r\n\r\n          <!--documento-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-tipoDocumento\">Documento de identidad</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"detalle.evaluado.tipo_documento\" id=\"m-tipoDocumento\">\r\n              <option value=\"cc\">C.C. Cedula</option>\r\n              <option value=\"ti\">T.I. Tarjeta de identidad</option>\r\n              <option value=\"ce\">C.E. Cedula de extrangeria</option>\r\n              <option value=\"pa\">P.A. Pasaporte</option>\r\n              <option value=\"pep\">P.E.P. Permiso especial de permanencia</option>\r\n            </select>\r\n          </div>\r\n\r\n          <!--documento-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-documento\">Numero de documento</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"m-documento\"  [(ngModel)]=\"detalle.evaluado.documento\">\r\n          </div>\r\n\r\n          <!--Ciudad desarrollo-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-ciudad\">Ciudad de desarrollo</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"m-ciudad\"  [(ngModel)]=\"detalle.lugar_desarrollo\">\r\n          </div>\r\n\r\n          <!--cargo-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-email\">Cargo</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"m-cargo\"  [(ngModel)]=\"detalle.evaluado.cargo\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n\r\n          <!--telefono-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-telefono\">Telefono</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"m-telefono\"  [(ngModel)]=\"detalle.evaluado.telefono\">\r\n          </div>\r\n\r\n          <!--email-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"m-email\"  [(ngModel)]=\"detalle.evaluado.email\">\r\n          </div>\r\n\r\n          <!--observaciones-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-obs\">Observaciones</label>\r\n            <textarea\r\n              rows=\"3\"\r\n              class=\"form-control\"\r\n              id=\"m-obs\"\r\n              [(ngModel)]=\"detalle.observaciones\">\r\n              </textarea>\r\n          </div>\r\n\r\n          <div class=\"\" *ngIf=\"!control.editar\">\r\n            <!-- tipo servicio -->\r\n            <div class=\"form-group\">\r\n              <label>Tipo de esp</label>\r\n              <div class=\"d-block\">\r\n                <span class=\"badge badge-success\">{{ detalle.tipo_esp }}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- anexo -->\r\n            <div class=\"form-group\" *ngIf=\"detalle.anexo\">\r\n              <label>Anexo</label>\r\n              <div class=\"d-block\">\r\n                <i class=\"fa fa-file\"></i>\r\n                {{ detalle.anexo.file_name }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"\" *ngIf=\"control.editar\">\r\n            <!-- tipo servicio -->\r\n            <div class=\"form-group\">\r\n              <label for=\"m-basico\">\r\n                Tipo de Esp\r\n              </label>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\" id=\"m-basico\"\r\n                       value=\"basico\"\r\n                       [(ngModel)]=\"detalle.tipo_esp\" checked>\r\n                <label class=\"form-check-label\" for=\"m-basico\">\r\n                  Basico\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\" id=\"m-integral\"\r\n                       value=\"integral\"\r\n                       [(ngModel)]=\"detalle.tipo_esp\">\r\n                <label class=\"form-check-label\" for=\"m-integral\">\r\n                  Integral\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\" id=\"m-avanzado\"\r\n                       value=\"avanzado\"\r\n                       [(ngModel)]=\"detalle.tipo_esp\" >\r\n                <label class=\"form-check-label\" for=\"m-avanzado\">\r\n                  Avanzado\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- anexo -->\r\n            <div class=\"form-group\">\r\n              <label for=\"m-anexo\">\r\n                Anexo\r\n              </label>\r\n              <input type=\"file\" id=\"m-anexo\" (change)=\"cargarArchivo($event, true)\" class=\"form-control-file\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button *ngIf=\"control.editar\"\r\n            class=\"btn btn-success mr-2\" (click)=\"guardarCambios(modal)\">\r\n      <i class=\"fa fa-save\"></i>\r\n      Guardar\r\n    </button>\r\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">\r\n      <i class=\"fa fa-close\"></i>\r\n      Cerrar\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #mdTerminos let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4>Terminos y condiciones</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SolicitudEspComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudEspComponent", function() { return SolicitudEspComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_esp_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/esp.actions */ "./src/app/pages/solicitud-servicio/store/actions/esp.actions.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _shared_services_actividad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/actividad.service */ "./src/app/shared/services/actividad.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SolicitudEspComponent = /** @class */ (function () {
    function SolicitudEspComponent(fb, store, modalService, helper, actividadService) {
        this.fb = fb;
        this.store = store;
        this.modalService = modalService;
        this.helper = helper;
        this.actividadService = actividadService;
        this.form = this.fb.group({
            evaluado: this.fb.group({
                evaluado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                tipo_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            lugar_desarrollo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observaciones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            anexo: [''],
            tipo_esp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            aceptar_terminos: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.control = {
            editar: false,
            id: 0
        };
        this.servicios = [];
        this.today = new Date().getTime();
        this.actividades = [];
        this.espSelect = function (state) { return state.solicitudServicio.esp; };
    }
    SolicitudEspComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.setValue({
            evaluado: {
                evaluado: 'asds',
                tipo_documento: 'cc',
                documento: 12345678,
                telefono: 3600255,
                email: 'styven21121@gmail.com',
                direccion: 'cll 16 # 20 -16',
                cargo: 'algo',
            },
            lugar_desarrollo: 'Bogota',
            observaciones: 'datos',
            tipo_esp: 'basico',
            anexo: '',
            aceptar_terminos: false
        });
        this.store.select(this.espSelect)
            .subscribe(function (value) { return _this.servicios = value; });
        this.actividadService.get('ESP').subscribe(function (response) {
            _this.actividades = response;
            setTimeout(function () { return _this.selectActividades('basico'); }, 500);
        });
    };
    SolicitudEspComponent.prototype.selectActividades = function (type) {
        var actividades$ = document.getElementsByName('actividades');
        actividades$.forEach((function (value) { return value.checked = false; }));
        switch (type) {
            case 'basico':
                var espBasico_1 = this.actividadService.espBasico;
                actividades$.forEach(function (value) {
                    for (var _i = 0, espBasico_2 = espBasico_1; _i < espBasico_2.length; _i++) {
                        var item = espBasico_2[_i];
                        if (value.value === item) {
                            value.checked = true;
                        }
                    }
                });
                break;
            case 'integral':
                var espIntegral_1 = this.actividadService.espIntegral;
                actividades$.forEach(function (value) {
                    for (var _i = 0, espIntegral_2 = espIntegral_1; _i < espIntegral_2.length; _i++) {
                        var item = espIntegral_2[_i];
                        if (value.value === item) {
                            value.checked = true;
                        }
                    }
                });
                break;
            case 'avanzado':
                var espAvanzado_1 = this.actividadService.espAvanzado;
                actividades$.forEach(function (value) {
                    for (var _i = 0, espAvanzado_2 = espAvanzado_1; _i < espAvanzado_2.length; _i++) {
                        var item = espAvanzado_2[_i];
                        if (value.value === item) {
                            value.checked = true;
                        }
                    }
                });
                break;
        }
    };
    SolicitudEspComponent.prototype.setDefaultEsp = function () {
        var espBasico = document.getElementById('basico');
        espBasico.checked = true;
    };
    SolicitudEspComponent.prototype.getActividades = function () {
        var actividades$ = document.getElementsByName('actividades');
        var actividadesSelected = [];
        actividades$.forEach(function (value) {
            if (value.checked) {
                actividadesSelected.push({
                    actividad_id: value.id
                });
            }
        });
        return actividadesSelected;
    };
    SolicitudEspComponent.prototype.obtenerServicio = function (index) {
        return Object.assign({}, this.servicios[index]);
    };
    SolicitudEspComponent.prototype.cargarArchivo = function (event, editar) {
        if (editar === void 0) { editar = false; }
        return __awaiter(this, void 0, void 0, function () {
            var allowedExtensions, file, base64, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
                        file = event.target.files[0];
                        console.log(file);
                        if (!allowedExtensions.test(file.name)) {
                            alert('Archivo no valido');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.helper.readFile(file)];
                    case 1:
                        base64 = _a.sent();
                        data = {
                            file_name: file.name,
                            blob: base64
                        };
                        editar
                            ? this.detalle.anexo = data
                            : this.form.get('anexo').patchValue(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    SolicitudEspComponent.prototype.crearServicio = function () {
        var data = this.form.value;
        data.actividades = this.getActividades();
        this.store.dispatch(new _store_actions_esp_actions__WEBPACK_IMPORTED_MODULE_3__["CrearEsp"](data));
        this.form.reset();
        this.inputFileReset();
    };
    SolicitudEspComponent.prototype.verDetalle = function (content, index, editar) {
        if (editar === void 0) { editar = false; }
        this.control.id = index;
        this.control.editar = editar;
        this.detalle = this.obtenerServicio(index);
        this.modalService.open(content, { size: 'lg' });
    };
    SolicitudEspComponent.prototype.guardarCambios = function (content) {
        var id = this.control.id;
        console.log(this.detalle);
        this.store.dispatch(new _store_actions_esp_actions__WEBPACK_IMPORTED_MODULE_3__["EditarEsp"](this.detalle, id));
        this.resetControl();
        content.close();
    };
    SolicitudEspComponent.prototype.eliminarServicioEsp = function (id) {
        var confirm = window.confirm('Esta seguro de eliminar este servicio?');
        if (!confirm) {
            return;
        }
        this.store.dispatch(new _store_actions_esp_actions__WEBPACK_IMPORTED_MODULE_3__["EliminarEsp"](id));
    };
    SolicitudEspComponent.prototype.resetControl = function () {
        this.control.editar = false;
        this.control.id = 0;
        this.detalle = null;
    };
    SolicitudEspComponent.prototype.guardarServiciosEsp = function () {
        var confirm = window.confirm('Esta seguro de solicitar los servicios?');
        if (!confirm) {
            return;
        }
        this.store.dispatch(new _store_actions_esp_actions__WEBPACK_IMPORTED_MODULE_3__["AlmacenarEsps"]());
    };
    SolicitudEspComponent.prototype.openMdTerminos = function (content) {
        this.modalService.open(content);
    };
    SolicitudEspComponent.prototype.inputFileReset = function () {
        this.inputFile.nativeElement.value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolicitudEspComponent.prototype, "inputFile", void 0);
    SolicitudEspComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicio-esp',
            template: __webpack_require__(/*! ./solicitud-esp.component.html */ "./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"],
            _shared_services_actividad_service__WEBPACK_IMPORTED_MODULE_6__["ActividadService"]])
    ], SolicitudEspComponent);
    return SolicitudEspComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrapper\">\r\n  <div class=\"container mt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 mx-auto mb-3\">\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"text-center\">Orden de servicio</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n\r\n              <!-- lugar Desarrollo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"lugarDesarrollo\" class=\"col-sm-3 col-form-label\">Ciudad</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\"\r\n                         class=\"form-control\"\r\n                         id=\"lugarDesarrollo\"\r\n                         placeholder=\"Lugar de desarrollo\"\r\n                         required=\"required\"\r\n                         formControlName=\"lugar_desarrollo\">\r\n                  <div [hidden]=\"form.controls['lugar_desarrollo'].valid  || form.controls['lugar_desarrollo'].pristine\">\r\n                    <div class=\"ng-invalid-feedback\">\r\n                      El campo es requerido\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- descripcion -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"descripcion\" class=\"col-sm-3 col-form-label\">Descripcion</label>\r\n                <div class=\"col-sm-9\">\r\n                  <textarea\r\n                    cols=\"30\" rows=\"5\"\r\n                    class=\"form-control\"\r\n                    id=\"descripcion\"\r\n                    name=\"descripcion\"\r\n                    placeholder=\"Descripción de la investigacion\"\r\n                    formControlName=\"descripcion\">\r\n                  </textarea>\r\n                  <div [hidden]=\"form.controls['descripcion'].valid  || form.controls['descripcion'].pristine\">\r\n                    <div class=\"ng-invalid-feedback\">\r\n                      El campo es requerido\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- anexo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"anexo\" class=\"col-sm-3 col-form-label\">\r\n                  Anexo\r\n                </label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"file\" id=\"anexo\" class=\"form-control-file\"\r\n                         (change)=\"cargarArchivo($event)\" #inputFile>\r\n                  <span class=\"small\">Si es mas de un archivo, favor adjuntar un archivo comprimido</span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group mx-auto\">\r\n              <button class=\"btn btn-primary\"\r\n                      [disabled]=\"form.status == 'INVALID'\"\r\n                      (click)=\"crearServicio()\">\r\n                <i class=\"fa fa-plus\"></i>\r\n                Agregar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"servicios.length > 0\">\r\n    <div class=\"col-md-10 mx-auto col-sm-12 mt-3\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fas fa-table\"></i>\r\n          Servicios solicitados\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n              <tr class=\"text-capitalize text-center\">\r\n                <th>fecha de creacion</th>\r\n                <th>detalles de investigación</th>\r\n                <th>anexo</th>\r\n                <th>acciónes</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n              <tr *ngFor=\"let item of servicios; index as i\">\r\n                <td>{{ today | date }}</td>\r\n                <td class=\"text-center\">\r\n                  <button class=\"btn btn-sm btn-success\"\r\n                          (click)=\"verDetalle(mdInvestigacion, i)\">\r\n                    <i class=\"fa fa-eye\"></i>\r\n                    Detalles\r\n                  </button>\r\n                </td>\r\n                <th>{{ item.anexo ? 'Si': 'No' }}</th>\r\n                <td>\r\n                  <div class=\"text-center\">\r\n                    <div class=\"custom-control-inline\" >\r\n                      <button class=\"btn btn-sm btn-primary\"\r\n                              (click)=\"verDetalle(mdInvestigacion, i, true)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                        Editar\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"custom-control-inline\">\r\n                      <button class=\"btn btn-sm btn-danger\"\r\n                              (click)=\"eliminarServicio(i)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                        Eliminar\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer \">\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"guardarServicios()\">\r\n              <i class=\"fa fa-save\"></i>\r\n              Guardar servicios\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- modal -->\r\n<ng-template #mdInvestigacion let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Detalle del servicio</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\r\n      <span>&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <fieldset [disabled]=\"!control.editar\">\r\n      <!--ciudad-->\r\n      <div class=\"form-group\">\r\n        <label for=\"m-ciudad\">Ciudad</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"m-ciudad\"  [(ngModel)]=\"servicio.lugar_desarrollo\">\r\n      </div>\r\n\r\n      <!--descripcion-->\r\n      <div class=\"form-group\">\r\n        <label for=\"m-descripcion\">Descripcion</label>\r\n        <textarea\r\n          rows=\"4\"\r\n          class=\"form-control\"\r\n          id=\"m-descripcion\"\r\n          [(ngModel)]=\"servicio.descripcion\">\r\n        </textarea>\r\n      </div>\r\n\r\n      <!--read-->\r\n      <div *ngIf=\"!control.editar\">\r\n        <!-- anexo-->\r\n        <div class=\"form-group\" *ngIf=\"servicio.anexo\">\r\n          <label>Anexo</label>\r\n          <div class=\"d-block\">\r\n            <i class=\"fa fa-file\"></i>\r\n            {{ servicio.anexo.file_name }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--write-->\r\n      <div *ngIf=\"control.editar\">\r\n        <!-- anexo -->\r\n        <div class=\"form-group\">\r\n          <label for=\"m-anexo\" class=\"tooltip\">\r\n            Anexo\r\n          </label>\r\n\r\n          <input type=\"file\" id=\"m-anexo\" (change)=\"cargarArchivo($event, true)\" class=\"form-control-file\">\r\n        </div>\r\n      </div>\r\n\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button *ngIf=\"control.editar\"\r\n            class=\"btn btn-success mr-2\" (click)=\"guardarCambios(modal)\">\r\n      <i class=\"fa fa-save\"></i>\r\n      Guardar\r\n    </button>\r\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">\r\n      <i class=\"fa fa-close\"></i>\r\n      Cerrar\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SolicitudInvestigacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudInvestigacionComponent", function() { return SolicitudInvestigacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/pages/solicitud-servicio/store/selectors/index.ts");
/* harmony import */ var _store_actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/investigacion.actions */ "./src/app/pages/solicitud-servicio/store/actions/investigacion.actions.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SolicitudInvestigacionComponent = /** @class */ (function () {
    function SolicitudInvestigacionComponent(store, modalService, helper, fb) {
        this.store = store;
        this.modalService = modalService;
        this.helper = helper;
        this.fb = fb;
        this.form = this.fb.group({
            lugar_desarrollo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            anexo: '',
        });
        this.control = {
            editar: false,
            id: 0
        };
        this.servicios = [];
        this.today = new Date().getTime();
    }
    SolicitudInvestigacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["getInvestigaciones"]).subscribe(function (value) { return _this.servicios = value; });
    };
    SolicitudInvestigacionComponent.prototype.obtenerServicio = function (index) {
        return Object.assign({}, this.servicios[index]);
    };
    SolicitudInvestigacionComponent.prototype.cargarArchivo = function (event, editar) {
        if (editar === void 0) { editar = false; }
        return __awaiter(this, void 0, void 0, function () {
            var size, allowedExtensions, file, base64, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        size = 3000000;
                        allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
                        file = event.target.files[0];
                        if (!allowedExtensions.test(file.name)) {
                            alert('Archivo no valido');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        if (file.size > size) {
                            alert('El archivo no debe superar los 3MB');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.helper.readFile(file)];
                    case 1:
                        base64 = _a.sent();
                        data = {
                            file_name: file.name,
                            blob: base64
                        };
                        editar
                            ? this.servicio.anexo = data
                            : this.form.get('anexo').patchValue(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    SolicitudInvestigacionComponent.prototype.crearServicio = function () {
        var data = this.form.value;
        this.store.dispatch(new _store_actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_5__["CrearInvestigacion"](data));
        this.form.reset();
        this.inputFileReset();
    };
    SolicitudInvestigacionComponent.prototype.verDetalle = function (content, index, editar) {
        if (editar === void 0) { editar = false; }
        this.control.id = index;
        this.control.editar = editar;
        this.servicio = this.obtenerServicio(index);
        this.modalService.open(content);
    };
    SolicitudInvestigacionComponent.prototype.guardarCambios = function (modal) {
        var id = this.control.id;
        this.store.dispatch(new _store_actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_5__["EditarInvestigacion"](this.servicio, id));
        modal.close();
    };
    SolicitudInvestigacionComponent.prototype.eliminarServicio = function (id) {
        var confirm = window.confirm('Esta seguro de eliminar este servicio?');
        if (!confirm) {
            return;
        }
        this.store.dispatch(new _store_actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_5__["EliminarInvestigacion"](id));
    };
    SolicitudInvestigacionComponent.prototype.guardarServicios = function () {
        var confirm = window.confirm('Esta seguro de solicitar los servicios?');
        if (!confirm) {
            return;
        }
        this.store.dispatch(new _store_actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_5__["AlmacenarInvestigaciones"]());
    };
    SolicitudInvestigacionComponent.prototype.inputFileReset = function () {
        this.inputFile.nativeElement.value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolicitudInvestigacionComponent.prototype, "inputFile", void 0);
    SolicitudInvestigacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-investigacion',
            template: __webpack_require__(/*! ./solicitud-investigacion.component.html */ "./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SolicitudInvestigacionComponent);
    return SolicitudInvestigacionComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrapper\">\r\n  <div class=\"container mt-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 mx-auto\">\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <h4 class=\"text-center\">Orden de servicio</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div formGroupName=\"evaluado\">\r\n                <!-- nombre evaluado -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"evaluado\" class=\"col-sm-3 col-form-label\">\r\n                    Nombre del Evaluado\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\"\r\n                           class=\"form-control\"\r\n                           id=\"evaluado\"\r\n                           required=\"required\"\r\n                           placeholder=\"Nombre del evaluado\"\r\n                           formControlName=\"evaluado\">\r\n                    <div [hidden]=\"form.get('evaluado').get('evaluado').valid || form.get('evaluado').get('evaluado').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Tipo de documento -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"tipoDocumento\" class=\"col-sm-3 col-form-label\">Tipo de documento</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <select class=\"form-control\" formControlName=\"tipo_documento\" id=\"tipoDocumento\">\r\n                      <option value=\"cc\">C.C. Cedula</option>\r\n                      <option value=\"ti\">T.I. Tarjeta de identidad</option>\r\n                      <option value=\"ce\">C.E. Cedula de extrangeria</option>\r\n                      <option value=\"pa\">P.A. Pasaporte</option>\r\n                      <option value=\"pep\">P.E.P. Permiso especial de permanencia</option>\r\n                    </select>\r\n                    <div [hidden]=\"form.get('evaluado').get('tipo_documento').valid || form.get('evaluado').get('tipo_documento').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- documento -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"documento\" class=\"col-sm-3 col-form-label\">\r\n                    Numero de documento\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\"\r\n                           class=\"form-control\"\r\n                           id=\"documento\"\r\n                           placeholder=\"Documento de indentidad\"\r\n                           required=\"required\"\r\n                           formControlName=\"documento\">\r\n                    <div [hidden]=\"form.get('evaluado').get('documento').valid || form.get('evaluado').get('documento').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- telefono -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"telefono\" class=\"col-sm-3 col-form-label\">Telefono</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"number\"\r\n                           class=\"form-control\"\r\n                           id=\"telefono\"\r\n                           required=\"required\"\r\n                           placeholder=\"Telefono del evaluado\"\r\n                           formControlName=\"telefono\">\r\n                    <div [hidden]=\"form.get('evaluado').get('telefono').valid  || form.get('evaluado').get('telefono').pristine \">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- email -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"email\" class=\"col-sm-3 col-form-label\">Email</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"email\"\r\n                           class=\"form-control\"\r\n                           id=\"email\"\r\n                           required=\"required\"\r\n                           placeholder=\"email del evaluado\"\r\n                           formControlName=\"email\">\r\n                    <div [hidden]=\"form.get('evaluado').get('email').valid  || form.get('evaluado').get('email').pristine \">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Cargo -->\r\n                <div class=\"form-group row\">\r\n                  <label for=\"cargo\" class=\"col-sm-3 col-form-label\">Cargo</label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"text\"\r\n                           class=\"form-control\"\r\n                           id=\"cargo\"\r\n                           placeholder=\"Cargo del evaluado\"\r\n                           required=\"required\"\r\n                           formControlName=\"cargo\">\r\n                    <div [hidden]=\"form.get('evaluado').get('cargo').valid  || form.get('evaluado').get('cargo').pristine\">\r\n                      <div class=\"ng-invalid-feedback\">\r\n                        El campo es requerido\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <!-- lugar de desarrollo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"lugarDesarrollo\" class=\"col-sm-3 col-form-label\">\r\n                  Lugar de desarrollo\r\n                </label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\"\r\n                         class=\"form-control\"\r\n                         id=\"lugarDesarrollo\"\r\n                         required=\"required\"\r\n                         placeholder=\"Ingrese el lugar de desarrollo de la prueba\"\r\n                         formControlName=\"lugar_desarrollo\">\r\n                  <div [hidden]=\"form.controls['lugar_desarrollo'].valid || form.controls['lugar_desarrollo'].pristine\">\r\n                    <div class=\"ng-invalid-feedback\">\r\n                      El campo es requerido\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- contexo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"contexto\" class=\"col-sm-3 col-form-label\">Contexto</label>\r\n                <div class=\"col-sm-9\">\r\n                  <textarea\r\n                        cols=\"30\" rows=\"5\"\r\n                        class=\"form-control\"\r\n                        id=\"contexto\"\r\n                        name=\"contexto\"\r\n                        placeholder=\"Contexto\"\r\n                        formControlName=\"contexto\">\r\n                  </textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- tipo poligrafia -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"pre-empleo\" class=\"col-sm-3 col-form-label\">\r\n                  Tipo de poligrafia\r\n                </label>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"form-check\">\r\n                    <input class=\"form-check-input\"\r\n                           type=\"radio\" name=\"tipo_poligrafia\"\r\n                           id=\"pre-empleo\" value=\"pre-empleo\"\r\n                           formControlName=\"tipo_poligrafia\"\r\n                           checked>\r\n                    <label class=\"form-check-label\" for=\"pre-empleo\">\r\n                      Pre-empleo\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <input class=\"form-check-input\"\r\n                           type=\"radio\" name=\"tipo_poligrafia\"\r\n                           id=\"rutina\" value=\"rutina\"\r\n                           formControlName=\"tipo_poligrafia\">\r\n                    <label class=\"form-check-label\" for=\"rutina\">\r\n                      Rutina\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"form-check\">\r\n                    <input class=\"form-check-input\"\r\n                           type=\"radio\" name=\"tipo_poligrafia\"\r\n                           id=\"especifico\" value=\"especifico\"\r\n                           formControlName=\"tipo_poligrafia\">\r\n                    <label class=\"form-check-label\" for=\"especifico\">\r\n                      Especifico\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- anexo -->\r\n              <div class=\"form-group row\">\r\n                <label for=\"anexo\" class=\"col-sm-3 col-form-label\">\r\n                  Anexo\r\n                </label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"file\" id=\"anexo\"\r\n                         (change)=\"cargarArchivo($event)\"\r\n                         class=\"form-control-file\" #inputFile>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group mx-auto\">\r\n              <button class=\"btn btn-primary\"\r\n                      [disabled]=\"form.status == 'INVALID'\"\r\n                      (click)=\"crearServicio()\">\r\n                <i class=\"fa fa-plus\"></i>\r\n                Agregar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"servicios.length > 0\">\r\n    <div class=\"col-md-10 mx-auto col-sm-12 mt-3\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fas fa-table\"></i>\r\n          Servicios solicitados</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\r\n              <thead>\r\n              <tr class=\"text-capitalize\">\r\n                <th>fecha de creacion</th>\r\n                <th>evaluado</th>\r\n                <th>datos del evaluado</th>\r\n                <th>tipo de poligrafia</th>\r\n                <th>Acciones</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of servicios; index as i\">\r\n                  <td>{{ today | date }}</td>\r\n                  <td>{{ item.evaluado.evaluado }}</td>\r\n                  <td>\r\n                    <button class=\"btn btn-sm btn-success\"\r\n                            (click)=\"verDetalle(mdPoligrafia, i)\">\r\n                      <i class=\"fa fa-eye\"></i>\r\n                      Detalle\r\n                    </button>\r\n                  </td>\r\n                  <td>{{ item.tipo_poligrafia }}</td>\r\n                  <td>\r\n                    <div class=\"mx-auto\">\r\n                      <div class=\"custom-control-inline\" >\r\n                        <button class=\"btn btn-sm btn-primary\"\r\n                                (click)=\"verDetalle(mdPoligrafia, i, true)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                          Editar\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"custom-control-inline\">\r\n                        <button class=\"btn btn-sm btn-danger\"\r\n                                (click)=\"eliminarServicio(i)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                          Eliminar\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer \">\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"guardarServicios()\">\r\n              <i class=\"fa fa-save\"></i>\r\n              Guardar servicios\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #mdPoligrafia let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Detalle del servicio</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\r\n      <span>&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <fieldset [disabled]=\"!control.editar\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <!--evaluado-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-evaluado\">Nombre del evaluado</label>\r\n            <input type=\"text\" id=\"m-evaluado\" class=\"form-control\" [(ngModel)]=\"servicio.evaluado.evaluado\">\r\n          </div>\r\n\r\n          <!--tipo documento-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-tipoDocumento\">Documento de identidad</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"servicio.evaluado.tipo_documento\" id=\"m-tipoDocumento\">\r\n              <option value=\"cc\">C.C. Cedula</option>\r\n              <option value=\"ti\">T.I. Tarjeta de identidad</option>\r\n              <option value=\"ce\">C.E. Cedula de extrangeria</option>\r\n              <option value=\"pa\">P.A. Pasaporte</option>\r\n              <option value=\"pep\">P.E.P. Permiso especial de permanencia</option>\r\n            </select>\r\n          </div>\r\n\r\n          <!--documento-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-documento\">Numero de documento</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"m-documento\"  [(ngModel)]=\"servicio.evaluado.documento\">\r\n          </div>\r\n\r\n          <!--contexto-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-contexto\">Contexto</label>\r\n            <textarea\r\n              rows=\"4\"\r\n              class=\"form-control\"\r\n              id=\"m-contexto\"\r\n              [(ngModel)]=\"servicio.contexto\">\r\n          </textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n\r\n          <!--ciudad-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-cargo\">Cargo</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"m-cargo\"  [(ngModel)]=\"servicio.evaluado.cargo\">\r\n          </div>\r\n\r\n          <!--ciudad-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-ciudad\">Ciudad</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"m-ciudad\"  [(ngModel)]=\"servicio.lugar_desarrollo\">\r\n          </div>\r\n\r\n          <!--telefono-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-telefono\">Telefono</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"m-telefono\"  [(ngModel)]=\"servicio.evaluado.telefono\">\r\n          </div>\r\n\r\n          <!--email-->\r\n          <div class=\"form-group\">\r\n            <label for=\"m-email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"m-email\"  [(ngModel)]=\"servicio.evaluado.email\">\r\n          </div>\r\n\r\n          <!--read-->\r\n          <div *ngIf=\"!control.editar\">\r\n            <!-- tipo poligrafia -->\r\n            <div class=\"form-group\">\r\n              <label>Tipo de poligrafia</label>\r\n              <div class=\"d-block\">\r\n                <span class=\"badge badge-success\">{{ servicio.tipo_poligrafia }}</span>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- anexo-->\r\n            <div class=\"form-group\" *ngIf=\"servicio.anexo\">\r\n              <label>Anexo</label>\r\n              <div class=\"d-block\">\r\n                <i class=\"fa fa-file\"></i>\r\n                {{ servicio.anexo.fileName }}\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!--write-->\r\n          <div *ngIf=\"control.editar\">\r\n            <!-- tipo poligrafia -->\r\n            <div class=\"form-group\">\r\n              <label for=\"m-pre-empleo\">\r\n                Tipo de poligrafia\r\n              </label>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\" id=\"m-pre-empleo\"\r\n                       name=\"m-tipoPoligrafia\"\r\n                       value=\"pre-empleo\"\r\n                       [(ngModel)]=\"servicio.tipo_poligrafia\" checked>\r\n                <label class=\"form-check-label\" for=\"m-pre-empleo\">\r\n                  Pre-empleo\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\" id=\"m-rutina\"\r\n                       name=\"m-tipoPoligrafia\"\r\n                       value=\"rutina\"\r\n                       [(ngModel)]=\"servicio.tipo_poligrafia\">\r\n                <label class=\"form-check-label\" for=\"m-rutina\">\r\n                  Rutina\r\n                </label>\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\" id=\"m-especifico\"\r\n                       name=\"m-tipoPoligrafia\"\r\n                       value=\"especifico\"\r\n                       [(ngModel)]=\"servicio.tipo_poligrafia\" >\r\n                <label class=\"form-check-label\" for=\"m-especifico\">\r\n                  Especifico\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- anexo -->\r\n            <div class=\"form-group\">\r\n              <label for=\"m-anexo\">\r\n                Anexo\r\n              </label>\r\n              <input type=\"file\" id=\"m-anexo\" (change)=\"cargarArchivo($event, true)\" class=\"form-control-file\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button *ngIf=\"control.editar\"\r\n            class=\"btn btn-success mr-2\" (click)=\"guardarCambios(modal)\">\r\n      <i class=\"fa fa-save\"></i>\r\n      Guardar\r\n    </button>\r\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">\r\n      <i class=\"fa fa-close\"></i>\r\n      Cerrar\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: SolicitudPoligrafiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPoligrafiaComponent", function() { return SolicitudPoligrafiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/selectors */ "./src/app/pages/solicitud-servicio/store/selectors/index.ts");
/* harmony import */ var _store_actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/poligrafia.actions */ "./src/app/pages/solicitud-servicio/store/actions/poligrafia.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SolicitudPoligrafiaComponent = /** @class */ (function () {
    function SolicitudPoligrafiaComponent(fb, store, modalService, helper) {
        this.fb = fb;
        this.store = store;
        this.modalService = modalService;
        this.helper = helper;
        this.form = this.fb.group({
            evaluado: this.fb.group({
                evaluado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                tipo_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                documento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            lugar_desarrollo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contexto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tipo_poligrafia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            anexo: '',
        });
        this.control = {
            editar: false,
            id: 0
        };
        this.servicios = [];
        this.today = new Date().getTime();
    }
    SolicitudPoligrafiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.setValue({
            evaluado: {
                evaluado: 'cristian',
                tipo_documento: 'cc',
                documento: 1026595856,
                telefono: 3600255,
                email: 'styven22121@gmail.com',
                cargo: 'algo',
            },
            lugar_desarrollo: 'Bogota',
            contexto: 'contexto',
            tipo_poligrafia: 'pre-empleo',
            anexo: ''
        });
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["getPoligrafias"]).subscribe(function (value) { return _this.servicios = value; });
    };
    SolicitudPoligrafiaComponent.prototype.obtenerServicio = function (index) {
        return Object.assign({}, this.servicios[index]);
    };
    SolicitudPoligrafiaComponent.prototype.cargarArchivo = function (event, editar) {
        if (editar === void 0) { editar = false; }
        return __awaiter(this, void 0, void 0, function () {
            var allowedExtensions, file, base64, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
                        file = event.target.files[0];
                        if (!allowedExtensions.test(file.name)) {
                            alert('Archivo no valido');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.helper.readFile(file)];
                    case 1:
                        base64 = _a.sent();
                        data = {
                            file_name: file.name,
                            blob: base64
                        };
                        editar
                            ? this.servicio.anexo = data
                            : this.form.get('anexo').patchValue(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    SolicitudPoligrafiaComponent.prototype.crearServicio = function () {
        var data = this.form.value;
        this.store.dispatch(new _store_actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_6__["CrearPoligrafia"](data));
        this.form.reset();
        this.inputFileReset();
    };
    SolicitudPoligrafiaComponent.prototype.verDetalle = function (content, index, editar) {
        if (editar === void 0) { editar = false; }
        this.control.id = index;
        this.control.editar = editar;
        this.servicio = this.obtenerServicio(index);
        this.modalService.open(content, { size: 'lg' });
    };
    SolicitudPoligrafiaComponent.prototype.guardarCambios = function (modal) {
        var id = this.control.id;
        this.store.dispatch(new _store_actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_6__["EditarPoligrafia"](this.servicio, id));
        modal.close();
    };
    SolicitudPoligrafiaComponent.prototype.eliminarServicio = function (id) {
        var confirm = window.confirm('Esta seguro de eliminar este servicio?');
        if (!confirm) {
            return;
        }
        this.store.dispatch(new _store_actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_6__["EliminarPoligrafia"](id));
    };
    SolicitudPoligrafiaComponent.prototype.guardarServicios = function () {
        var confirm = window.confirm('Esta seguro de solicitar los servicios?');
        if (!confirm) {
            return;
        }
        this.store.dispatch(new _store_actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_6__["AlmacenarPoligrafias"]());
    };
    SolicitudPoligrafiaComponent.prototype.inputFileReset = function () {
        this.inputFile.nativeElement.value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputFile'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolicitudPoligrafiaComponent.prototype, "inputFile", void 0);
    SolicitudPoligrafiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-poligrafia',
            template: __webpack_require__(/*! ./solicitud-poligrafia.component.html */ "./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], SolicitudPoligrafiaComponent);
    return SolicitudPoligrafiaComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center mt-3\">\r\n\r\n        <div class=\"btn-group\">\r\n\r\n          <button\r\n            type=\"button\" class=\"btn btn-primary\"\r\n            routerLinkActive=\"active\"\r\n            [routerLink]=\"'../solicitud-servicios/esp'\">\r\n            <a class=\"tooltips\">ESP\r\n              <span>Estudio de seguridad a personas</span>\r\n            </a>\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\" class=\"btn btn-primary\"\r\n            routerLinkActive=\"active\"\r\n            [routerLink]=\"'../solicitud-servicios/esp-masivo'\">\r\n            ESP Masivo\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\" class=\"btn btn-primary\"\r\n            routerLinkActive=\"active\"\r\n            [routerLink]=\"'../solicitud-servicios/investigaciones'\">\r\n            Investigaciones\r\n          </button>\r\n\r\n          <button\r\n            type=\"button\" class=\"btn btn-primary\"\r\n            routerLinkActive=\"active\"\r\n            [routerLink]=\"'../solicitud-servicios/poligrafia'\">\r\n            Poligrafia\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 mt-3\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SolicitudServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudServiciosComponent", function() { return SolicitudServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SolicitudServiciosComponent = /** @class */ (function () {
    function SolicitudServiciosComponent() {
    }
    SolicitudServiciosComponent.prototype.ngOnDestroy = function () {
    };
    SolicitudServiciosComponent.prototype.ngOnInit = function () {
    };
    SolicitudServiciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud-servicios',
            template: __webpack_require__(/*! ./solicitud-servicios.component.html */ "./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudServiciosComponent);
    return SolicitudServiciosComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/guards/solicitar-servicios.guard.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/guards/solicitar-servicios.guard.ts ***!
  \******************************************************************************/
/*! exports provided: SolicitarServiciosGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitarServiciosGuard", function() { return SolicitarServiciosGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors */ "./src/app/pages/solicitud-servicio/store/selectors/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SolicitarServiciosGuard = /** @class */ (function () {
    function SolicitarServiciosGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    SolicitarServiciosGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["getCentroCosto"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            if (value) {
                return true;
            }
            _this.router.navigate(['../nuevo-servicio/solicitud']);
            return false;
        }));
    };
    SolicitarServiciosGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SolicitarServiciosGuard);
    return SolicitarServiciosGuard;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/solicitud-servicio-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/solicitud-servicio-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SolicitudServicioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudServicioRoutingModule", function() { return SolicitudServicioRoutingModule; });
/* harmony import */ var _components_solicitud_poligrafia_solicitud_poligrafia_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/solicitud-poligrafia/solicitud-poligrafia.component */ "./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _solicitud_servicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-servicio.component */ "./src/app/pages/solicitud-servicio/solicitud-servicio.component.ts");
/* harmony import */ var _components_centro_costo_centro_costo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/centro-costo/centro-costo.component */ "./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.ts");
/* harmony import */ var _components_solicitud_esp_solicitud_esp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/solicitud-esp/solicitud-esp.component */ "./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.ts");
/* harmony import */ var _components_solicitud_servicios_solicitud_servicios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/solicitud-servicios/solicitud-servicios.component */ "./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.ts");
/* harmony import */ var _components_solicitud_investigacion_solicitud_investigacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/solicitud-investigacion/solicitud-investigacion.component */ "./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.ts");
/* harmony import */ var _guards_solicitar_servicios_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/solicitar-servicios.guard */ "./src/app/pages/solicitud-servicio/guards/solicitar-servicios.guard.ts");
/* harmony import */ var _components_solicitud_esp_masivo_solicitud_esp_masivo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/solicitud-esp-masivo/solicitud-esp-masivo.component */ "./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _solicitud_servicio_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudServicioComponent"],
        children: [
            { path: 'solicitud', component: _components_centro_costo_centro_costo_component__WEBPACK_IMPORTED_MODULE_4__["CentroCostoComponent"] },
            {
                path: 'solicitud-servicios',
                component: _components_solicitud_servicios_solicitud_servicios_component__WEBPACK_IMPORTED_MODULE_6__["SolicitudServiciosComponent"],
                canActivate: [_guards_solicitar_servicios_guard__WEBPACK_IMPORTED_MODULE_8__["SolicitarServiciosGuard"]],
                children: [
                    { path: 'esp', component: _components_solicitud_esp_solicitud_esp_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudEspComponent"] },
                    { path: 'esp-masivo', component: _components_solicitud_esp_masivo_solicitud_esp_masivo_component__WEBPACK_IMPORTED_MODULE_9__["SolicitudEspMasivoComponent"] },
                    { path: 'investigaciones', component: _components_solicitud_investigacion_solicitud_investigacion_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudInvestigacionComponent"] },
                    { path: 'poligrafia', component: _components_solicitud_poligrafia_solicitud_poligrafia_component__WEBPACK_IMPORTED_MODULE_0__["SolicitudPoligrafiaComponent"] },
                    { path: '', redirectTo: 'esp', pathMatch: 'full' }
                ]
            },
            { path: '', redirectTo: 'solicitud', pathMatch: 'full' },
            { path: '**', redirectTo: '../' },
        ]
    },
];
var SolicitudServicioRoutingModule = /** @class */ (function () {
    function SolicitudServicioRoutingModule() {
    }
    SolicitudServicioRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SolicitudServicioRoutingModule);
    return SolicitudServicioRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/solicitud-servicio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/solicitud-servicio.component.ts ***!
  \**************************************************************************/
/*! exports provided: SolicitudServicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudServicioComponent", function() { return SolicitudServicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SolicitudServicioComponent = /** @class */ (function () {
    function SolicitudServicioComponent() {
    }
    SolicitudServicioComponent.prototype.ngOnInit = function () {
    };
    SolicitudServicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: "\n    <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SolicitudServicioComponent);
    return SolicitudServicioComponent;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/solicitud-servicio.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/solicitud-servicio.module.ts ***!
  \***********************************************************************/
/*! exports provided: SolicitudServicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudServicioModule", function() { return SolicitudServicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _solicitud_servicio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-servicio-routing.module */ "./src/app/pages/solicitud-servicio/solicitud-servicio-routing.module.ts");
/* harmony import */ var _solicitud_servicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-servicio.component */ "./src/app/pages/solicitud-servicio/solicitud-servicio.component.ts");
/* harmony import */ var _components_centro_costo_centro_costo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/centro-costo/centro-costo.component */ "./src/app/pages/solicitud-servicio/components/centro-costo/centro-costo.component.ts");
/* harmony import */ var _components_solicitud_esp_solicitud_esp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/solicitud-esp/solicitud-esp.component */ "./src/app/pages/solicitud-servicio/components/solicitud-esp/solicitud-esp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_solicitud_investigacion_solicitud_investigacion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/solicitud-investigacion/solicitud-investigacion.component */ "./src/app/pages/solicitud-servicio/components/solicitud-investigacion/solicitud-investigacion.component.ts");
/* harmony import */ var _components_solicitud_servicios_solicitud_servicios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/solicitud-servicios/solicitud-servicios.component */ "./src/app/pages/solicitud-servicio/components/solicitud-servicios/solicitud-servicios.component.ts");
/* harmony import */ var _components_solicitud_poligrafia_solicitud_poligrafia_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/solicitud-poligrafia/solicitud-poligrafia.component */ "./src/app/pages/solicitud-servicio/components/solicitud-poligrafia/solicitud-poligrafia.component.ts");
/* harmony import */ var _components_solicitud_esp_masivo_solicitud_esp_masivo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/solicitud-esp-masivo/solicitud-esp-masivo.component */ "./src/app/pages/solicitud-servicio/components/solicitud-esp-masivo/solicitud-esp-masivo.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/reducers */ "./src/app/pages/solicitud-servicio/store/reducers/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/effects */ "./src/app/pages/solicitud-servicio/store/effects/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SolicitudServicioModule = /** @class */ (function () {
    function SolicitudServicioModule() {
    }
    SolicitudServicioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _solicitud_servicio_component__WEBPACK_IMPORTED_MODULE_3__["SolicitudServicioComponent"],
                _components_centro_costo_centro_costo_component__WEBPACK_IMPORTED_MODULE_4__["CentroCostoComponent"],
                _components_solicitud_esp_solicitud_esp_component__WEBPACK_IMPORTED_MODULE_5__["SolicitudEspComponent"],
                _components_solicitud_investigacion_solicitud_investigacion_component__WEBPACK_IMPORTED_MODULE_7__["SolicitudInvestigacionComponent"],
                _components_solicitud_servicios_solicitud_servicios_component__WEBPACK_IMPORTED_MODULE_8__["SolicitudServiciosComponent"],
                _components_solicitud_poligrafia_solicitud_poligrafia_component__WEBPACK_IMPORTED_MODULE_9__["SolicitudPoligrafiaComponent"],
                _components_solicitud_esp_masivo_solicitud_esp_masivo_component__WEBPACK_IMPORTED_MODULE_10__["SolicitudEspMasivoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _solicitud_servicio_routing_module__WEBPACK_IMPORTED_MODULE_2__["SolicitudServicioRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forFeature('solicitudServicio', _store_reducers__WEBPACK_IMPORTED_MODULE_13__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_14__["effects"]),
            ]
        })
    ], SolicitudServicioModule);
    return SolicitudServicioModule;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/actions/centro-costo.actions.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/actions/centro-costo.actions.ts ***!
  \********************************************************************************/
/*! exports provided: CentroCostoActionTypes, CrearCentroCosto, GuardarCentroCosto, RemoverCentroCosto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentroCostoActionTypes", function() { return CentroCostoActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCentroCosto", function() { return CrearCentroCosto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardarCentroCosto", function() { return GuardarCentroCosto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoverCentroCosto", function() { return RemoverCentroCosto; });
var CentroCostoActionTypes;
(function (CentroCostoActionTypes) {
    CentroCostoActionTypes["Crear"] = "[CentroCosto] Crear CentroCosto";
    CentroCostoActionTypes["Guardar"] = "[CentroCosto] Guardar CentroCosto";
    CentroCostoActionTypes["Remover"] = "[CentroCosto] Remover CentroCosto";
})(CentroCostoActionTypes || (CentroCostoActionTypes = {}));
var CrearCentroCosto = /** @class */ (function () {
    function CrearCentroCosto(payload) {
        this.payload = payload;
        this.type = CentroCostoActionTypes.Crear;
    }
    return CrearCentroCosto;
}());

var GuardarCentroCosto = /** @class */ (function () {
    function GuardarCentroCosto(payload) {
        this.payload = payload;
        this.type = CentroCostoActionTypes.Guardar;
    }
    return GuardarCentroCosto;
}());

var RemoverCentroCosto = /** @class */ (function () {
    function RemoverCentroCosto() {
        this.type = CentroCostoActionTypes.Remover;
    }
    return RemoverCentroCosto;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/actions/esp.actions.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/actions/esp.actions.ts ***!
  \***********************************************************************/
/*! exports provided: EspActionTypes, CrearEsp, AlmacenarEsps, EditarEsp, EliminarEsp, RemoverEsps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspActionTypes", function() { return EspActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearEsp", function() { return CrearEsp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenarEsps", function() { return AlmacenarEsps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarEsp", function() { return EditarEsp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarEsp", function() { return EliminarEsp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoverEsps", function() { return RemoverEsps; });
var EspActionTypes;
(function (EspActionTypes) {
    EspActionTypes["Crear"] = "[ESP] Crear Esp";
    EspActionTypes["Almacenar"] = "[ESP] Almacenar Esp";
    EspActionTypes["Editar"] = "[ESP] Editar Esp";
    EspActionTypes["Eliminar"] = "[ESP] Eliminar Esp";
    EspActionTypes["Remover"] = "[ESP] Remover Esp";
})(EspActionTypes || (EspActionTypes = {}));
var CrearEsp = /** @class */ (function () {
    function CrearEsp(payload) {
        this.payload = payload;
        this.type = EspActionTypes.Crear;
    }
    return CrearEsp;
}());

var AlmacenarEsps = /** @class */ (function () {
    function AlmacenarEsps() {
        this.type = EspActionTypes.Almacenar;
    }
    return AlmacenarEsps;
}());

var EditarEsp = /** @class */ (function () {
    function EditarEsp(payload, id) {
        this.payload = payload;
        this.id = id;
        this.type = EspActionTypes.Editar;
    }
    return EditarEsp;
}());

var EliminarEsp = /** @class */ (function () {
    function EliminarEsp(id) {
        this.id = id;
        this.type = EspActionTypes.Eliminar;
    }
    return EliminarEsp;
}());

var RemoverEsps = /** @class */ (function () {
    function RemoverEsps() {
        this.type = EspActionTypes.Remover;
    }
    return RemoverEsps;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/actions/investigacion.actions.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/actions/investigacion.actions.ts ***!
  \*********************************************************************************/
/*! exports provided: InvestigacionActionTypes, CrearInvestigacion, AlmacenarInvestigaciones, EditarInvestigacion, EliminarInvestigacion, RemoverInvestigaciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigacionActionTypes", function() { return InvestigacionActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearInvestigacion", function() { return CrearInvestigacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenarInvestigaciones", function() { return AlmacenarInvestigaciones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarInvestigacion", function() { return EditarInvestigacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarInvestigacion", function() { return EliminarInvestigacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoverInvestigaciones", function() { return RemoverInvestigaciones; });
var InvestigacionActionTypes;
(function (InvestigacionActionTypes) {
    InvestigacionActionTypes["Crear"] = "[INVESTIGACION] Crear Investigacion";
    InvestigacionActionTypes["Almacenar"] = "[INVESTIGACION] Almacenar Investigacion";
    InvestigacionActionTypes["Editar"] = "[INVESTIGACION] Editar Investigacion";
    InvestigacionActionTypes["Eliminar"] = "[INVESTIGACION] Eliminar Investigacion";
    InvestigacionActionTypes["Remover"] = "[INVESTIGACION] Remover Investigacion";
})(InvestigacionActionTypes || (InvestigacionActionTypes = {}));
var CrearInvestigacion = /** @class */ (function () {
    function CrearInvestigacion(payload) {
        this.payload = payload;
        this.type = InvestigacionActionTypes.Crear;
    }
    return CrearInvestigacion;
}());

var AlmacenarInvestigaciones = /** @class */ (function () {
    function AlmacenarInvestigaciones() {
        this.type = InvestigacionActionTypes.Almacenar;
    }
    return AlmacenarInvestigaciones;
}());

var EditarInvestigacion = /** @class */ (function () {
    function EditarInvestigacion(payload, id) {
        this.payload = payload;
        this.id = id;
        this.type = InvestigacionActionTypes.Editar;
    }
    return EditarInvestigacion;
}());

var EliminarInvestigacion = /** @class */ (function () {
    function EliminarInvestigacion(id) {
        this.id = id;
        this.type = InvestigacionActionTypes.Eliminar;
    }
    return EliminarInvestigacion;
}());

var RemoverInvestigaciones = /** @class */ (function () {
    function RemoverInvestigaciones() {
        this.type = InvestigacionActionTypes.Remover;
    }
    return RemoverInvestigaciones;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/actions/poligrafia.actions.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/actions/poligrafia.actions.ts ***!
  \******************************************************************************/
/*! exports provided: PoligrafiaActionTypes, CrearPoligrafia, AlmacenarPoligrafias, EditarPoligrafia, EliminarPoligrafia, RemoverPoligrafias */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoligrafiaActionTypes", function() { return PoligrafiaActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearPoligrafia", function() { return CrearPoligrafia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmacenarPoligrafias", function() { return AlmacenarPoligrafias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPoligrafia", function() { return EditarPoligrafia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarPoligrafia", function() { return EliminarPoligrafia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoverPoligrafias", function() { return RemoverPoligrafias; });
var PoligrafiaActionTypes;
(function (PoligrafiaActionTypes) {
    PoligrafiaActionTypes["Crear"] = "[POLIGRAFIA] Crear Poligrafia";
    PoligrafiaActionTypes["Almacenar"] = "[POLIGRAFIA] Almacenar Poligrafia";
    PoligrafiaActionTypes["Editar"] = "[POLIGRAFIA] Editar Poligrafia";
    PoligrafiaActionTypes["Eliminar"] = "[POLIGRAFIA] Eliminar Poligrafia";
    PoligrafiaActionTypes["Remover"] = "[POLIGRAFIA] Remove Poligrafia";
})(PoligrafiaActionTypes || (PoligrafiaActionTypes = {}));
var CrearPoligrafia = /** @class */ (function () {
    function CrearPoligrafia(payload) {
        this.payload = payload;
        this.type = PoligrafiaActionTypes.Crear;
    }
    return CrearPoligrafia;
}());

var AlmacenarPoligrafias = /** @class */ (function () {
    function AlmacenarPoligrafias() {
        this.type = PoligrafiaActionTypes.Almacenar;
    }
    return AlmacenarPoligrafias;
}());

var EditarPoligrafia = /** @class */ (function () {
    function EditarPoligrafia(payload, id) {
        this.payload = payload;
        this.id = id;
        this.type = PoligrafiaActionTypes.Editar;
    }
    return EditarPoligrafia;
}());

var EliminarPoligrafia = /** @class */ (function () {
    function EliminarPoligrafia(id) {
        this.id = id;
        this.type = PoligrafiaActionTypes.Eliminar;
    }
    return EliminarPoligrafia;
}());

var RemoverPoligrafias = /** @class */ (function () {
    function RemoverPoligrafias() {
        this.type = PoligrafiaActionTypes.Remover;
    }
    return RemoverPoligrafias;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/effects/esp.effects.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/effects/esp.effects.ts ***!
  \***********************************************************************/
/*! exports provided: EspEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspEffects", function() { return EspEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_esp_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/esp.actions */ "./src/app/pages/solicitud-servicio/store/actions/esp.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selectors */ "./src/app/pages/solicitud-servicio/store/selectors/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/pages/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EspEffects = /** @class */ (function () {
    function EspEffects(actions$, store, espService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.espService = espService;
        this.router = router;
        this.almacenarEsps$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_esp_actions__WEBPACK_IMPORTED_MODULE_4__["EspActionTypes"].Almacenar), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_6__["getCentroCosto"]), this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_6__["getEsps"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var action = _a[0], centro_costo = _a[1], esps = _a[2];
            return ({ centro_costo: centro_costo, esps: esps, });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (value) { return console.log(value); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (value) { return _this.espService.save(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.redirect(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return swal('Ocurrio un error!', 'Intente mas tarde', 'error'); }));
    }
    EspEffects.prototype.redirect = function () {
        this.router.navigate(['../dashboard/cl']);
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], EspEffects.prototype, "almacenarEsps$", void 0);
    EspEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _shared_services__WEBPACK_IMPORTED_MODULE_7__["EspService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], EspEffects);
    return EspEffects;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/effects/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/effects/index.ts ***!
  \*****************************************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _esp_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esp.effects */ "./src/app/pages/solicitud-servicio/store/effects/esp.effects.ts");
/* harmony import */ var _investigacion_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./investigacion.effects */ "./src/app/pages/solicitud-servicio/store/effects/investigacion.effects.ts");
/* harmony import */ var _poligrafia_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poligrafia.effects */ "./src/app/pages/solicitud-servicio/store/effects/poligrafia.effects.ts");



var effects = [
    _esp_effects__WEBPACK_IMPORTED_MODULE_0__["EspEffects"],
    _investigacion_effects__WEBPACK_IMPORTED_MODULE_1__["InvestigacionEffects"],
    _poligrafia_effects__WEBPACK_IMPORTED_MODULE_2__["PoligrafiaEffects"],
];


/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/effects/investigacion.effects.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/effects/investigacion.effects.ts ***!
  \*********************************************************************************/
/*! exports provided: InvestigacionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigacionEffects", function() { return InvestigacionEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors */ "./src/app/pages/solicitud-servicio/store/selectors/index.ts");
/* harmony import */ var _actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/investigacion.actions */ "./src/app/pages/solicitud-servicio/store/actions/investigacion.actions.ts");
/* harmony import */ var _shared_services_investigacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/investigacion.service */ "./src/app/pages/shared/services/investigacion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InvestigacionEffects = /** @class */ (function () {
    function InvestigacionEffects(actions$, store, investigacionService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.investigacionService = investigacionService;
        this.router = router;
        this.almacenarInvestigaciones$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_6__["InvestigacionActionTypes"].Almacenar), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getCentroCosto"]), this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getInvestigaciones"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var action = _a[0], centroCosto = _a[1], investigaciones = _a[2];
            return ({ centroCosto: centroCosto, investigaciones: investigaciones, });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (value) { return _this.investigacionService.save(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.redirect(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }));
    }
    InvestigacionEffects.prototype.redirect = function () {
        this.router.navigate(['../dashboard/cl']);
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], InvestigacionEffects.prototype, "almacenarInvestigaciones$", void 0);
    InvestigacionEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _shared_services_investigacion_service__WEBPACK_IMPORTED_MODULE_7__["InvestigacionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], InvestigacionEffects);
    return InvestigacionEffects;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/effects/poligrafia.effects.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/effects/poligrafia.effects.ts ***!
  \******************************************************************************/
/*! exports provided: PoligrafiaEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoligrafiaEffects", function() { return PoligrafiaEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors */ "./src/app/pages/solicitud-servicio/store/selectors/index.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/pages/shared/services/index.ts");
/* harmony import */ var _actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/poligrafia.actions */ "./src/app/pages/solicitud-servicio/store/actions/poligrafia.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PoligrafiaEffects = /** @class */ (function () {
    function PoligrafiaEffects(actions$, store, poligrafiaService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.poligrafiaService = poligrafiaService;
        this.router = router;
        this.almacenarPoligrafias$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_7__["PoligrafiaActionTypes"].Almacenar), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getCentroCosto"]), this.store.select(_selectors__WEBPACK_IMPORTED_MODULE_5__["getPoligrafias"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var action = _a[0], centroCosto = _a[1], poligrafias = _a[2];
            return ({ centroCosto: centroCosto, poligrafias: poligrafias, });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (value) { return _this.poligrafiaService.save(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.redirect(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); }));
    }
    PoligrafiaEffects.prototype.redirect = function () {
        this.router.navigate(['../dashboard/cl']);
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PoligrafiaEffects.prototype, "almacenarPoligrafias$", void 0);
    PoligrafiaEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _shared_services__WEBPACK_IMPORTED_MODULE_6__["PoligrafiaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], PoligrafiaEffects);
    return PoligrafiaEffects;
}());



/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/reducers/centro-costo.reducer.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/reducers/centro-costo.reducer.ts ***!
  \*********************************************************************************/
/*! exports provided: centroCostoReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centroCostoReducer", function() { return centroCostoReducer; });
/* harmony import */ var _actions_centro_costo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/centro-costo.actions */ "./src/app/pages/solicitud-servicio/store/actions/centro-costo.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// @ts-ignore
function centroCostoReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case _actions_centro_costo_actions__WEBPACK_IMPORTED_MODULE_0__["CentroCostoActionTypes"].Crear:
            return __assign({}, state, action.payload);
        case _actions_centro_costo_actions__WEBPACK_IMPORTED_MODULE_0__["CentroCostoActionTypes"].Remover:
            return null;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/reducers/esp.reducer.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/reducers/esp.reducer.ts ***!
  \************************************************************************/
/*! exports provided: espReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "espReducer", function() { return espReducer; });
/* harmony import */ var _actions_esp_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/esp.actions */ "./src/app/pages/solicitud-servicio/store/actions/esp.actions.ts");

function espReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions_esp_actions__WEBPACK_IMPORTED_MODULE_0__["EspActionTypes"].Crear:
            return state.concat([action.payload]);
        case _actions_esp_actions__WEBPACK_IMPORTED_MODULE_0__["EspActionTypes"].Editar:
            return state.map(function (value, index) { return index === action.id ? action.payload : value; }).slice();
        case _actions_esp_actions__WEBPACK_IMPORTED_MODULE_0__["EspActionTypes"].Eliminar:
            return state.filter(function (value, index) { return index !== action.id; }).slice();
        case _actions_esp_actions__WEBPACK_IMPORTED_MODULE_0__["EspActionTypes"].Remover:
            return [];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/reducers/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/reducers/index.ts ***!
  \******************************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _centro_costo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./centro-costo.reducer */ "./src/app/pages/solicitud-servicio/store/reducers/centro-costo.reducer.ts");
/* harmony import */ var _esp_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esp.reducer */ "./src/app/pages/solicitud-servicio/store/reducers/esp.reducer.ts");
/* harmony import */ var _investigacion_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investigacion.reducer */ "./src/app/pages/solicitud-servicio/store/reducers/investigacion.reducer.ts");
/* harmony import */ var _poligrafia_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poligrafia.reducer */ "./src/app/pages/solicitud-servicio/store/reducers/poligrafia.reducer.ts");




var reducers = {
    centro_costo: _centro_costo_reducer__WEBPACK_IMPORTED_MODULE_0__["centroCostoReducer"],
    esp: _esp_reducer__WEBPACK_IMPORTED_MODULE_1__["espReducer"],
    investigacion: _investigacion_reducer__WEBPACK_IMPORTED_MODULE_2__["investigacionReducer"],
    poligrafia: _poligrafia_reducer__WEBPACK_IMPORTED_MODULE_3__["poligrafiaReducer"],
};


/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/reducers/investigacion.reducer.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/reducers/investigacion.reducer.ts ***!
  \**********************************************************************************/
/*! exports provided: investigacionReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "investigacionReducer", function() { return investigacionReducer; });
/* harmony import */ var _actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/investigacion.actions */ "./src/app/pages/solicitud-servicio/store/actions/investigacion.actions.ts");

function investigacionReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_0__["InvestigacionActionTypes"].Crear:
            return state.concat([action.payload]);
        case _actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_0__["InvestigacionActionTypes"].Editar:
            return state.map(function (value, index) { return index === action.id ? action.payload : value; }).slice();
        case _actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_0__["InvestigacionActionTypes"].Eliminar:
            return state.filter(function (value, index) { return index !== action.id; }).slice();
        case _actions_investigacion_actions__WEBPACK_IMPORTED_MODULE_0__["InvestigacionActionTypes"].Remover:
            return [];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/reducers/poligrafia.reducer.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/reducers/poligrafia.reducer.ts ***!
  \*******************************************************************************/
/*! exports provided: poligrafiaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poligrafiaReducer", function() { return poligrafiaReducer; });
/* harmony import */ var _actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/poligrafia.actions */ "./src/app/pages/solicitud-servicio/store/actions/poligrafia.actions.ts");

function poligrafiaReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_0__["PoligrafiaActionTypes"].Crear:
            return state.concat([action.payload]);
        case _actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_0__["PoligrafiaActionTypes"].Editar:
            return state.map(function (value, index) { return index === action.id ? action.payload : value; }).slice();
        case _actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_0__["PoligrafiaActionTypes"].Eliminar:
            return state.filter(function (value, index) { return index !== action.id; }).slice();
        case _actions_poligrafia_actions__WEBPACK_IMPORTED_MODULE_0__["PoligrafiaActionTypes"].Remover:
            return [];
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/pages/solicitud-servicio/store/selectors/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/solicitud-servicio/store/selectors/index.ts ***!
  \*******************************************************************/
/*! exports provided: getEsps, getInvestigaciones, getPoligrafias, getCentroCosto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEsps", function() { return getEsps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvestigaciones", function() { return getInvestigaciones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoligrafias", function() { return getPoligrafias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCentroCosto", function() { return getCentroCosto; });
var getEsps = function (state) { return state.solicitudServicio.esp; };
var getInvestigaciones = function (state) { return state.solicitudServicio.investigacion; };
var getPoligrafias = function (state) { return state.solicitudServicio.poligrafia; };
var getCentroCosto = function (state) { return state.solicitudServicio.centro_costo; };


/***/ }),

/***/ "./src/app/shared/services/actividad.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/actividad.service.ts ***!
  \******************************************************/
/*! exports provided: ActividadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadService", function() { return ActividadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActividadService = /** @class */ (function () {
    function ActividadService(http, helper) {
        this.http = http;
        this.helper = helper;
        this.espBasico = ['HJ', 'VDS', 'VA', 'VL'];
        this.espIntegral = this.espBasico.concat(['PL']);
        this.espAvanzado = this.espIntegral.concat(['EF']);
    }
    ActividadService.prototype.get = function (type) {
        var url = this.helper.route('actividades');
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value.filter(function (item) { return item.servicio.codigo === type; }); }));
    };
    ActividadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], ActividadService);
    return ActividadService;
}());



/***/ })

}]);
//# sourceMappingURL=solicitud-servicio-solicitud-servicio-module.js.map