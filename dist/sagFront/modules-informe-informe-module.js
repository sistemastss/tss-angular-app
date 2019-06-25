(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-informe-informe-module"],{

/***/ "./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header bg-white\">\n  <h4 class=\"text-center\">Estudio de seguridad</h4>\n</div>\n<div class=\"card-body bg-light\">\n\n  <!-- Informacion personal card-->\n  <app-info-personal></app-info-personal>\n\n  <!-- Estado de salud-->\n  <app-estado-salud></app-estado-salud>\n\n  <!-- Habitos en salud-->\n  <app-habitos-salud></app-habitos-salud>\n\n</div>\n<div class=\"card-footer text-right\">\n  <button class=\"btn btn-primary\">Guardar</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DatosPersonalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPersonalesComponent", function() { return DatosPersonalesComponent; });
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

var DatosPersonalesComponent = /** @class */ (function () {
    function DatosPersonalesComponent() {
    }
    DatosPersonalesComponent.prototype.ngOnInit = function () {
    };
    DatosPersonalesComponent.prototype.saveAll = function () {
    };
    DatosPersonalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-personales',
            template: __webpack_require__(/*! ./datos-personales.component.html */ "./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DatosPersonalesComponent);
    return DatosPersonalesComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/estado-salud/estado-salud.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/estado-salud/estado-salud.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div [formGroup]=\"form\"  class=\"card-body\">\n    <b class=\"card-title\">Estado de salud</b>\n    <hr>\n\n    <!-- toma medicamentos -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"tomaMedicamentos\">\n        ¿Toma medicamentos en la actualidad?\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"tomaMedicamentos\"\n               formControlName=\"tomaMedicamentos\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['tomaMedicamentos'].invalid &&\n           form.controls['tomaMedicamentos'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- sufre enfermedades -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"sufreEnfermedades\">\n        ¿Sufre alguna Enfermedad?\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"sufreEnfermedades\"\n               formControlName=\"sufreEnfermedades\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['sufreEnfermedades'].invalid &&\n           form.controls['sufreEnfermedades'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- tratamiento psicologico -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"tratamientoPsicologico\">\n        ¿Ha sido sometido a algún tipo de tratamiento psicológico?\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"tratamientoPsicologico\"\n               formControlName=\"tratamientoPsicologico\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['tratamientoPsicologico'].invalid &&\n           form.controls['tratamientoPsicologico'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/estado-salud/estado-salud.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/estado-salud/estado-salud.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EstadoSaludComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoSaludComponent", function() { return EstadoSaludComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstadoSaludComponent = /** @class */ (function () {
    function EstadoSaludComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            tomaMedicamentos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sufreEnfermedades: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tratamientoPsicologico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    EstadoSaludComponent.prototype.ngOnInit = function () {
    };
    EstadoSaludComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estado-salud',
            template: __webpack_require__(/*! ./estado-salud.component.html */ "./src/app/pages/modules/informe/components/datos-personales/estado-salud/estado-salud.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EstadoSaludComponent);
    return EstadoSaludComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/habitos-salud/habitos-salud.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/habitos-salud/habitos-salud.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div [formGroup]=\"form\" class=\"card-body\">\n    <b class=\"card-title\">Habitos de salud</b>\n    <hr>\n\n    <!-- fuma -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\">¿Fuma?</label>\n      <div class=\"col-sm-8\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"fuma\" id=\"fuma\"\n                 [value]=\"true\" formControlName=\"fuma\">\n          <label class=\"form-check-label\" for=\"fuma\">Si</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"fuma\" id=\"fuman\"\n                 [value]=\"false\" formControlName=\"fuma\">\n          <label class=\"form-check-label\" for=\"fuman\">No</label>\n        </div>\n      </div>\n    </div>\n\n    <!-- ¿Consume bebidas alcohólicas? -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\">¿Consume bebidas alcohólicas?</label>\n      <div class=\"col-sm-8\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"consumeAlcohol\" id=\"consumeAlcohol\"\n                 [value]=\"true\" formControlName=\"consumeAlcohol\">\n          <label class=\"form-check-label\" for=\"consumeAlcohol\">Si</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"consumeAlcohol\" id=\"consumeAlcoholn\"\n                 [value]=\"false\" formControlName=\"consumeAlcohol\">\n          <label class=\"form-check-label\" for=\"consumeAlcoholn\">No</label>\n        </div>\n      </div>\n    </div>\n\n    <!-- ¿Consume sustancias psicoactivas?\t-->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\">¿Consume sustancias psicoactivas?</label>\n      <div class=\"col-sm-8\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"consumeDrogas\" id=\"consumeDrogas\"\n                 [value]=\"true\" formControlName=\"consumeDrogas\">\n          <label class=\"form-check-label\" for=\"consumeDrogas\">Si</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\"\n                 name=\"consumeDrogas\" id=\"consumeDrogasn\"\n                 [value]=\"false\" formControlName=\"consumeDrogas\">\n          <label class=\"form-check-label\" for=\"consumeDrogasn\">No</label>\n        </div>\n      </div>\n    </div>\n\n    <!-- ¿Realiza algún deporte? -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\" for=\"realizaDeporte\">¿Realiza algún deporte?</label>\n      <div class=\"col-sm-9\">\n        <textarea class=\"form-control\"\n                  id=\"realizaDeporte\" name=\"realizaDeporte\"\n                  formControlName=\"realizaDeporte\" rows=\"3\"\n                  placeholder=\"Ingresé los deportes que practica\">\n\n        </textarea>\n      </div>\n    </div>\n\n    <!-- ¿Qué actividades realiza en su tiempo libre? -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-3 col-form-label\" for=\"hobbies\">¿Qué actividades realiza en su tiempo libre?</label>\n      <div class=\"col-sm-9\">\n        <textarea class=\"form-control\"\n                  id=\"hobbies\" name=\"hobbies\"\n                  formControlName=\"hobbies\" rows=\"3\"\n                  placeholder=\"Ingresé las actividades que realiza\">\n\n        </textarea>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/habitos-salud/habitos-salud.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/habitos-salud/habitos-salud.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HabitosSaludComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabitosSaludComponent", function() { return HabitosSaludComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HabitosSaludComponent = /** @class */ (function () {
    function HabitosSaludComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            fuma: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            consumeAlcohol: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            consumeDrogas: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            realizaDeporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hobbies: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    HabitosSaludComponent.prototype.ngOnInit = function () {
    };
    HabitosSaludComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-habitos-salud',
            template: __webpack_require__(/*! ./habitos-salud.component.html */ "./src/app/pages/modules/informe/components/datos-personales/habitos-salud/habitos-salud.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HabitosSaludComponent);
    return HabitosSaludComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/info-personal/info-personal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/info-personal/info-personal.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div [formGroup]=\"form\"  class=\"card-body\">\n    <b class=\"card-title\">Información personal</b>\n    <hr>\n    <!-- nombres -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"nombre\">\n        Nombres\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"nombre\"\n               formControlName=\"nombre\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.get('nombre').invalid && form.get('nombre').dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Documento -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"documento\">\n        Documento\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"documento\"\n               formControlName=\"documento\"\n               required>\n        <div [hidden]=\"form.get('documento').valid || form.get('documento').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- fecha expedicion -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"fechaExpedicion\">\n        Fecha de expedicion\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"date\" class=\"form-control\"\n               id=\"fechaExpedicion\"\n               formControlName=\"fechaExpedicion\"\n               required>\n        <div [hidden]=\"form.get('fechaExpedicion').valid || form.get('fechaExpedicion').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Lugar de expedicion -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"lugarExpedicion\">\n        Lugar de expedicion\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"lugarExpedicion\"\n               formControlName=\"lugarExpedicion\"\n               required>\n        <div [hidden]=\"form.get('lugarExpedicion').valid || form.get('lugarExpedicion').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Libreta militar -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"libretaMilitar\">\n        Libreta militar\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"number\" class=\"form-control\"\n               id=\"libretaMilitar\"\n               formControlName=\"libretaMilitar\"\n               required>\n        <div [hidden]=\"form.get('libretaMilitar').valid || form.get('libretaMilitar').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Lugar de nacimiento -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"lugarNacimiento\">\n        Lugar de nacimiento\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"lugarNacimiento\"\n               formControlName=\"lugarNacimiento\"\n               required>\n        <div [hidden]=\"form.get('lugarNacimiento').valid || form.get('lugarNacimiento').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Fecha de nacimiento -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"fechaNacimiento\">\n        Fecha de nacimiento\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"date\" class=\"form-control\"\n               id=\"fechaNacimiento\"\n               formControlName=\"fechaNacimiento\"\n               required>\n        <div [hidden]=\"form.get('fechaNacimiento').valid || form.get('fechaNacimiento').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Edad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"edad\">\n        Edad\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"edad\"\n               formControlName=\"edad\"\n               required>\n        <div [hidden]=\"form.get('edad').valid || form.get('edad').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Direccion de residencia -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"direccionResidencia\">\n        Direccion de residencia\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"direccionResidencia\"\n               formControlName=\"direccionResidencia\"\n               required>\n        <div [hidden]=\"form.get('direccionResidencia').valid || form.get('direccionResidencia').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Barrio -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"barrio\">\n        Barrio\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"barrio\"\n               formControlName=\"barrio\"\n               required>\n        <div [hidden]=\"form.get('barrio').valid || form.get('barrio').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Localidad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"localidad\">\n        Localidad\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"localidad\"\n               formControlName=\"localidad\"\n               required>\n        <div [hidden]=\"form.get('localidad').valid || form.get('localidad').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Ciudad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"ciudad\">\n        Ciudad\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"ciudad\"\n               formControlName=\"ciudad\"\n               required>\n        <div [hidden]=\"form.get('ciudad').valid || form.get('ciudad').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Telefono -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"telefono\">\n        Telefono\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"number\" class=\"form-control\"\n               id=\"telefono\"\n               formControlName=\"telefono\"\n               required>\n        <div [hidden]=\"form.get('telefono').valid || form.get('telefono').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Celular -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"celular\">\n        Celular\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"celular\"\n               formControlName=\"celular\"\n               required>\n        <div [hidden]=\"form.get('celular').valid || form.get('celular').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Estado civil -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"estadoCivil\">\n        Estado civil\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"estadoCivil\"\n               formControlName=\"estadoCivil\"\n               required>\n        <div [hidden]=\"form.get('estadoCivil').valid || form.get('estadoCivil').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Correo electronico -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"correo\">\n        Correo electronico\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"correo\"\n               formControlName=\"correo\"\n               required>\n        <div [hidden]=\"form.get('correo').valid || form.get('correo').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Licencia de conduccion -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"licenciaConduccion\">\n        Licencia de conduccion\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"licenciaConduccion\"\n               formControlName=\"licenciaConduccion\"\n               required>\n        <div [hidden]=\"form.get('licenciaConduccion').valid || form.get('licenciaConduccion').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Categoria o clase -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"categoriaClase\">\n        Categoria o clase\n      </label>\n      <div class=\"col-sm-8\">\n\n        <input type=\"text\" class=\"form-control\"\n               id=\"categoriaClase\"\n               formControlName=\"categoriaClase\"\n               required>\n        <div [hidden]=\"form.get('categoriaClase').valid || form.get('categoriaClase').pristine\">\n          <div class=\"ng-invalid-feedback\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer bg-white text-right\">\n    <button *ngIf=\"dataLoaded\" class=\"btn btn-warning btn-sm\" (click)=\"update()\">\n      <i class=\"fa fa-edit\"></i>\n      Actualizar\n    </button>\n    <button *ngIf=\"!dataLoaded\" class=\"btn btn-success btn-sm\" (click)=\"save()\">\n      <i class=\"fa fa-save\"></i>\n      Guardar\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/datos-personales/info-personal/info-personal.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/datos-personales/info-personal/info-personal.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: InfoPersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPersonalComponent", function() { return InfoPersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_datos_personales_info_personal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/datos-personales/info-personal.service */ "./src/app/pages/modules/informe/services/datos-personales/info-personal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPersonalComponent = /** @class */ (function () {
    function InfoPersonalComponent(fb, infoPersonalService) {
        this.fb = fb;
        this.infoPersonalService = infoPersonalService;
        this.form = this.fb.group({
            id: null,
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaExpedicion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lugarExpedicion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            libretaMilitar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lugarNacimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fechaNacimiento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            edad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            direccionResidencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            barrio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            estadoCivil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            correo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            licenciaConduccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            categoriaClase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.dataLoaded = false;
    }
    InfoPersonalComponent.prototype.ngOnInit = function () {
        this.get();
    };
    InfoPersonalComponent.prototype.get = function () {
        var _this = this;
        this.infoPersonalService.get().subscribe(function (response) {
            _this.form.setValue(response);
            _this.dataLoaded = true;
        });
    };
    InfoPersonalComponent.prototype.save = function () {
        if (this.form.invalid) {
            return;
        }
        var data = this.form.value;
        this.infoPersonalService.save(data).subscribe(function () { return alert('Datos guardados con exito'); }, function () { return alert('Ocurrio un error. Intente de nuevo'); });
    };
    InfoPersonalComponent.prototype.update = function () {
        var data = this.form.value;
        if (typeof data.id === 'number') {
            this.infoPersonalService.update(data).subscribe(function () { return alert('Datos actualizados con exito'); }, function () { return alert('Ocurrio un error. Intente de nuevo'); });
        }
    };
    InfoPersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-personal',
            template: __webpack_require__(/*! ./info-personal.component.html */ "./src/app/pages/modules/informe/components/datos-personales/info-personal/info-personal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_datos_personales_info_personal_service__WEBPACK_IMPORTED_MODULE_2__["InfoPersonalService"]])
    ], InfoPersonalComponent);
    return InfoPersonalComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">\n  <h4 class=\"text-center\">Estudio de seguridad</h4>\n</div>\n<div class=\"card-body\">\n\n  <div class=\"form-group border-bottom\">\n    <h5 class=\"text-center text-uppercase\">\n      Sanchez aguilar jenifer lynay\n    </h5>\n    <h6 class=\"text-center\">\n      123123\n    </h6>\n  </div>\n\n  <div *ngIf=\"!dataLoaded\">\n  <div class=\"form-group row\">\n    <label class=\"col-form-label col-md-3\" for=\"image\">Cargar imagen del evaluado</label>\n    <div class=\"col-md-9\">\n      <input id=\"image\" type=\"file\" class=\"form-control-file\" (change)=\"setImagenEvaluado($event)\">\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-form-label col-md-3\" for=\"logoEmpresa\">Cargar logo de la empresa</label>\n    <div class=\"col-md-9\">\n      <input id=\"logoEmpresa\" type=\"file\" class=\"form-control-file\" (change)=\"setLogoCliente($event)\">\n    </div>\n  </div>\n  </div>\n\n  <div>\n    <div class=\"form-group\">\n      <label>Foto del evaluado</label><br>\n      <img class=\"img-fluid\" [src]=\"makeFileUrl(data.foto_evaluado)\" alt=\"\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Logo del cliente</label><br>\n      <img class=\"img-fluid\" [src]=\"makeFileUrl(data.logo_cliente)\" alt=\"\">\n    </div>\n  </div>\n\n</div>\n<div class=\"card-footer text-right\">\n  <button class=\"btn btn-primary\" (click)=\"saveAll()\" *ngIf=\"!dataLoaded\">Guardar</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EstudioSeguridadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioSeguridadComponent", function() { return EstudioSeguridadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_informe_estudio_seguridad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/informe/estudio-seguridad.service */ "./src/app/pages/modules/informe/services/informe/estudio-seguridad.service.ts");
/* harmony import */ var _services_vsd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/vsd.service */ "./src/app/services/vsd.service.ts");
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





var EstudioSeguridadComponent = /** @class */ (function () {
    function EstudioSeguridadComponent(vsd, router, helper, estudioSeguridad) {
        this.vsd = vsd;
        this.router = router;
        this.helper = helper;
        this.estudioSeguridad = estudioSeguridad;
        this.data = {
            foto_evaluado: null,
            logo_cliente: null,
        };
        this.dataLoaded = false;
    }
    EstudioSeguridadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.estudioSeguridad.get(1).subscribe(function (value) {
            _this.data = value.data;
            _this.dataLoaded = true;
        });
    };
    EstudioSeguridadComponent.prototype.onNext = function () {
        this.router.navigate(['']);
    };
    EstudioSeguridadComponent.prototype.setLogoCliente = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var allowedExtensions, file, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;
                        file = event.target.files[0];
                        if (!allowedExtensions.test(file.name)) {
                            alert('Archivo no valido');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.helper.readFile(file)];
                    case 1:
                        base64 = _a.sent();
                        this.data.foto_evaluado = {
                            file_name: file.name,
                            blob: base64
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    EstudioSeguridadComponent.prototype.setImagenEvaluado = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var allowedExtensions, file, base64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;
                        file = event.target.files[0];
                        if (!allowedExtensions.test(file.name)) {
                            alert('Archivo no valido');
                            event.target.value = '';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.helper.readFile(file)];
                    case 1:
                        base64 = _a.sent();
                        this.data.logo_cliente = {
                            file_name: file.name,
                            blob: base64
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    EstudioSeguridadComponent.prototype.saveAll = function () {
        var vsdId = this.vsd.getVsd();
        this.estudioSeguridad.save(this.data, vsdId).subscribe(function (response) {
            swal('Datos guardados con exito', '', 'success');
        }, function (error) { return console.log(error); });
    };
    EstudioSeguridadComponent.prototype.makeFileUrl = function (fileName) {
        return this.helper.makeFileUrl(fileName);
    };
    EstudioSeguridadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estudio-seguridad',
            template: __webpack_require__(/*! ./estudio-seguridad.component.html */ "./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.html")
        }),
        __metadata("design:paramtypes", [_services_vsd_service__WEBPACK_IMPORTED_MODULE_4__["VsdService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _services_informe_estudio_seguridad_service__WEBPACK_IMPORTED_MODULE_3__["EstudioSeguridadService"]])
    ], EstudioSeguridadComponent);
    return EstudioSeguridadComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header bg-white\">\n  <h4>Verificacion Laboral</h4>\n</div>\n<div class=\"card-body bg-light\">\n\n  <!--Historial laboral-->\n\n\n  <!--Nivel academico-->\n\n\n</div>\n<div class=\"card-footer text-right\">\n  <button class=\"btn btn-primary\" (click)=\"saveAll()\" *ngIf=\"!dataLoaded\">Guardar</button>\n</div>\n\n\n<!--<div class=\"col-md-12 m-3 text-right\">\n  <button class=\"btn btn-danger mr-2 ml-2\"\n          *ngIf=\"permissions.FRCE && ( actividad.estado == 'proceso' || actividad.estado == 'aceptado')\"\n          (click)=\"reportarCliente()\">\n    <i class=\"fa fa-message\"></i>\n    Alerta\n  </button>\n  <button class=\"btn btn-success\"\n          *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\n          [disabled]=\"verificacionLaboral.length === 0\"\n          (click)=\"notificarAnalista()\">\n    <i class=\"fa fa-message\"></i>\n    Notificar a analista EspInterface\n  </button>\n</div>-->\n<!--historial laboral modal-->\n\n\n\n<!--nivel academico modal -->\n\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: HistorialLaboralAcademicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialLaboralAcademicoComponent", function() { return HistorialLaboralAcademicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistorialLaboralAcademicoComponent = /** @class */ (function () {
    function HistorialLaboralAcademicoComponent(modalService) {
        this.modalService = modalService;
        this.isUpdate = false;
        this.dataLoaded = false;
    }
    HistorialLaboralAcademicoComponent.prototype.ngOnInit = function () {
    };
    HistorialLaboralAcademicoComponent.prototype.open = function (content, data) {
        this.modalRef = this.modalService.open(content);
    };
    HistorialLaboralAcademicoComponent.prototype.addHistorialLaboral = function () {
    };
    HistorialLaboralAcademicoComponent.prototype.updateHistorialLaboral = function () {
    };
    HistorialLaboralAcademicoComponent.prototype.deleteHistorialLaboral = function (id) {
    };
    HistorialLaboralAcademicoComponent.prototype.addNivelAcademico = function () {
    };
    HistorialLaboralAcademicoComponent.prototype.updateNivelAcademico = function () {
    };
    HistorialLaboralAcademicoComponent.prototype.deleteNivelAcademico = function (id) {
    };
    HistorialLaboralAcademicoComponent.prototype.saveAll = function () { };
    HistorialLaboralAcademicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial-laboral-academico',
            template: __webpack_require__(/*! ./historial-laboral-academico.component.html */ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], HistorialLaboralAcademicoComponent);
    return HistorialLaboralAcademicoComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral/historial-laboral.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral/historial-laboral.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body mb-4\">\n  <b class=\"card-title\">Historial laboral</b>\n  <hr>\n\n  <!-- table component -->\n  <div class=\"form-group row\">\n    <div class=\"col-sm-6\">\n      <div class=\"form-group text-right\">\n        <button (click)=\"open(mdHistorialLab)\" class=\"btn btn-primary\">\n          <i class=\"fa fa-plus\"></i> Agregar\n        </button>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <hr>\n    </div>\n    <table class=\"table table-bordered\">\n      <thead class=\"text-capitalize\">\n      <th>empresa</th>\n      <th>cargo</th>\n      <th>telefono</th>\n      <th>periodo</th>\n      <th>jefeInmediato</th>\n      <th>cargoJefe</th>\n      <th>ciudad</th>\n      <th>motivoRetiro</th>\n      <th>Confirmacion</th>\n      <th>observaciones</th>\n      <th class=\"acciones\">acciones</th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let value of verificacionLaboral\">\n        <td> {{ value.empresa }} </td>\n        <td> {{ value.cargo }} </td>\n        <td> {{ value.telefono }} </td>\n        <td> {{ value.periodo }} </td>\n        <td> {{ value.jefeInmediato }} </td>\n        <td> {{ value.cargoJefe }} </td>\n        <td> {{ value.ciudad }} </td>\n        <td> {{ value.motivoRetiro }} </td>\n        <td> {{ value.confirmacion === true ? 'Si' : 'No' }} </td>\n        <td> {{ value.observaciones }} </td>\n        <td class=\"acciones\">\n          <div class=\"text-center\">\n            <button class=\"btn btn-primary mr-2 ml-2\" (click)=\"open(mdHistorialLab, value)\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n\n            <button class=\"btn btn-danger ml-2 mr-2\" (click)=\"delete(value.id)\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<ng-template #mdHistorialLab let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Información familiar</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <!-- empresa -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"empresa\">Empresa</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"empresa\"\n                     name=\"empresa\"\n                     formControlName=\"empresa\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('empresa').invalid &&\n                     form.get('empresa').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n\n          <!-- cargo -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"cargo\">Cargo</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"cargo\"\n                     name=\"cargo\"\n                     formControlName=\"cargo\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('cargo').invalid &&\n                     form.get('cargo').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n          <!-- telefono -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"telefono\">Telefono</label>\n            <div class=\"col-sm-9\">\n              <input type=\"number\" class=\"form-control\"\n                     id=\"telefono\"\n                     name=\"telefono\"\n                     formControlName=\"telefono\"\n                     placeholder=\"Ingrese un telefono valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('telefono').invalid &&\n                     form.get('telefono').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n\n          <!-- periodo -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"periodo\">Periodo</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"periodo\"\n                     name=\"periodo\"\n                     formControlName=\"periodo\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('periodo').invalid &&\n                     form.get('periodo').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n\n          <!-- jefeInmediato -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"jefeInmediato\">Jefe Inmediato</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"jefeInmediato\"\n                     name=\"jefeInmediato\"\n                     formControlName=\"jefeInmediato\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('jefeInmediato').invalid &&\n                     form.get('jefeInmediato').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <!-- cargoJefe -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"cargoJefe\">Cargo del Jefe</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"cargoJefe\"\n                     name=\"cargoJefe\"\n                     formControlName=\"cargoJefe\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('cargoJefe').invalid &&\n                     form.get('cargoJefe').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n          <!-- ciudad -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"ciudad\">Ciudad</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"ciudad\"\n                     name=\"ciudad\"\n                     formControlName=\"ciudad\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('ciudad').invalid &&\n                     form.get('ciudad').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n\n          <!-- motivoRetiro -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"motivoRetiro\">Motivo Retiro</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"motivoRetiro\"\n                     name=\"motivoRetiro\"\n                     formControlName=\"motivoRetiro\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('motivoRetiro').invalid &&\n                     form.get('motivoRetiro').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n\n          <!-- confirmacion -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"confirmacion\">confirmacion</label>\n            <div class=\"col-sm-9\">\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\"\n                       type=\"radio\"\n                       formControlName=\"confirmacion\"\n                       id=\"confirmacion\" [value]=\"true\">\n                <label class=\"form-check-label\" for=\"confirmacion\">Si</label>\n              </div>\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\"\n                       type=\"radio\"\n                       formControlName=\"confirmacion\"\n                       id=\"confirmacion!\" [value]=\"false\">\n                <label class=\"form-check-label\" for=\"confirmacion!\">No</label>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- observacion -->\n          <div class=\"form-group row\">\n            <label class=\"col-sm-3 col-form-label\" for=\"observaciones\">Observacion</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\"\n                     id=\"observaciones\"\n                     name=\"observaciones\"\n                     formControlName=\"observaciones\"\n                     placeholder=\"Ingrese un dato valido\"\n                     required>\n              <div class=\"ng-invalid-feedback\"\n                   *ngIf=\"(form.get('observaciones').invalid &&\n                     form.get('observaciones').dirty)\">\n                El campo es requerido\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\n    <button class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"update()\" *ngIf=\"isUpdate\">Actualizar</button>\n    <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"add()\" *ngIf=\"!isUpdate\">Guardar</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral/historial-laboral.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral/historial-laboral.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: HistorialLaboralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialLaboralComponent", function() { return HistorialLaboralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistorialLaboralComponent = /** @class */ (function () {
    function HistorialLaboralComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            empresa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            periodo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            jefeInmediato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cargoJefe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            motivoRetiro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observaciones: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.verificacionLaboral = [];
    }
    HistorialLaboralComponent.prototype.ngOnInit = function () {
    };
    HistorialLaboralComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    HistorialLaboralComponent.prototype.close = function () {
        this.modalRef.close();
    };
    HistorialLaboralComponent.prototype.add = function () {
        this.close();
    };
    HistorialLaboralComponent.prototype.update = function () {
        this.close();
    };
    HistorialLaboralComponent.prototype.delete = function (id) {
    };
    HistorialLaboralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial-laboral',
            template: __webpack_require__(/*! ./historial-laboral.component.html */ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral/historial-laboral.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HistorialLaboralComponent);
    return HistorialLaboralComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/historial-laboral-academico/nivel-academico/nivel-academico.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/historial-laboral-academico/nivel-academico/nivel-academico.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body mb-4\">\n  <div class=\"form-group row\">\n    <label class=\"col-sm-6 col-form-label\">\n      <b class=\"card-title\">Nivel academico</b>\n    </label>\n    <div class=\"col-sm-6\">\n      <div class=\"form-group text-right\">\n        <button (click)=\"open(mdNivelAcademico)\" class=\"btn btn-primary\">\n          <i class=\"fa fa-plus\"></i> Agregar\n        </button>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <hr>\n    </div>\n    <table class=\"table table-bordered\">\n      <thead class=\"text-capitalize\">\n      <th>nivel</th>\n      <th>institución</th>\n      <th>titulo</th>\n      <th>año</th>\n      <th>ciudad</th>\n      <th>confirmación</th>\n      <th>observaciones</th>\n      <th class=\"acciones\">acciones</th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let value of nivelesAcademicos\">\n        <td>{{ value.nivel }}</td>\n        <td>{{ value.institucion }}</td>\n        <td>{{ value.titulo }}</td>\n        <td>{{ value.anno }}</td>\n        <td>{{ value.ciudad }}</td>\n        <td>{{ value.confirmacion === true ? 'Si' : 'No' }}</td>\n        <td>{{ value.observacion }}</td>\n        <td class=\"acciones\">\n          <div class=\"text-center\">\n            <button class=\"btn btn-primary mr-2\" (click)=\"open(mdNivelAcademico, value)\">\n              <i class=\"fa fa-edit\"></i>\n            </button>\n\n            <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </div>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n\n<ng-template #mdNivelAcademico let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Información familiar</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n\n      <!-- nivel -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"nivel\">Nivel</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"nivel\"\n                 name=\"nivel\"\n                 formControlName=\"nivel\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('nivel').invalid &&\n                     form.get('nivel').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n      <!-- institucion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"institucion\">Institucion</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"institucion\"\n                 name=\"institucion\"\n                 formControlName=\"institucion\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('institucion').invalid &&\n                     form.get('institucion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- titulo -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"titulo\">Titulo</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"titulo\"\n                 name=\"titulo\"\n                 formControlName=\"titulo\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('titulo').invalid &&\n                     form.get('titulo').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n\n      <!-- anno -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"anno\">Año</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"anno\"\n                 name=\"anno\"\n                 formControlName=\"anno\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('anno').invalid &&\n                     form.get('anno').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- ciudad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"ciudad2\">Ciudad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"ciudad2\"\n                 name=\"ciudad\"\n                 formControlName=\"ciudad\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('ciudad').invalid &&\n                     form.get('ciudad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n\n      <!-- confirmacion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"confirmacionNivelAc\">confirmacion</label>\n        <div class=\"col-sm-9\">\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\"\n                   type=\"radio\"\n                   formControlName=\"confirmacion\"\n                   id=\"confirmacionNivelAc\" [value]=\"true\">\n            <label class=\"form-check-label\" for=\"confirmacionNivelAc\">Si</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\"\n                   type=\"radio\"\n                   formControlName=\"confirmacion\"\n                   id=\"confirmacionNivelAc!\" [value]=\"false\">\n            <label class=\"form-check-label\" for=\"confirmacionNivelAc!\">No</label>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- observacion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"observacion\">Observacion</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"observacion\"\n                 name=\"observacion\"\n                 formControlName=\"observacion\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('observacion').invalid &&\n                     form.get('observacion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\n    <button class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"update()\" *ngIf=\"isUpdate\">Actualizar</button>\n    <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"add()\" *ngIf=\"!isUpdate\">Guardar</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/historial-laboral-academico/nivel-academico/nivel-academico.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/historial-laboral-academico/nivel-academico/nivel-academico.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: NivelAcademicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelAcademicoComponent", function() { return NivelAcademicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NivelAcademicoComponent = /** @class */ (function () {
    function NivelAcademicoComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            nivel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            institucion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            anno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmacion: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            observacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.nivelesAcademicos = [];
    }
    NivelAcademicoComponent.prototype.ngOnInit = function () {
    };
    NivelAcademicoComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    NivelAcademicoComponent.prototype.close = function () {
        this.modalRef.close();
    };
    NivelAcademicoComponent.prototype.add = function () {
        this.close();
    };
    NivelAcademicoComponent.prototype.update = function () {
        this.close();
    };
    NivelAcademicoComponent.prototype.delete = function (id) {
    };
    NivelAcademicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nivel-academico',
            template: __webpack_require__(/*! ./nivel-academico.component.html */ "./src/app/pages/modules/informe/components/historial-laboral-academico/nivel-academico/nivel-academico.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NivelAcademicoComponent);
    return NivelAcademicoComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/familia.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/familia.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header bg-white\">\n  <h4 class=\"text-center\">Estudio de seguridad</h4>\n</div>\n\n<div class=\"card-body bg-light\">\n\n  <!-- Informacion familiar card-->\n  <app-info-personal></app-info-personal>\n\n  <!-- Hijos -->\n  <app-hijos></app-hijos>\n\n  <!-- Informacion familiar -->\n  <app-informacion-familiar></app-informacion-familiar>\n\n  <!-- Referencias -->\n  <app-referencias></app-referencias>\n\n</div>\n\n<div class=\"card-footer bg-white\">\n  <button class=\"btn btn-primary\" (click)=\"saveAll()\" *ngIf=\"!dataLoaded\">Guardar</button>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/familia.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/familia.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FamiliaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamiliaComponent", function() { return FamiliaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamiliaComponent = /** @class */ (function () {
    function FamiliaComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.hijos = [];
        this.referencias = [];
        this.infoFamiliar = [];
        this.isUpdate = false;
        this.dataLoaded = false;
    }
    FamiliaComponent.prototype.ngOnInit = function () {
    };
    FamiliaComponent.prototype.open = function (content, data) {
        this.modalRef = this.modalService.open(content);
        this.isUpdate = false;
        if (data) {
            this.isUpdate = true;
            this.selectedItem = data;
        }
    };
    FamiliaComponent.prototype.close = function () {
        this.modalRef.close();
    };
    FamiliaComponent.prototype.addHijos = function () {
        this.close();
    };
    FamiliaComponent.prototype.updateHijo = function () {
        this.close();
    };
    FamiliaComponent.prototype.deleteHijo = function (id) {
    };
    FamiliaComponent.prototype.addInfoFamiliar = function () {
        this.close();
    };
    FamiliaComponent.prototype.updateInfoFamiliar = function () {
        this.close();
    };
    FamiliaComponent.prototype.deleteInfoFamiliar = function (id) {
    };
    FamiliaComponent.prototype.addReferencia = function () {
        this.close();
    };
    FamiliaComponent.prototype.updateReferencia = function () {
        this.close();
    };
    FamiliaComponent.prototype.deleteReferencia = function (id) {
    };
    FamiliaComponent.prototype.saveAll = function () {
    };
    FamiliaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-familia',
            template: __webpack_require__(/*! ./familia.component.html */ "./src/app/pages/modules/informe/components/informacion-familiar/familia.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], FamiliaComponent);
    return FamiliaComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/hijos/hijos.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/hijos/hijos.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto card\">\r\n  <div class=\"card-body mb-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <b class=\"card-title\">Hijos</b>\r\n      </div>\r\n      <div class=\"col-md-4 text-right\">\r\n        <button (click)=\"open(mdHijos)\" class=\"btn btn-primary\">\r\n          <i class=\"fa fa-plus\"></i>\r\n          Agregar\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\"><hr></div>\r\n    <div class=\"form-group row\">\r\n      <div class=\"col-md-12\">\r\n        <table class=\"table table-bordered\">\r\n          <thead class=\"text-capitalize\">\r\n          <th>edad</th>\r\n          <th>nombre</th>\r\n          <th>ocupación</th>\r\n          <th>ubicación</th>\r\n          <th class=\"acciones\">acciones</th>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let value of hijos\">\r\n            <td>{{ value.edad }}</td>\r\n            <td>{{ value.nombre }}</td>\r\n            <td>{{ value.ocupacion }}</td>\r\n            <td>{{ value.ubicacion }}</td>\r\n            <td class=\"acciones\">\r\n              <div class=\"text-center\">\r\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdHijos, value)\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal add hijos -->\r\n<ng-template #mdHijos let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalVerticalLabel\">Hijos</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"form\">\r\n\r\n      <!-- edad -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"hijo-edad\">Edad</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"number\" class=\"form-control\"\r\n                 id=\"hijo-edad\"\r\n                 name=\"edad\"\r\n                 formControlName=\"edad\"\r\n                 placeholder=\"Ingrese un numero valido\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('edad').invalid &&\r\n                     form.get('edad').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- nombre -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"hijo-nombre\">Nombre</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                 id=\"hijo-nombre\"\r\n                 name=\"nombre\"\r\n                 formControlName=\"nombre\"\r\n                 placeholder=\"Ingrese el nombre valido\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('nombre').invalid &&\r\n                     form.get('nombre').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- ocupacion -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"hijo-ocupacion\">Ocupación</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                 id=\"hijo-ocupacion\"\r\n                 name=\"ocupacion\"\r\n                 formControlName=\"ocupacion\"\r\n                 placeholder=\"Ocupación del hijo\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('ocupacion').invalid &&\r\n                     form.get('ocupacion').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- ubicacion -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"hijo-ubicacion\">Ubicación</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                 id=\"hijo-ubicacion\"\r\n                 name=\"ubicacion\"\r\n                 formControlName=\"ubicacion\"\r\n                 placeholder=\"ingrese una ubicación valida\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('ubicacion').invalid &&\r\n                     form.get('ubicacion').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-warning\"\r\n            *ngIf=\"isUpdate\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"update()\">\r\n      Actualizar\r\n    </button>\r\n    <button class=\"btn btn-primary\"\r\n            *ngIf=\"!isUpdate\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"add()\">\r\n      Guardar\r\n    </button>\r\n    <button class=\"btn btn-secondary\"\r\n            (click)=\"modal.close()\">\r\n      Cerrar\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/hijos/hijos.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/hijos/hijos.component.ts ***!
  \************************************************************************************************/
/*! exports provided: HijosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HijosComponent", function() { return HijosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HijosComponent = /** @class */ (function () {
    function HijosComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            edad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(120), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ocupacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ubicacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.hijos = [];
        this.isUpdate = false;
    }
    HijosComponent.prototype.ngOnInit = function () {
    };
    HijosComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    HijosComponent.prototype.close = function () {
        this.modalRef.close();
    };
    HijosComponent.prototype.add = function () {
        this.close();
    };
    HijosComponent.prototype.update = function () {
        this.close();
    };
    HijosComponent.prototype.delete = function (id) {
    };
    HijosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hijos',
            template: __webpack_require__(/*! ./hijos.component.html */ "./src/app/pages/modules/informe/components/informacion-familiar/hijos/hijos.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HijosComponent);
    return HijosComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/informacion-familiar/informacion-familiar.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/informacion-familiar/informacion-familiar.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\n  <div class=\"card-body \">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <b class=\"card-title\">Informacion familiar</b>\n      </div>\n      <div class=\"col-md-4 text-right\">\n        <button (click)=\"open(mdInfoFamiliar)\" class=\"btn btn-primary\">\n          <i class=\"fa fa-plus\"></i>\n          Agregar\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group\"><hr></div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table table-bordered\">\n          <thead class=\"text-capitalize\">\n          <th>nombre</th>\n          <th>parentesco</th>\n          <th>edad</th>\n          <th>ocupacion</th>\n          <th>telefono</th>\n          <th>ciudad</th>\n          <th>Vive con ud</th>\n          <th class=\"acciones\">acciones</th>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let value of infoFamiliar\">\n            <td>{{ value.nombre }}</td>\n            <td>{{ value.parentesco }}</td>\n            <td>{{ value.edad }}</td>\n            <td>{{ value.ocupacion}}</td>\n            <td>{{ value.telefono}}</td>\n            <td>{{ value.ciudad}}</td>\n            <td>{{ value.viveConUd === true ? 'Si' : 'No' }}</td>\n            <td class=\"acciones\">\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdInfoFamiliar, value)\">\n                  <i class=\"fa fa-edit\"></i>\n                </button>\n\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal InformacionFamiliar -->\n<ng-template #mdInfoFamiliar let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Información familiar</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <!-- nombre -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"info-flia-nombre\">Nombre</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"info-flia-nombre\"\n                 name=\"nombre\"\n                 formControlName=\"nombre\"\n                 placeholder=\"Ingrese un nombre valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('nombre').invalid &&\n                     form.get('nombre').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- parentesco -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"info-flia-parentesco\">Parentesco</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"info-flia-parentesco\"\n                 name=\"parentesco\"\n                 formControlName=\"parentesco\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('parentesco').invalid &&\n                     form.get('parentesco').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- edad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"info-flia-edad\">Edad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"number\" class=\"form-control\"\n                 id=\"info-flia-edad\"\n                 name=\"edad\"\n                 formControlName=\"edad\"\n                 placeholder=\"Ingrese un numero valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('edad').invalid &&\n                     form.get('edad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- ocupacion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"info-flia-ocupacion\">ocupacion</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"info-flia-ocupacion\"\n                 name=\"edad\"\n                 formControlName=\"ocupacion\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('ocupacion').invalid &&\n                     form.get('ocupacion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- telefono -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"info-flia-telefono\">Telefono</label>\n        <div class=\"col-sm-9\">\n          <input type=\"number\" class=\"form-control\"\n                 id=\"info-flia-telefono\"\n                 name=\"telefono\"\n                 formControlName=\"telefono\"\n                 placeholder=\"Ingrese un telefono valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('telefono').invalid &&\n                     form.get('telefono').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- ciudad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"info-flia-ciudad\">Ciudad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"info-flia-ciudad\"\n                 name=\"edad\"\n                 formControlName=\"ciudad\"\n                 placeholder=\"Ingrese una ciudad valida\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('ciudad').invalid &&\n                     form.get('ciudad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- Vive con ud -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"viveConUd\">Vive con ud</label>\n        <div class=\"col-sm-9\">\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\"\n                   type=\"radio\"\n                   formControlName=\"viveConUd\"\n                   id=\"viveConUd\" [value]=\"true\">\n            <label class=\"form-check-label\" for=\"viveConUd\">Si</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\"\n                   type=\"radio\"\n                   formControlName=\"viveConUd\"\n                   id=\"viveConUd!\" [value]=\"false\">\n            <label class=\"form-check-label\" for=\"viveConUd!\">No</label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-warning\"\n            *ngIf=\"isUpdate\"\n            [disabled]=\"form.invalid\"\n            (click)=\"update()\">\n      Actualizar\n    </button>\n    <button class=\"btn btn-primary\"\n            *ngIf=\"!isUpdate\"\n            [disabled]=\"form.invalid\"\n            (click)=\"add()\">\n      Guardar\n    </button>\n    <button class=\"btn btn-secondary\"\n            (click)=\"modal.close()\">\n      Cerrar\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/informacion-familiar/informacion-familiar.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/informacion-familiar/informacion-familiar.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: InformacionFamiliarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionFamiliarComponent", function() { return InformacionFamiliarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformacionFamiliarComponent = /** @class */ (function () {
    function InformacionFamiliarComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parentesco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            edad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(120), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            ocupacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            viveConUd: false,
        });
        this.infoFamiliar = [];
        this.isUpdate = false;
    }
    InformacionFamiliarComponent.prototype.ngOnInit = function () {
    };
    InformacionFamiliarComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    InformacionFamiliarComponent.prototype.close = function () {
        this.modalRef.close();
    };
    InformacionFamiliarComponent.prototype.add = function () {
        this.close();
    };
    InformacionFamiliarComponent.prototype.update = function () {
        this.close();
    };
    InformacionFamiliarComponent.prototype.delete = function (id) {
    };
    InformacionFamiliarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-familiar',
            template: __webpack_require__(/*! ./informacion-familiar.component.html */ "./src/app/pages/modules/informe/components/informacion-familiar/informacion-familiar/informacion-familiar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], InformacionFamiliarComponent);
    return InformacionFamiliarComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/nucleo-familiar/nucleo-familiar.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/nucleo-familiar/nucleo-familiar.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card \">\n  <div [formGroup]=\"form\" class=\"card-body mb-4\">\n    <b class=\"card-title\">Nucleo familiar</b>\n    <hr>\n\n    <!-- Nombre del conyuge -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"nombreConyuge\">\n        Nombre del conyuge\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"nombreConyuge\"\n               formControlName=\"nombreConyuge\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['nombreConyuge'].invalid &&\n             form.controls['nombreConyuge'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- edad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"edadConyuge\">Edad</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" class=\"form-control\"\n               minlength=\"0\" maxlength=\"130\"\n               id=\"edadConyuge\"\n               formControlName=\"edadConyuge\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['edadConyuge'].invalid &&\n             form.controls['edadConyuge'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Identificación -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"identificacion\">Identificación</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" minlength=\"0\" class=\"form-control\"\n               id=\"identificacion\"\n               formControlName=\"identificacion\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['identificacion'].invalid &&\n             form.controls['identificacion'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Lugar de Expedición -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"lugarExpedicion\">Lugar de Expedición\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"lugarExpedicion\"\n               formControlName=\"lugarExpedicion\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['lugarExpedicion'].invalid &&\n             form.controls['lugarExpedicion'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Lugar de nacimiento -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"lugarNacimiento\">Lugar de nacimiento\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"lugarNacimiento\"\n               formControlName=\"lugarNacimiento\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['lugarNacimiento'].invalid &&\n             form.controls['lugarNacimiento'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- fecha de nacimiento -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"fechaNacimiento\">Fecha de Nacimiento\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"date\" class=\"form-control\"\n               id=\"fechaNacimiento\"\n               formControlName=\"fechaNacimiento\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['fechaNacimiento'].invalid &&\n             form.controls['fechaNacimiento'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- ocupacion -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"ocupacion\">Ocupación\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"ocupacion\"\n               formControlName=\"ocupacion\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['ocupacion'].invalid &&\n             form.controls['ocupacion'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- empresa -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"empresa\">Empresa\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"empresa\"\n               formControlName=\"empresa\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['empresa'].invalid &&\n             form.controls['empresa'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- telefono -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"telefono\">Telefono - Celular\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" class=\"form-control\"\n               id=\"telefono\"\n               formControlName=\"telefono\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['telefono'].invalid &&\n             form.controls['telefono'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- tiempo Laborado -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"tiempoLaborado\">Tiempo Laborado\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"tiempoLaborado\"\n               formControlName=\"tiempoLaborado\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['tiempoLaborado'].invalid &&\n             form.controls['tiempoLaborado'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/nucleo-familiar/nucleo-familiar.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/nucleo-familiar/nucleo-familiar.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NucleoFamiliarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoFamiliarComponent", function() { return NucleoFamiliarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NucleoFamiliarComponent = /** @class */ (function () {
    function NucleoFamiliarComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            nombreConyuge: '',
            edadConyuge: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(120), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            identificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            lugarExpedicion: '',
            fechaNacimiento: '',
            lugarNacimiento: '',
            ocupacion: '',
            empresa: '',
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            tiempoLaborado: '',
        });
    }
    NucleoFamiliarComponent.prototype.ngOnInit = function () {
    };
    NucleoFamiliarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleo-familiar',
            template: __webpack_require__(/*! ./nucleo-familiar.component.html */ "./src/app/pages/modules/informe/components/informacion-familiar/nucleo-familiar/nucleo-familiar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NucleoFamiliarComponent);
    return NucleoFamiliarComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/referencias/referencias.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/referencias/referencias.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\n  <div class=\"card-body \">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <b class=\"card-title\">Referencias</b>\n      </div>\n      <div class=\"col-md-4 text-right\">\n        <button (click)=\"open(mdReferencias)\" class=\"btn btn-primary\">\n          <i class=\"fa fa-plus\"></i>\n          Agregar\n        </button>\n      </div>\n    </div>\n    <div class=\"form-group\"><hr></div>\n    <div class=\"form-group row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table table-bordered\">\n          <thead class=\"text-capitalize\">\n          <th>nombre</th>\n          <th>ocupacion</th>\n          <th>telefono</th>\n          <th>ciudad</th>\n          <th>confirmacion</th>\n          <th class=\"acciones\">acciones</th>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let value of referencias\">\n            <td>{{ value.nombre }}</td>\n            <td>{{ value.ocupacion }}</td>\n            <td>{{ value.telefono }}</td>\n            <td>{{ value.ciudad }}</td>\n            <td>{{ value.confirmacion }}</td>\n            <td class=\"acciones\">\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdReferencias, value)\">\n                  <i class=\"fa fa-edit\"></i>\n                </button>\n\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal referencias -->\n<ng-template #mdReferencias let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Referencias</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n      <!-- nombre -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"ref-nombre\">Nombre</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"ref-nombre\"\n                 name=\"nombre\"\n                 formControlName=\"nombre\"\n                 placeholder=\"Ingrese un nombre valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('nombre').invalid &&\n                     form.get('nombre').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- ocupacion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"ref-ocupacion\">Ocupación</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"ref-ocupacion\"\n                 name=\"ocupacion\"\n                 formControlName=\"ocupacion\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('ocupacion').invalid &&\n                     form.get('ocupacion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- telefono -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"ref-telefono\">Telefono</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"ref-telefono\"\n                 name=\"telefono\"\n                 formControlName=\"telefono\"\n                 placeholder=\"Ingrese un telefono valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('telefono').invalid &&\n                     form.get('telefono').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- ciudad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"ref-ciudad\">Ciudad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"ref-ciudad\"\n                 name=\"ciudad\"\n                 formControlName=\"ciudad\"\n                 placeholder=\"Ingrese una ciudad valida\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('ciudad').invalid &&\n                     form.get('ciudad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- confirmacion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"ref-confirmacion\">Confirmacion</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"ref-confirmacion\"\n                 name=\"confirmacion\"\n                 formControlName=\"confirmacion\"\n                 placeholder=\"Ingrese una dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('confirmacion').invalid &&\n                     form.get('confirmacion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-warning\"\n            *ngIf=\"isUpdate\"\n            [disabled]=\"form.invalid\"\n            (click)=\"update()\">\n      Actualizar\n    </button>\n    <button class=\"btn btn-primary\"\n            *ngIf=\"!isUpdate\"\n            [disabled]=\"form.invalid\"\n            (click)=\"add()\">\n      Guardar\n    </button>\n    <button class=\"btn btn-secondary\"\n            (click)=\"modal.close()\">\n      Cerrar\n    </button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informacion-familiar/referencias/referencias.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informacion-familiar/referencias/referencias.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ReferenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenciasComponent", function() { return ReferenciasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferenciasComponent = /** @class */ (function () {
    function ReferenciasComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ocupacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.isUpdate = false;
    }
    ReferenciasComponent.prototype.ngOnInit = function () {
    };
    ReferenciasComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    ReferenciasComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ReferenciasComponent.prototype.add = function () {
        this.close();
    };
    ReferenciasComponent.prototype.update = function () {
        this.close();
    };
    ReferenciasComponent.prototype.delete = function (id) {
    };
    ReferenciasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referencias',
            template: __webpack_require__(/*! ./referencias.component.html */ "./src/app/pages/modules/informe/components/informacion-familiar/referencias/referencias.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ReferenciasComponent);
    return ReferenciasComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/condiciones-inmueble/condiciones-inmueble.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/condiciones-inmueble/condiciones-inmueble.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div class=\"card-body\">\n    <b class=\"card-title\">Condiciones  fisicas del inmueble</b>\n    <hr>\n\n    <!-- Estado general -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"estadoGeneral\">Estado general</label>\n      <div class=\"col-sm-8\">\n        <select class=\"form-control\" name=\"estadoGeneral\" id=\"estadoGeneral\" formControlName=\"estadoGeneral\">\n          <option value=\"\">Seleccione</option>\n          <option value=\"Bueno\">Bueno</option>\n          <option value=\"Regular\">Regular</option>\n          <option value=\"Malo\">Malo</option>\n        </select>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['estadoGeneral'].invalid &&\n           form.controls['estadoGeneral'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Acabados -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"acabados\">Acabados</label>\n      <div class=\"col-sm-8\">\n        <select class=\"form-control\" name=\"acabados\" id=\"acabados\" formControlName=\"acabados\">\n          <option value=\"\">Seleccione</option>\n          <option value=\"Completos\">Completos</option>\n          <option value=\"Incompletos\">Incompletos</option>\n        </select>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['acabados'].invalid &&\n           form.controls['acabados'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Dotacion -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"dotacion\">\n        Dotación\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"dotacion\"\n               id=\"dotacion\"\n               placeholder=\"Ingrese la dotación\"\n               formControlName=\"dotacion\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['dotacion'].invalid &&\n           form.controls['dotacion'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Salubridad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"salubridad\">\n        Salubridad\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"salubridad\"\n               id=\"salubridad\"\n               placeholder=\"Ingrese el estado de salubridad\"\n               formControlName=\"salubridad\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['salubridad'].invalid &&\n           form.controls['salubridad'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Estrato -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"estrato\">Estrato</label>\n      <div class=\"col-sm-8\">\n        <select class=\"form-control\" name=\"estrato\" id=\"estrato\" formControlName=\"estrato\">\n          <option value=\"\">Seleccione</option>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n          <option value=\"4\">4</option>\n          <option value=\"5\">5</option>\n          <option value=\"6\">6</option>\n        </select>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['estrato'].invalid &&\n           form.controls['estrato'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Servicio públicos\t -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"serviciosPublicos\">\n        Servicios públicos\n      </label>\n      <div class=\"col-sm-8\">\n        <textarea name=\"serviciosPublicos\" id=\"serviciosPublicos\"\n                  cols=\"30\" rows=\"3\"\n                  class=\"form-control\"\n                  formControlName=\"serviciosPublicos\"\n                  placeholder=\"Ingrese los servicios publicos\">\n        </textarea>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['serviciosPublicos'].invalid &&\n           form.controls['serviciosPublicos'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Distribución de la vivienda\t -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"distribucion\">\n        Distribución de la vivienda\n      </label>\n      <div class=\"col-sm-8\">\n        <textarea name=\"serviciosPublicos\" id=\"distribucion\"\n                  cols=\"30\" rows=\"3\"\n                  class=\"form-control\"\n                  formControlName=\"distribucion\"\n                  placeholder=\"Ingrese la distribución de la vivienda\t\">\n        </textarea>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['distribucion'].invalid &&\n           form.controls['distribucion'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/condiciones-inmueble/condiciones-inmueble.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/condiciones-inmueble/condiciones-inmueble.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CondicionesInmuebleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesInmuebleComponent", function() { return CondicionesInmuebleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CondicionesInmuebleComponent = /** @class */ (function () {
    function CondicionesInmuebleComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            estadoGeneral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            acabados: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dotacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            salubridad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            serviciosPublicos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            distribucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    CondicionesInmuebleComponent.prototype.ngOnInit = function () {
    };
    CondicionesInmuebleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-condiciones-inmueble',
            template: __webpack_require__(/*! ./condiciones-inmueble.component.html */ "./src/app/pages/modules/informe/components/informe2/condiciones-inmueble/condiciones-inmueble.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CondicionesInmuebleComponent);
    return CondicionesInmuebleComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/condiciones-sector/condiciones-sector.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/condiciones-sector/condiciones-sector.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div class=\"card-body\">\n    <b class=\"card-title\">Condiciones generales del sector</b>\n    <hr>\n\n    <!-- Ciudad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"ciudad\">\n        Ciudad\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"ciudad\"\n               id=\"ciudad\"\n               placeholder=\"Ingrese la ciudad\"\n               formControlName=\"ciudad\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['ciudad'].invalid &&\n           form.controls['ciudad'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Barrio -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"barrio\">\n        Barrio\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"barrio\"\n               id=\"barrio\"\n               placeholder=\"Ingrese el barrio\"\n               formControlName=\"barrio\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['barrio'].invalid &&\n           form.controls['barrio'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Localidad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"localidad\">\n        Localidad\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"localidad\"\n               id=\"localidad\"\n               placeholder=\"Ingrese la localidad\"\n               formControlName=\"localidad\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['localidad'].invalid &&\n           form.controls['localidad'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Vías de acceso\t -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"viasAcceso\">\n        Vías de acceso\n      </label>\n      <div class=\"col-sm-8\">\n        <textarea name=\"viasAcceso\" id=\"viasAcceso\"\n                  cols=\"30\" rows=\"3\"\n                  class=\"form-control\"\n                  formControlName=\"viasAcceso\"\n                  placeholder=\"Ingrese las vias de acceso\">\n        </textarea>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['viasAcceso'].invalid &&\n           form.controls['viasAcceso'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Transporte público\t -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"transportePublico\">\n        Transporte público\n      </label>\n      <div class=\"col-sm-8\">\n        <textarea name=\"transportePublico\" id=\"transportePublico\"\n                  cols=\"30\" rows=\"3\"\n                  class=\"form-control\"\n                  formControlName=\"transportePublico\"\n                  placeholder=\"Transporte público\">\n        </textarea>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['transportePublico'].invalid &&\n           form.controls['transportePublico'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Centros asistenciales\t\t -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"centrosAsistenciales\">\n        Centros asistenciales\n      </label>\n      <div class=\"col-sm-8\">\n        <textarea name=\"centrosAsistenciales\" id=\"centrosAsistenciales\"\n                  cols=\"30\" rows=\"3\"\n                  class=\"form-control\"\n                  formControlName=\"centrosAsistenciales\"\n                  placeholder=\"Centros asistenciales\">\n        </textarea>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['centrosAsistenciales'].invalid &&\n           form.controls['centrosAsistenciales'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Flujo vehicular -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"flujoVehicular\">\n        Flujo vehícular\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"flujoVehicular\"\n               id=\"flujoVehicular\"\n               placeholder=\"Ingrese el flujo vehícular\t\"\n               formControlName=\"flujoVehicular\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['flujoVehicular'].invalid &&\n           form.controls['flujoVehicular'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Nivel de seguridad -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"nivelSeguridad\">\n        Nivel de seguridad\n      </label>\n      <div class=\"col-sm-8\">\n        <select class=\"form-control\" name=\"nivelSeguridad\" id=\"nivelSeguridad\" formControlName=\"nivelSeguridad\">\n          <option value=\"\">Seleccione</option>\n          <option value=\"Alto\">Alto</option>\n          <option value=\"Medio\">Medio</option>\n          <option value=\"Bajo\">Bajo</option>\n        </select>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['nivelSeguridad'].invalid &&\n           form.controls['nivelSeguridad'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/condiciones-sector/condiciones-sector.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/condiciones-sector/condiciones-sector.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CondicionesSectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesSectorComponent", function() { return CondicionesSectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CondicionesSectorComponent = /** @class */ (function () {
    function CondicionesSectorComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            barrio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            viasAcceso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transportePublico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            centrosAsistenciales: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            flujoVehicular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nivelSeguridad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    CondicionesSectorComponent.prototype.ngOnInit = function () {
    };
    CondicionesSectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-condiciones-sector',
            template: __webpack_require__(/*! ./condiciones-sector.component.html */ "./src/app/pages/modules/informe/components/informe2/condiciones-sector/condiciones-sector.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CondicionesSectorComponent);
    return CondicionesSectorComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/entorno-habitacional/entorno-habitacional.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/entorno-habitacional/entorno-habitacional.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div class=\"card-body\">\n    <b class=\"card-title\">Entorno habitacional</b>\n    <hr>\n\n    <!-- tipo de vivienda -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"tipoVivienda\">Tipo de vivienda</label>\n      <div class=\"col-sm-8\">\n        <select class=\"form-control\" name=\"tipoVivienda\" id=\"tipoVivienda\" formControlName=\"tipoVivienda\">\n          <option value=\"\">Seleccione</option>\n          <option value=\"Casa\">Casa</option>\n          <option value=\"Casa lote\">Casa lote</option>\n          <option value=\"Apartamento\">Apartamento</option>\n          <option value=\"Apartamento\">Apartamento</option>\n          <option value=\"Aparta-estudio\">Aparta-estudio</option>\n        </select>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['tipoVivienda'].invalid &&\n           form.controls['tipoVivienda'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Tenencia -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"tenencia\">Tenencia</label>\n      <div class=\"col-sm-8\">\n        <select class=\"form-control\" name=\"tenencia\" id=\"tenencia\" formControlName=\"tenencia\">\n          <option value=\"\">Seleccione</option>\n          <option value=\"Arriendo\">Arriendo</option>\n          <option value=\"Familiar\">Familiar</option>\n          <option value=\"Propia\">Propia</option>\n        </select>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['tenencia'].invalid &&\n           form.controls['tenencia'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Tiempo de permanencia -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"tiempoPermanencia\">Tiempo de permanencia</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"tiempoPermanencia\"\n               id=\"tiempoPermanencia\"\n               placeholder=\"Ingrese el tiempo de permanencia\"\n               formControlName=\"tiempoPermanencia\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['tiempoPermanencia'].invalid &&\n           form.controls['tiempoPermanencia'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Información del propietario -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"infoPropietario\">\n        Información del propietario\n      </label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"infoPropietario\"\n               id=\"infoPropietario\"\n               placeholder=\"Ingrese el tiempo de permanencia\"\n               formControlName=\"infoPropietario\">\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['infoPropietario'].invalid &&\n           form.controls['infoPropietario'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Fotografia -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"fotografia\">\n        Fotografías\n      </label>\n      <div class=\"col-sm-8\">\n        <div class=\"custom-file\">\n          <input type=\"text\"\n                 class=\"custom-file-input\"\n                 name=\"fotografia\"\n                 id=\"fotografia\"\n                 placeholder=\"Ingrese el tiempo de permanencia\"\n                 formControlName=\"fotografia\">\n          <label class=\"custom-file-label\" for=\"fotografia\">seleccione un archivo</label>\n        </div>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['fotografia'].invalid &&\n           form.controls['fotografia'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/entorno-habitacional/entorno-habitacional.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/entorno-habitacional/entorno-habitacional.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EntornoHabitacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntornoHabitacionalComponent", function() { return EntornoHabitacionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntornoHabitacionalComponent = /** @class */ (function () {
    function EntornoHabitacionalComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            tipoVivienda: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tenencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tiempoPermanencia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            infoPropietario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fotografia: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    EntornoHabitacionalComponent.prototype.ngOnInit = function () {
    };
    EntornoHabitacionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entorno-habitacional',
            template: __webpack_require__(/*! ./entorno-habitacional.component.html */ "./src/app/pages/modules/informe/components/informe2/entorno-habitacional/entorno-habitacional.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EntornoHabitacionalComponent);
    return EntornoHabitacionalComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/informe2.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/informe2.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header bg-white\">\n  <h4 class=\"text-center\">Estudio de seguridad</h4>\n</div>\n<div class=\"card-body bg-light\" [formGroup]=\"form\">\n\n  <!-- Entorno habitacional -->\n  <app-entorno-habitacional></app-entorno-habitacional>\n\n  <!--Condiciones  fisicas del inmueble-->\n  <app-condiciones-inmueble></app-condiciones-inmueble>\n\n\n  <!--Condiciones generales del sector-->\n  <app-condiciones-sector></app-condiciones-sector>\n\n</div>\n<div class=\"card-footer text-right\">\n  <button class=\"btn btn-primary\" (click)=\"saveAll()\" *ngIf=\"!dataLoaded\">Guardar</button>\n</div>\n<!--<pre>{{ form.getRawValue() | json }}</pre>-->\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/informe2/informe2.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/informe2/informe2.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Informe2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Informe2Component", function() { return Informe2Component; });
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

var Informe2Component = /** @class */ (function () {
    function Informe2Component() {
    }
    Informe2Component.prototype.ngOnInit = function () {
    };
    Informe2Component.prototype.saveAll = function () { };
    Informe2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informe2',
            template: __webpack_require__(/*! ./informe2.component.html */ "./src/app/pages/modules/informe/components/informe2/informe2.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], Informe2Component);
    return Informe2Component;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/main/main.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/main/main.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center mt-3\">\n\n      <div class=\"btn-group\">\n\n        <button *ngFor=\"let item of informe\"\n                type=\"button\" class=\"btn btn-primary\"\n                routerLinkActive=\"active\"\n                [routerLink]=\"item.path\">\n          {{ item.name }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-10 mx-auto mt-4\">\n  <div class=\"card\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/main/main.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/main/main.component.ts ***!
  \*************************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.informe = [
            {
                path: './estudio-seguridad',
                name: 'Estudio de seguridad',
            },
            { path: './datos-personales',
                name: 'Datos personales',
            },
            { path: './informacion-familiar',
                name: 'Informacion Familiar',
            },
            { path: './informe2',
                name: 'Entorno habitacional',
            },
            { path: './modus-vivendi',
                name: 'Modus vivendi',
            },
            { path: './historial-laboral-academico',
                name: 'Historial laboral',
            },
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/modules/informe/components/main/main.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\n  <div class=\"card-body \">\n    <div class=\"form-group row\">\n      <label class=\"col-sm-6 col-form-label\">\n        <b>Capacidad de endeudamiento</b>\n      </label>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group text-right\">\n          <button (click)=\"open(mdCapEndeudamiento)\" class=\"btn btn-primary\">\n            <i class=\"fa fa-plus\"></i>\n            Agregar\n          </button>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <hr>\n      </div>\n      <div class=\"col-sm-12 mt-2\">\n        <table class=\"table table-bordered\">\n          <thead class=\"text-capitalize\">\n          <th>descripción</th>\n          <th>entidad</th>\n          <th>monto</th>\n          <th>estado deuda</th>\n          <th>valor mensual</th>\n          <th class=\"acciones\">acciones</th>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let value of capEndeudamiento\">\n            <td> {{ value.descripcion }}</td>\n            <td> {{ value.entidad }}</td>\n            <td> {{ value.monto }}</td>\n            <td> {{ value.estadoDeuda }}</td>\n            <td> {{ value.valorMensual }}</td>\n            <td class=\"acciones\">\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdCapEndeudamiento, value)\">\n                  <i class=\"fa fa-edit\"></i>\n                </button>\n\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <hr>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<ng-template #mdCapEndeudamiento let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Capacidad de endeudamiento</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n\n      <!-- Descripcion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"cap-descripcion\">Descripcion</label>\n        <div class=\"col-sm-9\">\n          <select name=\"descripcion\" id=\"cap-descripcion\"\n                  class=\"form-control text-capitalize\"\n                  formControlName=\"descripcion\">\n            <option value=\"\">Seleccione</option>\n            <option>tarjeta de credito</option>\n            <option>credito hipotecario</option>\n            <option>credito libre inversión</option>\n          </select>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('descripcion').invalid &&\n                     form.get('descripcion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n      <!-- entidad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"cap-entidad\">Entidad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"cap-entidad\"\n                 name=\"entidad\" formControlName=\"entidad\"\n                 placeholder=\"Ingrese un dato valido\" required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('entidad').invalid &&\n                     form.get('entidad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- monto -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"cap-monto\">Monto</label>\n        <div class=\"col-sm-9\">\n          <input type=\"number\" class=\"form-control\"\n                 id=\"cap-monto\"\n                 name=\"monto\" formControlName=\"monto\"\n                 placeholder=\"Ingrese un dato valido\" required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('monto').invalid &&\n                     form.get('monto').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- estadoDeuda -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"cap-estadoDeuda\">Estado de Deuda</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"cap-estadoDeuda\"\n                 name=\"estadoDeuda\" formControlName=\"estadoDeuda\"\n                 placeholder=\"Ingrese un dato valido\" required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('estadoDeuda').invalid &&\n                     form.get('estadoDeuda').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- valorMensual -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"cap-valorMensual\">Valor Mensual</label>\n        <div class=\"col-sm-9\">\n          <input type=\"number\" class=\"form-control\"\n                 id=\"cap-valorMensual\"\n                 name=\"valorMensual\" formControlName=\"valorMensual\"\n                 placeholder=\"Ingrese un numero valido\" required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('valorMensual').invalid &&\n                     form.get('valorMensual').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"update()\" *ngIf=\"isUpdate\">Actualizar</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"add()\" *ngIf=\"!isUpdate\">Guardar</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CapacidadEndeudamientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacidadEndeudamientoComponent", function() { return CapacidadEndeudamientoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CapacidadEndeudamientoComponent = /** @class */ (function () {
    function CapacidadEndeudamientoComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            entidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            monto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            estadoDeuda: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valorMensual: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.capEndeudamiento = [];
    }
    CapacidadEndeudamientoComponent.prototype.ngOnInit = function () {
    };
    CapacidadEndeudamientoComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    CapacidadEndeudamientoComponent.prototype.close = function () {
        this.modalRef.close();
    };
    CapacidadEndeudamientoComponent.prototype.add = function () {
        this.close();
    };
    CapacidadEndeudamientoComponent.prototype.update = function () {
        this.close();
    };
    CapacidadEndeudamientoComponent.prototype.delete = function (id) {
    };
    CapacidadEndeudamientoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capacidad-endeudamiento',
            template: __webpack_require__(/*! ./capacidad-endeudamiento.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], CapacidadEndeudamientoComponent);
    return CapacidadEndeudamientoComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/egresos/egresos.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/egresos/egresos.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 mx-auto card mb-4\">\n  <div [formGroup]=\"form\" class=\" card-body\">\n    <b class=\"card-title\">Ingresos mensuales</b>\n    <hr>\n\n    <!-- total egresos -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"engresosMensuales\">Total egresos</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" class=\"form-control\"\n               id=\"engresosMensuales\"\n               formControlName=\"engresosMensuales\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['engresosMensuales'].invalid &&\n                     form.controls['engresosMensuales'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Descripción de gastos\t-->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"descripcionGastos\">Descripcion de egresos</label>\n      <div class=\"col-sm-8\">\n        <textarea name=\"descripcionGastos\"\n                  id=\"descripcionGastos\"\n                  rows=\"3\" class=\"form-control\"\n                  formControlName=\"descripcionGastos\"></textarea>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['descripcionGastos'].invalid &&\n                     form.controls['descripcionGastos'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- personas dependientes -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"personasDependientes\">Personas que dependen del evaluado.</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" class=\"form-control\"\n               id=\"personasDependientes\"\n               formControlName=\"personasDependientes\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['personasDependientes'].invalid &&\n                     form.controls['personasDependientes'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/egresos/egresos.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/egresos/egresos.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EgresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgresosComponent", function() { return EgresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EgresosComponent = /** @class */ (function () {
    function EgresosComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            engresosMensuales: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            descripcionGastos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            personasDependientes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    EgresosComponent.prototype.ngOnInit = function () {
    };
    EgresosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-egresos',
            template: __webpack_require__(/*! ./egresos.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/egresos/egresos.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EgresosComponent);
    return EgresosComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/ingresos/ingresos.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/ingresos/ingresos.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Ingresos-->\n<div class=\"col-md-10 mx-auto card mb-4\">\n  <div [formGroup]=\"form\" class=\"card-body \">\n    <b class=\"card-title\">Ingresos mensuales</b>\n    <hr>\n\n    <!-- Salario -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"salario\">Salario</label>\n      <div class=\"col-sm-8\">\n        <input type=\"number\" class=\"form-control\"\n               id=\"salario\"\n               formControlName=\"salario\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['salario'].invalid &&\n                     form.controls['salario'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- otrosIngresos -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"otrosIngresos\">Otros ingresos</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"otrosIngresos\"\n               formControlName=\"otrosIngresos\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['otrosIngresos'].invalid &&\n                     form.controls['otrosIngresos'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n    <!-- Salario Conyugue -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4 col-form-label\" for=\"salarioConyugue\">Salario Conyugue</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\"\n               id=\"salarioConyugue\"\n               formControlName=\"salarioConyugue\"\n               required>\n        <div class=\"ng-invalid-feedback\"\n             *ngIf=\"(form.controls['salarioConyugue'].invalid &&\n                     form.controls['salarioConyugue'].dirty)\">\n          El campo es requerido\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/ingresos/ingresos.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/ingresos/ingresos.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: IngresosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresosComponent", function() { return IngresosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IngresosComponent = /** @class */ (function () {
    function IngresosComponent(fb) {
        this.fb = fb;
        this.form = this.fb.group({
            id: '',
            salario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            otrosIngresos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
            salarioConyugue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1)]],
        });
    }
    IngresosComponent.prototype.ngOnInit = function () {
    };
    IngresosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingresos',
            template: __webpack_require__(/*! ./ingresos.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/ingresos/ingresos.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], IngresosComponent);
    return IngresosComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/inmuebles/inmuebles.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/inmuebles/inmuebles.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n  <div class=\"card-body \">\n    <!-- bienes Inmuebles -->\n    <div class=\"form-group row\">\n      <label class=\"col-sm-6 col-form-label\">\n        <b>Patrimonio - Bienes Inmuebles</b>\n      </label>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group text-right\">\n          <button (click)=\"open(mdBienInmueble)\" class=\"btn btn-primary\">\n            <i class=\"fa fa-plus\"></i> Agregar\n          </button>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <hr>\n      </div>\n      <div class=\"col-sm-12 mt-2\">\n        <table class=\"table table-bordered\">\n          <thead class=\"text-capitalize\">\n          <th>tipo</th>\n          <th>dirección</th>\n          <th>telefono</th>\n          <th>ciudad</th>\n          <th>avalúo</th>\n          <th>hipoteca</th>\n          <th class=\"acciones\">acciones</th>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let value of bienesInmuebles\">\n            <td>{{ value.tipo }}</td>\n            <td>{{ value.direccion }}</td>\n            <td>{{ value.telefono }}</td>\n            <td>{{ value.ciudad }}</td>\n            <td>{{ value.avaluo }}</td>\n            <td>{{ value.hipoteca === true ? 'Si' : 'No' }}</td>\n            <td class=\"acciones\">\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdBienInmueble, value)\">\n                  <i class=\"fa fa-edit\"></i>\n                </button>\n\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <hr>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Modal -->\n<ng-template #mdBienInmueble let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Bienes inmuebles</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n\n      <!-- tipo -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bi-tipo\">Tipo</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"bi-tipo\"\n                 name=\"tipo\"\n                 formControlName=\"tipo\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('tipo').invalid &&\n                     form.get('tipo').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n      <!-- direccion -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bi-direccion\">Dirección</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"bi-direccion\"\n                 name=\"direccion\"\n                 formControlName=\"direccion\"\n                 placeholder=\"Ingrese una dirección valida\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('direccion').invalid &&\n                     form.get('direccion').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n      <!-- telefono -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bi-telefono\">Telefono</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"bi-telefono\"\n                 name=\"telefono\"\n                 formControlName=\"telefono\"\n                 placeholder=\"Ingrese un telefono valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('telefono').invalid &&\n                     form.get('telefono').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- ciudad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bi-ciudad\">Ciudad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"bi-ciudad\"\n                 name=\"ciudad\"\n                 formControlName=\"ciudad\"\n                 placeholder=\"Ingrese una ciudad valida\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('ciudad').invalid &&\n                     form.get('ciudad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n\n      <!-- avaluo -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bi-avaluo\">Avaluo</label>\n        <div class=\"col-sm-9\">\n          <input type=\"number\" class=\"form-control\"\n                 id=\"bi-avaluo\"\n                 name=\"avaluo\"\n                 formControlName=\"avaluo\"\n                 placeholder=\"Ingrese una valor valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('avaluo').invalid &&\n                     form.get('avaluo').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- hipoteca -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bi-hipoteca\">hipoteca</label>\n        <div class=\"col-sm-9\">\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\"\n                   type=\"radio\"\n                   formControlName=\"hipoteca\"\n                   id=\"bi-hipoteca\" [value]=\"true\">\n            <label class=\"form-check-label\" for=\"bi-hipoteca\">Si</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\"\n                   type=\"radio\"\n                   formControlName=\"hipoteca\"\n                   id=\"bi-hipoteca!\" [value]=\"false\">\n            <label class=\"form-check-label\" for=\"bi-hipoteca!\">No</label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\n    <button class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"update()\" *ngIf=\"isUpdate\">Actualizar</button>\n    <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"add()\" *ngIf=\"!isUpdate\">Guardar</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/inmuebles/inmuebles.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/inmuebles/inmuebles.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InmueblesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InmueblesComponent", function() { return InmueblesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InmueblesComponent = /** @class */ (function () {
    function InmueblesComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            clase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            modelo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            placa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            avaluo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pignorado: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.bienesInmuebles = [];
    }
    InmueblesComponent.prototype.ngOnInit = function () {
    };
    InmueblesComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    InmueblesComponent.prototype.close = function () {
        this.modalRef.close();
    };
    InmueblesComponent.prototype.add = function () {
        this.close();
    };
    InmueblesComponent.prototype.update = function () {
        this.close();
    };
    InmueblesComponent.prototype.delete = function (id) {
    };
    InmueblesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inmuebles',
            template: __webpack_require__(/*! ./inmuebles.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/inmuebles/inmuebles.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], InmueblesComponent);
    return InmueblesComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header bg-white\">\n  <h4>Visita domiciliaria de seguridad</h4>\n</div>\n<div class=\"card-body bg-light\">\n\n  <!--Egresos mensuales-->\n\n  <!-- card patrimonio bienes immuebles -->\n\n\n  <!-- card bienes muebles -->\n\n\n  <!-- card referencias bancarias -->\n\n\n  <!-- card capacidad endeudamiento -->\n\n\n  <!--Analisis patrimonial-->\n  <!--<div class=\"card mt-3\">\n    <div class=\"card-body \">\n      <b class=\"card-title\">Analisis patrimonial</b>\n      <hr>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-4 col-form-label\" for=\"analisisPatrimonial\">\n          Análisis e interpretación patrimonial\n          y financiera teniendo en cuenta la\n          condición socioeconómica del\n          candidato\n        </label>\n        <div class=\"col-sm-8\">\n                <textarea name=\"analisisPatrimonial\"\n                          id=\"analisisPatrimonial\" rows=\"3\"\n                          class=\"form-control\" formControlName=\"analisisPatrimonial\"\n                          placeholder=\"Ingrese el analisis\">\n                </textarea>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(formIngresos.controls['analisisPatrimonial'].invalid &&\n                     formIngresos.controls['analisisPatrimonial'].dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>-->\n\n</div>\n<div class=\"card-footer bg-white\">\n  <button class=\"btn btn-primary\" (click)=\"saveAll()\" *ngIf=\"!dataLoaded\">Guardar</button>\n</div>\n\n\n<!-- Modal referencias bancarias -->\n|\n\n<!-- Modal capacidad endeudamiento -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ModusVivendiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModusVivendiComponent", function() { return ModusVivendiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModusVivendiComponent = /** @class */ (function () {
    function ModusVivendiComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.isUpdate = false;
        this.dataLoaded = false;
    }
    ModusVivendiComponent.prototype.ngOnInit = function () {
    };
    ModusVivendiComponent.prototype.open = function (content, data) {
        this.modalRef = this.modalService.open(content);
    };
    ModusVivendiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modus-vivendi',
            template: __webpack_require__(/*! ./modus-vivendi.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModusVivendiComponent);
    return ModusVivendiComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/muebles/muebles.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/muebles/muebles.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\r\n  <div class=\"card-body \">\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-6 col-form-label\">\r\n        <b>Patrimonio - Bienes Muebles</b>\r\n      </label>\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"form-group text-right\">\r\n          <button (click)=\"open(mdBienMueble)\" class=\"btn btn-primary\">\r\n            <i class=\"fa fa-plus\"></i> Agregar\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-2\">\r\n        <table class=\"table table-bordered\">\r\n          <thead class=\"text-capitalize\">\r\n          <th>clase</th>\r\n          <th>modelo</th>\r\n          <th>placa</th>\r\n          <th>avalúo</th>\r\n          <th>pignorado</th>\r\n          <th class=\"acciones\">acciones</th>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let value of bienesMuebles\">\r\n            <td> {{ value.clase }}</td>\r\n            <td> {{ value.modelo }}</td>\r\n            <td> {{ value.placa }}</td>\r\n            <td> {{ value.avaluo }}</td>\r\n            <td> {{ value.pignorado === true ? 'Si' : 'No' }}</td>\r\n            <td class=\"acciones\">\r\n              <div class=\"text-center\">\r\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdBienMueble, value)\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </button>\r\n\r\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <hr>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal bien mueble -->\r\n<ng-template #mdBienMueble let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Bienes muebles</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"form\">\r\n\r\n      <!-- clase -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-clase\">Clase</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                 id=\"bm-clase\"\r\n                 name=\"clase\"\r\n                 formControlName=\"clase\"\r\n                 placeholder=\"Ingrese un dato valido\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('clase').invalid &&\r\n               form.get('clase').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- modelo -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-modelo\">Modelo</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                 id=\"bm-modelo\"\r\n                 name=\"modelo\"\r\n                 formControlName=\"modelo\"\r\n                 placeholder=\"Ingrese un dato valido\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('modelo').invalid &&\r\n               form.get('modelo').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- placa -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-placa\">Placa</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" class=\"form-control\"\r\n                 id=\"bm-placa\"\r\n                 name=\"placa\"\r\n                 formControlName=\"placa\"\r\n                 placeholder=\"Ingrese un dato valido\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('placa').invalid &&\r\n               form.get('placa').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- avaluo -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-avaluo\">Avalúo</label>\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"number\" class=\"form-control\"\r\n                 id=\"bm-avaluo\"\r\n                 name=\"avaluo\"\r\n                 formControlName=\"avaluo\"\r\n                 placeholder=\"Ingrese un numero valido\"\r\n                 required>\r\n          <div class=\"ng-invalid-feedback\"\r\n               *ngIf=\"(form.get('avaluo').invalid &&\r\n               form.get('avaluo').dirty)\">\r\n            El campo es requerido\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- pignorado -->\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-pignorado\">Pignorado</label>\r\n        <div class=\"col-sm-9\">\r\n          <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\"\r\n                   type=\"radio\"\r\n                   formControlName=\"pignorado\"\r\n                   id=\"bm-pignorado\" [value]=\"true\">\r\n            <label class=\"form-check-label\" for=\"bm-pignorado\">Si</label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <input class=\"form-check-input\"\r\n                   type=\"radio\"\r\n                   formControlName=\"pignorado\"\r\n                   id=\"bm-pignorado!\" [value]=\"false\">\r\n            <label class=\"form-check-label\" for=\"bm-pignorado!\">No</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\r\n    <button class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"update()\" *ngIf=\"isUpdate\">Actualizar</button>\r\n    <button class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"add()\" *ngIf=\"!isUpdate\">Guardar</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/muebles/muebles.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/muebles/muebles.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MueblesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MueblesComponent", function() { return MueblesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MueblesComponent = /** @class */ (function () {
    function MueblesComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            clase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            modelo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            placa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            avaluo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pignorado: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.bienesMuebles = [];
    }
    MueblesComponent.prototype.ngOnInit = function () {
    };
    MueblesComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    MueblesComponent.prototype.close = function () {
        this.modalRef.close();
    };
    MueblesComponent.prototype.add = function () {
        this.close();
    };
    MueblesComponent.prototype.update = function () {
        this.close();
    };
    MueblesComponent.prototype.delete = function (id) {
    };
    MueblesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-muebles',
            template: __webpack_require__(/*! ./muebles.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/muebles/muebles.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], MueblesComponent);
    return MueblesComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/referencias-bancarias/referencias-bancarias.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/referencias-bancarias/referencias-bancarias.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-4\">\n  <div class=\"card-body \">\n    <div class=\"form-group row\">\n      <label class=\"col-sm-6 col-form-label\">\n        <b>Referencias bancarias</b>\n      </label>\n      <div class=\"col-sm-6\">\n        <div class=\"form-group text-right\">\n          <button (click)=\"open(mdRefBancarias)\" class=\"btn btn-primary\">\n            <i class=\"fa fa-plus\"></i>\n            Agregar\n          </button>\n        </div>\n      </div>\n      <div class=\"col-sm-12\">\n        <hr>\n      </div>\n      <div class=\"col-sm-12 mt-2\">\n        <table class=\"table table-bordered\">\n          <thead class=\"text-capitalize\">\n          <th>entidad</th>\n          <th>tipo de cuenta</th>\n          <th class=\"acciones\">acciones</th>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let value of refBancarias\">\n            <td> {{ value.entidad }} </td>\n            <td> {{ value.tipoCuenta }} </td>\n            <td class=\"acciones\">\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary mr-2\" (click)=\"open(mdRefBancarias, value)\">\n                  <i class=\"fa fa-edit\"></i>\n                </button>\n\n                <button class=\"btn btn-danger ml-2\" (click)=\"delete(value.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <hr>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #mdRefBancarias let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Referencias bancarias</h5>\n    <button type=\"button\" class=\"close\" (click)=\"modal.close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form [formGroup]=\"form\">\n\n      <!-- entidad -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-entidad\">Entidad</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"bm-entidad\"\n                 name=\"entidad\"\n                 formControlName=\"entidad\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('entidad').invalid &&\n                     form.get('entidad').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n\n      <!-- tipoCuenta -->\n      <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"bm-tipoCuenta\">Tipo de Cuenta</label>\n        <div class=\"col-sm-9\">\n          <input type=\"text\" class=\"form-control\"\n                 id=\"bm-tipoCuenta\"\n                 name=\"tipoCuenta\"\n                 formControlName=\"tipoCuenta\"\n                 placeholder=\"Ingrese un dato valido\"\n                 required>\n          <div class=\"ng-invalid-feedback\"\n               *ngIf=\"(form.get('tipoCuenta').invalid &&\n                     form.get('tipoCuenta').dirty)\">\n            El campo es requerido\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close()\">Cerrar</button>\n    <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"update()\" *ngIf=\"isUpdate\">Actualizar</button>\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"add()\" *ngIf=\"!isUpdate\">Guardar</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/pages/modules/informe/components/modus-vivendi/referencias-bancarias/referencias-bancarias.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/components/modus-vivendi/referencias-bancarias/referencias-bancarias.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ReferenciasBancariasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenciasBancariasComponent", function() { return ReferenciasBancariasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferenciasBancariasComponent = /** @class */ (function () {
    function ReferenciasBancariasComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            id: '',
            entidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tipoCuenta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.refBancarias = [];
    }
    ReferenciasBancariasComponent.prototype.ngOnInit = function () {
    };
    ReferenciasBancariasComponent.prototype.open = function (content, data) {
        this.isUpdate = false;
        if (data) {
            this.form.setValue(data);
            this.isUpdate = true;
        }
        this.modalRef = this.modalService.open(content);
    };
    ReferenciasBancariasComponent.prototype.close = function () {
        this.modalRef.close();
    };
    ReferenciasBancariasComponent.prototype.add = function () {
        this.close();
    };
    ReferenciasBancariasComponent.prototype.update = function () {
        this.close();
    };
    ReferenciasBancariasComponent.prototype.delete = function (id) {
    };
    ReferenciasBancariasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referencias-bancarias',
            template: __webpack_require__(/*! ./referencias-bancarias.component.html */ "./src/app/pages/modules/informe/components/modus-vivendi/referencias-bancarias/referencias-bancarias.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ReferenciasBancariasComponent);
    return ReferenciasBancariasComponent;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/informe-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/modules/informe/informe-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InformeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeRoutingModule", function() { return InformeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/pages/modules/informe/components/main/main.component.ts");
/* harmony import */ var _components_estudio_seguridad_estudio_seguridad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/estudio-seguridad/estudio-seguridad.component */ "./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.ts");
/* harmony import */ var _components_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/datos-personales/datos-personales.component */ "./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.ts");
/* harmony import */ var _components_informacion_familiar_familia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/informacion-familiar/familia.component */ "./src/app/pages/modules/informe/components/informacion-familiar/familia.component.ts");
/* harmony import */ var _components_informe2_informe2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/informe2/informe2.component */ "./src/app/pages/modules/informe/components/informe2/informe2.component.ts");
/* harmony import */ var _components_historial_laboral_academico_historial_laboral_academico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/historial-laboral-academico/historial-laboral-academico.component */ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.ts");
/* harmony import */ var _components_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modus-vivendi/modus-vivendi.component */ "./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            { path: 'estudio-seguridad', component: _components_estudio_seguridad_estudio_seguridad_component__WEBPACK_IMPORTED_MODULE_3__["EstudioSeguridadComponent"] },
            { path: 'datos-personales', component: _components_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_4__["DatosPersonalesComponent"] },
            { path: 'informacion-familiar', component: _components_informacion_familiar_familia_component__WEBPACK_IMPORTED_MODULE_5__["FamiliaComponent"] },
            { path: 'informe2', component: _components_informe2_informe2_component__WEBPACK_IMPORTED_MODULE_6__["Informe2Component"] },
            { path: 'modus-vivendi', component: _components_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_8__["ModusVivendiComponent"] },
            { path: 'historial-laboral-academico', component: _components_historial_laboral_academico_historial_laboral_academico_component__WEBPACK_IMPORTED_MODULE_7__["HistorialLaboralAcademicoComponent"] },
        ],
    },
    { path: '', redirectTo: 'estudio-seguridad', pathMatch: 'full' }
];
var InformeRoutingModule = /** @class */ (function () {
    function InformeRoutingModule() {
    }
    InformeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InformeRoutingModule);
    return InformeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/informe.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/modules/informe/informe.module.ts ***!
  \*********************************************************/
/*! exports provided: InformeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeModule", function() { return InformeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _informe_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./informe-routing.module */ "./src/app/pages/modules/informe/informe-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/pages/modules/informe/components/main/main.component.ts");
/* harmony import */ var _components_estudio_seguridad_estudio_seguridad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/estudio-seguridad/estudio-seguridad.component */ "./src/app/pages/modules/informe/components/estudio-seguridad/estudio-seguridad.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/datos-personales/datos-personales.component */ "./src/app/pages/modules/informe/components/datos-personales/datos-personales.component.ts");
/* harmony import */ var _components_informacion_familiar_familia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/informacion-familiar/familia.component */ "./src/app/pages/modules/informe/components/informacion-familiar/familia.component.ts");
/* harmony import */ var _components_informe2_informe2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/informe2/informe2.component */ "./src/app/pages/modules/informe/components/informe2/informe2.component.ts");
/* harmony import */ var _components_historial_laboral_academico_historial_laboral_academico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/historial-laboral-academico/historial-laboral-academico.component */ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral-academico.component.ts");
/* harmony import */ var _components_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modus-vivendi/modus-vivendi.component */ "./src/app/pages/modules/informe/components/modus-vivendi/modus-vivendi.component.ts");
/* harmony import */ var _components_datos_personales_info_personal_info_personal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/datos-personales/info-personal/info-personal.component */ "./src/app/pages/modules/informe/components/datos-personales/info-personal/info-personal.component.ts");
/* harmony import */ var _components_datos_personales_estado_salud_estado_salud_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/datos-personales/estado-salud/estado-salud.component */ "./src/app/pages/modules/informe/components/datos-personales/estado-salud/estado-salud.component.ts");
/* harmony import */ var _components_datos_personales_habitos_salud_habitos_salud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/datos-personales/habitos-salud/habitos-salud.component */ "./src/app/pages/modules/informe/components/datos-personales/habitos-salud/habitos-salud.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_informe_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/informe.reducer */ "./src/app/pages/modules/informe/store/reducers/informe.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_informe_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/effects/informe.effects */ "./src/app/pages/modules/informe/store/effects/informe.effects.ts");
/* harmony import */ var _components_informacion_familiar_nucleo_familiar_nucleo_familiar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/informacion-familiar/nucleo-familiar/nucleo-familiar.component */ "./src/app/pages/modules/informe/components/informacion-familiar/nucleo-familiar/nucleo-familiar.component.ts");
/* harmony import */ var _components_informacion_familiar_hijos_hijos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/informacion-familiar/hijos/hijos.component */ "./src/app/pages/modules/informe/components/informacion-familiar/hijos/hijos.component.ts");
/* harmony import */ var _components_informacion_familiar_informacion_familiar_informacion_familiar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/informacion-familiar/informacion-familiar/informacion-familiar.component */ "./src/app/pages/modules/informe/components/informacion-familiar/informacion-familiar/informacion-familiar.component.ts");
/* harmony import */ var _components_informacion_familiar_referencias_referencias_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/informacion-familiar/referencias/referencias.component */ "./src/app/pages/modules/informe/components/informacion-familiar/referencias/referencias.component.ts");
/* harmony import */ var _components_informe2_entorno_habitacional_entorno_habitacional_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/informe2/entorno-habitacional/entorno-habitacional.component */ "./src/app/pages/modules/informe/components/informe2/entorno-habitacional/entorno-habitacional.component.ts");
/* harmony import */ var _components_informe2_condiciones_inmueble_condiciones_inmueble_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/informe2/condiciones-inmueble/condiciones-inmueble.component */ "./src/app/pages/modules/informe/components/informe2/condiciones-inmueble/condiciones-inmueble.component.ts");
/* harmony import */ var _components_informe2_condiciones_sector_condiciones_sector_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/informe2/condiciones-sector/condiciones-sector.component */ "./src/app/pages/modules/informe/components/informe2/condiciones-sector/condiciones-sector.component.ts");
/* harmony import */ var _components_modus_vivendi_ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/modus-vivendi/ingresos/ingresos.component */ "./src/app/pages/modules/informe/components/modus-vivendi/ingresos/ingresos.component.ts");
/* harmony import */ var _components_modus_vivendi_egresos_egresos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/modus-vivendi/egresos/egresos.component */ "./src/app/pages/modules/informe/components/modus-vivendi/egresos/egresos.component.ts");
/* harmony import */ var _components_modus_vivendi_inmuebles_inmuebles_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/modus-vivendi/inmuebles/inmuebles.component */ "./src/app/pages/modules/informe/components/modus-vivendi/inmuebles/inmuebles.component.ts");
/* harmony import */ var _components_modus_vivendi_muebles_muebles_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/modus-vivendi/muebles/muebles.component */ "./src/app/pages/modules/informe/components/modus-vivendi/muebles/muebles.component.ts");
/* harmony import */ var _components_modus_vivendi_referencias_bancarias_referencias_bancarias_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/modus-vivendi/referencias-bancarias/referencias-bancarias.component */ "./src/app/pages/modules/informe/components/modus-vivendi/referencias-bancarias/referencias-bancarias.component.ts");
/* harmony import */ var _components_modus_vivendi_capacidad_endeudamiento_capacidad_endeudamiento_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component */ "./src/app/pages/modules/informe/components/modus-vivendi/capacidad-endeudamiento/capacidad-endeudamiento.component.ts");
/* harmony import */ var _components_historial_laboral_academico_historial_laboral_historial_laboral_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/historial-laboral-academico/historial-laboral/historial-laboral.component */ "./src/app/pages/modules/informe/components/historial-laboral-academico/historial-laboral/historial-laboral.component.ts");
/* harmony import */ var _components_historial_laboral_academico_nivel_academico_nivel_academico_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/historial-laboral-academico/nivel-academico/nivel-academico.component */ "./src/app/pages/modules/informe/components/historial-laboral-academico/nivel-academico/nivel-academico.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var InformeModule = /** @class */ (function () {
    function InformeModule() {
    }
    InformeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _components_estudio_seguridad_estudio_seguridad_component__WEBPACK_IMPORTED_MODULE_4__["EstudioSeguridadComponent"],
                _components_datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_6__["DatosPersonalesComponent"],
                _components_informacion_familiar_familia_component__WEBPACK_IMPORTED_MODULE_7__["FamiliaComponent"],
                _components_informe2_informe2_component__WEBPACK_IMPORTED_MODULE_8__["Informe2Component"],
                _components_historial_laboral_academico_historial_laboral_academico_component__WEBPACK_IMPORTED_MODULE_9__["HistorialLaboralAcademicoComponent"],
                _components_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_10__["ModusVivendiComponent"],
                _components_datos_personales_info_personal_info_personal_component__WEBPACK_IMPORTED_MODULE_11__["InfoPersonalComponent"],
                _components_datos_personales_estado_salud_estado_salud_component__WEBPACK_IMPORTED_MODULE_12__["EstadoSaludComponent"],
                _components_datos_personales_habitos_salud_habitos_salud_component__WEBPACK_IMPORTED_MODULE_13__["HabitosSaludComponent"],
                _components_informacion_familiar_nucleo_familiar_nucleo_familiar_component__WEBPACK_IMPORTED_MODULE_18__["NucleoFamiliarComponent"],
                _components_informacion_familiar_hijos_hijos_component__WEBPACK_IMPORTED_MODULE_19__["HijosComponent"],
                _components_informacion_familiar_informacion_familiar_informacion_familiar_component__WEBPACK_IMPORTED_MODULE_20__["InformacionFamiliarComponent"],
                _components_informacion_familiar_referencias_referencias_component__WEBPACK_IMPORTED_MODULE_21__["ReferenciasComponent"],
                _components_informe2_entorno_habitacional_entorno_habitacional_component__WEBPACK_IMPORTED_MODULE_22__["EntornoHabitacionalComponent"],
                _components_informe2_condiciones_inmueble_condiciones_inmueble_component__WEBPACK_IMPORTED_MODULE_23__["CondicionesInmuebleComponent"],
                _components_informe2_condiciones_sector_condiciones_sector_component__WEBPACK_IMPORTED_MODULE_24__["CondicionesSectorComponent"],
                _components_modus_vivendi_ingresos_ingresos_component__WEBPACK_IMPORTED_MODULE_25__["IngresosComponent"],
                _components_modus_vivendi_egresos_egresos_component__WEBPACK_IMPORTED_MODULE_26__["EgresosComponent"],
                _components_modus_vivendi_inmuebles_inmuebles_component__WEBPACK_IMPORTED_MODULE_27__["InmueblesComponent"],
                _components_modus_vivendi_muebles_muebles_component__WEBPACK_IMPORTED_MODULE_28__["MueblesComponent"],
                _components_modus_vivendi_referencias_bancarias_referencias_bancarias_component__WEBPACK_IMPORTED_MODULE_29__["ReferenciasBancariasComponent"],
                _components_modus_vivendi_capacidad_endeudamiento_capacidad_endeudamiento_component__WEBPACK_IMPORTED_MODULE_30__["CapacidadEndeudamientoComponent"],
                _components_historial_laboral_academico_historial_laboral_historial_laboral_component__WEBPACK_IMPORTED_MODULE_31__["HistorialLaboralComponent"],
                _components_historial_laboral_academico_nivel_academico_nivel_academico_component__WEBPACK_IMPORTED_MODULE_32__["NivelAcademicoComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _informe_routing_module__WEBPACK_IMPORTED_MODULE_2__["InformeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forFeature('informe', _store_reducers_informe_reducer__WEBPACK_IMPORTED_MODULE_15__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forFeature([_store_effects_informe_effects__WEBPACK_IMPORTED_MODULE_17__["InformeEffects"]])
            ]
        })
    ], InformeModule);
    return InformeModule;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/services/datos-personales/info-personal.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/services/datos-personales/info-personal.service.ts ***!
  \******************************************************************************************/
/*! exports provided: InfoPersonalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPersonalService", function() { return InfoPersonalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _informe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../informe.service */ "./src/app/pages/modules/informe/services/informe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InfoPersonalService = /** @class */ (function () {
    function InfoPersonalService(http, helper, informe, store) {
        this.http = http;
        this.helper = helper;
        this.informe = informe;
        this.store = store;
    }
    InfoPersonalService.prototype.get = function () {
        var informeId = 1; // replace with sotore value
        var url = this.helper.route(['informe', 'informacion-personal'], informeId);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.data; }));
    };
    InfoPersonalService.prototype.save = function (payload) {
        var url = this.helper.route('informacion-personal');
        return this.http.post(payload, url);
    };
    InfoPersonalService.prototype.update = function (payload) {
        var url = this.helper.route('informacion-personal');
        return this.http.put(payload, url);
    };
    InfoPersonalService.prototype.delete = function (id) {
        var url = this.helper.route('informacion-personal');
        return this.http.delete(id);
    };
    InfoPersonalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
            _informe_service__WEBPACK_IMPORTED_MODULE_5__["InformeService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], InfoPersonalService);
    return InfoPersonalService;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/services/informe.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/modules/informe/services/informe.service.ts ***!
  \*******************************************************************/
/*! exports provided: InformeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeService", function() { return InformeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformeService = /** @class */ (function () {
    function InformeService(http, helper, store) {
        this.http = http;
        this.helper = helper;
        this.store = store;
    }
    InformeService.prototype.getId = function () { };
    InformeService.prototype.setId = function () { };
    InformeService.prototype.get = function () {
        var vsId = 1; // replace with vsid
        var url = this.helper.route('informe', vsId);
        this.http.get(url);
    };
    InformeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], InformeService);
    return InformeService;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/services/informe/estudio-seguridad.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/modules/informe/services/informe/estudio-seguridad.service.ts ***!
  \*************************************************************************************/
/*! exports provided: EstudioSeguridadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudioSeguridadService", function() { return EstudioSeguridadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/helper.service */ "./src/app/services/helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstudioSeguridadService = /** @class */ (function () {
    function EstudioSeguridadService(http, helper) {
        this.http = http;
        this.helper = helper;
    }
    EstudioSeguridadService.prototype.get = function (vsdId) {
        var route = this.helper.route(['vsd', 'informe'], vsdId);
        return this.http.get(route);
    };
    EstudioSeguridadService.prototype.save = function (payload, vsdId) {
        var route = this.helper.route(['vsd', 'informe'], vsdId);
        return this.http.post(route, payload);
    };
    EstudioSeguridadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], EstudioSeguridadService);
    return EstudioSeguridadService;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/store/actions/informe.actions.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/modules/informe/store/actions/informe.actions.ts ***!
  \************************************************************************/
/*! exports provided: InformeActionTypes, LoadInformes, LoadInformeSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeActionTypes", function() { return InformeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInformes", function() { return LoadInformes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadInformeSuccess", function() { return LoadInformeSuccess; });
var InformeActionTypes;
(function (InformeActionTypes) {
    InformeActionTypes["LoadInforme"] = "[Informe] Load Informe";
    InformeActionTypes["LoadInformeSuccess"] = "[Informe] Load Informe Success";
})(InformeActionTypes || (InformeActionTypes = {}));
var LoadInformes = /** @class */ (function () {
    function LoadInformes() {
        this.type = InformeActionTypes.LoadInforme;
    }
    return LoadInformes;
}());

var LoadInformeSuccess = /** @class */ (function () {
    function LoadInformeSuccess(payload) {
        this.payload = payload;
        this.type = InformeActionTypes.LoadInforme;
    }
    return LoadInformeSuccess;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/store/effects/informe.effects.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/modules/informe/store/effects/informe.effects.ts ***!
  \************************************************************************/
/*! exports provided: InformeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformeEffects", function() { return InformeEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_informe_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/informe.actions */ "./src/app/pages/modules/informe/store/actions/informe.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InformeEffects = /** @class */ (function () {
    function InformeEffects(actions$) {
        this.actions$ = actions$;
        this.loadInformes$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_informe_actions__WEBPACK_IMPORTED_MODULE_4__["InformeActionTypes"].LoadInforme), 
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], InformeEffects.prototype, "loadInformes$", void 0);
    InformeEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], InformeEffects);
    return InformeEffects;
}());



/***/ }),

/***/ "./src/app/pages/modules/informe/store/reducers/informe.reducer.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/modules/informe/store/reducers/informe.reducer.ts ***!
  \*************************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_informe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/informe.actions */ "./src/app/pages/modules/informe/store/actions/informe.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_informe_actions__WEBPACK_IMPORTED_MODULE_0__["InformeActionTypes"].LoadInforme:
            return state;
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-informe-informe-module.js.map