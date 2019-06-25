(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actividades-actividades-module"],{

/***/ "./src/app/pages/actividades/actividades-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/actividades/actividades-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActividadesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesRoutingModule", function() { return ActividadesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visita_domiciliaria_visita_domiciliaria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visita-domiciliaria/visita-domiciliaria.component */ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.ts");
/* harmony import */ var _visita_domiciliaria_estado_salubridad_estado_salubridad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visita-domiciliaria/estado-salubridad/estado-salubridad.component */ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.ts");
/* harmony import */ var _visita_domiciliaria_informacion_familiar_informacion_familiar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visita-domiciliaria/informacion-familiar/informacion-familiar.component */ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.ts");
/* harmony import */ var _visita_domiciliaria_entorno_habitacional_entorno_habitacional_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visita-domiciliaria/entorno-habitacional/entorno-habitacional.component */ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.ts");
/* harmony import */ var _visita_domiciliaria_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visita-domiciliaria/modus-vivendi/modus-vivendi.component */ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.ts");
/* harmony import */ var _actividades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actividades.component */ "./src/app/pages/actividades/actividades.component.ts");
/* harmony import */ var _historial_judicial_historial_judicial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./historial-judicial/historial-judicial.component */ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.ts");
/* harmony import */ var _visita_domiciliaria_seguridad_seguridad_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visita-domiciliaria/seguridad/seguridad.component */ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.ts");
/* harmony import */ var _verificacion_academica_verificacion_academica_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./verificacion-academica/verificacion-academica.component */ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.ts");
/* harmony import */ var _verificacion_laboral_verificacion_laboral_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verificacion-laboral/verificacion-laboral.component */ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.ts");
/* harmony import */ var _decadactilar_decadactilar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./decadactilar/decadactilar.component */ "./src/app/pages/actividades/decadactilar/decadactilar.component.ts");
/* harmony import */ var _prueba_psicotecnica_prueba_psicotecnica_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./prueba-psicotecnica/prueba-psicotecnica.component */ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.ts");
/* harmony import */ var _evaluacion_financiera_evaluacion_financiera_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./evaluacion-financiera/evaluacion-financiera.component */ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.ts");
/* harmony import */ var _dictamen_grafologico_dictamen_grafologico_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dictamen-grafologico/dictamen-grafologico.component */ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.ts");
/* harmony import */ var _consolidado_consolidado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./consolidado/consolidado.component */ "./src/app/pages/actividades/consolidado/consolidado.component.ts");
/* harmony import */ var _datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./datos-personales/datos-personales.component */ "./src/app/pages/actividades/datos-personales/datos-personales.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _actividades_component__WEBPACK_IMPORTED_MODULE_7__["ActividadesComponent"],
        children: [
            { path: 'datos-personales', component: _datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_17__["DatosPersonalesComponent"] },
            { path: 'historial-judicial', component: _historial_judicial_historial_judicial_component__WEBPACK_IMPORTED_MODULE_8__["HistorialJudicialComponent"] },
            {
                path: 'visita-domiciliaria',
                component: _visita_domiciliaria_visita_domiciliaria_component__WEBPACK_IMPORTED_MODULE_2__["VisitaDomiciliariaComponent"],
                children: [
                    { path: 'visita-domiciliaria-seguridad', component: _visita_domiciliaria_seguridad_seguridad_component__WEBPACK_IMPORTED_MODULE_9__["SeguridadComponent"] },
                    { path: 'salubridad', component: _visita_domiciliaria_estado_salubridad_estado_salubridad_component__WEBPACK_IMPORTED_MODULE_3__["EstadoSalubridadComponent"] },
                    { path: 'informacion-familiar', component: _visita_domiciliaria_informacion_familiar_informacion_familiar_component__WEBPACK_IMPORTED_MODULE_4__["InformacionFamiliarComponent"] },
                    { path: 'informe2', component: _visita_domiciliaria_entorno_habitacional_entorno_habitacional_component__WEBPACK_IMPORTED_MODULE_5__["EntornoHabitacionalComponent"] },
                    { path: 'modus-vivendi', component: _visita_domiciliaria_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_6__["ModusVivendiComponent"] },
                    { path: '', redirectTo: 'visita-domiciliaria-seguridad', pathMatch: 'full' }
                ]
            },
            { path: 'verificacion-academica', component: _verificacion_academica_verificacion_academica_component__WEBPACK_IMPORTED_MODULE_10__["VerificacionAcademicaComponent"] },
            { path: 'verificacion-laboral', component: _verificacion_laboral_verificacion_laboral_component__WEBPACK_IMPORTED_MODULE_11__["VerificacionLaboralComponent"] },
            { path: 'dictamen-grafologico', component: _dictamen_grafologico_dictamen_grafologico_component__WEBPACK_IMPORTED_MODULE_15__["DictamenGrafologicoComponent"] },
            { path: 'decadactilar', component: _decadactilar_decadactilar_component__WEBPACK_IMPORTED_MODULE_12__["DecadactilarComponent"] },
            { path: 'prueba-psicotecnica', component: _prueba_psicotecnica_prueba_psicotecnica_component__WEBPACK_IMPORTED_MODULE_13__["PruebaPsicotecnicaComponent"] },
            { path: 'evaluacion-financiera', component: _evaluacion_financiera_evaluacion_financiera_component__WEBPACK_IMPORTED_MODULE_14__["EvaluacionFinancieraComponent"] },
            { path: 'consolidado', component: _consolidado_consolidado_component__WEBPACK_IMPORTED_MODULE_16__["ConsolidadoComponent"] },
        ],
    }
];
var ActividadesRoutingModule = /** @class */ (function () {
    function ActividadesRoutingModule() {
    }
    ActividadesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ActividadesRoutingModule);
    return ActividadesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/actividades/actividades.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/actividades/actividades.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2FjdGl2aWRhZGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/actividades/actividades.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/actividades/actividades.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"content-wrapper\">\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center mt-3\">\r\n\r\n      <div class=\"btn-group\">\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                [routerLink]=\"'../actividades/datos-personales'\">\r\n          Datos personales\r\n        </button>\r\n\r\n        <button *ngFor=\"let actividad of actividades\"\r\n                [hidden]=\"!isActividadAsignada(actividad.codigo)\"\r\n                [ngClass]=\"(actividadesService.getEstadoActividad(actividad.codigo) == 'notificado') ? 'btn btn-danger' : 'btn btn-primary'\"\r\n                type=\"button\"\r\n                routerLinkActive=\"active\"\r\n                [routerLink]=\"actividad.path\">\r\n          {{ actividad.nombre}}\r\n        </button>\r\n\r\n        <ng-template ngxPermissionsOnly=\"ADG\">\r\n          <button type=\"button\" class=\"btn btn-primary\"\r\n                  routerLinkActive=\"active\"\r\n                  routerLink=\"../actividades/consolidado\">\r\n            Consolidado\r\n          </button>\r\n        </ng-template>\r\n\r\n\r\n        <!--<button\r\n\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                [routerLink]=\"'../actividades/historial-judicial'\">\r\n          Historial judicial\r\n        </button>\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                [routerLink]=\"'../actividades/visita-domiciliaria'\">\r\n          Visita Domiciliaria\r\n        </button>\r\n\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/verificacion-academica\">\r\n          Verificacion academica\r\n        </button>\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/verificacion-laboral\">\r\n          Verificacion laboral\r\n        </button>\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/dictamen grafologico\">\r\n          Dictamen grafologico\r\n        </button>\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/decadactilar\">\r\n          Decadactilar\r\n        </button>\r\n        <button *ngIf=\"isActividadAsignada('PP')\"\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/prueba-psicotecnica\">\r\n          Prueba psicotecnica\r\n        </button>\r\n        <button\r\n                type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/evaluacion-financiera\">\r\n          Evaluacion financiera\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\"\r\n                routerLinkActive=\"active\"\r\n                routerLink=\"../actividades/consolidado\">\r\n          Consolidado\r\n        </button>-->\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 mt-3\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/actividades.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/actividades/actividades.component.ts ***!
  \************************************************************/
/*! exports provided: ActividadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesComponent", function() { return ActividadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/actividades.service */ "./src/app/services/actividades.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActividadesComponent = /** @class */ (function () {
    function ActividadesComponent(actividadesService, dataService) {
        this.actividadesService = actividadesService;
        this.dataService = dataService;
        this.data = actividadesService.getServicioEsp();
    }
    ActividadesComponent.prototype.ngOnInit = function () {
        this.actividades = this.dataService.actividades;
    };
    ActividadesComponent.prototype.ngOnDestroy = function () {
    };
    ActividadesComponent.prototype.isActividadAsignada = function (actividad) {
        var flag = false;
        var actividades = _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"].getActividades();
        actividades.forEach(function (value) {
            if (value.codigo === actividad) {
                flag = true;
                return;
            }
        });
        return flag;
    };
    ActividadesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actividades',
            template: __webpack_require__(/*! ./actividades.component.html */ "./src/app/pages/actividades/actividades.component.html"),
            styles: [__webpack_require__(/*! ./actividades.component.css */ "./src/app/pages/actividades/actividades.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ActividadesComponent);
    return ActividadesComponent;
}());



/***/ }),

/***/ "./src/app/pages/actividades/actividades.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/actividades/actividades.module.ts ***!
  \*********************************************************/
/*! exports provided: ActividadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadesModule", function() { return ActividadesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _actividades_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actividades-routing.module */ "./src/app/pages/actividades/actividades-routing.module.ts");
/* harmony import */ var _historial_judicial_historial_judicial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./historial-judicial/historial-judicial.component */ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _visita_domiciliaria_visita_domiciliaria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visita-domiciliaria/visita-domiciliaria.component */ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.ts");
/* harmony import */ var _visita_domiciliaria_estado_salubridad_estado_salubridad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visita-domiciliaria/estado-salubridad/estado-salubridad.component */ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.ts");
/* harmony import */ var _visita_domiciliaria_informacion_familiar_informacion_familiar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visita-domiciliaria/informacion-familiar/informacion-familiar.component */ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.ts");
/* harmony import */ var _visita_domiciliaria_entorno_habitacional_entorno_habitacional_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visita-domiciliaria/entorno-habitacional/entorno-habitacional.component */ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.ts");
/* harmony import */ var _visita_domiciliaria_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visita-domiciliaria/modus-vivendi/modus-vivendi.component */ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.ts");
/* harmony import */ var _actividades_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actividades.component */ "./src/app/pages/actividades/actividades.component.ts");
/* harmony import */ var _visita_domiciliaria_seguridad_seguridad_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visita-domiciliaria/seguridad/seguridad.component */ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.ts");
/* harmony import */ var _verificacion_academica_verificacion_academica_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verificacion-academica/verificacion-academica.component */ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.ts");
/* harmony import */ var _verificacion_laboral_verificacion_laboral_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./verificacion-laboral/verificacion-laboral.component */ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.ts");
/* harmony import */ var _due_dilligence_due_dilligence_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./due-dilligence/due-dilligence.component */ "./src/app/pages/actividades/due-dilligence/due-dilligence.component.ts");
/* harmony import */ var _decadactilar_decadactilar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./decadactilar/decadactilar.component */ "./src/app/pages/actividades/decadactilar/decadactilar.component.ts");
/* harmony import */ var _prueba_psicotecnica_prueba_psicotecnica_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./prueba-psicotecnica/prueba-psicotecnica.component */ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.ts");
/* harmony import */ var _evaluacion_financiera_evaluacion_financiera_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./evaluacion-financiera/evaluacion-financiera.component */ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.ts");
/* harmony import */ var _dictamen_grafologico_dictamen_grafologico_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dictamen-grafologico/dictamen-grafologico.component */ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.ts");
/* harmony import */ var _consolidado_consolidado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./consolidado/consolidado.component */ "./src/app/pages/actividades/consolidado/consolidado.component.ts");
/* harmony import */ var _asignar_funcionario_asignar_funcionario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./asignar-funcionario/asignar-funcionario.component */ "./src/app/pages/actividades/asignar-funcionario/asignar-funcionario.component.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./datos-personales/datos-personales.component */ "./src/app/pages/actividades/datos-personales/datos-personales.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ActividadesModule = /** @class */ (function () {
    function ActividadesModule() {
    }
    ActividadesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _historial_judicial_historial_judicial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialJudicialComponent"],
                _visita_domiciliaria_visita_domiciliaria_component__WEBPACK_IMPORTED_MODULE_5__["VisitaDomiciliariaComponent"],
                _visita_domiciliaria_estado_salubridad_estado_salubridad_component__WEBPACK_IMPORTED_MODULE_6__["EstadoSalubridadComponent"],
                _visita_domiciliaria_informacion_familiar_informacion_familiar_component__WEBPACK_IMPORTED_MODULE_7__["InformacionFamiliarComponent"],
                _visita_domiciliaria_entorno_habitacional_entorno_habitacional_component__WEBPACK_IMPORTED_MODULE_8__["EntornoHabitacionalComponent"],
                _visita_domiciliaria_modus_vivendi_modus_vivendi_component__WEBPACK_IMPORTED_MODULE_9__["ModusVivendiComponent"],
                _actividades_component__WEBPACK_IMPORTED_MODULE_10__["ActividadesComponent"],
                _visita_domiciliaria_seguridad_seguridad_component__WEBPACK_IMPORTED_MODULE_11__["SeguridadComponent"],
                _verificacion_academica_verificacion_academica_component__WEBPACK_IMPORTED_MODULE_12__["VerificacionAcademicaComponent"],
                _verificacion_laboral_verificacion_laboral_component__WEBPACK_IMPORTED_MODULE_13__["VerificacionLaboralComponent"],
                _due_dilligence_due_dilligence_component__WEBPACK_IMPORTED_MODULE_14__["DueDilligenceComponent"],
                _decadactilar_decadactilar_component__WEBPACK_IMPORTED_MODULE_15__["DecadactilarComponent"],
                _prueba_psicotecnica_prueba_psicotecnica_component__WEBPACK_IMPORTED_MODULE_16__["PruebaPsicotecnicaComponent"],
                _evaluacion_financiera_evaluacion_financiera_component__WEBPACK_IMPORTED_MODULE_17__["EvaluacionFinancieraComponent"],
                _dictamen_grafologico_dictamen_grafologico_component__WEBPACK_IMPORTED_MODULE_18__["DictamenGrafologicoComponent"],
                _consolidado_consolidado_component__WEBPACK_IMPORTED_MODULE_19__["ConsolidadoComponent"],
                _asignar_funcionario_asignar_funcionario_component__WEBPACK_IMPORTED_MODULE_20__["AsignarFuncionarioComponent"],
                _datos_personales_datos_personales_component__WEBPACK_IMPORTED_MODULE_22__["DatosPersonalesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _actividades_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActividadesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_21__["NgxPermissionsModule"].forChild()
            ],
            exports: [
                _historial_judicial_historial_judicial_component__WEBPACK_IMPORTED_MODULE_3__["HistorialJudicialComponent"]
            ]
        })
    ], ActividadesModule);
    return ActividadesModule;
}());



/***/ }),

/***/ "./src/app/pages/actividades/asignar-funcionario/asignar-funcionario.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/actividades/asignar-funcionario/asignar-funcionario.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-8 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Asignar funcionario\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group\">\r\n          <div class=\"form-row\">\r\n            <label for=\"funcionario\" class=\"col-sm-4\">\r\n              Asignar funcionario\r\n            </label>\r\n            <div class=\"col-sm-8\">\r\n              <form [formGroup]=\"form\">\r\n                <select formControlName=\"funcionario\" class=\"form-control\" id=\"funcionario\">\r\n                  <option selected value=\"\">Seleccione un funcionario</option>\r\n                  <option *ngFor=\"let funcionario of funcionarios\" [value]=\"funcionario.id\">\r\n                    {{ funcionario.nombre }}\r\n                  </option>\r\n                </select>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center\">\r\n          <button class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"form.invalid\">\r\n            <i class=\"fa fa-plus\"></i>\r\n            Asignar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/asignar-funcionario/asignar-funcionario.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/actividades/asignar-funcionario/asignar-funcionario.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AsignarFuncionarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarFuncionarioComponent", function() { return AsignarFuncionarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
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



var AsignarFuncionarioComponent = /** @class */ (function () {
    function AsignarFuncionarioComponent(_data) {
        this._data = _data;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            funcionario: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    AsignarFuncionarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.frelance().subscribe(function (value) { return _this.funcionarios = value.servicios; }, function (err) { return console.log(err); });
    };
    AsignarFuncionarioComponent.prototype.onSubmit = function () {
        this.event.emit(this.form.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AsignarFuncionarioComponent.prototype, "funcionario", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AsignarFuncionarioComponent.prototype, "event", void 0);
    AsignarFuncionarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asignar-funcionario',
            template: __webpack_require__(/*! ./asignar-funcionario.component.html */ "./src/app/pages/actividades/asignar-funcionario/asignar-funcionario.component.html")
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AsignarFuncionarioComponent);
    return AsignarFuncionarioComponent;
}());



/***/ }),

/***/ "./src/app/pages/actividades/consolidado/consolidado.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/actividades/consolidado/consolidado.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2NvbnNvbGlkYWRvL2NvbnNvbGlkYWRvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/actividades/consolidado/consolidado.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/actividades/consolidado/consolidado.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-asignar-funcionario\r\n  [funcionario]=\"3\"\r\n  *ngIf=\"actividad['estado'] == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<div class=\"col-md-8 mx-auto\" *ngIf=\"actividad['estado'] == 'asignado'\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Esperado por aceptacion\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"card-title\">\r\n        Actividad asignada a {{ funcionario }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"actividad['estado'] == 'aceptado'\" class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Consolidado</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n            <!--  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Antecedentes</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"exampleRadios\"\r\n                         formControlName=\"antecedentes\"\r\n                         id=\"antecedentes\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"antecedentes\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"antecedentes\"\r\n                         id=\"antecedentesn\" [value]=false\r\n                         formControlName=\"antecedentes\">\r\n                  <label class=\"form-check-label\" for=\"antecedentesn\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!--  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"antecedentesObs\">\r\n                Tiempo de permanencia\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"antecedentesObs\" id=\"antecedentesObs\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"antecedentesObs\"\r\n                          placeholder=\"Ingrese las observaciones\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['conclusion'].invalid &&\r\n                   form.controls['conclusion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!--  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">PoligrafiaInterface</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"poligrafia\"\r\n                         formControlName=\"poligrafia\"\r\n                         id=\"poligrafia\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"poligrafia\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"poligrafia\"\r\n                         id=\"poligrafian\" [value]=false\r\n                         formControlName=\"poligrafia\">\r\n                  <label class=\"form-check-label\" for=\"poligrafia\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!--  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"poligrafiaObs\">\r\n                Observaciones\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"poligrafiaObs\" id=\"poligrafiaObs\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"poligrafiaObs\"\r\n                          placeholder=\"Ingrese las observaciones\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['poligrafiaObs'].invalid &&\r\n                   form.controls['poligrafiaObs'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!--  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Antecedentes</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"exampleRadios\"\r\n                         formControlName=\"antecedentes\"\r\n                         id=\"financiero\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"financiero\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"antecedentes\"\r\n                         id=\"financieron\" [value]=false\r\n                         formControlName=\"financiero\">\r\n                  <label class=\"form-check-label\" for=\"financieron\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!--  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"financieroObs\">\r\n                Tiempo de permanencia\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"financieroObs\" id=\"financieroObs\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"financieroObs\"\r\n                          placeholder=\"Ingrese las observaciones\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['conclusion'].invalid &&\r\n                   form.controls['conclusion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Cedula</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"cedula\"\r\n                         formControlName=\"cedula\"\r\n                         id=\"cedula\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"cedula\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"cedula\"\r\n                         id=\"cedulan\" [value]=false\r\n                         formControlName=\"cedula\">\r\n                  <label class=\"form-check-label\" for=\"cedulan\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">libretaMilitar</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"libretaMilitar\"\r\n                         formControlName=\"libretaMilitar\"\r\n                         id=\"libretaMilitar\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"libretaMilitar\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"libretaMilitar\"\r\n                         id=\"libretaMilitarn\" [value]=false\r\n                         formControlName=\"libretaMilitarn\">\r\n                  <label class=\"form-check-label\" for=\"antecedentesn\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">licenciaConduccion</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"licenciaConduccion\"\r\n                         formControlName=\"licenciaConduccion\"\r\n                         id=\"licenciaConduccion\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"licenciaConduccion\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"licenciaConduccion\"\r\n                         id=\"licenciaConduccionn\" [value]=false\r\n                         formControlName=\"antecedentes\">\r\n                  <label class=\"form-check-label\" for=\"licenciaConduccionn\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">tarjetaProfecional</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"tarjetaProfecional\"\r\n                         formControlName=\"tarjetaProfecional\"\r\n                         id=\"tarjetaProfecional\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"tarjetaProfecional\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"tarjetaProfecional\"\r\n                         id=\"tarjetaProfecionaln\" [value]=false\r\n                         formControlName=\"antecedentes\">\r\n                  <label class=\"form-check-label\" for=\"tarjetaProfecional\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">diplomaBachiller</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaBachiller\"\r\n                         formControlName=\"diplomaBachiller\"\r\n                         id=\"diplomaBachiller\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"diplomaBachiller\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaBachiller\"\r\n                         id=\"diplomaBachillern\" [value]=false\r\n                         formControlName=\"diplomaBachiller\">\r\n                  <label class=\"form-check-label\" for=\"diplomaBachillern\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">diplomatecnico</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomatecnico\"\r\n                         formControlName=\"diplomatecnico\"\r\n                         id=\"diplomatecnico\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"diplomatecnico\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomatecnico\"\r\n                         id=\"diplomatecnicon\" [value]=false\r\n                         formControlName=\"diplomatecnicon\">\r\n                  <label class=\"form-check-label\" for=\"diplomatecnicon\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">diplomaTecnologico</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaTecnologico\"\r\n                         formControlName=\"diplomaTecnologico\"\r\n                         id=\"diplomaTecnologico\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"diplomaTecnologico\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaTecnologico\"\r\n                         id=\"diplomaTecnologicon\" [value]=false\r\n                         formControlName=\"diplomaTecnologico\">\r\n                  <label class=\"form-check-label\" for=\"diplomaTecnologicon\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">diplomaPregrado</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaPregrado\"\r\n                         formControlName=\"diplomaPregrado\"\r\n                         id=\"diplomaPregrado\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"diplomaPregrado\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaPregrado\"\r\n                         id=\"diplomaPregradon\" [value]=false\r\n                         formControlName=\"diplomaPregrado\">\r\n                  <label class=\"form-check-label\" for=\"diplomaPregradon\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">diplomaPostgrado</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaPostgrado\"\r\n                         formControlName=\"diplomaPostgrado\"\r\n                         id=\"diplomaPostgrado\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"diplomaPostgrado\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaPostgrado\"\r\n                         id=\"diplomaPostgradon\" [value]=false\r\n                         formControlName=\"antecedentes\">\r\n                  <label class=\"form-check-label\" for=\"diplomaPostgradon\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">diplomaCursos</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaCursos\"\r\n                         formControlName=\"diplomaCursos\"\r\n                         id=\"diplomaCursos\" [value]=\"true\">\r\n                  <label class=\"form-check-label\" for=\"diplomaCursos\">\r\n                    Si\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\"\r\n                         type=\"radio\" name=\"diplomaCursos\"\r\n                         id=\"diplomaCursosn\" [value]=false\r\n                         formControlName=\"diplomaCursos\">\r\n                  <label class=\"form-check-label\" for=\"diplomaCursosn\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"!form.valid\" (click)=\"onSubmit()\">\r\n            <i class=\"fa fa-save\"></i>\r\n            Guardar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/consolidado/consolidado.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/actividades/consolidado/consolidado.component.ts ***!
  \************************************************************************/
/*! exports provided: ConsolidadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidadoComponent", function() { return ConsolidadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsolidadoComponent = /** @class */ (function () {
    function ConsolidadoComponent(actividadesService, dataService) {
        this.actividadesService = actividadesService;
        this.dataService = dataService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            antecedentes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            antecedentesObs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            poligrafia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            poligrafiaObs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            financiero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            financieroObs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            comparendos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            licenciaConduccionGr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                isLicencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                cat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                vigencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            }),
            historial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            libretaMilitar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            licenciaConduccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tarjetaProfecional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaBachiller: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomatecnico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaTecnologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaPregrado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaPostgrado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaCursos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            datosInforme: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                encabezado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                fotoEval: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                logo_cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                nucleoFamiliar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                verificacionAcademica: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                verificacionLaboral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                referenciasBancarias: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                capitalDeuda: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                EstudioFinanciero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                historialJudicial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                evaluacionSeguridad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            }),
            firma: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.setActividad();
        // this.setValue();
    }
    ConsolidadoComponent.prototype.ngOnInit = function () {
    };
    ConsolidadoComponent.prototype.setActividad = function () {
        this.actividad = this.actividadesService.getActividad('HJ');
    };
    ConsolidadoComponent.prototype.setFuncionario = function (funcionarioId) {
        /*this.actividadesService.getFuncionario(funcionarioId)
          .subscribe(value => this.funcionario = value['nombre']);*/
    };
    ConsolidadoComponent.prototype.asignarFuncionario = function (event) {
        var _this = this;
        // id del analista asignado
        var funcionario = event['funcionario'];
        // id de la actividad
        var actividadId = this.actividad['id'];
        // id persona evaluada
        var personaEvaluadaId = this.actividadesService.getServicioEsp()['id'];
        // codigo de la actividad
        var codigoActividad = this.actividad['actividad']['codigo'];
        // body de peticion post
        var data = {
            actividadId: actividadId,
            funcionario: funcionario,
            personaEvaluadaId: personaEvaluadaId
        };
        this.dataService.asignarFuncionario(data).subscribe(function (value) {
            console.log(value);
            _this.actividadesService.setEstadoActividad(codigoActividad, 'asignado');
            _this.setFuncionario(funcionario);
            _this.setActividad();
        }, function (err) { return console.log(err); });
    };
    ConsolidadoComponent.prototype.onSubmit = function () {
        var data = this.form.value;
        data['personaEvaluadaId'] = this.actividadesService.getServicioEsp()['persona_evaluada']['id'];
    };
    ConsolidadoComponent.prototype.setValue = function () {
        var _this = this;
        var personaEvaluadaId = this.actividadesService.getServicioEsp()['persona_evaluada']['id'];
        this.dataService.getHistorialJudicial(personaEvaluadaId).subscribe(function (value) {
            _this.form.setValue({
                pJuridico: value['proceso_juridico'],
                pProcuraduria: value['proceso_procuraduria'],
                pContraloria: value['proceso_contraloria'],
                pFiscalia: value['proceso_fiscalia'],
                pPolicia: value['proceso_policia'],
                pTransito: value['proceso_transito'],
                pVerificacion: value['verificacion'],
                pCapturaInter: value['orden_captura_internacional'],
                prSancionesPenales: value['sanciones_penales'],
                prDelito: value['delito_procuraduria'],
                prInhabilidades: value['inhabilidades_procuraduria'],
                prFecha: value['fecha_inhabilidad'],
                cgAntecedentesFisc: value['antecedentes_fiscales'],
                cgFecha: value['fecha_antecedente'],
                csClaseProceso: value['clase_proceso'],
                csDatosSentencia: value['datos_sentencia'],
                csDelitos: value['delito_judicial'],
                csSituacionJuridica: value['situacion_juridica'],
                fgn_ns: value['f_g_n_ns'],
                listaOfac: value['lista_ofac'],
                listaOnu: value['lista_onu'],
                subversion: value['vinculos_subversion'],
                antecedentesPolicia: value['antecedentes_policia'],
                vinculosParamilitar: value['paramilitarismo'],
                simit: value['movilidad'],
                totalAdecuado: value['total_acuerdo'],
                observaciones: value['observaciones'],
            });
        }, function (err) { return console.error(err); });
    };
    ConsolidadoComponent.prototype.notificarAdmin = function () {
    };
    ConsolidadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consolidado',
            template: __webpack_require__(/*! ./consolidado.component.html */ "./src/app/pages/actividades/consolidado/consolidado.component.html"),
            styles: [__webpack_require__(/*! ./consolidado.component.css */ "./src/app/pages/actividades/consolidado/consolidado.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ConsolidadoComponent);
    return ConsolidadoComponent;
}());



/***/ }),

/***/ "./src/app/pages/actividades/datos-personales/datos-personales.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/actividades/datos-personales/datos-personales.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2RhdG9zLXBlcnNvbmFsZXMvZGF0b3MtcGVyc29uYWxlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/actividades/datos-personales/datos-personales.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/actividades/datos-personales/datos-personales.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form class=\"mx-auto animated fade-in\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Datos personales</h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"nombre\" class=\"col-sm-3 col-form-label\">Nombre del Evaluado</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"nombre\"\r\n                   name=\"nombre\"\r\n                   required=\"required\"\r\n                   placeholder=\"Nombre del evaluado\"\r\n                   [value]=\"servicioEsp.nombre\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"documento\" class=\"col-sm-3 col-form-label\">Documento de identidad</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"number\"\r\n                   class=\"form-control\"\r\n                   id=\"documento\"\r\n                   name=\"documento\"\r\n                   placeholder=\"Documento de indentidad\"\r\n                   required=\"required\"\r\n                   [value]=\"servicioEsp.documento\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"departamento\" class=\"col-sm-3 col-form-label\">Departamento</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"departamento\"\r\n                   name=\"departamento\"\r\n                   placeholder=\"Departamento\"\r\n                   required=\"required\"\r\n                   [value]=\"servicioEsp.departamento\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"ciudad\" class=\"col-sm-3 col-form-label\">Ciudad</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"ciudad\"\r\n                   name=\"ciudad\"\r\n                   placeholder=\"Ciudad\"\r\n                   required=\"required\"\r\n                   [value]=\"servicioEsp.ciudad\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"telefono\" class=\"col-sm-3 col-form-label\">Telefono</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"number\"\r\n                   class=\"form-control\"\r\n                   id=\"telefono\"\r\n                   name=\"telefono\"\r\n                   required=\"required\"\r\n                   placeholder=\"Telefono\"\r\n                   [value]=\"servicioEsp.telefono\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"correo\" class=\"col-sm-3 col-form-label\">Correo electronico</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"email\"\r\n                   class=\"form-control\"\r\n                   id=\"correo\"\r\n                   name=\"correo\"\r\n                   required=\"required\"\r\n                   placeholder=\"Correo electronico\"\r\n                   [value]=\"servicioEsp.email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"ciudadDesarrollo\" class=\"col-sm-3 col-form-label\">Ciudad de desarrollo de la prueba</label>\r\n          <div class=\"col-sm-9\">\r\n            <input type=\"email\"\r\n                   class=\"form-control\"\r\n                   id=\"ciudadDesarrollo\"\r\n                   name=\"ciudadDesarrollo\"\r\n                   required=\"required\"\r\n                   placeholder=\"Ciudad de desarrollo de la prueba\"\r\n                   [value]=\"servicioEsp.ciudadDesarrollo\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label for=\"observaciones\" class=\"col-sm-3 col-form-label\">Observaciones</label>\r\n          <div class=\"col-sm-9\">\r\n                <textarea\r\n                  cols=\"30\" rows=\"5\"\r\n                  class=\"form-control\"\r\n                  id=\"observaciones\"\r\n                  name=\"observaciones\"\r\n                  placeholder=\"Observaciones\"\r\n                  [value]=\"servicioEsp.observaciones\">\r\n                </textarea>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"observaciones\" class=\"col-sm-3 col-form-label\">Adjunto</label>\r\n          <div class=\"col-sm-9\">\r\n            <a [href]=\"apiUrl + servicioEsp.documento\" class=\"btn\">\r\n              <i class=\"fa fa-download\"></i>\r\n              Descargar adjunto\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/datos-personales/datos-personales.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/actividades/datos-personales/datos-personales.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DatosPersonalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosPersonalesComponent", function() { return DatosPersonalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
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
    function DatosPersonalesComponent(_actividades) {
        this._actividades = _actividades;
    }
    DatosPersonalesComponent.prototype.ngOnInit = function () {
        this.servicioEsp = this._actividades.getServicioEsp();
    };
    DatosPersonalesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datos-personales',
            template: __webpack_require__(/*! ./datos-personales.component.html */ "./src/app/pages/actividades/datos-personales/datos-personales.component.html"),
            styles: [__webpack_require__(/*! ./datos-personales.component.css */ "./src/app/pages/actividades/datos-personales/datos-personales.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_1__["ActividadesService"]])
    ], DatosPersonalesComponent);
    return DatosPersonalesComponent;
}());



/***/ }),

/***/ "./src/app/pages/actividades/decadactilar/decadactilar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/actividades/decadactilar/decadactilar.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2RlY2FkYWN0aWxhci9kZWNhZGFjdGlsYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/decadactilar/decadactilar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/actividades/decadactilar/decadactilar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- cuando la actividad se ha vencido -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad vencida\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">La actividad se ha vencido. por favor pongase en contacto con Total Security Services</span>\r\n              <span class=\"text-danger d-block\">Fecha de vencimiento: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Deca dactilar</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n            <!-- file -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"adjunto\">Adjunto</label>\r\n              <div class=\"col-sm-8\">\r\n                <div *ngIf=\"checkFile()\">\r\n                  <a [href]=\"apiUrl + form.get('adjunto').value\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-download\"></i>\r\n                    Descargar adjunto\r\n                  </a>\r\n                  <button class=\"btn btn-danger\" (click)=\"removeFile()\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                    Eliminar\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"checkTypeFile()\">\r\n                  <input type=\"file\" name=\"adjunto\" id=\"adjunto\" (change)=\"setFileToForm($event)\">\r\n                </div>\r\n\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['adjunto'].invalid &&\r\n                   form.controls['adjunto'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"conclusion\">Tiempo de permanencia</label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"conclusion\" id=\"conclusion\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"conclusion\"\r\n                          placeholder=\"Ingrese la conclusión\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['conclusion'].invalid &&\r\n                   form.controls['conclusion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!---->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/decadactilar/decadactilar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/actividades/decadactilar/decadactilar.component.ts ***!
  \**************************************************************************/
/*! exports provided: DecadactilarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecadactilarComponent", function() { return DecadactilarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_esp_actividades_comun_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/esp/actividades/comun.service */ "./src/app/services/esp/actividades/comun.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DecadactilarComponent = /** @class */ (function (_super) {
    __extends(DecadactilarComponent, _super);
    function DecadactilarComponent(actividadesService, dataService, _comun, _ngxPermissions, cd) {
        var _this = _super.call(this, actividadesService) || this;
        _this.actividadesService = actividadesService;
        _this.dataService = dataService;
        _this._comun = _comun;
        _this._ngxPermissions = _ngxPermissions;
        _this.cd = cd;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            adjunto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        return _this;
    }
    DecadactilarComponent.prototype.ngOnInit = function () {
        this.codigo = 'Dd';
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getValue();
        }
    };
    DecadactilarComponent.prototype.getValue = function () {
        var _this = this;
        this._comun.getDecadactilar(this.servicioEsp)
            .subscribe(function (value) {
            var data = _this._actividades.transformResponse(value.servicios);
            _this.form.setValue(data);
        }, function () { return alert('Ocurrio un error inesperado al tratar de recuperar los datos'); });
    };
    DecadactilarComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        var servicioEspId = this.servicioEsp;
        this._comun.postDecadactilar(servicioEspId, data)
            .subscribe(function (value) {
            _this.setEstado('proceso');
            // this.currentActivityId = value.servicios.id;
            var dat = _this._actividades.transformResponse(value.servicios);
            _this.form.reset();
            _this.form.setValue(dat);
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    DecadactilarComponent.prototype.onUpdate = function () {
        var _this = this;
        var data = this.form.value;
        var id = this.form.get('id').value;
        this._comun.putDecadactilar(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.setEstado('proceso');
            }
            alert('Se han actualizado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return alert(err.error.message); });
    };
    DecadactilarComponent.prototype.setFileToForm = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.form.patchValue({
                    adjunto: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    DecadactilarComponent.prototype.removeFile = function () {
        this.form.get('adjunto').setValue('');
    };
    DecadactilarComponent.prototype.checkFile = function () {
        var file = this.form.get('adjunto').value;
        console.log(file);
        return !(file.includes('servicios:application') || file === '');
    };
    DecadactilarComponent.prototype.checkTypeFile = function () {
        var file = this.form.get('adjunto').value;
        console.log(file);
        console.log('typo', typeof file);
        return file.includes('servicios:application') || file === '';
    };
    DecadactilarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-decadactilar',
            template: __webpack_require__(/*! ./decadactilar.component.html */ "./src/app/pages/actividades/decadactilar/decadactilar.component.html"),
            styles: [__webpack_require__(/*! ./decadactilar.component.css */ "./src/app/pages/actividades/decadactilar/decadactilar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_esp_actividades_comun_service__WEBPACK_IMPORTED_MODULE_6__["ComunService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DecadactilarComponent);
    return DecadactilarComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2RpY3RhbWVuLWdyYWZvbG9naWNvL2RpY3RhbWVuLWdyYWZvbG9naWNvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- cuando la actividad se ha vencido -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad vencida\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">La actividad se ha vencido. por favor pongase en contacto con Total Security Services</span>\r\n              <span class=\"text-danger d-block\">Fecha de vencimiento: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!-- formularo -->\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Esperado por aceptacion\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"card-title\">\r\n        Actividad asignada a {{ funcionario }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"actividad['estado'] == 'aceptado'\" class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Dictamen Grafologico</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"adjunto\">Adjunto</label>\r\n              <div class=\"col-sm-8\">\r\n                <div *ngIf=\"checkFile()\">\r\n                  <a [href]=\"apiUrl + form.get('adjunto').value\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-download\"></i>\r\n                    Descargar adjunto\r\n                  </a>\r\n                  <button class=\"btn btn-danger\" (click)=\"removeFile()\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                    Eliminar\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"checkTypeFile()\">\r\n                  <input type=\"file\" name=\"adjunto\" id=\"adjunto\" (change)=\"setFileToForm($event)\">\r\n                </div>\r\n\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['adjunto'].invalid &&\r\n                   form.controls['adjunto'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"conclusion\">Tiempo de permanencia</label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"conclusion\" id=\"conclusion\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"conclusion\"\r\n                          placeholder=\"Ingrese la conclusión\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['conclusion'].invalid &&\r\n                   form.controls['conclusion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!---->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DictamenGrafologicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictamenGrafologicoComponent", function() { return DictamenGrafologicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_esp_actividades_comun_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/esp/actividades/comun.service */ "./src/app/services/esp/actividades/comun.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DictamenGrafologicoComponent = /** @class */ (function (_super) {
    __extends(DictamenGrafologicoComponent, _super);
    function DictamenGrafologicoComponent(actividadesService, dataService, _comun, _ngxPermissions, cd) {
        var _this = _super.call(this, actividadesService) || this;
        _this.actividadesService = actividadesService;
        _this.dataService = dataService;
        _this._comun = _comun;
        _this._ngxPermissions = _ngxPermissions;
        _this.cd = cd;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            adjunto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        return _this;
    }
    DictamenGrafologicoComponent.prototype.ngOnInit = function () {
        this.codigo = 'DG';
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getValue();
        }
    };
    DictamenGrafologicoComponent.prototype.getValue = function () {
        var _this = this;
        this._comun.getDictamenGrafologico(this.servicioEsp)
            .subscribe(function (value) {
            var data = _this._actividades.transformResponse(value.servicios);
            _this.form.setValue(data);
        }, function () { return alert('Ocurrio un error inesperado al tratar de recuperar los datos'); });
    };
    DictamenGrafologicoComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        var servicioEspId = this.servicioEsp;
        this._comun.postDictamenGrafologico(servicioEspId, data)
            .subscribe(function (value) {
            _this.setEstado('proceso');
            // this.currentActivityId = value.servicios.id;
            var dat = _this._actividades.transformResponse(value.servicios);
            _this.form.reset();
            _this.form.setValue(dat);
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    DictamenGrafologicoComponent.prototype.onUpdate = function () {
        var _this = this;
        var data = this.form.value;
        var id = this.form.get('id').value;
        this._comun.putDictamenGrafologico(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.setEstado('proceso');
            }
            alert('Se han actualizado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return alert(err.error.message); });
    };
    DictamenGrafologicoComponent.prototype.setFileToForm = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.form.patchValue({
                    adjunto: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    DictamenGrafologicoComponent.prototype.removeFile = function () {
        this.form.get('adjunto').setValue('');
    };
    DictamenGrafologicoComponent.prototype.checkFile = function () {
        var file = this.form.get('adjunto').value;
        console.log(file);
        return !(file.includes('servicios:application') || file === '');
    };
    DictamenGrafologicoComponent.prototype.checkTypeFile = function () {
        var file = this.form.get('adjunto').value;
        console.log(file);
        console.log('typo', typeof file);
        return file.includes('servicios:application') || file === '';
    };
    DictamenGrafologicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dictamen-grafologico',
            template: __webpack_require__(/*! ./dictamen-grafologico.component.html */ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.html"),
            styles: [__webpack_require__(/*! ./dictamen-grafologico.component.css */ "./src/app/pages/actividades/dictamen-grafologico/dictamen-grafologico.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _services_esp_actividades_comun_service__WEBPACK_IMPORTED_MODULE_6__["ComunService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DictamenGrafologicoComponent);
    return DictamenGrafologicoComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/due-dilligence/due-dilligence.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actividades/due-dilligence/due-dilligence.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2R1ZS1kaWxsaWdlbmNlL2R1ZS1kaWxsaWdlbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/actividades/due-dilligence/due-dilligence.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/actividades/due-dilligence/due-dilligence.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- cuando la actividad se ha vencido -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad vencida\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">La actividad se ha vencido. por favor pongase en contacto con Total Security Services</span>\r\n              <span class=\"text-danger d-block\">Fecha de vencimiento: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Due dilligence</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"adjunto\">Adjunto</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" name=\"adjunto\" id=\"adjunto\" formControlName=\"adjunto\">\r\n                  <label class=\"custom-file-label\" for=\"adjunto\">Seleccione un archivo</label>\r\n                </div>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tiempoPermanencia'].invalid &&\r\n                   form.controls['tiempoPermanencia'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"conclusion\">Tiempo de permanencia</label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"conclusion\" id=\"conclusion\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"conclusion\"\r\n                          placeholder=\"Ingrese la conclusión\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['conclusion'].invalid &&\r\n                   form.controls['conclusion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!---->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/due-dilligence/due-dilligence.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/actividades/due-dilligence/due-dilligence.component.ts ***!
  \******************************************************************************/
/*! exports provided: DueDilligenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DueDilligenceComponent", function() { return DueDilligenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_esp_actividades_comun_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/esp/actividades/comun.service */ "./src/app/services/esp/actividades/comun.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DueDilligenceComponent = /** @class */ (function (_super) {
    __extends(DueDilligenceComponent, _super);
    function DueDilligenceComponent(actividadesService, dataService, _comun, _ngxPermissions, cd) {
        var _this = _super.call(this, actividadesService) || this;
        _this.actividadesService = actividadesService;
        _this.dataService = dataService;
        _this._comun = _comun;
        _this._ngxPermissions = _ngxPermissions;
        _this.cd = cd;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            adjunto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        return _this;
    }
    DueDilligenceComponent.prototype.ngOnInit = function () {
        this.codigo = 'DG';
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        // console.log(this.actividad);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getValue();
        }
    };
    DueDilligenceComponent.prototype.getValue = function () {
        var _this = this;
        // Solicitud get al servidor
        this._comun.getDictamenGrafologico(this.servicioEsp)
            .subscribe(function (value) {
            var data = _this._actividades.transformResponse(value.servicios);
            _this.form.setValue(data);
        }, function () { return alert('Ocurrio un error inesperado al tratar de recuperar los datos'); });
    };
    DueDilligenceComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        var servicioEspId = this.servicioEsp;
        this._comun.postDictamenGrafologico(servicioEspId, data)
            .subscribe(function (value) {
            _this.setEstado('proceso');
            // this.currentActivityId = value.servicios.id;
            var dat = _this._actividades.transformResponse(value.servicios);
            _this.form.reset();
            _this.form.setValue(dat);
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    DueDilligenceComponent.prototype.onUpdate = function () {
        var _this = this;
        var data = this.form.value;
        var id = this.form.get('id').value;
        this._comun.putDictamenGrafologico(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.setEstado('proceso');
            }
            alert('Se han actualizado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return alert(err.error.message); });
    };
    DueDilligenceComponent.prototype.setFileToForm = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.form.patchValue({
                    adjunto: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    DueDilligenceComponent.prototype.removeFile = function () {
        this.form.get('adjunto').setValue('');
    };
    DueDilligenceComponent.prototype.checkFile = function () {
        var file = this.form.get('adjunto').value;
        console.log(file);
        return !(file.includes('servicios:application') || file === '');
    };
    DueDilligenceComponent.prototype.checkTypeFile = function () {
        var file = this.form.get('adjunto').value;
        console.log(file);
        console.log('typo', typeof file);
        return file.includes('servicios:application') || file === '';
    };
    DueDilligenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-due-dilligence',
            template: __webpack_require__(/*! ./due-dilligence.component.html */ "./src/app/pages/actividades/due-dilligence/due-dilligence.component.html"),
            styles: [__webpack_require__(/*! ./due-dilligence.component.css */ "./src/app/pages/actividades/due-dilligence/due-dilligence.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _services_esp_actividades_comun_service__WEBPACK_IMPORTED_MODULE_6__["ComunService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DueDilligenceComponent);
    return DueDilligenceComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2V2YWx1YWNpb24tZmluYW5jaWVyYS9ldmFsdWFjaW9uLWZpbmFuY2llcmEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- cuando la actividad se ha vencido -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad vencida\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">La actividad se ha vencido. por favor pongase en contacto con Total Security Services</span>\r\n              <span class=\"text-danger d-block\">Fecha de vencimiento: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Evaluacion Financiera</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n\r\n\r\n        <!-- cuentas bancarias -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Cuentas bancarias</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"cbModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                  <th>tipo cuenta</th>\r\n                  <th>Entidad</th>\r\n                  <th>Ciudad</th>\r\n                  <th>Fecha de apertura</th>\r\n                  <th>Estado</th>\r\n                  <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of cuentaBancaria\">\r\n                    <td>{{ value.tipoCuenta }}</td>\r\n                    <td>{{ value.entidad }}</td>\r\n                    <td>{{ value.ciudad }}</td>\r\n                    <td>{{ value.fechaApertura | date }}</td>\r\n                    <td>{{ value.estado }}</td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateCuentaBancaria(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteCuentaBancaria(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- Obligaciones vigentes -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <!-- bienes Inmuebles -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Obligaciones vigentes en el sector financiero, asegurador y solidario</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"ovModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>Entidad</th>\r\n                    <th>Tipo de crédito</th>\r\n                    <th>Valor aprobado</th>\r\n                    <th>Saldo a la fecha</th>\r\n                    <th>Valor cuota</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of obligacionVigente\">\r\n                    <td> {{ value.entidad }} </td>\r\n                    <td> {{ value.tipoCredito }} </td>\r\n                    <td> {{ value.valorAprobado }} </td>\r\n                    <td> {{ value.saldoActual }} </td>\r\n                    <td> {{ value.valorCuota }} </td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateObligacionVigente(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteObligacionVigente(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- Obligaciones vigentes en el sector real -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <!-- bienes Inmuebles -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Obligaciones vigentes en el sector real</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"ovrModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                  <th>Entidad</th>\r\n                  <th>Línea de crédito</th>\r\n                  <th>Fecha apertura</th>\r\n                  <th>Valor cargo fijo</th>\r\n                  <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of obligacionVigenteReal\">\r\n                    <td>{{ value.entidad }}</td>\r\n                    <td>{{ value.lineaCredito }}</td>\r\n                    <td>{{ value.fechaApertura }}</td>\r\n                    <td>{{ value.valorCargoFijo }}</td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateObligacionVigenteReal(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteObligacionVigenteReal(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!--Obligaciones en mora -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <!-- bienes Inmuebles -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Obligaciones en mora</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"omModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>Entidad</th>\r\n                    <th>Tipo de crédito</th>\r\n                    <th>Tiempo en mora</th>\r\n                    <th>Monto en mora</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of obligacionMora\">\r\n                    <td> {{ value.entidad }} </td>\r\n                    <td> {{ value.tipoCredito }} </td>\r\n                    <td> {{ value.tiempoMora }} </td>\r\n                    <td> {{ value.montoMora }} </td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateObligacionMora(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteObligacionMora(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Obligaciones Extinguidas -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Obligaciones Extinguidas</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"oeModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>Entidad</th>\r\n                    <th>Fecha de apertura</th>\r\n                    <th>Fecha de cierre</th>\r\n                    <th>Tipo de crédito</th>\r\n                    <th>Valor</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of obligacionExtinguida\">\r\n                    <td> {{ value.entidad }} </td>\r\n                    <td> {{ value.fechaApertura | date }} </td>\r\n                    <td> {{ value.fechaCierre | date }} </td>\r\n                    <td> {{ value.tipoCredito }} </td>\r\n                    <td> {{ value.valor }} </td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateObligacionExtinguida(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteObligacionExtinguida(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                    <!--<td>\r\n\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               name=\"entidad\" formControlName=\"entidad\"\r\n                               placeholder=\"Entidad\">\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"date\" class=\"form-control\"\r\n                               name=\"fechaApertura\" formControlName=\"fechaApertura\"\r\n                               placeholder=\"Fecha apertura\">\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"date\" class=\"form-control\"\r\n                               name=\"fechaCierre\" formControlName=\"fechaCierre\"\r\n                               placeholder=\"Fecha cierre\">\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               name=\"tipoCredito\" formControlName=\"tipoCredito\"\r\n                               placeholder=\"Tipo credito\">\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"number\" class=\"form-control\"\r\n                               name=\"valor\" formControlName=\"valor\"\r\n                               placeholder=\"Valor\">\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"form-group text-center\">\r\n                        <button class=\"btn btn-danger\" (click)=\"deleteObligacionesExtinguidas(i)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>-->\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div [formGroup]=\"form\" class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"conclusion\">Conclusiones</label>\r\n              <div class=\"col-sm-9\">\r\n              <textarea class=\"form-control\" id=\"conclusion\"\r\n                        name=\"conclusion\" formControlName=\"conclusion\"\r\n                        rows=\"3\" placeholder=\"Ingresé la conclusion\">\r\n              </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls.conclusion.invalid && form.controls.conclusion.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal cuenta bancaria -->\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': cbModal.showModal, 'd-none': !cbModal.showModal}\"></div>\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': cbModal.showModal, 'd-none': !cbModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalCuentaBancaria()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"cuentaBancariaForm\">\r\n\r\n          <!-- tipocuenta -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cb-tipocuenta\">Tipo cuenta</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"cb-tipocuenta\"\r\n                     name=\"tipoCuenta\"\r\n                     formControlName=\"tipoCuenta\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(cuentaBancariaForm.get('tipoCuenta').invalid &&\r\n                     cuentaBancariaForm.get('tipoCuenta').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cb-entidad\">Entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"cb-entidad\"\r\n                     name=\"entidad\"\r\n                     formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(cuentaBancariaForm.get('entidad').invalid &&\r\n                     cuentaBancariaForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- ciudad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cb-ciudad\">ciudad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"cb-ciudad\"\r\n                     name=\"ciudad\"\r\n                     formControlName=\"ciudad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(cuentaBancariaForm.get('ciudad').invalid &&\r\n                     cuentaBancariaForm.get('ciudad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- fechaApertura -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cb-fechaApertura\">Fecha Apertura</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"date\" class=\"form-control\"\r\n                     id=\"cb-fechaApertura\"\r\n                     name=\"fechaApertura\"\r\n                     formControlName=\"fechaApertura\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(cuentaBancariaForm.get('fechaApertura').invalid &&\r\n                     cuentaBancariaForm.get('fechaApertura').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- estado -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cb-estado\">Estado</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"cb-estado\"\r\n                     name=\"estado\"\r\n                     formControlName=\"estado\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(cuentaBancariaForm.get('estado').invalid &&\r\n                     cuentaBancariaForm.get('estado').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalCuentaBancaria()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"cuentaBancariaForm.invalid\" (click)=\"refreshCuentaBancaria()\" *ngIf=\"cbModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"cuentaBancariaForm.invalid\" (click)=\"addCuentaBancaria()\" *ngIf=\"!cbModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal obligacion vigente -->\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': ovModal.showModal, 'd-none': !ovModal.showModal}\"></div>\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': ovModal.showModal, 'd-none': !ovModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalObligacionVigente()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"obligacionVigenteForm\">\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ov-entidad\">entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ov-entidad\"\r\n                     name=\"entidad\"\r\n                     formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteForm.get('entidad').invalid &&\r\n                     obligacionVigenteForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- tipoCredito -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ov-tipoCredito\">Tipo de Credito</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ov-tipoCredito\"\r\n                     name=\"tipoCredito\"\r\n                     formControlName=\"tipoCredito\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteForm.get('tipoCredito').invalid &&\r\n                     obligacionVigenteForm.get('tipoCredito').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- valorAprobado -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ov-valorAprobado\">Valor Aprobado</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"ov-valorAprobado\"\r\n                     name=\"valorAprobado\"\r\n                     formControlName=\"valorAprobado\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteForm.get('valorAprobado').invalid &&\r\n                     obligacionVigenteForm.get('valorAprobado').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- saldoActual -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ov-saldoActual\">Saldo Fecha</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"ov-saldoActual\"\r\n                     name=\"saldoActual\"\r\n                     formControlName=\"saldoActual\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteForm.get('saldoActual').invalid &&\r\n                     obligacionVigenteForm.get('saldoActual').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- valorCuota -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ov-valorCuota\">Valor Cuota</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"ov-valorCuota\"\r\n                     name=\"valorCuota\"\r\n                     formControlName=\"valorCuota\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteForm.get('valorCuota').invalid &&\r\n                     obligacionVigenteForm.get('valorCuota').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalObligacionVigente()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"obligacionVigenteForm.invalid\" (click)=\"refreshObligacionVigente()\" *ngIf=\"ovModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"obligacionVigenteForm.invalid\" (click)=\"addObligacionVigente()\" *ngIf=\"!ovModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal obligacion vigente real -->\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': ovrModal.showModal, 'd-none': !ovrModal.showModal}\"></div>\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': ovrModal.showModal, 'd-none': !ovrModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Obligacion vigente real</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalObligacionVigenteReal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"obligacionVigenteRealForm\">\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ovr-entidad\">Entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ovr-entidad\"\r\n                     name=\"entidad\"\r\n                     formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteRealForm.get('entidad').invalid &&\r\n                     obligacionVigenteRealForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- lineaCredito -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ovr-lineaCredito\">Linea Credito</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ovr-lineaCredito\"\r\n                     name=\"lineaCredito\"\r\n                     formControlName=\"lineaCredito\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteRealForm.get('lineaCredito').invalid &&\r\n                     obligacionVigenteRealForm.get('lineaCredito').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- fechaApertura -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ovr-fechaApertura\">Fecha apertura</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"date\" class=\"form-control\"\r\n                     id=\"ovr-fechaApertura\"\r\n                     name=\"fechaApertura\"\r\n                     formControlName=\"fechaApertura\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteRealForm.get('fechaApertura').invalid &&\r\n                     obligacionVigenteRealForm.get('fechaApertura').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- valorCargoFijo -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ovr-valorCargoFijo\">valorCargoFijo</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"ovr-valorCargoFijo\"\r\n                     name=\"valorCargoFijo\"\r\n                     formControlName=\"valorCargoFijo\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionVigenteRealForm.get('valorCargoFijo').invalid &&\r\n                     obligacionVigenteRealForm.get('valorCargoFijo').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalObligacionVigenteReal()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"obligacionVigenteRealForm.invalid\" (click)=\"refreshObligacionVigenteReal()\" *ngIf=\"ovrModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"obligacionVigenteRealForm.invalid\" (click)=\"addObligacionVigenteReal()\" *ngIf=\"!ovrModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal obligacion mora -->\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': omModal.showModal, 'd-none': !omModal.showModal}\"></div>\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': omModal.showModal, 'd-none': !omModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Obligacion vigente real</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalObligacionVigenteReal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"obligacionMoraForm\">\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"om-entidad\">Entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"om-entidad\"\r\n                     name=\"entidad\"\r\n                     formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionMoraForm.get('entidad').invalid &&\r\n                     obligacionMoraForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- tipoCredito -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"om-tipoCredito\">Tipo Credito</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"om-tipoCredito\"\r\n                     name=\"tipoCredito\"\r\n                     formControlName=\"tipoCredito\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionMoraForm.get('tipoCredito').invalid &&\r\n                     obligacionMoraForm.get('tipoCredito').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- tiempoMora -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"om-tiempoMora\">Tiempo Mora</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"om-tiempoMora\"\r\n                     name=\"tiempoMora\"\r\n                     formControlName=\"tiempoMora\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionMoraForm.get('tiempoMora').invalid &&\r\n                     obligacionMoraForm.get('tiempoMora').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- montoMora -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"om-montoMora\">Monto Mora</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"om-montoMora\"\r\n                     name=\"montoMora\"\r\n                     formControlName=\"montoMora\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionMoraForm.get('montoMora').invalid &&\r\n                     obligacionMoraForm.get('montoMora').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalObligacionMora()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"obligacionMoraForm.invalid\" (click)=\"refreshObligacionMora()\" *ngIf=\"omModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"obligacionMoraForm.invalid\" (click)=\"addObligacionMora()\" *ngIf=\"!omModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal obligacion extinguida -->\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': oeModal.showModal, 'd-none': !oeModal.showModal}\"></div>\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': oeModal.showModal, 'd-none': !oeModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Obligacion vigente real</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalObligacionExtinguida()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"obligacionExtinguidaForm\">\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"oe-entidad\">Entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"oe-entidad\"\r\n                     name=\"entidad\"\r\n                     formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionExtinguidaForm.get('entidad').invalid &&\r\n                     obligacionExtinguidaForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- fechaApertura -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"oe-fechaApertura\">Fecha Apertura</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"date\" class=\"form-control\"\r\n                     id=\"oe-fechaApertura\"\r\n                     name=\"fechaApertura\"\r\n                     formControlName=\"fechaApertura\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionExtinguidaForm.get('fechaApertura').invalid &&\r\n                     obligacionExtinguidaForm.get('fechaApertura').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- fechaCierre -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"oe-fechaCierre\">Fecha Cierre</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"date\" class=\"form-control\"\r\n                     id=\"oe-fechaCierre\"\r\n                     name=\"fechaCierre\"\r\n                     formControlName=\"fechaCierre\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionExtinguidaForm.get('fechaCierre').invalid &&\r\n                     obligacionExtinguidaForm.get('fechaCierre').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- tipoCredito -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"oe-tipoCredito\">Tipo Credito</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"oe-tipoCredito\"\r\n                     name=\"tipoCredito\"\r\n                     formControlName=\"tipoCredito\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionExtinguidaForm.get('tipoCredito').invalid &&\r\n                     obligacionExtinguidaForm.get('tipoCredito').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- valor -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"oe-valor\">Valor</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"oe-valor\"\r\n                     name=\"valor\"\r\n                     formControlName=\"valor\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(obligacionExtinguidaForm.get('valor').invalid &&\r\n                     obligacionExtinguidaForm.get('valor').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalObligacionExtinguida()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"obligacionExtinguidaForm.invalid\" (click)=\"refreshObligacionExtinguida()\" *ngIf=\"oeModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"obligacionExtinguidaForm.invalid\" (click)=\"addObligacionExtinguida()\" *ngIf=\"!oeModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EvaluacionFinancieraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionFinancieraComponent", function() { return EvaluacionFinancieraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_esp_actividades_evaluacion_financiera_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/esp/actividades/evaluacion-financiera.service */ "./src/app/services/esp/actividades/evaluacion-financiera.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EvaluacionFinancieraComponent = /** @class */ (function (_super) {
    __extends(EvaluacionFinancieraComponent, _super);
    function EvaluacionFinancieraComponent(_actividades, _evaluacionFinanciera, dataService, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._evaluacionFinanciera = _evaluacionFinanciera;
        _this.dataService = dataService;
        _this._ngxPermissions = _ngxPermissions;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        // cuenta Bancaria
        _this.cbModal = {
            showModal: false,
            isUpdate: false
        };
        // obligacion Vigente
        _this.ovModal = {
            showModal: false,
            isUpdate: false
        };
        // obligacion Vigente real
        _this.ovrModal = {
            showModal: false,
            isUpdate: false
        };
        // obligacion Mora
        _this.omModal = {
            showModal: false,
            isUpdate: false
        };
        // obligacion Extinguida
        _this.oeModal = {
            showModal: false,
            isUpdate: false
        };
        _this.cuentaBancaria = [];
        _this.obligacionVigente = [];
        _this.obligacionVigenteReal = [];
        _this.obligacionMora = [];
        _this.obligacionExtinguida = [];
        _this.codigo = 'EF';
        return _this;
    }
    EvaluacionFinancieraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cuentaBancariaForm = this._evaluacionFinanciera.cuentaBancariaForm;
        this.obligacionVigenteForm = this._evaluacionFinanciera.obligacionVigenteForm;
        this.obligacionVigenteRealForm = this._evaluacionFinanciera.obligacionVigenteRealForm;
        this.obligacionMoraForm = this._evaluacionFinanciera.obligacionMoraForm;
        this.obligacionExtinguidaForm = this._evaluacionFinanciera.obligacionExtinguidaForm;
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        this._evaluacionFinanciera.getCuentasBancarias(this.servicioEsp)
            .subscribe(function (res) { return _this.cuentaBancaria = res.servicios; });
        this._evaluacionFinanciera.getObligacionesVigentes(this.servicioEsp)
            .subscribe(function (res) { return _this.obligacionVigente = res.servicios; });
        this._evaluacionFinanciera.getObligacionesReales(this.servicioEsp)
            .subscribe(function (res) { return _this.obligacionVigenteReal = res.servicios; });
        this._evaluacionFinanciera.getObligacionesMora(this.servicioEsp)
            .subscribe(function (res) { return _this.obligacionMora = res.servicios; });
        this._evaluacionFinanciera.getObligacionesExtinguidas(this.servicioEsp)
            .subscribe(function (res) { return _this.obligacionExtinguida = res.servicios; });
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getValue();
        }
    };
    EvaluacionFinancieraComponent.prototype.getValue = function () {
        var _this = this;
        // Solicitud get al servidor
        this._evaluacionFinanciera.get(this.servicioEsp)
            .subscribe(function (value) {
            var data = _this._actividades.transformResponse(value.servicios);
            _this.form.setValue(data);
        });
    };
    EvaluacionFinancieraComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        this._evaluacionFinanciera.post(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.setEstado('proceso');
            var response = _this._actividades.transformResponse(value.servicios);
            _this.form.setValue(response);
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    EvaluacionFinancieraComponent.prototype.onUpdate = function () {
        var _this = this;
        var data = this.form.value;
        this.dataService.updateVerificacionLaboral(this.servicioEsp, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.setEstado('proceso');
            }
            var response = _this._actividades.transformResponse(value.servicios);
            _this.form.setValue(response);
            alert('Se han actualizado los datos exitosamente');
        }, function (err) { return _this._actividades.handleError(err); });
    };
    // cuentas bancarias
    EvaluacionFinancieraComponent.prototype.addCuentaBancaria = function () {
        var _this = this;
        this._evaluacionFinanciera.postCuentaBancaria(this.servicioEsp, this.cuentaBancariaForm.value)
            .subscribe(function (res) {
            _this.cuentaBancaria.push(res.servicios);
            _this.closeModalCuentaBancaria();
        });
    };
    EvaluacionFinancieraComponent.prototype.updateCuentaBancaria = function (id) {
        var item = null;
        this.cuentaBancaria.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.cbModal.showModal = true;
        this.cbModal.isUpdate = true;
        this.cuentaBancariaForm.setValue(item);
    };
    EvaluacionFinancieraComponent.prototype.refreshCuentaBancaria = function () {
        var _this = this;
        var id = this.cuentaBancariaForm.get('id').value;
        this._evaluacionFinanciera.putCuentaBancaria(this.servicioEsp, id, this.cuentaBancariaForm.value)
            .subscribe(function (res) {
            _this.cuentaBancaria = _this.cuentaBancaria
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalCuentaBancaria();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    EvaluacionFinancieraComponent.prototype.deleteCuentaBancaria = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._evaluacionFinanciera.deleteCuentaBancaria(this.servicioEsp, id)
                .subscribe(function () {
                _this.cuentaBancaria = _this.cuentaBancaria.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    EvaluacionFinancieraComponent.prototype.closeModalCuentaBancaria = function () {
        this.cuentaBancariaForm.reset();
        this.cbModal.showModal = false;
        this.cbModal.isUpdate = false;
    };
    // obligaciones vigentes
    EvaluacionFinancieraComponent.prototype.addObligacionVigente = function () {
        var _this = this;
        this._evaluacionFinanciera.postObligacionVigente(this.servicioEsp, this.obligacionVigenteForm.value)
            .subscribe(function (res) {
            _this.obligacionVigente.push(res.servicios);
            _this.closeModalObligacionVigente();
        });
    };
    EvaluacionFinancieraComponent.prototype.updateObligacionVigente = function (id) {
        var item = null;
        this.obligacionVigente.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.ovModal.showModal = true;
        this.ovModal.isUpdate = true;
        this.obligacionVigenteForm.setValue(item);
    };
    EvaluacionFinancieraComponent.prototype.refreshObligacionVigente = function () {
        var _this = this;
        var id = this.obligacionVigenteForm.get('id').value;
        this._evaluacionFinanciera.putObligacionVigente(this.servicioEsp, id, this.obligacionVigenteForm.value)
            .subscribe(function (res) {
            _this.obligacionVigente = _this.obligacionVigente
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalObligacionVigente();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    EvaluacionFinancieraComponent.prototype.deleteObligacionVigente = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._evaluacionFinanciera.deleteObligacionVigente(this.servicioEsp, id)
                .subscribe(function () {
                _this.obligacionVigente = _this.obligacionVigente.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    EvaluacionFinancieraComponent.prototype.closeModalObligacionVigente = function () {
        this.obligacionVigenteForm.reset();
        this.ovModal.showModal = false;
        this.ovModal.isUpdate = false;
    };
    // obligaciones vigentes real
    EvaluacionFinancieraComponent.prototype.addObligacionVigenteReal = function () {
        var _this = this;
        this._evaluacionFinanciera.postObligacionReal(this.servicioEsp, this.obligacionVigenteRealForm.value)
            .subscribe(function (res) {
            _this.obligacionVigenteReal.push(res.servicios);
            _this.closeModalObligacionVigenteReal();
        });
    };
    EvaluacionFinancieraComponent.prototype.updateObligacionVigenteReal = function (id) {
        var item = null;
        this.obligacionVigenteReal.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.ovrModal.showModal = true;
        this.ovrModal.isUpdate = true;
        this.obligacionVigenteRealForm.setValue(item);
    };
    EvaluacionFinancieraComponent.prototype.refreshObligacionVigenteReal = function () {
        var _this = this;
        var id = this.obligacionVigenteRealForm.get('id').value;
        this._evaluacionFinanciera.putObligacionReal(this.servicioEsp, id, this.obligacionVigenteRealForm.value)
            .subscribe(function (res) {
            _this.obligacionVigenteReal = _this.obligacionVigenteReal
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalObligacionVigenteReal();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    EvaluacionFinancieraComponent.prototype.deleteObligacionVigenteReal = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._evaluacionFinanciera.deleteObligacionReal(this.servicioEsp, id)
                .subscribe(function () {
                _this.obligacionVigenteReal = _this.obligacionVigenteReal.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    EvaluacionFinancieraComponent.prototype.closeModalObligacionVigenteReal = function () {
        this.obligacionVigenteRealForm.reset();
        this.ovrModal.showModal = false;
        this.ovrModal.isUpdate = false;
    };
    // obligaciones mora
    EvaluacionFinancieraComponent.prototype.addObligacionMora = function () {
        var _this = this;
        this._evaluacionFinanciera.postObligacionMora(this.servicioEsp, this.obligacionMoraForm.value)
            .subscribe(function (res) {
            _this.obligacionMora.push(res.servicios);
            _this.closeModalObligacionMora();
        });
    };
    EvaluacionFinancieraComponent.prototype.updateObligacionMora = function (id) {
        var item = null;
        this.obligacionMora.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.omModal.showModal = true;
        this.omModal.isUpdate = true;
        this.obligacionMoraForm.setValue(item);
    };
    EvaluacionFinancieraComponent.prototype.refreshObligacionMora = function () {
        var _this = this;
        var id = this.obligacionMoraForm.get('id').value;
        this._evaluacionFinanciera.putObligacionMora(this.servicioEsp, id, this.obligacionMoraForm.value)
            .subscribe(function (res) {
            _this.obligacionMora = _this.obligacionMora
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalObligacionMora();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    EvaluacionFinancieraComponent.prototype.deleteObligacionMora = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._evaluacionFinanciera.deleteObligacionMora(this.servicioEsp, id)
                .subscribe(function () {
                _this.obligacionMora = _this.obligacionMora.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    EvaluacionFinancieraComponent.prototype.closeModalObligacionMora = function () {
        this.obligacionMoraForm.reset();
        this.omModal.showModal = false;
        this.omModal.isUpdate = false;
    };
    // obligaciones extinguidas
    EvaluacionFinancieraComponent.prototype.addObligacionExtinguida = function () {
        var _this = this;
        this._evaluacionFinanciera.postObligacionExtinguida(this.servicioEsp, this.obligacionExtinguidaForm.value)
            .subscribe(function (res) {
            _this.obligacionExtinguida.push(res.servicios);
            _this.closeModalObligacionExtinguida();
        });
    };
    EvaluacionFinancieraComponent.prototype.updateObligacionExtinguida = function (id) {
        var item = null;
        this.obligacionExtinguida.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.oeModal.showModal = true;
        this.oeModal.isUpdate = true;
        this.obligacionExtinguidaForm.setValue(item);
    };
    EvaluacionFinancieraComponent.prototype.refreshObligacionExtinguida = function () {
        var _this = this;
        var id = this.obligacionExtinguidaForm.get('id').value;
        this._evaluacionFinanciera.putObligacionExtinguida(this.servicioEsp, id, this.obligacionExtinguidaForm.value)
            .subscribe(function (res) {
            _this.obligacionExtinguida = _this.obligacionExtinguida
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalObligacionExtinguida();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    EvaluacionFinancieraComponent.prototype.deleteObligacionExtinguida = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._evaluacionFinanciera.deleteObligacionExtinguida(this.servicioEsp, id)
                .subscribe(function () {
                _this.obligacionExtinguida = _this.obligacionExtinguida.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    EvaluacionFinancieraComponent.prototype.closeModalObligacionExtinguida = function () {
        this.obligacionExtinguidaForm.reset();
        this.oeModal.showModal = false;
        this.oeModal.isUpdate = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pdfContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EvaluacionFinancieraComponent.prototype, "pdfContainer", void 0);
    EvaluacionFinancieraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluacion-financiera',
            template: __webpack_require__(/*! ./evaluacion-financiera.component.html */ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.html"),
            styles: [__webpack_require__(/*! ./evaluacion-financiera.component.css */ "./src/app/pages/actividades/evaluacion-financiera/evaluacion-financiera.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_esp_actividades_evaluacion_financiera_service__WEBPACK_IMPORTED_MODULE_6__["EvaluacionFinancieraService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]])
    ], EvaluacionFinancieraComponent);
    return EvaluacionFinancieraComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/actividades/historial-judicial/historial-judicial.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL2hpc3RvcmlhbC1qdWRpY2lhbC9oaXN0b3JpYWwtanVkaWNpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/actividades/historial-judicial/historial-judicial.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- alerta -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Alerta\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">El evaluado no cumple con las condiciones para continuar con el estudio</span>\r\n              <span class=\"text-danger d-block\">Fecha de alerta: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!-- formularo -->\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n  <form [formGroup]=\"form\" class=\"mx-auto animated fade-in\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Historial judicial</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Tiene algun proceso:</b>\r\n            <hr>\r\n            <!-- proceso juridico -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Juridico</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoJuridico\" [value]=\"true\" formControlName=\"procesoJuridico\">\r\n                  <label class=\"form-check-label\" for=\"procesoJuridico\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoJuridico!\" [value]=\"false\" formControlName=\"procesoJuridico\">\r\n                  <label class=\"form-check-label\" for=\"procesoJuridico!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- proceso procuraduria -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Procuraduría</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoProcuraduria\" [value]=\"true\" formControlName=\"procesoProcuraduria\">\r\n                  <label class=\"form-check-label\" for=\"procesoProcuraduria\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoProcuraduria!\" [value]=\"false\" formControlName=\"procesoProcuraduria\">\r\n                  <label class=\"form-check-label\" for=\"procesoProcuraduria!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- proceso contraloria -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Contraloría</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoContraloria\" [value]=\"true\" formControlName=\"procesoContraloria\">\r\n                  <label class=\"form-check-label\" for=\"procesoContraloria\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoContraloria!\" [value]=\"false\" formControlName=\"procesoContraloria\">\r\n                  <label class=\"form-check-label\" for=\"procesoContraloria!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- proceso fiscalia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Fiscalía</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoFiscalia\" [value]=\"true\" formControlName=\"procesoFiscalia\">\r\n                  <label class=\"form-check-label\" for=\"procesoFiscalia\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoFiscalia!\" [value]=\"false\" formControlName=\"procesoFiscalia\">\r\n                  <label class=\"form-check-label\" for=\"procesoFiscalia!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- proceso policia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Policia</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoPolicia\" [value]=\"true\" formControlName=\"procesoPolicia\">\r\n                  <label class=\"form-check-label\" for=\"procesoPolicia\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoPolicia!\" [value]=\"false\" formControlName=\"procesoPolicia\">\r\n                  <label class=\"form-check-label\" for=\"procesoPolicia!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- proceso trancito -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Transito</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoTransito\" [value]=\"true\" formControlName=\"procesoTransito\">\r\n                  <label class=\"form-check-label\" for=\"procesoTransito\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"procesoTransito!\" [value]=\"false\" formControlName=\"procesoTransito\">\r\n                  <label class=\"form-check-label\" for=\"procesoTransito!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- verificacion -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Verificación</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"verificacion\" [value]=\"true\" formControlName=\"verificacion\">\r\n                  <label class=\"form-check-label\" for=\"verificacion\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"verificacion!\" [value]=\"false\" formControlName=\"verificacion\">\r\n                  <label class=\"form-check-label\" for=\"verificacion!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- proceso DIJIN - SIJIN - INTERPOL-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Orden de captura internacional</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"ordenCapturaInternacional\" [value]=\"true\" formControlName=\"ordenCapturaInternacional\">\r\n                  <label class=\"form-check-label\" for=\"ordenCapturaInternacional\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"ordenCapturaInternacional!\" [value]=\"false\" formControlName=\"ordenCapturaInternacional\">\r\n                  <label class=\"form-check-label\" for=\"ordenCapturaInternacional!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body\">\r\n            <b class=\"card-title\">Procuraduría General de la Nación</b>\r\n            <hr>\r\n            <!-- Sanciones penales  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"sancionesPenales\">Sanciones Penales\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"sancionesPenales\"\r\n                          name=\"sancionesPenales\" formControlName=\"sancionesPenales\"\r\n                          rows=\"3\" placeholder=\"Ingresé las sanciones penales\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls.sancionesPenales.invalid && form.controls.sancionesPenales.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Sanciones delito  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"delitoProcuraduria\">Delito</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"delitoProcuraduria\" name=\"delitoProcuraduria\" formControlName=\"delitoProcuraduria\" rows=\"3\" placeholder=\"Ingresé el delito\"></textarea>\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.delitoProcuraduria.invalid && form.controls.delitoProcuraduria.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- procuraduria inhabilidades  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"inhabilidadesProcuraduria\">Inhabilidades</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"inhabilidadesProcuraduria\" name=\"inhabilidadesProcuraduria\" formControlName=\"inhabilidadesProcuraduria\" rows=\"3\" placeholder=\"Ingresé las inhabilidades\"></textarea>\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.inhabilidadesProcuraduria.invalid && form.controls.inhabilidadesProcuraduria.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- procuradurida fecha  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"fechaInhabilidad\">Fecha</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"date\" class=\"form-control\" id=\"fechaInhabilidad\" name=\"fechaInhabilidad\" formControlName=\"fechaInhabilidad\">\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.fechaInhabilidad.invalid && form.controls.fechaInhabilidad.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body\">\r\n            <b class=\"card-title\">Contraloría General de la Nación</b>\r\n            <hr>\r\n            <!-- antecedentes fiscales -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Fiscalia</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"antecedentesFiscales\" [value]=\"true\" formControlName=\"antecedentesFiscales\">\r\n                  <label class=\"form-check-label\" for=\"antecedentesFiscales\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"antecedentesFiscales!\" [value]=\"false\" formControlName=\"antecedentesFiscales\">\r\n                  <label class=\"form-check-label\" for=\"antecedentesFiscales!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- procuradurida fecha  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"fechaAntecedente\">Fecha</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"date\" class=\"form-control\" id=\"fechaAntecedente\" name=\"fechaAntecedente\" formControlName=\"fechaAntecedente\">\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.fechaAntecedente.invalid && form.controls.fechaAntecedente.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body\">\r\n            <b class=\"card-title\">C.S.J. Rama Judicial</b>\r\n            <hr>\r\n            <!-- clase de proceso  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"claseProceso\">Clase de proceso</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"claseProceso\" name=\"claseProceso\" formControlName=\"claseProceso\" rows=\"3\" placeholder=\"Ingresé la clase de proceso\"></textarea>\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.claseProceso.invalid && form.controls.claseProceso.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Datos de la sentencia\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"datosSentencia\">Datos de la sentencia</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"datosSentencia\" name=\"datosSentencia\" formControlName=\"datosSentencia\" rows=\"3\" placeholder=\"Ingresé los datos de la sentencia\"></textarea>\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.datosSentencia.invalid && form.controls.datosSentencia.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- delito\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"delitoJudicial\">Delito</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"delitoJudicial\" name=\"delitoJudicial\" formControlName=\"delitoJudicial\" rows=\"3\" placeholder=\"Ingresé el delito\"></textarea>\r\n                <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls.delitoJudicial.invalid && form.controls.delitoJudicial.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- situacion juridica\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"situacionJuridica\">Situación Jurídica</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"situacionJuridica\" name=\"situacionJuridica\" formControlName=\"situacionJuridica\" rows=\"3\" placeholder=\"Ingresé la situacion juridica\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body\">\r\n            <!-- F.G.N. - NS\tTODO agregar validacion\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"fgnNs\">F.G.N. - NS</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"fgnNs\" name=\"fgnNs\" formControlName=\"fgnNs\" rows=\"3\" placeholder=\"Ingresé la información\"></textarea>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Lista Clinton OFAC\t-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Lista Clinton OFAC\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"listaOfac\" [value]=\"true\" formControlName=\"listaOfac\">\r\n                  <label class=\"form-check-label\" for=\"listaOfac\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"listaOfac!\" [value]=\"false\" formControlName=\"listaOfac\">\r\n                  <label class=\"form-check-label\" for=\"listaOfac!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- LISTA ONU // Terroristas\t\t-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">LISTA ONU - Terroristas\t\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"listaOnu\" [value]=\"true\" formControlName=\"listaOnu\">\r\n                  <label class=\"form-check-label\" for=\"listaOnu\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"listaOnu!\" [value]=\"false\" formControlName=\"listaOnu\">\r\n                  <label class=\"form-check-label\" for=\"listaOnu!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Vínculos subversion\t\t-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">LISTA ONU - Terroristas\t\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"vinculosSubversion\" [value]=\"true\" formControlName=\"vinculosSubversion\">\r\n                  <label class=\"form-check-label\" for=\"vinculosSubversion\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"vinculosSubversion!\" [value]=\"false\" formControlName=\"vinculosSubversion\">\r\n                  <label class=\"form-check-label\" for=\"vinculosSubversion!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Antecedentes Policia\t\t\t-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Antecedentes Policia\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"antecedentesPolicia\" [value]=\"true\" formControlName=\"antecedentesPolicia\">\r\n                  <label class=\"form-check-label\" for=\"antecedentesPolicia\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"antecedentesPolicia!\" [value]=\"false\" formControlName=\"antecedentesPolicia\">\r\n                  <label class=\"form-check-label\" for=\"antecedentesPolicia!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Vínculos Paramilitarismo -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\">Vínculos Paramilitarismo</label>\r\n              <div class=\"col-sm-9\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"paramilitarismo\" [value]=\"true\" formControlName=\"paramilitarismo\">\r\n                  <label class=\"form-check-label\" for=\"paramilitarismo\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"paramilitarismo!\" [value]=\"false\" formControlName=\"paramilitarismo\">\r\n                  <label class=\"form-check-label\" for=\"paramilitarismo!\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- SIMIT - Movilidad Y RUNT\t\ttodo agregar validacion\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"movilidad\">SIMIT - Movilidad Y RUNT\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"movilidad\" name=\"movilidad\" formControlName=\"movilidad\" rows=\"3\" placeholder=\"Ingresé el movilidad\"></textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls.movilidad.invalid && form.controls.movilidad.dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- Total adeudado todo agregar validacion -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"totalAdeudado\">Total adeudado</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\" name=\"totalAdeudado\" id=\"totalAdeudado\" formControlName=\"totalAdeudado\" placeholder=\"Ingrese el total adeudado\">\r\n              </div>\r\n            </div>\r\n            <!-- Observaciones\t\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"observaciones\">Observaciones</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" id=\"observaciones\" name=\"observaciones\" formControlName=\"observaciones\" rows=\"3\" placeholder=\"Ingresé las observaciones\"></textarea>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-6 mx-auto\">\r\n                <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                        class=\"btn btn-danger\"\r\n                        [disabled]=\"form.invalid\"\r\n                        (click)=\"onSubmit()\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                  Guardar\r\n                </button>\r\n                <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                        class=\"btn btn-warning\"\r\n                        [disabled]=\"form.invalid\"\r\n                        (click)=\"onUpdate()\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  Actualizar\r\n                </button>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-danger mr-2 ml-2\"\r\n            *ngIf=\"permissions.FRCE && ( actividad.estado == 'proceso' || actividad.estado == 'aceptado')\"\r\n            (click)=\"reportarCliente()\">\r\n      <i class=\"fa fa-message\"></i>\r\n     Alerta\r\n    </button>\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"form.invalid\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/actividades/historial-judicial/historial-judicial.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HistorialJudicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialJudicialComponent", function() { return HistorialJudicialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_esp_actividades_historial_judicial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/esp/actividades/historial-judicial.service */ "./src/app/services/esp/actividades/historial-judicial.service.ts");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistorialJudicialComponent = /** @class */ (function (_super) {
    __extends(HistorialJudicialComponent, _super);
    function HistorialJudicialComponent(_actividades, _ngxPermissions, _histJudicial) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._ngxPermissions = _ngxPermissions;
        _this._histJudicial = _histJudicial;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            procesoJuridico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            procesoProcuraduria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            procesoContraloria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            procesoFiscalia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            procesoPolicia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            procesoTransito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            verificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ordenCapturaInternacional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sancionesPenales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            delitoProcuraduria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            inhabilidadesProcuraduria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaInhabilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            antecedentesFiscales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaAntecedente: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            claseProceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            datosSentencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            delitoJudicial: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            situacionJuridica: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fgnNs: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            listaOfac: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            listaOnu: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            vinculosSubversion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            antecedentesPolicia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            paramilitarismo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            movilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            totalAdeudado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        /**
         * codigo de la actividad
         */
        _this.codigo = 'HJ';
        return _this;
    }
    HistorialJudicialComponent.prototype.ngOnInit = function () {
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        // console.log(this.actividad);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getValue();
        }
    };
    HistorialJudicialComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        this._histJudicial.postHistorialJudicial(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            _this.setEstado('proceso');
            alert('Se han guardado los datos exitosamente');
        }, this._actividades.handleError);
    };
    /**
     * actuializar informacion
     */
    HistorialJudicialComponent.prototype.onUpdate = function () {
        var _this = this;
        var histJudicial = this.form.get('id').value;
        var data = this.form.value;
        // se actualiza la informacion
        this._histJudicial.putHistorialJudicial(this.servicioEsp, histJudicial, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.setEstado('proceso');
            }
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            alert('Se han actualizado los datos exitosamente');
        }, this._actividades.handleError);
    };
    /**
     * solicitud de datos al servidor si el estado
     * de la actividad es asignado
     */
    HistorialJudicialComponent.prototype.getValue = function () {
        var _this = this;
        this._histJudicial.getHistorialJudicial(this.servicioEsp)
            .subscribe(function (response) {
            _this.form.setValue(_this._actividades.transformResponse(response.servicios));
        }, this._actividades.handleError);
    };
    HistorialJudicialComponent.prototype.notificarAnalista = function () {
        _super.prototype.notificarAnalista.call(this);
    };
    HistorialJudicialComponent.prototype.reportarCliente = function () {
        var confirm = window.confirm('Esta seguro de alertar al evaluado?');
        if (!confirm) {
            return;
        }
        this.setEstado('alerta', function () {
            alert('Alerta enviada al analista EspInterface');
        });
    };
    HistorialJudicialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historial-judicial',
            template: __webpack_require__(/*! ./historial-judicial.component.html */ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.html"),
            styles: [__webpack_require__(/*! ./historial-judicial.component.css */ "./src/app/pages/actividades/historial-judicial/historial-judicial.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsService"],
            _services_esp_actividades_historial_judicial_service__WEBPACK_IMPORTED_MODULE_4__["HistorialJudicialService"]])
    ], HistorialJudicialComponent);
    return HistorialJudicialComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3BydWViYS1wc2ljb3RlY25pY2EvcHJ1ZWJhLXBzaWNvdGVjbmljYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-asignar-funcionario\r\n  [funcionario]=\"7\"\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Esperado por aceptacion\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Actividad asignada a {{ actividad.actividadAsignada.usuario.nombre }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Esperado por aceptacion\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion.date | date:'short' }}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div *ngIf=\"(actividad.estado == 'aceptado' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'notificado' || actividad.estado == 'aceptado'))\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Prueba psicotécnica</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"adjunto\">Adjunto</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" name=\"adjunto\" id=\"adjunto\" formControlName=\"adjunto\">\r\n                  <label class=\"custom-file-label\" for=\"adjunto\">Seleccione un archivo</label>\r\n                </div>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tiempoPermanencia'].invalid &&\r\n                   form.controls['tiempoPermanencia'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"conclusion\">Tiempo de permanencia</label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"conclusion\" id=\"conclusion\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          formControlName=\"conclusion\"\r\n                          placeholder=\"Ingrese la conclusión\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['conclusion'].invalid &&\r\n                   form.controls['conclusion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!---->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PruebaPsicotecnicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPsicotecnicaComponent", function() { return PruebaPsicotecnicaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PruebaPsicotecnicaComponent = /** @class */ (function (_super) {
    __extends(PruebaPsicotecnicaComponent, _super);
    function PruebaPsicotecnicaComponent(actividadesService, dataService, ngxPermissionsService) {
        var _this = _super.call(this, actividadesService) || this;
        _this.actividadesService = actividadesService;
        _this.dataService = dataService;
        _this.ngxPermissionsService = ngxPermissionsService;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            adjunto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            conclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        return _this;
    }
    PruebaPsicotecnicaComponent.prototype.ngOnInit = function () {
        this.codigo = 'DG';
        this.permissions = this.ngxPermissionsService.getPermissions();
        this.servicioEsp = this.actividadesService.getServicioEsp();
        this.getValue();
        if (this.actividad.estado === 'proceso' || this.actividad.estado === 'notificado' || this.actividad.estado === 'completado') {
            // this.getValue();
            console.log('estado: proceso');
        }
    };
    PruebaPsicotecnicaComponent.prototype.getValue = function () {
        var _this = this;
        var servicioEspId = this.servicioEsp;
        // Solicitud get al servidor que retorna el historial judicial del servicio esp
        this.dataService.getVerificacionLaboral(servicioEspId)
            .subscribe(function (value) {
            console.log(value);
            var data = _this.transformResponse(value.servicios);
            _this.form.setValue(data);
        }, function () { return alert('Ocurrio un error inesperado al tratar de recuperar los datos'); });
    };
    PruebaPsicotecnicaComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        var servicioEspId = this.servicioEsp;
        this.dataService.setVerificacionLaboral(servicioEspId, data)
            .subscribe(function (value) {
            console.log(value);
            _this.setEstado('proceso');
            // this.currentActivityId = value.servicios.id;
            var dat = _this.transformResponse(value.servicios);
            _this.form.setValue(dat);
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    PruebaPsicotecnicaComponent.prototype.onUpdate = function () {
        var _this = this;
        var data = this.form.value;
        this.dataService.updateVerificacionLaboral(this.servicioEsp, data)
            .subscribe(function (value) {
            console.log(value);
            if (_this.permissions.FRCE) {
                _this.setEstado('proceso');
            }
            alert('Se han actualizado los datos exitosamente');
            // this.form.setValue(this.transformResponse(value.servicios));
        }, function (err) { return alert(err.error.message); });
    };
    PruebaPsicotecnicaComponent.prototype.transformResponse = function (response) {
        var data = [];
        response.forEach(function (value, index) {
            data.push(value);
            delete data[index].timestamps;
            delete data[index].estado;
            delete data[index].links;
        });
        return data;
    };
    PruebaPsicotecnicaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prueba-psicotecnica',
            template: __webpack_require__(/*! ./prueba-psicotecnica.component.html */ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.html"),
            styles: [__webpack_require__(/*! ./prueba-psicotecnica.component.css */ "./src/app/pages/actividades/prueba-psicotecnica/prueba-psicotecnica.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]])
    ], PruebaPsicotecnicaComponent);
    return PruebaPsicotecnicaComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3ZlcmlmaWNhY2lvbi1hY2FkZW1pY2EvdmVyaWZpY2FjaW9uLWFjYWRlbWljYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- alerta -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Alerta\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">El evaluado no cumple con las condiciones para continuar con el estudio</span>\r\n              <span class=\"text-danger d-block\">Fecha de alerta: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!-- formularo -->\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado' || actividad.estado == 'alerta'))\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\" #pdfContainer>\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Verificacion Academica</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n\r\n            <!-- table component -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b class=\"card-title\">Verificación Académica</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"verifiAcademicaModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\"><hr></div>\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>nivel</th>\r\n                    <th>institución</th>\r\n                    <th>titulo</th>\r\n                    <th>año</th>\r\n                    <th>ciudad</th>\r\n                    <th>confirmación</th>\r\n                    <th>observaciones</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let value of verificacionesAcademicas\">\r\n                      <td>{{ value.nivel }}</td>\r\n                      <td>{{ value.institucion }}</td>\r\n                      <td>{{ value.titulo }}</td>\r\n                      <td>{{ value.anno }}</td>\r\n                      <td>{{ value.ciudad }}</td>\r\n                      <td>{{ value.confirmacion === true ? 'Si' : 'No' }}</td>\r\n                      <td>{{ value.observacion }}</td>\r\n                      <td class=\"acciones\">\r\n                        <div class=\"text-center\">\r\n                          <button class=\"btn btn-primary mr-2\" (click)=\"updateVerifAcademica(value.id)\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                          </button>\r\n\r\n                          <button class=\"btn btn-danger ml-2\" (click)=\"deleteVerifAcademica(value.id)\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </td>\r\n                      <!--<td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\"\r\n                                 name=\"nivel\" formControlName=\"nivel\"\r\n                                 placeholder=\"Nivel\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\"\r\n                                 name=\"institucion\" formControlName=\"institucion\"\r\n                                 placeholder=\"Institucion\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\"\r\n                                 name=\"titulo\" formControlName=\"titulo\"\r\n                                 placeholder=\"Titulo\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"number\" class=\"form-control\"\r\n                                 name=\"año\" formControlName=\"anno\"\r\n                                 placeholder=\"Año\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\"\r\n                                 name=\"ciudad\" formControlName=\"ciudad\"\r\n                                 placeholder=\"Ciudad\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\"\r\n                                 name=\"confirmacion\" formControlName=\"confirmacion\"\r\n                                 placeholder=\"Confirmacion\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" class=\"form-control\"\r\n                                 name=\"observacion\" formControlName=\"observacion\"\r\n                                 placeholder=\"Observacion\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"form-group text-center\">\r\n                          <button class=\"btn btn-danger\" (click)=\"deleteVericacionAcademica(i)\">\r\n                            <i class=\"fa fa-trash\"></i>\r\n                          </button>\r\n                        </div>\r\n                      </td>-->\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <!--<div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"editarServicioEsp()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>-->\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-danger mr-2 ml-2\"\r\n            *ngIf=\"permissions.FRCE && ( actividad.estado == 'proceso' || actividad.estado == 'aceptado')\"\r\n            (click)=\"reportarCliente()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Alerta\r\n    </button>\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"verificacionesAcademicas.length === 0\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Modal bien inmueble -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': verifiAcademicaModal.showModal, 'd-none': !verifiAcademicaModal.showModal}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': verifiAcademicaModal.showModal, 'd-none': !verifiAcademicaModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalVerifAcademica()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"form\">\r\n\r\n          <!-- nivel -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"nivel\">Nivel</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"nivel\"\r\n                     name=\"nivel\"\r\n                     formControlName=\"nivel\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(form.get('nivel').invalid &&\r\n                     form.get('nivel').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- institucion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"institucion\">Institucion</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"institucion\"\r\n                     name=\"institucion\"\r\n                     formControlName=\"institucion\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(form.get('institucion').invalid &&\r\n                     form.get('institucion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- titulo -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"titulo\">Titulo</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"titulo\"\r\n                     name=\"titulo\"\r\n                     formControlName=\"titulo\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(form.get('titulo').invalid &&\r\n                     form.get('titulo').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <!-- anno -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"anno\">Año</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"anno\"\r\n                     name=\"anno\"\r\n                     formControlName=\"anno\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(form.get('anno').invalid &&\r\n                     form.get('anno').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ciudad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ciudad\">Ciudad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ciudad\"\r\n                     name=\"ciudad\"\r\n                     formControlName=\"ciudad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(form.get('ciudad').invalid &&\r\n                     form.get('ciudad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <!-- confirmacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"confirmacion\">confirmacion</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"confirmacion\"\r\n                       id=\"confirmacion\" [value]=\"true\">\r\n                <label class=\"form-check-label\" for=\"confirmacion\">Si</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"confirmacion\"\r\n                       id=\"confirmacion!\" [value]=\"false\">\r\n                <label class=\"form-check-label\" for=\"confirmacion!\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- observacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"observacion\">Observacion</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"observacion\"\r\n                     name=\"observacion\"\r\n                     formControlName=\"observacion\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(form.get('observacion').invalid &&\r\n                     form.get('observacion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- hipoteca -->\r\n          <!--<div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-hipoteca\">hipoteca</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"hipoteca\"\r\n                       id=\"bi-hipoteca\" [value]=\"true\">\r\n                <label class=\"form-check-label\" for=\"bi-hipoteca\">Si</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"hipoteca\"\r\n                       id=\"bi-hipoteca!\" [value]=\"false\">\r\n                <label class=\"form-check-label\" for=\"bi-hipoteca!\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalVerifAcademica()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"refreshVerifAcademica()\" *ngIf=\"verifiAcademicaModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"addVerifAcademica()\" *ngIf=\"!verifiAcademicaModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: VerificacionAcademicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionAcademicaComponent", function() { return VerificacionAcademicaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_esp_actividades_verificacion_academica_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/esp/actividades/verificacion-academica.service */ "./src/app/services/esp/actividades/verificacion-academica.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerificacionAcademicaComponent = /** @class */ (function (_super) {
    __extends(VerificacionAcademicaComponent, _super);
    function VerificacionAcademicaComponent(_actividades, dataService, _verificacionAcademica, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this.dataService = dataService;
        _this._verificacionAcademica = _verificacionAcademica;
        _this._ngxPermissions = _ngxPermissions;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            nivel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            institucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            titulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        _this.verifiAcademicaModal = {
            showModal: false,
            isUpdate: false
        };
        _this.verificacionesAcademicas = [];
        _this.codigo = 'VA';
        return _this;
    }
    VerificacionAcademicaComponent.prototype.ngOnInit = function () {
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getVerifAcademicas();
        }
    };
    VerificacionAcademicaComponent.prototype.onAceptarActividad = function () {
        this.setEstado('proceso');
    };
    VerificacionAcademicaComponent.prototype.getVerifAcademicas = function () {
        var _this = this;
        this._verificacionAcademica.get(this.servicioEsp)
            .subscribe(function (value) {
            _this.verificacionesAcademicas = value.servicios;
        }
        // () => alert('Ocurrio un error inesperado al tratar de recuperar los datos')
        );
    };
    // referencias form
    VerificacionAcademicaComponent.prototype.addVerifAcademica = function () {
        var _this = this;
        this._verificacionAcademica.post(this.servicioEsp, this.form.value)
            .subscribe(function (res) {
            _this.verificacionesAcademicas.push(res.servicios);
            _this.closeModalVerifAcademica();
        });
    };
    VerificacionAcademicaComponent.prototype.updateVerifAcademica = function (id) {
        var item = null;
        this.verificacionesAcademicas.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.verifiAcademicaModal.showModal = true;
        this.verifiAcademicaModal.isUpdate = true;
        this.form.setValue(item);
    };
    VerificacionAcademicaComponent.prototype.refreshVerifAcademica = function () {
        var _this = this;
        var id = this.form.get('id').value;
        this._verificacionAcademica.put(this.servicioEsp, id, this.form.value)
            .subscribe(function (res) {
            _this.verificacionesAcademicas = _this.verificacionesAcademicas
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalVerifAcademica();
            alert('Datos actualizados correctamente');
        }, function (err) { return _this._actividades.handleError(err); });
    };
    VerificacionAcademicaComponent.prototype.deleteVerifAcademica = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._verificacionAcademica.delete(this.servicioEsp, id)
                .subscribe(function () {
                _this.verificacionesAcademicas = _this.verificacionesAcademicas.filter(function (value) { return value.id !== id; });
            }, function (err) { return _this._actividades.handleError(err); });
        }
    };
    VerificacionAcademicaComponent.prototype.closeModalVerifAcademica = function () {
        this.form.reset();
        this.verifiAcademicaModal.showModal = false;
        this.verifiAcademicaModal.isUpdate = false;
    };
    VerificacionAcademicaComponent.prototype.reportarCliente = function () {
        var confirm = window.confirm('Esta seguro de alertar al evaluado?');
        if (!confirm) {
            return;
        }
        this.setEstado('alerta', function () {
            alert('Alerta enviada al analista EspInterface');
        });
    };
    VerificacionAcademicaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verificacion-academica',
            template: __webpack_require__(/*! ./verificacion-academica.component.html */ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.html"),
            styles: [__webpack_require__(/*! ./verificacion-academica.component.css */ "./src/app/pages/actividades/verificacion-academica/verificacion-academica.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_esp_actividades_verificacion_academica_service__WEBPACK_IMPORTED_MODULE_6__["VerificacionAcademicaService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"]])
    ], VerificacionAcademicaComponent);
    return VerificacionAcademicaComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_4__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3ZlcmlmaWNhY2lvbi1sYWJvcmFsL3ZlcmlmaWNhY2lvbi1sYWJvcmFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- seleccionar al funcionario -->\r\n<app-asignar-funcionario\r\n  *ngIf=\"actividad.estado == 'cargado'\"\r\n  (event)=\"asignarFuncionario($event)\">\r\n</app-asignar-funcionario>\r\n\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- alerta -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Alerta\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">El evaluado no cumple con las condiciones para continuar con el estudio</span>\r\n              <span class=\"text-danger d-block\">Fecha de alerta: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<!-- formularo -->\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n\r\n<form [formGroup]=\"form\" class=\"fade-in\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Verificacion Laboral</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n\r\n\r\n            <!-- table component -->\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"verifLaboralModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\"><hr></div>\r\n              <table class=\"table table-bordered\">\r\n                <thead class=\"text-capitalize\">\r\n                  <th>empresa</th>\r\n                  <th>cargo</th>\r\n                  <th>telefono</th>\r\n                  <th>periodo</th>\r\n                  <th>jefeInmediato</th>\r\n                  <th>cargoJefe</th>\r\n                  <th>ciudad</th>\r\n                  <th>motivoRetiro</th>\r\n                  <th>Confirmacion</th>\r\n                  <th>observaciones</th>\r\n                  <th class=\"acciones\">acciones</th>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let value of verificacionLaboral\">\r\n                  <td> {{ value.empresa }} </td>\r\n                  <td> {{ value.cargo }} </td>\r\n                  <td> {{ value.telefono }} </td>\r\n                  <td> {{ value.periodo }} </td>\r\n                  <td> {{ value.jefeInmediato }} </td>\r\n                  <td> {{ value.cargoJefe }} </td>\r\n                  <td> {{ value.ciudad }} </td>\r\n                  <td> {{ value.motivoRetiro }} </td>\r\n                  <td> {{ value.confirmacion === true ? 'Si' : 'No' }} </td>\r\n                  <td> {{ value.observaciones }} </td>\r\n                  <td class=\"acciones\">\r\n                    <div class=\"text-center\">\r\n                      <button class=\"btn btn-primary mr-2 ml-2\" (click)=\"updateVerifLaboral(value.id)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </button>\r\n\r\n                      <button class=\"btn btn-danger ml-2 mr-2\" (click)=\"deleteVerifLaboral(value.id)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n\r\n                    <!--<div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"empresa\" formControlName=\"empresa\"\r\n                             placeholder=\"empresa\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"cargo\" formControlName=\"cargo\"\r\n                             placeholder=\"cargo\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"number\" class=\"form-control\"\r\n                             name=\"telefono\" formControlName=\"telefono\"\r\n                             placeholder=\"telefono\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"periodo\" formControlName=\"periodo\"\r\n                             placeholder=\"periodo\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"jefeInmediato\" formControlName=\"jefeInmediato\"\r\n                             placeholder=\"jefeInmediato\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"cargoJefe\" formControlName=\"cargoJefe\"\r\n                             placeholder=\"cargoJefe\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"ciudad\" formControlName=\"ciudad\"\r\n                             placeholder=\"Ciudad\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"motivoRetiro\" formControlName=\"motivoRetiro\"\r\n                             placeholder=\"motivoRetiro\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-check form-check-inline\">\r\n                      <input class=\"form-check-input\"\r\n                             type=\"radio\"\r\n                             formControlName=\"confirmacion\"\r\n                             [id]=\"'inlineRadio1' + i\" [value]=\"true\">\r\n                      <label class=\"form-check-label\" [for]=\"'inlineRadio1' + i\">Si</label>\r\n                    </div>\r\n                    <div class=\"form-check form-check-inline\">\r\n                      <input class=\"form-check-input\"\r\n                             type=\"radio\"\r\n                             formControlName=\"confirmacion\"\r\n                             [id]=\"'inlineRadio2' + i\" [value]=\"false\">\r\n                      <label class=\"form-check-label\" [for]=\"'inlineRadio2' + i\">No</label>\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\"\r\n                             name=\"observaciones\" formControlName=\"observaciones\"\r\n                             placeholder=\"Observacion\">\r\n                    </div>\r\n                  </td>\r\n                  <td>\r\n                    <div class=\"form-group text-center\">\r\n                      <button class=\"btn btn-danger\" (click)=\"deleteVericacionLaboral(i)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </td>-->\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && actividad.estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && actividad.estado == 'proceso') || (permissions.AESP || permissions.ADG && actividad.estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"editarServicioEsp()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>-->\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"col-md-12 m-3 text-right\">\r\n    <button class=\"btn btn-danger mr-2 ml-2\"\r\n            *ngIf=\"permissions.FRCE && ( actividad.estado == 'proceso' || actividad.estado == 'aceptado')\"\r\n            (click)=\"reportarCliente()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Alerta\r\n    </button>\r\n    <button class=\"btn btn-success\"\r\n            *ngIf=\"permissions.FRCE && actividad.estado == 'proceso'\"\r\n            [disabled]=\"verificacionLaboral.length === 0\"\r\n            (click)=\"notificarAnalista()\">\r\n      <i class=\"fa fa-message\"></i>\r\n      Notificar a analista EspInterface\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- Modal form -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': verifLaboralModal.showModal, 'd-none': !verifLaboralModal.showModal}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': verifLaboralModal.showModal, 'd-none': !verifLaboralModal.showModal}\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalVerifLaboral()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"form\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <!-- empresa -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"empresa\">Empresa</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"empresa\"\r\n                         name=\"empresa\"\r\n                         formControlName=\"empresa\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('empresa').invalid &&\r\n                     form.get('empresa').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <!-- cargo -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"cargo\">Cargo</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"cargo\"\r\n                         name=\"cargo\"\r\n                         formControlName=\"cargo\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('cargo').invalid &&\r\n                     form.get('cargo').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- telefono -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"telefono\">Telefono</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"number\" class=\"form-control\"\r\n                         id=\"telefono\"\r\n                         name=\"telefono\"\r\n                         formControlName=\"telefono\"\r\n                         placeholder=\"Ingrese un telefono valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('telefono').invalid &&\r\n                     form.get('telefono').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <!-- periodo -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"periodo\">Periodo</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"periodo\"\r\n                         name=\"periodo\"\r\n                         formControlName=\"periodo\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('periodo').invalid &&\r\n                     form.get('periodo').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <!-- jefeInmediato -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"jefeInmediato\">Jefe Inmediato</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"jefeInmediato\"\r\n                         name=\"jefeInmediato\"\r\n                         formControlName=\"jefeInmediato\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('jefeInmediato').invalid &&\r\n                     form.get('jefeInmediato').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <!-- cargoJefe -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"cargoJefe\">Cargo del Jefe</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"cargoJefe\"\r\n                         name=\"cargoJefe\"\r\n                         formControlName=\"cargoJefe\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('cargoJefe').invalid &&\r\n                     form.get('cargoJefe').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- ciudad -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"ciudad\">Ciudad</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"ciudad\"\r\n                         name=\"ciudad\"\r\n                         formControlName=\"ciudad\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('ciudad').invalid &&\r\n                     form.get('ciudad').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <!-- motivoRetiro -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"motivoRetiro\">Motivo Retiro</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"motivoRetiro\"\r\n                         name=\"motivoRetiro\"\r\n                         formControlName=\"motivoRetiro\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('motivoRetiro').invalid &&\r\n                     form.get('motivoRetiro').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- confirmacion -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"confirmacion\">confirmacion</label>\r\n                <div class=\"col-sm-9\">\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <input class=\"form-check-input\"\r\n                           type=\"radio\"\r\n                           formControlName=\"confirmacion\"\r\n                           id=\"confirmacion\" [value]=\"true\">\r\n                    <label class=\"form-check-label\" for=\"confirmacion\">Si</label>\r\n                  </div>\r\n                  <div class=\"form-check form-check-inline\">\r\n                    <input class=\"form-check-input\"\r\n                           type=\"radio\"\r\n                           formControlName=\"confirmacion\"\r\n                           id=\"confirmacion!\" [value]=\"false\">\r\n                    <label class=\"form-check-label\" for=\"confirmacion!\">No</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <!-- observacion -->\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-3 col-form-label\" for=\"observaciones\">Observacion</label>\r\n                <div class=\"col-sm-9\">\r\n                  <input type=\"text\" class=\"form-control\"\r\n                         id=\"observaciones\"\r\n                         name=\"observaciones\"\r\n                         formControlName=\"observaciones\"\r\n                         placeholder=\"Ingrese un dato valido\"\r\n                         required>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(form.get('observaciones').invalid &&\r\n                     form.get('observaciones').dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- hipoteca -->\r\n          <!--<div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-hipoteca\">hipoteca</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"hipoteca\"\r\n                       id=\"bi-hipoteca\" [value]=\"true\">\r\n                <label class=\"form-check-label\" for=\"bi-hipoteca\">Si</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"hipoteca\"\r\n                       id=\"bi-hipoteca!\" [value]=\"false\">\r\n                <label class=\"form-check-label\" for=\"bi-hipoteca!\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalVerifLaboral()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"form.invalid\" (click)=\"refreshVerifLaboral()\" *ngIf=\"verifLaboralModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"form.invalid\" (click)=\"addVerifLaboral()\" *ngIf=\"!verifLaboralModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VerificacionLaboralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionLaboralComponent", function() { return VerificacionLaboralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_esp_actividades_verificacion_laboral_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/esp/actividades/verificacion-laboral.service */ "./src/app/services/esp/actividades/verificacion-laboral.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerificacionLaboralComponent = /** @class */ (function (_super) {
    __extends(VerificacionLaboralComponent, _super);
    function VerificacionLaboralComponent(_actividades, _verificacionLaboral, dataService, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._verificacionLaboral = _verificacionLaboral;
        _this.dataService = dataService;
        _this._ngxPermissions = _ngxPermissions;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            empresa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            periodo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            jefeInmediato: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cargoJefe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            motivoRetiro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        _this.verifLaboralModal = {
            showModal: false,
            isUpdate: false
        };
        _this.verificacionLaboral = [];
        return _this;
    }
    VerificacionLaboralComponent.prototype.ngOnInit = function () {
        this.codigo = 'VL';
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getVerifLaboral();
        }
    };
    VerificacionLaboralComponent.prototype.onAceptarActividad = function () {
        this.setEstado('proceso');
    };
    VerificacionLaboralComponent.prototype.getVerifLaboral = function () {
        var _this = this;
        this._verificacionLaboral.get(this.servicioEsp)
            .subscribe(function (value) {
            _this.verificacionLaboral = value.servicios;
        }
        // () => alert('Ocurrio un error inesperado al tratar de recuperar los datos')
        );
    };
    // referencias form
    VerificacionLaboralComponent.prototype.addVerifLaboral = function () {
        var _this = this;
        this._verificacionLaboral.post(this.servicioEsp, this.form.value)
            .subscribe(function (res) {
            _this.verificacionLaboral.push(res.servicios);
            _this.closeModalVerifLaboral();
        });
    };
    VerificacionLaboralComponent.prototype.updateVerifLaboral = function (id) {
        var item = null;
        this.verificacionLaboral.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.verifLaboralModal.showModal = true;
        this.verifLaboralModal.isUpdate = true;
        this.form.setValue(item);
    };
    VerificacionLaboralComponent.prototype.refreshVerifLaboral = function () {
        var _this = this;
        var id = this.form.get('id').value;
        this._verificacionLaboral.put(this.servicioEsp, id, this.form.value)
            .subscribe(function (res) {
            _this.verificacionLaboral = _this.verificacionLaboral
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalVerifLaboral();
            alert('Datos actualizados correctamente');
        }, function (err) { return _this._actividades.handleError(err); });
    };
    VerificacionLaboralComponent.prototype.deleteVerifLaboral = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._verificacionLaboral.delete(this.servicioEsp, id)
                .subscribe(function () {
                _this.verificacionLaboral = _this.verificacionLaboral.filter(function (value) { return value.id !== id; });
            }, function (err) { return _this._actividades.handleError(err); });
        }
    };
    VerificacionLaboralComponent.prototype.closeModalVerifLaboral = function () {
        this.form.reset();
        this.verifLaboralModal.showModal = false;
        this.verifLaboralModal.isUpdate = false;
    };
    VerificacionLaboralComponent.prototype.notificarAnalista = function () {
        _super.prototype.notificarAnalista.call(this);
    };
    VerificacionLaboralComponent.prototype.reportarCliente = function () {
        var confirm = window.confirm('Esta seguro de alertar al evaluado?');
        if (!confirm) {
            return;
        }
        this.setEstado('alerta', function () {
            alert('Alerta enviada al analista EspInterface');
        });
    };
    VerificacionLaboralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verificacion-laboral',
            template: __webpack_require__(/*! ./verificacion-laboral.component.html */ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.html"),
            styles: [__webpack_require__(/*! ./verificacion-laboral.component.css */ "./src/app/pages/actividades/verificacion-laboral/verificacion-laboral.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__["ActividadesService"],
            _services_esp_actividades_verificacion_laboral_service__WEBPACK_IMPORTED_MODULE_6__["VerificacionLaboralService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsService"]])
    ], VerificacionLaboralComponent);
    return VerificacionLaboralComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3Zpc2l0YS1kb21pY2lsaWFyaWEvZW50b3Juby1oYWJpdGFjaW9uYWwvZW50b3Juby1oYWJpdGFjaW9uYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Entorno habitacional</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <!-- Informacion personal card-->\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Información de la vivienda</b>\r\n            <hr>\r\n\r\n\r\n            <!-- tipo de vivienda -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tipoVivienda\">Tipo de vivienda</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" name=\"tipoVivienda\" id=\"tipoVivienda\" formControlName=\"tipoVivienda\">\r\n                  <option value=\"\">Seleccione</option>\r\n                  <option value=\"Casa\">Casa</option>\r\n                  <option value=\"Casa lote\">Casa lote</option>\r\n                  <option value=\"Apartamento\">Apartamento</option>\r\n                  <option value=\"Apartamento\">Apartamento</option>\r\n                  <option value=\"Aparta-estudio\">Aparta-estudio</option>\r\n                </select>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tipoVivienda'].invalid &&\r\n                   form.controls['tipoVivienda'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Tenencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tenencia\">Tenencia</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" name=\"tenencia\" id=\"tenencia\" formControlName=\"tenencia\">\r\n                  <option value=\"\">Seleccione</option>\r\n                  <option value=\"Arriendo\">Arriendo</option>\r\n                  <option value=\"Familiar\">Familiar</option>\r\n                  <option value=\"Propia\">Propia</option>\r\n                </select>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tenencia'].invalid &&\r\n                   form.controls['tenencia'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Tiempo de permanencia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tiempoPermanencia\">Tiempo de permanencia</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"tiempoPermanencia\"\r\n                       id=\"tiempoPermanencia\"\r\n                       placeholder=\"Ingrese el tiempo de permanencia\"\r\n                       formControlName=\"tiempoPermanencia\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tiempoPermanencia'].invalid &&\r\n                   form.controls['tiempoPermanencia'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Información del propietario -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"infoPropietario\">\r\n                Información del propietario\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"infoPropietario\"\r\n                       id=\"infoPropietario\"\r\n                       placeholder=\"Ingrese el tiempo de permanencia\"\r\n                       formControlName=\"infoPropietario\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['infoPropietario'].invalid &&\r\n                   form.controls['infoPropietario'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Fotografia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"fotografia\">\r\n                Fotografías\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"custom-file\">\r\n                  <input type=\"text\"\r\n                         class=\"custom-file-input\"\r\n                         name=\"fotografia\"\r\n                         id=\"fotografia\"\r\n                         placeholder=\"Ingrese el tiempo de permanencia\"\r\n                         formControlName=\"fotografia\">\r\n                  <label class=\"custom-file-label\" for=\"fotografia\">seleccione un archivo</label>\r\n                </div>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['fotografia'].invalid &&\r\n                   form.controls['fotografia'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body\">\r\n            <b class=\"card-title\">Condiciones físicas del inmueble</b>\r\n            <hr>\r\n\r\n            <!-- Estado general -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"estadoGeneral\">Estado general</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" name=\"estadoGeneral\" id=\"estadoGeneral\" formControlName=\"estadoGeneral\">\r\n                  <option value=\"\">Seleccione</option>\r\n                  <option value=\"Bueno\">Bueno</option>\r\n                  <option value=\"Regular\">Regular</option>\r\n                  <option value=\"Malo\">Malo</option>\r\n                </select>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['estadoGeneral'].invalid &&\r\n                   form.controls['estadoGeneral'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Acabados -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"acabados\">Acabados</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" name=\"acabados\" id=\"acabados\" formControlName=\"acabados\">\r\n                  <option value=\"\">Seleccione</option>\r\n                  <option value=\"Completos\">Completos</option>\r\n                  <option value=\"Incompletos\">Incompletos</option>\r\n                </select>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['acabados'].invalid &&\r\n                   form.controls['acabados'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Dotacion -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"dotacion\">\r\n                Dotación\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"dotacion\"\r\n                       id=\"dotacion\"\r\n                       placeholder=\"Ingrese la dotación\"\r\n                       formControlName=\"dotacion\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['dotacion'].invalid &&\r\n                   form.controls['dotacion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Dotacion -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"salubridad\">\r\n                Salubridad\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"salubridad\"\r\n                       id=\"salubridad\"\r\n                       placeholder=\"Ingrese el estado de salubridad\"\r\n                       formControlName=\"salubridad\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['salubridad'].invalid &&\r\n                   form.controls['salubridad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Estrato -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"estrato\">Estrato</label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" name=\"estrato\" id=\"estrato\" formControlName=\"estrato\">\r\n                  <option value=\"\">Seleccione</option>\r\n                  <option value=\"1\">1</option>\r\n                  <option value=\"2\">2</option>\r\n                  <option value=\"3\">3</option>\r\n                  <option value=\"4\">4</option>\r\n                  <option value=\"5\">5</option>\r\n                  <option value=\"6\">6</option>\r\n                </select>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['estrato'].invalid &&\r\n                   form.controls['estrato'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Servicio públicos\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"serviciosPublicos\">\r\n                Servicios públicos\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"serviciosPublicos\" id=\"serviciosPublicos\"\r\n                          cols=\"30\" rows=\"3\"\r\n                          class=\"form-control\"\r\n                          formControlName=\"serviciosPublicos\"\r\n                          placeholder=\"Ingrese los servicios publicos\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['serviciosPublicos'].invalid &&\r\n                   form.controls['serviciosPublicos'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Distribución de la vivienda\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"distribucion\">\r\n                Distribución de la vivienda\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"serviciosPublicos\" id=\"distribucion\"\r\n                          cols=\"30\" rows=\"3\"\r\n                          class=\"form-control\"\r\n                          formControlName=\"distribucion\"\r\n                          placeholder=\"Ingrese la distribución de la vivienda\t\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['distribucion'].invalid &&\r\n                   form.controls['distribucion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- Ciudad -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"ciudad\">\r\n                Ciudad\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"ciudad\"\r\n                       id=\"ciudad\"\r\n                       placeholder=\"Ingrese la ciudad\"\r\n                       formControlName=\"ciudad\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['ciudad'].invalid &&\r\n                   form.controls['ciudad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Barrio -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"barrio\">\r\n                Barrio\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"barrio\"\r\n                       id=\"barrio\"\r\n                       placeholder=\"Ingrese el barrio\"\r\n                       formControlName=\"barrio\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['barrio'].invalid &&\r\n                   form.controls['barrio'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Barrio -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"localidad\">\r\n                Localidad\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"localidad\"\r\n                       id=\"localidad\"\r\n                       placeholder=\"Ingrese la localidad\"\r\n                       formControlName=\"localidad\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['localidad'].invalid &&\r\n                   form.controls['localidad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Distribución de la vivienda\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"viasAcceso\">\r\n                Vías de acceso\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"viasAcceso\" id=\"viasAcceso\"\r\n                          cols=\"30\" rows=\"3\"\r\n                          class=\"form-control\"\r\n                          formControlName=\"viasAcceso\"\r\n                          placeholder=\"Ingrese las vias de acceso\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['viasAcceso'].invalid &&\r\n                   form.controls['viasAcceso'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- Transporte público\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"transportePublico\">\r\n                Transporte público\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"transportePublico\" id=\"transportePublico\"\r\n                          cols=\"30\" rows=\"3\"\r\n                          class=\"form-control\"\r\n                          formControlName=\"transportePublico\"\r\n                          placeholder=\"Transporte público\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['transportePublico'].invalid &&\r\n                   form.controls['transportePublico'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Centros asistenciales\t\t -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"centrosAsistenciales\">\r\n                Centros asistenciales\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"centrosAsistenciales\" id=\"centrosAsistenciales\"\r\n                          cols=\"30\" rows=\"3\"\r\n                          class=\"form-control\"\r\n                          formControlName=\"centrosAsistenciales\"\r\n                          placeholder=\"Centros asistenciales\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['centrosAsistenciales'].invalid &&\r\n                   form.controls['centrosAsistenciales'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- Flujo vehicular -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"flujoVehicular\">\r\n                Flujo vehícular\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\"\r\n                       class=\"form-control\"\r\n                       name=\"flujoVehicular\"\r\n                       id=\"flujoVehicular\"\r\n                       placeholder=\"Ingrese el flujo vehícular\t\"\r\n                       formControlName=\"flujoVehicular\">\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['flujoVehicular'].invalid &&\r\n                   form.controls['flujoVehicular'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Nivel de seguridad -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"nivelSeguridad\">\r\n                Nivel de seguridad\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <select class=\"form-control\" name=\"nivelSeguridad\" id=\"nivelSeguridad\" formControlName=\"nivelSeguridad\">\r\n                  <option value=\"\">Seleccione</option>\r\n                  <option value=\"Alto\">Alto</option>\r\n                  <option value=\"Medio\">Medio</option>\r\n                  <option value=\"Bajo\">Bajo</option>\r\n                </select>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['nivelSeguridad'].invalid &&\r\n                   form.controls['nivelSeguridad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && estado == 'proceso') || (permissions.AESP || permissions.ADG && estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!--<pre>{{ form.getRawValue() | json }}</pre>-->\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: EntornoHabitacionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntornoHabitacionalComponent", function() { return EntornoHabitacionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_esp_actividades_visita_domiciliaria_entono_habitacional_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/esp/actividades/visita-domiciliaria/entono-habitacional.service */ "./src/app/services/esp/actividades/visita-domiciliaria/entono-habitacional.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntornoHabitacionalComponent = /** @class */ (function (_super) {
    __extends(EntornoHabitacionalComponent, _super);
    function EntornoHabitacionalComponent(_actividades, _entornoHabitacional, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._entornoHabitacional = _entornoHabitacional;
        _this._ngxPermissions = _ngxPermissions;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            tipoVivienda: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tenencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tiempoPermanencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            infoPropietario: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fotografia: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estadoGeneral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            acabados: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dotacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            salubridad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estrato: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            serviciosPublicos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            distribucion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            barrio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            localidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            viasAcceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            transportePublico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            centrosAsistenciales: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            flujoVehicular: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nivelSeguridad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        _this.codigo = 'VDS';
        return _this;
    }
    EntornoHabitacionalComponent.prototype.ngOnInit = function () {
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        this.getValue();
    };
    EntornoHabitacionalComponent.prototype.getValue = function () {
        var _this = this;
        // Solicitud get al servidor
        console.log(this.servicioEsp);
        this._entornoHabitacional.get(this.servicioEsp)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function () { return _this.estado = 'aceptado'; } // alert('Ocurrio un error inesperado al tratar de recuperar los datos')
        );
    };
    EntornoHabitacionalComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        // se guarda la informacion
        this._entornoHabitacional.post(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            alert('Se han guardado los datos exitosamente');
        }, function () { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    EntornoHabitacionalComponent.prototype.onUpdate = function () {
        var _this = this;
        var id = this.form.get('id').value;
        var data = this.form.value;
        this._entornoHabitacional.put(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.estado = value.servicios.estado;
            }
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            alert('Se han actualizado los datos exitosamente');
        }, function (err) { return _this._actividades.handleError(err); });
    };
    EntornoHabitacionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entorno-habitacional',
            template: __webpack_require__(/*! ./entorno-habitacional.component.html */ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.html"),
            styles: [__webpack_require__(/*! ./entorno-habitacional.component.css */ "./src/app/pages/actividades/visita-domiciliaria/entorno-habitacional/entorno-habitacional.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_3__["ActividadesService"],
            _services_esp_actividades_visita_domiciliaria_entono_habitacional_service__WEBPACK_IMPORTED_MODULE_5__["EntonoHabitacionalService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]])
    ], EntornoHabitacionalComponent);
    return EntornoHabitacionalComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_2__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3Zpc2l0YS1kb21pY2lsaWFyaWEvZXN0YWRvLXNhbHVicmlkYWQvZXN0YWRvLXNhbHVicmlkYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\" #pdfContainer>\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Estado de Salubridad</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n          <!-- Informacion personal card-->\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Información personal</b>\r\n            <hr>\r\n            <!-- toma medicamentos -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tomaMedicamentos\">¿Toma medicamentos en la actualidad?</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"tomaMedicamentos\"\r\n                       name=\"tomaMedicamentos\"\r\n                       formControlName=\"tomaMedicamentos\"\r\n                       placeholder=\"Ingrese los medicamentos\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tomaMedicamentos'].invalid &&\r\n                   form.controls['tomaMedicamentos'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- sufre enfermedades -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"sufreEnfermedad\">¿Sufre alguna Enfermedad?</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"sufreEnfermedad\"\r\n                       name=\"sufreEnfermedades\"\r\n                       formControlName=\"sufreEnfermedades\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- tratamiento psicologico -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tratamientoPsicologico\">¿Ha sido sometido a algún tipo de tratamiento psicológico?</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"tratamientoPsicologico\"\r\n                       name=\"tratamientoPsicologico\"\r\n                       formControlName=\"tratamientoPsicologico\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- fuma -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">¿Fuma?</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"fuma\" id=\"fuma\"\r\n                         [value]=\"true\" formControlName=\"fuma\">\r\n                  <label class=\"form-check-label\" for=\"fuma\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"fuma\" id=\"fuman\"\r\n                         [value]=\"false\" formControlName=\"fuma\">\r\n                  <label class=\"form-check-label\" for=\"fuman\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- ¿Consume bebidas alcohólicas? -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">¿Consume bebidas alcohólicas?</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"consumeAlcohol\" id=\"consumeAlcohol\"\r\n                         [value]=\"true\" formControlName=\"consumeAlcohol\">\r\n                  <label class=\"form-check-label\" for=\"consumeAlcohol\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"consumeAlcohol\" id=\"consumeAlcoholn\"\r\n                         [value]=\"false\" formControlName=\"consumeAlcohol\">\r\n                  <label class=\"form-check-label\" for=\"consumeAlcoholn\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- ¿Consume sustancias psicoactivas?\t-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">¿Consume sustancias psicoactivas?</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"consumeDrogas\" id=\"consumeDrogas\"\r\n                         [value]=\"true\" formControlName=\"consumeDrogas\">\r\n                  <label class=\"form-check-label\" for=\"consumeDrogas\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"consumeDrogas\" id=\"consumeDrogasn\"\r\n                         [value]=\"false\" formControlName=\"consumeDrogas\">\r\n                  <label class=\"form-check-label\" for=\"consumeDrogasn\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- ¿Realiza algún deporte? -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"realizaDeporte\">¿Realiza algún deporte?</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\"\r\n                          id=\"realizaDeporte\" name=\"realizaDeporte\"\r\n                          formControlName=\"realizaDeporte\" rows=\"3\"\r\n                          placeholder=\"Ingresé los deportes que practica\">\r\n\r\n                </textarea>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- ¿Qué actividades realiza en su tiempo libre? -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"hobbies\">¿Qué actividades realiza en su tiempo libre?</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\"\r\n                          id=\"hobbies\" name=\"hobbies\"\r\n                          formControlName=\"hobbies\" rows=\"3\"\r\n                          placeholder=\"Ingresé las actividades que realiza\">\r\n\r\n                </textarea>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && estado == 'proceso') || (permissions.AESP || permissions.ADG && estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: EstadoSalubridadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoSalubridadComponent", function() { return EstadoSalubridadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_esp_actividades_visita_domiciliaria_estado_salubridad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/esp/actividades/visita-domiciliaria/estado-salubridad.service */ "./src/app/services/esp/actividades/visita-domiciliaria/estado-salubridad.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EstadoSalubridadComponent = /** @class */ (function (_super) {
    __extends(EstadoSalubridadComponent, _super);
    function EstadoSalubridadComponent(_actividades, _data, _estadoSalubridad, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._data = _data;
        _this._estadoSalubridad = _estadoSalubridad;
        _this._ngxPermissions = _ngxPermissions;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            tomaMedicamentos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            sufreEnfermedades: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tratamientoPsicologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fuma: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            consumeAlcohol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            consumeDrogas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            realizaDeporte: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            hobbies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        _this.codigo = 'VDS';
        return _this;
    }
    EstadoSalubridadComponent.prototype.ngOnInit = function () {
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        this.getValue();
    };
    EstadoSalubridadComponent.prototype.getValue = function () {
        var _this = this;
        // Solicitud get al servidor que retorna el historial judicial del servicio esp
        this._estadoSalubridad.get(this.servicioEsp)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) {
            _this.estado = 'aceptado';
            _this._actividades.handleError(err);
        });
    };
    EstadoSalubridadComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        // se guarda el historial judicial
        this._data.setEstadoSalubridad(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    EstadoSalubridadComponent.prototype.onUpdate = function () {
        var _this = this;
        var id = this.form.get('id').value;
        var data = this.form.value;
        // se guarda el historial judicial
        this._estadoSalubridad.put(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.estado = value.servicios.estado;
            }
            alert('Se han actualizado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return _this._actividades.handleError(err); });
    };
    EstadoSalubridadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estado-salubridad',
            template: __webpack_require__(/*! ./estado-salubridad.component.html */ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.html"),
            styles: [__webpack_require__(/*! ./estado-salubridad.component.css */ "./src/app/pages/actividades/visita-domiciliaria/estado-salubridad/estado-salubridad.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_esp_actividades_visita_domiciliaria_estado_salubridad_service__WEBPACK_IMPORTED_MODULE_6__["EstadoSalubridadService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]])
    ], EstadoSalubridadComponent);
    return EstadoSalubridadComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3Zpc2l0YS1kb21pY2lsaWFyaWEvaW5mb3JtYWNpb24tZmFtaWxpYXIvaW5mb3JtYWNpb24tZmFtaWxpYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Informacion familiar y referencias</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <div class=\"card\">\r\n          <!-- Informacion personal card-->\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Información personal</b>\r\n            <hr>\r\n            <!-- nombre evaluado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"nombre\">Nombre del conyuge</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"nombre\"\r\n                       name=\"nombre\"\r\n                       formControlName=\"nombre\"\r\n                       placeholder=\"Ingrese el nombre de conyuge\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['nombre'].invalid &&\r\n                     form.controls['nombre'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- edad -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"edad\">Edad</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       minlength=\"0\" maxlength=\"120\"\r\n                       id=\"edad\"\r\n                       name=\"edad\"\r\n                       formControlName=\"edad\"\r\n                       placeholder=\"Ingrese la edad del evaluado\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['edad'].invalid &&\r\n                     form.controls['edad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- identificacion evaluado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"identificacion\">Identificación</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"identificacion\"\r\n                       name=\"identificacion\"\r\n                       formControlName=\"identificacion\"\r\n                       placeholder=\"Ingrese la identificacion del evaluado\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['identificacion'].invalid &&\r\n                     form.controls['identificacion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Lugar de Expedición -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"lugarExpedicion\">Lugar de Expedición\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"lugarExpedicion\"\r\n                       name=\"lugarExpedicion\"\r\n                       formControlName=\"lugarExpedicion\"\r\n                       placeholder=\"Ingrese el lugar de expedición del documento\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['lugarExpedicion'].invalid &&\r\n                     form.controls['lugarExpedicion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Lugar de nacimiento -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"lugarNacimiento\">Lugar de nacimiento\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"lugarNacimiento\"\r\n                       name=\"lugarNacimiento\"\r\n                       formControlName=\"lugarNacimiento\"\r\n                       placeholder=\"Ingrese el lugar de nacimiento\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['lugarNacimiento'].invalid &&\r\n                     form.controls['lugarNacimiento'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- fecha de nacimiento -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"fechaNacimiento\">Fecha de Nacimiento\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"date\" class=\"form-control\"\r\n                       id=\"fechaNacimiento\"\r\n                       name=\"fechaNacimiento\"\r\n                       formControlName=\"fechaNacimiento\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['fechaNacimiento'].invalid &&\r\n                     form.controls['fechaNacimiento'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- ocupacion -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"ocupacion\">Ocupación\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"ocupacion\"\r\n                       name=\"ocupacion\"\r\n                       formControlName=\"ocupacion\"\r\n                       placeholder=\"Ingrese la ocupacion\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['ocupacion'].invalid &&\r\n                     form.controls['ocupacion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- empresa -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"empresa\">Empresa\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"empresa\"\r\n                       name=\"empresa\"\r\n                       formControlName=\"empresa\"\r\n                       placeholder=\"Ingrese el nombre de la empresa\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['empresa'].invalid &&\r\n                     form.controls['empresa'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- telefono -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"telefono\">Telefono - Celular\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"telefono\"\r\n                       name=\"telefono\"\r\n                       formControlName=\"telefono\"\r\n                       placeholder=\"Ingrese el numero de telefono - celular\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['telefono'].invalid &&\r\n                     form.controls['telefono'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- tiempo Laborado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tiempoLaborado\">Tiempo Laborado\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"tiempoLaborado\"\r\n                       name=\"tiempoLaborado\"\r\n                       formControlName=\"tiempoLaborado\"\r\n                       placeholder=\"Ingrese el tiempo laborado\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['tiempoLaborado'].invalid &&\r\n                     form.controls['tiempoLaborado'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <!-- fotografia -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"fotografia\">Fotografia\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n\r\n                <div *ngIf=\"checkFile()\">\r\n                  <img [src]=\"apiUrl + form.get('fotografia').value\" class=\"img-thumb\" height=\"200\" alt=\"photo\">\r\n                  <button class=\"btn btn-danger\" (click)=\"removeFile()\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                    Eliminar\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"checkTypeFile()\">\r\n\r\n                  <input (change)=\"setFileToForm($event)\" type=\"file\"\r\n                         id=\"fotografia\"\r\n                         name=\"fotografia\"\r\n                         required>\r\n                </div>\r\n\r\n\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['fotografia'].invalid &&\r\n                     form.controls['fotografia'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"tiempoLaborado\">Observaciones\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"observaciones\" id=\"observaciones\"\r\n                          cols=\"30\" class=\"form-control\"\r\n                          placeholder=\"Ingrese las observaciones de la visita\"\r\n                          formControlName=\"observaciones\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['observaciones'].invalid &&\r\n                     form.controls['observaciones'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <b class=\"card-title\">Hijos</b>\r\n              </div>\r\n              <div class=\"col-md-4 text-right\">\r\n                <button (click)=\"toggleModalHijo = true\" class=\"btn btn-primary\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  Agregar\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"><hr></div>\r\n            <!-- Hijos -->\r\n            <div class=\"form-group row\" *ngIf=\"hijos.length > 0\">\r\n              <div class=\"col-md-12\">\r\n                <table class=\"table table-bordered\">\r\n                      <thead class=\"text-capitalize\">\r\n                      <th>edad</th>\r\n                      <th>nombre</th>\r\n                      <th>ocupación</th>\r\n                      <th>ubicación</th>\r\n                      <th class=\"acciones\">acciones</th>\r\n                      </thead>\r\n                      <tbody>\r\n                      <tr *ngFor=\"let value of hijos\">\r\n                        <td>{{ value.edad }}</td>\r\n                        <td>{{ value.nombre }}</td>\r\n                        <td>{{ value.ocupacion }}</td>\r\n                        <td>{{ value.ubicacion }}</td>\r\n                        <td class=\"acciones\">\r\n                          <div class=\"text-center\">\r\n                            <button class=\"btn btn-primary mr-2\" (click)=\"updateHijo(value.id)\">\r\n                              <i class=\"fa fa-edit\"></i>\r\n                            </button>\r\n\r\n                            <button class=\"btn btn-danger ml-2\" (click)=\"deleteHijo(value.id)\">\r\n                              <i class=\"fa fa-trash\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                      </tbody>\r\n                    </table>\r\n              </div>\r\n              <hr>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <b class=\"card-title\">Informacion familiar</b>\r\n              </div>\r\n              <div class=\"col-md-4 text-right\">\r\n                <button (click)=\"toggleModalInfoFlia = true\" class=\"btn btn-primary\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  Agregar\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"><hr></div>\r\n            <div class=\"col-md-12\">\r\n            </div>\r\n            <!-- informacion familiar -->\r\n            <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-bordered\">\r\n                <thead class=\"text-capitalize\">\r\n                  <th>nombre</th>\r\n                  <th>parentesco</th>\r\n                  <th>edad</th>\r\n                  <th>ocupacion</th>\r\n                  <th>telefono</th>\r\n                  <th>ciudad</th>\r\n                  <th>Vive con ud</th>\r\n                  <th class=\"acciones\">acciones</th>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let value of infoFamiliar;\">\r\n                  <td>{{ value.nombre }}</td>\r\n                  <td>{{ value.parentesco }}</td>\r\n                  <td>{{ value.edad }}</td>\r\n                  <td>{{ value.ocupacion}}</td>\r\n                  <td>{{ value.telefono}}</td>\r\n                  <td>{{ value.ciudad}}</td>\r\n                  <td>{{ value.viveConUd === true ? 'Si' : 'No' }}</td>\r\n                  <td class=\"acciones\">\r\n                    <div class=\"text-center\">\r\n                      <button class=\"btn btn-primary mr-2\" (click)=\"updateInfoFlia(value.id)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </button>\r\n\r\n                      <button class=\"btn btn-danger ml-2\" (click)=\"deleteInfoFlia(value.id)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                <b class=\"card-title\">Referencias</b>\r\n              </div>\r\n              <div class=\"col-md-4 text-right\">\r\n                <button (click)=\"toggleModalReferencias = true\" class=\"btn btn-primary\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  Agregar\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"><hr></div>\r\n          <!--referencias -->\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <table class=\"table table-bordered\">\r\n                <thead class=\"text-capitalize\">\r\n                  <th>nombre</th>\r\n                  <th>ocupacion</th>\r\n                  <th>telefono</th>\r\n                  <th>ciudad</th>\r\n                  <th>confirmacion</th>\r\n                  <th class=\"acciones\">acciones</th>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let value of referencias\">\r\n                  <td>{{ value.nombre }}</td>\r\n                  <td>{{ value.ocupacion }}</td>\r\n                  <td>{{ value.telefono }}</td>\r\n                  <td>{{ value.ciudad }}</td>\r\n                  <td>{{ value.confirmacion }}</td>\r\n                  <td class=\"acciones\">\r\n                    <div class=\"text-center\">\r\n                      <button class=\"btn btn-primary mr-2\" (click)=\"updateReferencia(value.id)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </button>\r\n\r\n                      <button class=\"btn btn-danger ml-2\" (click)=\"deleteReferencia(value.id)\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && estado == 'proceso') || (permissions.AESP || permissions.ADG && estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Modal add hijos -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': toggleModalHijo, 'd-none': !toggleModalHijo}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': toggleModalHijo, 'd-none': !toggleModalHijo}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalVerticalLabel\">Hijos</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"toggleModalHijo = false\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"hijoForm\">\r\n\r\n          <!-- edad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"hijo-edad\">Edad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"hijo-edad\"\r\n                     name=\"edad\"\r\n                     formControlName=\"edad\"\r\n                     placeholder=\"Ingrese un numero valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(hijoForm.get('edad').invalid &&\r\n                     hijoForm.get('edad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- nombre -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"hijo-nombre\">Nombre</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"hijo-nombre\"\r\n                     name=\"nombre\"\r\n                     formControlName=\"nombre\"\r\n                     placeholder=\"Ingrese el nombre valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(hijoForm.get('nombre').invalid &&\r\n                     hijoForm.get('nombre').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- ocupacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"hijo-ocupacion\">Ocupación</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"hijo-ocupacion\"\r\n                     name=\"ocupacion\"\r\n                     formControlName=\"ocupacion\"\r\n                     placeholder=\"Ocupación del hijo\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(hijoForm.get('ocupacion').invalid &&\r\n                     hijoForm.get('ocupacion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- ubicacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"hijo-ubicacion\">Ubicación</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"hijo-ubicacion\"\r\n                     name=\"ubicacion\"\r\n                     formControlName=\"ubicacion\"\r\n                     placeholder=\"ingrese una ubicación valida\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(hijoForm.get('ubicacion').invalid &&\r\n                     hijoForm.get('ubicacion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalHijos()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"hijoForm.invalid\" (click)=\"refreshHijo()\" *ngIf=\"isUpdateHijo\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"hijoForm.invalid\" (click)=\"addHijos()\" *ngIf=\"!isUpdateHijo\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal InformacionFamiliar -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': toggleModalInfoFlia, 'd-none': !toggleModalInfoFlia}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': toggleModalInfoFlia, 'd-none': !toggleModalInfoFlia}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalInfoFlia()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"infoFamiliarForm\">\r\n          <!-- nombre -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"info-flia-nombre\">Nombre</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"info-flia-nombre\"\r\n                     name=\"nombre\"\r\n                     formControlName=\"nombre\"\r\n                     placeholder=\"Ingrese un nombre valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(infoFamiliarForm.get('nombre').invalid &&\r\n                     infoFamiliarForm.get('nombre').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- parentesco -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"info-flia-parentesco\">Parentesco</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"info-flia-parentesco\"\r\n                     name=\"parentesco\"\r\n                     formControlName=\"parentesco\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(infoFamiliarForm.get('parentesco').invalid &&\r\n                     infoFamiliarForm.get('parentesco').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- edad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"info-flia-edad\">Edad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"info-flia-edad\"\r\n                     name=\"edad\"\r\n                     formControlName=\"edad\"\r\n                     placeholder=\"Ingrese un numero valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(infoFamiliarForm.get('edad').invalid &&\r\n                     infoFamiliarForm.get('edad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ocupacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"info-flia-ocupacion\">ocupacion</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"info-flia-ocupacion\"\r\n                     name=\"edad\"\r\n                     formControlName=\"ocupacion\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(infoFamiliarForm.get('ocupacion').invalid &&\r\n                     infoFamiliarForm.get('ocupacion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- telefono -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"info-flia-telefono\">Telefono</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"info-flia-telefono\"\r\n                     name=\"telefono\"\r\n                     formControlName=\"telefono\"\r\n                     placeholder=\"Ingrese un telefono valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(infoFamiliarForm.get('telefono').invalid &&\r\n                     infoFamiliarForm.get('telefono').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ciudad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"info-flia-ciudad\">Ciudad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"info-flia-ciudad\"\r\n                     name=\"edad\"\r\n                     formControlName=\"ciudad\"\r\n                     placeholder=\"Ingrese una ciudad valida\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(infoFamiliarForm.get('ciudad').invalid &&\r\n                     infoFamiliarForm.get('ciudad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Vive con ud -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"viveConUd\">Vive con ud</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"viveConUd\"\r\n                       id=\"viveConUd\" [value]=\"true\">\r\n                <label class=\"form-check-label\" for=\"viveConUd\">Si</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"viveConUd\"\r\n                       id=\"viveConUd!\" [value]=\"false\">\r\n                <label class=\"form-check-label\" for=\"viveConUd!\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalInfoFlia()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"infoFamiliarForm.invalid\" (click)=\"refreshInfoFlia()\" *ngIf=\"isUpdateInfoFlia\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"infoFamiliarForm.invalid\" (click)=\"addInfoFlia()\" *ngIf=\"!isUpdateInfoFlia\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal referencias -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': toggleModalReferencias, 'd-none': !toggleModalReferencias}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': toggleModalReferencias, 'd-none': !toggleModalReferencias}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalReferencia()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"referenciaForm\">\r\n          <!-- nombre -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ref-nombre\">Nombre</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ref-nombre\"\r\n                     name=\"nombre\"\r\n                     formControlName=\"nombre\"\r\n                     placeholder=\"Ingrese un nombre valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(referenciaForm.get('nombre').invalid &&\r\n                     referenciaForm.get('nombre').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ocupacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ref-ocupacion\">Ocupación</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ref-ocupacion\"\r\n                     name=\"ocupacion\"\r\n                     formControlName=\"ocupacion\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(referenciaForm.get('ocupacion').invalid &&\r\n                     referenciaForm.get('ocupacion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- telefono -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ref-telefono\">Telefono</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ref-telefono\"\r\n                     name=\"telefono\"\r\n                     formControlName=\"telefono\"\r\n                     placeholder=\"Ingrese un telefono valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(referenciaForm.get('telefono').invalid &&\r\n                     referenciaForm.get('telefono').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ciudad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"ref-ciudad\">Ciudad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ref-ciudad\"\r\n                     name=\"ciudad\"\r\n                     formControlName=\"ciudad\"\r\n                     placeholder=\"Ingrese una ciudad valida\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(referenciaForm.get('ciudad').invalid &&\r\n                     referenciaForm.get('ciudad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- confirmacion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-4 col-form-label\" for=\"ref-confirmacion\">Confirmacion</label>\r\n            <div class=\"col-sm-8\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"ref-confirmacion\"\r\n                     name=\"confirmacion\"\r\n                     formControlName=\"confirmacion\"\r\n                     placeholder=\"Ingrese una dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(referenciaForm.get('confirmacion').invalid &&\r\n                     referenciaForm.get('confirmacion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalReferencia()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"referenciaForm.invalid\" (click)=\"refreshReferencia()\" *ngIf=\"isUpdateReferencias\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"referenciaForm.invalid\" (click)=\"addReferencia()\" *ngIf=\"!isUpdateReferencias\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: InformacionFamiliarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionFamiliarComponent", function() { return InformacionFamiliarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_esp_actividades_visita_domiciliaria_nucleo_familiar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/esp/actividades/visita-domiciliaria/nucleo-familiar.service */ "./src/app/services/esp/actividades/visita-domiciliaria/nucleo-familiar.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InformacionFamiliarComponent = /** @class */ (function (_super) {
    __extends(InformacionFamiliarComponent, _super);
    function InformacionFamiliarComponent(_actividades, _nucleoFamiliar, _ngxPermissions, cd) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._nucleoFamiliar = _nucleoFamiliar;
        _this._ngxPermissions = _ngxPermissions;
        _this.cd = cd;
        _this.hijos = [];
        _this.infoFamiliar = [];
        _this.referencias = [];
        _this.codigo = 'VDS';
        return _this;
    }
    InformacionFamiliarComponent.prototype.ngOnInit = function () {
        this.form = this._nucleoFamiliar.nucleoFamiliarForm;
        this.hijoForm = this._nucleoFamiliar.hijoForm;
        this.infoFamiliarForm = this._nucleoFamiliar.infoFamiliarForm;
        this.referenciaForm = this._nucleoFamiliar.referenciaForm;
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        this.getValue();
    };
    InformacionFamiliarComponent.prototype.getValue = function () {
        var _this = this;
        var servicioEspId = this.servicioEsp;
        // Solicitud get al servidor que retorna el historial judicial del servicio esp
        this._nucleoFamiliar.get(servicioEspId)
            .subscribe(function (value) {
            console.log(value);
            _this.estado = value.servicios.estado;
            _this._nucleoFamiliar.getHijos(_this.servicioEsp)
                .subscribe(function (res) { return _this.hijos = res.servicios; });
            _this._nucleoFamiliar.getInfoFamiliar(_this.servicioEsp)
                .subscribe(function (res) { return _this.infoFamiliar = res.servicios; });
            _this._nucleoFamiliar.getReferencias(_this.servicioEsp)
                .subscribe(function (res) { return _this.referencias = res.servicios; });
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function () {
            _this.estado = 'aceptado';
        } // alert('Ocurrio un error inesperado al tratar de recuperar los datos')
        );
    };
    InformacionFamiliarComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        // se guarda la informacion
        this._nucleoFamiliar.post(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            alert('Se han guardado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    InformacionFamiliarComponent.prototype.onUpdate = function () {
        var _this = this;
        var id = this.form.get('id').value;
        var data = this.form.value;
        // se actualiza la informacion
        this._nucleoFamiliar.put(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.estado = value.servicios.estado;
            }
            _this.form.reset();
            alert('Se han actualizado los datos exitosamente');
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return alert(err.error.message); });
    };
    InformacionFamiliarComponent.prototype.addHijos = function () {
        var _this = this;
        this._nucleoFamiliar.postHijo(this.servicioEsp, this.hijoForm.value)
            .subscribe(function (res) {
            _this.hijos.push(res.servicios);
            _this.closeModalHijos();
        });
    };
    InformacionFamiliarComponent.prototype.updateHijo = function (id) {
        var item = null;
        this.hijos.forEach(function (value) {
            if (value.id === id) {
                item = value;
            }
        });
        this.toggleModalHijo = true;
        this.isUpdateHijo = true;
        this.hijoForm.setValue(item);
    };
    InformacionFamiliarComponent.prototype.refreshHijo = function () {
        var _this = this;
        var id = this.hijoForm.get('id').value;
        this._nucleoFamiliar.putHijo(this.servicioEsp, id, this.hijoForm.value)
            .subscribe(function (res) {
            _this.hijos = _this.hijos.map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalHijos();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    InformacionFamiliarComponent.prototype.deleteHijo = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._nucleoFamiliar.deleteHijo(this.servicioEsp, id)
                .subscribe(function () {
                _this.hijos = _this.hijos.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    InformacionFamiliarComponent.prototype.closeModalHijos = function () {
        this.hijoForm.reset();
        this.toggleModalHijo = false;
        this.isUpdateHijo = false;
    };
    /**
     * informacion familiar form
     */
    InformacionFamiliarComponent.prototype.addInfoFlia = function () {
        var _this = this;
        this._nucleoFamiliar.postInfoFamiliar(this.servicioEsp, this.infoFamiliarForm.value)
            .subscribe(function (res) {
            _this.infoFamiliar.push(res.servicios);
            _this.closeModalInfoFlia();
        });
    };
    InformacionFamiliarComponent.prototype.updateInfoFlia = function (id) {
        var item = null;
        this.infoFamiliar.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.toggleModalInfoFlia = true;
        this.isUpdateInfoFlia = true;
        this.infoFamiliarForm.setValue(item);
    };
    InformacionFamiliarComponent.prototype.refreshInfoFlia = function () {
        var _this = this;
        var id = this.infoFamiliarForm.get('id').value;
        this._nucleoFamiliar.putInfoFamiliar(this.servicioEsp, id, this.infoFamiliarForm.value)
            .subscribe(function (res) {
            _this.infoFamiliar = _this.infoFamiliar.map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalInfoFlia();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    InformacionFamiliarComponent.prototype.deleteInfoFlia = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._nucleoFamiliar.deleteInfoFamiliar(this.servicioEsp, id)
                .subscribe(function () {
                _this.infoFamiliar = _this.infoFamiliar.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    InformacionFamiliarComponent.prototype.closeModalInfoFlia = function () {
        this.infoFamiliarForm.reset();
        this.toggleModalInfoFlia = false;
        this.isUpdateInfoFlia = false;
    };
    /**
     * referencias form
     */
    InformacionFamiliarComponent.prototype.addReferencia = function () {
        var _this = this;
        this._nucleoFamiliar.postReferencia(this.servicioEsp, this.referenciaForm.value)
            .subscribe(function (res) {
            _this.referencias.push(res.servicios);
            _this.closeModalReferencia();
        });
    };
    InformacionFamiliarComponent.prototype.updateReferencia = function (id) {
        var item = null;
        this.referencias.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.toggleModalReferencias = true;
        this.isUpdateReferencias = true;
        this.referenciaForm.setValue(item);
    };
    InformacionFamiliarComponent.prototype.refreshReferencia = function () {
        var _this = this;
        var id = this.referenciaForm.get('id').value;
        this._nucleoFamiliar.putReferencia(this.servicioEsp, id, this.referenciaForm.value)
            .subscribe(function (res) {
            _this.referencias = _this.referencias.map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalReferencia();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    InformacionFamiliarComponent.prototype.deleteReferencia = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._nucleoFamiliar.deleteReferencia(this.servicioEsp, id)
                .subscribe(function () {
                _this.referencias = _this.referencias.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    InformacionFamiliarComponent.prototype.closeModalReferencia = function () {
        this.referenciaForm.reset();
        this.toggleModalReferencias = false;
        this.isUpdateReferencias = false;
    };
    InformacionFamiliarComponent.prototype.setFileToForm = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.form.patchValue({
                    fotografia: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
                console.log('resultado lectura', reader.result);
            };
        }
    };
    InformacionFamiliarComponent.prototype.removeFile = function () {
        this.form.get('fotografia').setValue('');
    };
    InformacionFamiliarComponent.prototype.checkFile = function () {
        var file = this.form.get('fotografia').value;
        console.log(file);
        return !(file.includes('servicios:application') || file === '');
    };
    InformacionFamiliarComponent.prototype.checkTypeFile = function () {
        var file = this.form.get('fotografia').value;
        console.log(file);
        console.log('typo', typeof file);
        return file.includes('servicios:application') || file === '';
    };
    InformacionFamiliarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informacion-familiar',
            template: __webpack_require__(/*! ./informacion-familiar.component.html */ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.html"),
            styles: [__webpack_require__(/*! ./informacion-familiar.component.css */ "./src/app/pages/actividades/visita-domiciliaria/informacion-familiar/informacion-familiar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_esp_actividades_visita_domiciliaria_nucleo_familiar_service__WEBPACK_IMPORTED_MODULE_4__["NucleoFamiliarService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], InformacionFamiliarComponent);
    return InformacionFamiliarComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_1__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3Zpc2l0YS1kb21pY2lsaWFyaWEvbW9kdXMtdml2ZW5kaS9tb2R1cy12aXZlbmRpLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Visita domiciliaria de seguridad</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <!-- Informacion personal card-->\r\n        <div class=\"card\">\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Información personal</b>\r\n            <hr>\r\n            <!-- nombre evaluado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"salario\">Salario</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"salario\"\r\n                       name=\"salario\"\r\n                       formControlName=\"salario\"\r\n                       placeholder=\"Ingrese el Salario\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['salario'].invalid &&\r\n                     form.controls['salario'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- otrosIngresos -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"otrosIngresos\">Otros ingresos</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"otrosIngresos\"\r\n                       name=\"otrosIngresos\"\r\n                       formControlName=\"otrosIngresos\"\r\n                       placeholder=\"Otros ingresos\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['otrosIngresos'].invalid &&\r\n                     form.controls['otrosIngresos'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Salario Conyugue -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"salarioConyugue\">Salario Conyugue</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"salarioConyugue\"\r\n                       name=\"salarioConyugue\"\r\n                       formControlName=\"salarioConyugue\"\r\n                       placeholder=\"Ingrese salario del conyuge\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['salarioConyugue'].invalid &&\r\n                     form.controls['salarioConyugue'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- Salario Conyugue -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"engresosMensuales\">Egresos mensuales</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"engresosMensuales\"\r\n                       name=\"engresosMensuales\"\r\n                       formControlName=\"engresosMensuales\"\r\n                       placeholder=\"Ingrese egresos mensuales\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['engresosMensuales'].invalid &&\r\n                     form.controls['engresosMensuales'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Descripción de gastos\t-->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"descripcionGastos\">Descripcion de egresos</label>\r\n              <div class=\"col-sm-8\">\r\n\r\n                <textarea name=\"descripcionGastos\"\r\n                          id=\"descripcionGastos\"\r\n                          rows=\"3\" class=\"form-control\"\r\n                          placeholder=\"Ingrese descripcion de gastos\"\r\n                          formControlName=\"descripcionGastos\">\r\n                </textarea>\r\n\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['descripcionGastos'].invalid &&\r\n                     form.controls['descripcionGastos'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- Salario Conyugue -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"personasDependientes\">Personas que dependen del evaluado.</label>\r\n              <div class=\"col-sm-8\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"personasDependientes\"\r\n                       name=\"personasDependientes\"\r\n                       formControlName=\"personasDependientes\"\r\n                       placeholder=\"Cantidad de personas que dependen del evaluado\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['personasDependientes'].invalid &&\r\n                     form.controls['personasDependientes'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <!-- patrimonio bienes immuebles card-->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <!-- bienes Inmuebles -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Patrimonio - Bienes Inmuebles</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"bienInmuebleModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>tipo</th>\r\n                    <th>dirección</th>\r\n                    <th>telefono</th>\r\n                    <th>ciudad</th>\r\n                    <th>avalúo</th>\r\n                    <th>hipoteca</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of bienesInmuebles\">\r\n                    <td>{{ value.tipo }}</td>\r\n                    <td>{{ value.direccion }}</td>\r\n                    <td>{{ value.telefono }}</td>\r\n                    <td>{{ value.ciudad }}</td>\r\n                    <td>{{ value.avaluo }}</td>\r\n                    <td>{{ value.hipoteca === true ? 'Si' : 'No' }}</td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateBienInmueble(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteBienInmueble(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- card bienes muebles -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Patrimonio - Bienes Muebles</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"bienMuebleModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i> Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>clase</th>\r\n                    <th>modelo</th>\r\n                    <th>placa</th>\r\n                    <th>avalúo</th>\r\n                    <th>pignorado</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of bienesMuebles\">\r\n                    <td> {{ value.clase }}</td>\r\n                    <td> {{ value.modelo }}</td>\r\n                    <td> {{ value.placa }}</td>\r\n                    <td> {{ value.avaluo }}</td>\r\n                    <td> {{ value.pignorado === true ? 'Si' : 'No' }}</td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateBienMueble(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteBienMueble(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- card referencias bancarias -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Referencias bancarias</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"refBancariaModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                    <th>entidad</th>\r\n                    <th>tipo de cuenta</th>\r\n                    <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of refBancarias\">\r\n                    <td> {{ value.entidad }} </td>\r\n                    <td> {{ value.tipoCuenta }} </td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateRefBancaria(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteRefBancaria(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- card capacidad endeudamiento -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-6 col-form-label\">\r\n                <b>Capacidad de endeudamiento</b>\r\n              </label>\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"form-group text-right\">\r\n                  <button (click)=\"capDeudasModal.showModal = true\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus\"></i>\r\n                    Agregar\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-sm-12 mt-2\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead class=\"text-capitalize\">\r\n                  <th>descripción</th>\r\n                  <th>entidad</th>\r\n                  <th>monto</th>\r\n                  <th>estado deuda</th>\r\n                  <th>valor mensual</th>\r\n                  <th class=\"acciones\">acciones</th>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let value of capEndeudamiento\">\r\n                    <td> {{ value.descripcion }}</td>\r\n                    <td> {{ value.entidad }}</td>\r\n                    <td> {{ value.monto }}</td>\r\n                    <td> {{ value.estadoDeuda }}</td>\r\n                    <td> {{ value.valorMensual }}</td>\r\n                    <td class=\"acciones\">\r\n                      <div class=\"text-center\">\r\n                        <button class=\"btn btn-primary mr-2\" (click)=\"updateCapEndeudamiento(value.id)\">\r\n                          <i class=\"fa fa-edit\"></i>\r\n                        </button>\r\n\r\n                        <button class=\"btn btn-danger ml-2\" (click)=\"deleteCapEndeudamiento(value.id)\">\r\n                          <i class=\"fa fa-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Analisis patrimonial</b>\r\n            <hr>\r\n            <!-- nombre evaluado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\" for=\"analisisPatrimonial\">\r\n                Análisis e interpretación patrimonial\r\n                y financiera teniendo en cuenta la\r\n                condición socioeconómica del\r\n                candidato\r\n              </label>\r\n              <div class=\"col-sm-8\">\r\n                <textarea name=\"analisisPatrimonial\"\r\n                          id=\"analisisPatrimonial\" rows=\"3\"\r\n                          class=\"form-control\" formControlName=\"analisisPatrimonial\"\r\n                          placeholder=\"Ingrese el analisis\">\r\n                </textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['analisisPatrimonial'].invalid &&\r\n                     form.controls['analisisPatrimonial'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-footer bg-white\">\r\n          <div class=\"form-group text-center\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 mx-auto\">\r\n                <button *ngIf=\"permissions.FRCE && estado == 'aceptado'\"\r\n                        class=\"btn btn-danger\"\r\n                        [disabled]=\"form.invalid\"\r\n                        (click)=\"onSubmit()\">\r\n                  <i class=\"fa fa-save\"></i>\r\n                  Guardar\r\n                </button>\r\n                <button *ngIf=\"(permissions.FRCE && estado == 'proceso') || (permissions.AESP || permissions.ADG && estado == 'notificado')\"\r\n                        class=\"btn btn-warning\"\r\n                        [disabled]=\"form.invalid\"\r\n                        (click)=\"onUpdate()\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                  Actualizar\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"permissions.AESP || permissions.ADG && estado == 'notificado'\">\r\n            <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- Modal bien inmueble -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': bienInmuebleModal.showModal, 'd-none': !bienInmuebleModal.showModal}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': bienInmuebleModal.showModal, 'd-none': !bienInmuebleModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Información familiar</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalBienInmueble()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"bienInmuebleForm\">\r\n\r\n          <!-- tipo -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-tipo\">Tipo</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bi-tipo\"\r\n                     name=\"tipo\"\r\n                     formControlName=\"tipo\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienInmuebleForm.get('tipo').invalid &&\r\n                     bienInmuebleForm.get('tipo').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- direccion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-direccion\">Dirección</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bi-direccion\"\r\n                     name=\"direccion\"\r\n                     formControlName=\"direccion\"\r\n                     placeholder=\"Ingrese una dirección valida\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienInmuebleForm.get('direccion').invalid &&\r\n                     bienInmuebleForm.get('direccion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- telefono -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-telefono\">Telefono</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bi-telefono\"\r\n                     name=\"telefono\"\r\n                     formControlName=\"telefono\"\r\n                     placeholder=\"Ingrese un telefono valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienInmuebleForm.get('telefono').invalid &&\r\n                     bienInmuebleForm.get('telefono').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ciudad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-ciudad\">Ciudad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bi-ciudad\"\r\n                     name=\"ciudad\"\r\n                     formControlName=\"ciudad\"\r\n                     placeholder=\"Ingrese una ciudad valida\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienInmuebleForm.get('ciudad').invalid &&\r\n                     bienInmuebleForm.get('ciudad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- avaluo -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-avaluo\">Avaluo</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"bi-avaluo\"\r\n                     name=\"avaluo\"\r\n                     formControlName=\"avaluo\"\r\n                     placeholder=\"Ingrese una valor valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienInmuebleForm.get('avaluo').invalid &&\r\n                     bienInmuebleForm.get('avaluo').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- hipoteca -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bi-hipoteca\">hipoteca</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"hipoteca\"\r\n                       id=\"bi-hipoteca\" [value]=\"true\">\r\n                <label class=\"form-check-label\" for=\"bi-hipoteca\">Si</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"hipoteca\"\r\n                       id=\"bi-hipoteca!\" [value]=\"false\">\r\n                <label class=\"form-check-label\" for=\"bi-hipoteca!\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalBienInmueble()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"bienInmuebleForm.invalid\" (click)=\"refreshBienInmueble()\" *ngIf=\"bienInmuebleModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"bienInmuebleForm.invalid\" (click)=\"addBienInmueble()\" *ngIf=\"!bienInmuebleModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal bien mueble -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': bienMuebleModal.showModal, 'd-none': !bienMuebleModal.showModal}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': bienMuebleModal.showModal, 'd-none': !bienMuebleModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Bienes Muebles</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalBienMueble()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"bienMuebleForm\">\r\n\r\n          <!-- clase -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-clase\">Clase</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bm-clase\"\r\n                     name=\"clase\"\r\n                     formControlName=\"clase\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienMuebleForm.get('clase').invalid &&\r\n                     bienMuebleForm.get('clase').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- modelo -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-modelo\">Modelo</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bm-modelo\"\r\n                     name=\"modelo\"\r\n                     formControlName=\"modelo\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienMuebleForm.get('modelo').invalid &&\r\n                     bienMuebleForm.get('modelo').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- placa -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-placa\">Placa</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bm-placa\"\r\n                     name=\"placa\"\r\n                     formControlName=\"placa\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienMuebleForm.get('placa').invalid &&\r\n                     bienMuebleForm.get('placa').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- avaluo -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-avaluo\">Avalúo</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"bm-avaluo\"\r\n                     name=\"avaluo\"\r\n                     formControlName=\"avaluo\"\r\n                     placeholder=\"Ingrese un numero valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(bienMuebleForm.get('avaluo').invalid &&\r\n                     bienMuebleForm.get('avaluo').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- pignorado -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-pignorado\">Pignorado</label>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"pignorado\"\r\n                       id=\"bm-pignorado\" [value]=\"true\">\r\n                <label class=\"form-check-label\" for=\"bm-pignorado\">Si</label>\r\n              </div>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\"\r\n                       type=\"radio\"\r\n                       formControlName=\"pignorado\"\r\n                       id=\"bm-pignorado!\" [value]=\"false\">\r\n                <label class=\"form-check-label\" for=\"bm-pignorado!\">No</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalBienMueble()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"bienMuebleForm.invalid\" (click)=\"refreshBienMueble()\" *ngIf=\"bienMuebleModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"bienMuebleForm.invalid\" (click)=\"addBienMueble()\" *ngIf=\"!bienMuebleModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal referencias bancarias -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': refBancariaModal.showModal, 'd-none': !refBancariaModal.showModal}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': refBancariaModal.showModal, 'd-none': !refBancariaModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Bienes Muebles</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalRefBancaria()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"refBancariaForm\">\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-entidad\">Entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bm-entidad\"\r\n                     name=\"entidad\"\r\n                     formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(refBancariaForm.get('entidad').invalid &&\r\n                     refBancariaForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- tipoCuenta -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"bm-tipoCuenta\">Tipo de Cuenta</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"bm-tipoCuenta\"\r\n                     name=\"tipoCuenta\"\r\n                     formControlName=\"tipoCuenta\"\r\n                     placeholder=\"Ingrese un dato valido\"\r\n                     required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(refBancariaForm.get('tipoCuenta').invalid &&\r\n                     refBancariaForm.get('tipoCuenta').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalRefBancaria()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"refBancariaForm.invalid\" (click)=\"refreshRefBancaria()\" *ngIf=\"refBancariaModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"refBancariaForm.invalid\" (click)=\"addRefBancaria()\" *ngIf=\"!refBancariaModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal capacidad endeudamiento -->\r\n\r\n<div class=\"d-none\" [ngClass]=\"{'modal-backdrop show fade': capDeudasModal.showModal, 'd-none': !capDeudasModal.showModal}\"></div>\r\n\r\n<div  class=\"d-none\" [ngClass]=\"{'modal fade modal-container show d-block': capDeudasModal.showModal, 'd-none': !capDeudasModal.showModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Bienes Muebles</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModalCapEndeudamiento()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"capEndeudamientoForm\">\r\n\r\n          <!-- Descripcion -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cap-descripcion\">Descripcion</label>\r\n            <div class=\"col-sm-9\">\r\n              <select name=\"descripcion\" id=\"cap-descripcion\"\r\n                      class=\"form-control text-capitalize\"\r\n                      formControlName=\"descripcion\">\r\n                <option value=\"\">Seleccione</option>\r\n                <option>tarjeta de credito</option>\r\n                <option>credito hipotecario</option>\r\n                <option>credito libre inversión</option>\r\n              </select>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(capEndeudamientoForm.get('descripcion').invalid &&\r\n                     capEndeudamientoForm.get('descripcion').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- entidad -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cap-entidad\">Entidad</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"cap-entidad\"\r\n                     name=\"entidad\" formControlName=\"entidad\"\r\n                     placeholder=\"Ingrese un dato valido\" required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(capEndeudamientoForm.get('entidad').invalid &&\r\n                     capEndeudamientoForm.get('entidad').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- monto -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cap-monto\">Monto</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"cap-monto\"\r\n                     name=\"monto\" formControlName=\"monto\"\r\n                     placeholder=\"Ingrese un dato valido\" required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(capEndeudamientoForm.get('monto').invalid &&\r\n                     capEndeudamientoForm.get('monto').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- estadoDeuda -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cap-estadoDeuda\">Estado de Deuda</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"text\" class=\"form-control\"\r\n                     id=\"cap-estadoDeuda\"\r\n                     name=\"estadoDeuda\" formControlName=\"estadoDeuda\"\r\n                     placeholder=\"Ingrese un dato valido\" required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(capEndeudamientoForm.get('estadoDeuda').invalid &&\r\n                     capEndeudamientoForm.get('estadoDeuda').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- valorMensual -->\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-sm-3 col-form-label\" for=\"cap-valorMensual\">Valor Mensual</label>\r\n            <div class=\"col-sm-9\">\r\n              <input type=\"number\" class=\"form-control\"\r\n                     id=\"cap-valorMensual\"\r\n                     name=\"valorMensual\" formControlName=\"valorMensual\"\r\n                     placeholder=\"Ingrese un numero valido\" required>\r\n              <div class=\"ng-invalid-feedback\"\r\n                   *ngIf=\"(capEndeudamientoForm.get('valorMensual').invalid &&\r\n                     capEndeudamientoForm.get('valorMensual').dirty)\">\r\n                El campo es requerido\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModalCapEndeudamiento()\">Cerrar</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" [disabled]=\"capEndeudamientoForm.invalid\" (click)=\"refreshCapEndeudamiento()\" *ngIf=\"capDeudasModal.isUpdate\">Actualizar</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"capEndeudamientoForm.invalid\" (click)=\"addCapEndeudamiento()\" *ngIf=\"!capDeudasModal.isUpdate\">Guardar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ModusVivendiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModusVivendiComponent", function() { return ModusVivendiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_esp_actividades_visita_domiciliaria_modus_vivendi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/esp/actividades/visita-domiciliaria/modus-vivendi.service */ "./src/app/services/esp/actividades/visita-domiciliaria/modus-vivendi.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModusVivendiComponent = /** @class */ (function (_super) {
    __extends(ModusVivendiComponent, _super);
    function ModusVivendiComponent(_actividades, _modusVivendi, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this._modusVivendi = _modusVivendi;
        _this._ngxPermissions = _ngxPermissions;
        _this.bienInmuebleModal = {
            showModal: false,
            isUpdate: false
        };
        _this.bienMuebleModal = {
            showModal: false,
            isUpdate: false
        };
        _this.refBancariaModal = {
            showModal: false,
            isUpdate: false
        };
        _this.capDeudasModal = {
            showModal: false,
            isUpdate: false
        };
        _this.bienesInmuebles = [];
        _this.bienesMuebles = [];
        _this.refBancarias = [];
        _this.capEndeudamiento = [];
        _this.codigo = 'VDS';
        return _this;
    }
    ModusVivendiComponent.prototype.ngOnInit = function () {
        this.form = this._modusVivendi.modusVivendiForm;
        this.bienInmuebleForm = this._modusVivendi.bienInmuebleForm;
        this.bienMuebleForm = this._modusVivendi.bienMuebleForm;
        this.refBancariaForm = this._modusVivendi.refBancariaForm;
        this.capEndeudamientoForm = this._modusVivendi.capEndeudamientoForm;
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        this.getValue();
    };
    ModusVivendiComponent.prototype.getValue = function () {
        var _this = this;
        this._modusVivendi.get(this.servicioEsp)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this._modusVivendi.getBienesInmuebles(_this.servicioEsp)
                .subscribe(function (res) { return _this.bienesInmuebles = res.servicios; });
            _this._modusVivendi.getBienesMuebles(_this.servicioEsp)
                .subscribe(function (res) { return _this.bienesMuebles = res.servicios; });
            _this._modusVivendi.getRefBancarias(_this.servicioEsp)
                .subscribe(function (res) { return _this.refBancarias = res.servicios; });
            _this._modusVivendi.getCapEndeudamiento(_this.servicioEsp)
                .subscribe(function (res) { return _this.capEndeudamiento = res.servicios; });
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function () {
            _this.estado = 'aceptado';
        });
    };
    ModusVivendiComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        // se guarda la informacion
        this._modusVivendi.post(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            alert('Se han guardado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    ModusVivendiComponent.prototype.onUpdate = function () {
        var _this = this;
        var id = this.form.get('id').value;
        var data = this.form.value;
        this._modusVivendi.put(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.estado = value.servicios.estado;
            }
            alert('Se han actualizado los datos exitosamente');
            _this.form.reset();
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function (err) { return _this._actividades.handleError(err); });
    };
    // bienesInmuebles form
    ModusVivendiComponent.prototype.addBienInmueble = function () {
        var _this = this;
        this._modusVivendi.postBienInmueble(this.servicioEsp, this.bienInmuebleForm.value)
            .subscribe(function (res) {
            _this.bienesInmuebles.push(res.servicios);
            _this.closeModalBienInmueble();
        });
    };
    ModusVivendiComponent.prototype.updateBienInmueble = function (id) {
        var item = null;
        this.bienesInmuebles.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.bienInmuebleModal.showModal = true;
        this.bienInmuebleModal.isUpdate = true;
        this.bienInmuebleForm.setValue(item);
    };
    ModusVivendiComponent.prototype.refreshBienInmueble = function () {
        var _this = this;
        var id = this.bienInmuebleForm.get('id').value;
        this._modusVivendi.putBienInmueble(this.servicioEsp, id, this.bienInmuebleForm.value)
            .subscribe(function (res) {
            _this.bienesInmuebles = _this.bienesInmuebles
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalBienInmueble();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    ModusVivendiComponent.prototype.deleteBienInmueble = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._modusVivendi.deleteBienInmueble(this.servicioEsp, id)
                .subscribe(function () {
                _this.bienesInmuebles = _this.bienesInmuebles.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    ModusVivendiComponent.prototype.closeModalBienInmueble = function () {
        this.bienInmuebleForm.reset();
        this.bienInmuebleModal.showModal = false;
        this.bienInmuebleModal.isUpdate = false;
    };
    // bienes Muebles form
    ModusVivendiComponent.prototype.addBienMueble = function () {
        var _this = this;
        this._modusVivendi.postBienMueble(this.servicioEsp, this.bienMuebleForm.value)
            .subscribe(function (res) {
            _this.bienesMuebles.push(res.servicios);
            _this.closeModalBienMueble();
        });
    };
    ModusVivendiComponent.prototype.updateBienMueble = function (id) {
        var item = null;
        this.bienesMuebles.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.bienMuebleModal.showModal = true;
        this.bienMuebleModal.isUpdate = true;
        this.bienMuebleForm.setValue(item);
    };
    ModusVivendiComponent.prototype.refreshBienMueble = function () {
        var _this = this;
        var id = this.bienMuebleForm.get('id').value;
        this._modusVivendi.putBienMueble(this.servicioEsp, id, this.bienMuebleForm.value)
            .subscribe(function (res) {
            _this.bienesMuebles = _this.bienesMuebles
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalBienMueble();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    ModusVivendiComponent.prototype.deleteBienMueble = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._modusVivendi.deleteBienMueble(this.servicioEsp, id)
                .subscribe(function () {
                _this.bienesMuebles = _this.bienesMuebles.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    ModusVivendiComponent.prototype.closeModalBienMueble = function () {
        this.bienMuebleForm.reset();
        this.bienMuebleModal.showModal = false;
        this.bienMuebleModal.isUpdate = false;
    };
    // referencias form
    ModusVivendiComponent.prototype.addRefBancaria = function () {
        var _this = this;
        this._modusVivendi.postRefBancaria(this.servicioEsp, this.refBancariaForm.value)
            .subscribe(function (res) {
            _this.refBancarias.push(res.servicios);
            _this.closeModalRefBancaria();
        });
    };
    ModusVivendiComponent.prototype.updateRefBancaria = function (id) {
        var item = null;
        this.refBancarias.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.refBancariaModal.showModal = true;
        this.refBancariaModal.isUpdate = true;
        this.refBancariaForm.setValue(item);
    };
    ModusVivendiComponent.prototype.refreshRefBancaria = function () {
        var _this = this;
        var id = this.refBancariaForm.get('id').value;
        this._modusVivendi.putRefBancaria(this.servicioEsp, id, this.refBancariaForm.value)
            .subscribe(function (res) {
            _this.refBancarias = _this.refBancarias
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalRefBancaria();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    ModusVivendiComponent.prototype.deleteRefBancaria = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._modusVivendi.deleteRefBancaria(this.servicioEsp, id)
                .subscribe(function () {
                _this.refBancarias = _this.refBancarias.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    ModusVivendiComponent.prototype.closeModalRefBancaria = function () {
        this.refBancariaForm.reset();
        this.refBancariaModal.showModal = false;
        this.refBancariaModal.isUpdate = false;
    };
    // capacidad endeudamiento form
    ModusVivendiComponent.prototype.addCapEndeudamiento = function () {
        var _this = this;
        this._modusVivendi.postCapEndeudamiento(this.servicioEsp, this.capEndeudamientoForm.value)
            .subscribe(function (res) {
            _this.capEndeudamiento.push(res.servicios);
            _this.closeModalCapEndeudamiento();
        });
    };
    ModusVivendiComponent.prototype.updateCapEndeudamiento = function (id) {
        var item = null;
        this.capEndeudamiento.forEach(function (value) {
            if (value.id === id) {
                item = value;
                return;
            }
        });
        this.capDeudasModal.showModal = true;
        this.capDeudasModal.isUpdate = true;
        this.capEndeudamientoForm.setValue(item);
    };
    ModusVivendiComponent.prototype.refreshCapEndeudamiento = function () {
        var _this = this;
        var id = this.capEndeudamientoForm.get('id').value;
        this._modusVivendi.putCapEndeudamiento(this.servicioEsp, id, this.capEndeudamientoForm.value)
            .subscribe(function (res) {
            _this.capEndeudamiento = _this.capEndeudamiento
                .map(function (value) { return value.id === res.servicios.id ? res.servicios : value; });
            _this.closeModalCapEndeudamiento();
            alert('Datos actualizados correctamente');
        }, function (error) { return _this._actividades.handleError(error); });
    };
    ModusVivendiComponent.prototype.deleteCapEndeudamiento = function (id) {
        var _this = this;
        var confirm = window.confirm('Eliminar definitivamente?');
        if (confirm) {
            this._modusVivendi.deleteCapEndeudamiento(this.servicioEsp, id)
                .subscribe(function () {
                _this.capEndeudamiento = _this.capEndeudamiento.filter(function (value) { return value.id !== id; });
            }, function (error) { return _this._actividades.handleError(error); });
        }
    };
    ModusVivendiComponent.prototype.closeModalCapEndeudamiento = function () {
        this.capEndeudamientoForm.reset();
        this.capDeudasModal.showModal = false;
        this.capDeudasModal.isUpdate = false;
    };
    ModusVivendiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modus-vivendi',
            template: __webpack_require__(/*! ./modus-vivendi.component.html */ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.html"),
            styles: [__webpack_require__(/*! ./modus-vivendi.component.css */ "./src/app/pages/actividades/visita-domiciliaria/modus-vivendi/modus-vivendi.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_1__["ActividadesService"],
            _services_esp_actividades_visita_domiciliaria_modus_vivendi_service__WEBPACK_IMPORTED_MODULE_4__["ModusVivendiService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"]])
    ], ModusVivendiComponent);
    return ModusVivendiComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_3__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3Zpc2l0YS1kb21pY2lsaWFyaWEvc2VndXJpZGFkL3NlZ3VyaWRhZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mx-auto animated fade-in\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-white\">\r\n        <h4>Visita domiciliaria de seguridad</h4>\r\n      </div>\r\n      <div class=\"card-body bg-light\">\r\n        <!--<div class=\"card\">\r\n\r\n\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Información personal</b>\r\n            <hr>\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"nombreEvaluado\">Nombre del evaluado</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"nombreEvaluado\"\r\n                       name=\"nombreEvaluado\"\r\n                       formControlName=\"nombreEvaluado\"\r\n                       placeholder=\"Ingrese el nombre del evaluado\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['nombreEvaluado'].invalid &&\r\n                     form.controls['nombreEvaluado'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"documentoIdentidad\">Documento de identidad</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"documentoIdentidad\"\r\n                       name=\"documentoIdentidad\"\r\n                       formControlName=\"documentoIdentidad\"\r\n                       placeholder=\"Ingrese el documento de identidad\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['documentoIdentidad'].invalid &&\r\n                     form.controls['documentoIdentidad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"fechaExpedicion\">Fecha Expedición</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"date\" class=\"form-control\"\r\n                       id=\"fechaExpedicion\"\r\n                       name=\"fechaExpedicion\"\r\n                       formControlName=\"fechaExpedicion\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['fechaExpedicion'].invalid &&\r\n                     form.controls['fechaExpedicion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"lugarExpedicion\">Lugar Expedición\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"lugarExpedicion\"\r\n                       name=\"lugarExpedicion\"\r\n                       formControlName=\"lugarExpedicion\"\r\n                       placeholder=\"Lugar de expedicion del documento\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['lugarExpedicion'].invalid &&\r\n                     form.controls['lugarExpedicion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"fechaNacimiento\">Fecha de Nacimiento</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"date\" class=\"form-control\"\r\n                       id=\"fechaNacimiento\"\r\n                       name=\"fechaNacimiento\"\r\n                       formControlName=\"fechaNacimiento\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['fechaNacimiento'].invalid &&\r\n                     form.controls['fechaNacimiento'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"lugarNacimiento\">Lugar de Nacimiento</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"lugarNacimiento\"\r\n                       name=\"lugarNacimiento\"\r\n                       formControlName=\"lugarNacimiento\"\r\n                       placeholder=\"Ingrese el lugar de nacimiento\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['lugarExpedicion'].invalid &&\r\n                     form.controls['lugarExpedicion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"edad\">Edad</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"edad\"\r\n                       name=\"edad\"\r\n                       formControlName=\"edad\"\r\n                       placeholder=\"Ingrese la edad\"\r\n                       required #edad>\r\n                <div *ngIf=\"(form.controls['edad'].invalid)\">\r\n                  <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls['edad'].dirty && form.controls['edad'].value == null)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                  <div class=\"ng-invalid-feedback\" *ngIf=\"(form.controls['edad'].dirty && form.controls['edad'].value != null)\">\r\n                    Ingrese un dato valido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"libretaMilitar\">Libreta Militar</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"libretaMilitar\"\r\n                       name=\"libretaMilitar\"\r\n                       formControlName=\"libretaMilitar\"\r\n                       placeholder=\"Ingrese la libreta Militar\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['libretaMilitar'].invalid &&\r\n                     form.controls['libretaMilitar'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"claseDistrito\">Clase - Distrito\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"claseDistrito\"\r\n                       name=\"claseDistrito\"\r\n                       formControlName=\"claseDistrito\"\r\n                       placeholder=\"Ingrese la clase distrito\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['claseDistrito'].invalid &&\r\n                     form.controls['claseDistrito'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"licenciaConduccion\">Licencia de conducción</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"licenciaConduccion\"\r\n                       name=\"licenciaConduccion\"\r\n                       formControlName=\"licenciaConduccion\"\r\n                       placeholder=\"Ingrese la licencia de conducción\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['licenciaConduccion'].invalid &&\r\n                     form.controls['licenciaConduccion'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"categoriaClase\">Categoría - Clase\t</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"categoriaClase\"\r\n                       name=\"categoriaClase\"\r\n                       formControlName=\"categoriaClase\"\r\n                       placeholder=\"Ingrese la categoría - Clase\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['categoriaClase'].invalid &&\r\n                     form.controls['categoriaClase'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"estadoCivil\">Estado Civil</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"estadoCivil\"\r\n                       name=\"estadoCivil\"\r\n                       formControlName=\"estadoCivil\"\r\n                       placeholder=\"Ingrese el estado Civil\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['estadoCivil'].invalid &&\r\n                     form.controls['estadoCivil'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"celular\">Celular</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"celular\"\r\n                       name=\"celular\"\r\n                       formControlName=\"celular\"\r\n                       placeholder=\"Ingrese el número de celular\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['celular'].invalid &&\r\n                     form.controls['celular'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"telefono\">Teléfono</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"number\" class=\"form-control\"\r\n                       id=\"telefono\"\r\n                       name=\"telefono\"\r\n                       formControlName=\"telefono\"\r\n                       placeholder=\"Ingrese el número de teléfono\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['telefono'].invalid &&\r\n                     form.controls['telefono'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"direccionActual\">Dirección Actual</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"direccionActual\"\r\n                       name=\"direccionActual\"\r\n                       formControlName=\"direccionActual\"\r\n                       placeholder=\"Ingrese la dirección actual\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['direccionActual'].invalid &&\r\n                     form.controls['direccionActual'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"barrio\">Barrio</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"barrio\"\r\n                       name=\"barrio\"\r\n                       formControlName=\"barrio\"\r\n                       placeholder=\"Ingrese el barrio\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['barrio'].invalid &&\r\n                     form.controls['barrio'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"localidad\">Localidad</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"localidad\"\r\n                       name=\"localidad\"\r\n                       formControlName=\"localidad\"\r\n                       placeholder=\"Ingrese la localidad\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['localidad'].invalid &&\r\n                     form.controls['localidad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"ciudad\">Ciudad</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"text\" class=\"form-control\"\r\n                       id=\"ciudad\"\r\n                       name=\"ciudad\"\r\n                       formControlName=\"ciudad\"\r\n                       placeholder=\"Ingrese la ciudad\"\r\n                       required>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['ciudad'].invalid &&\r\n                     form.controls['ciudad'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"email\">E-Mail</label>\r\n              <div class=\"col-sm-9\">\r\n                <input type=\"email\" class=\"form-control\"\r\n                       id=\"email\"\r\n                       name=\"email\"\r\n                       formControlName=\"email\"\r\n                       placeholder=\"Ingrese el e-mail\"\r\n                       required #email>\r\n                <div *ngIf=\"form.controls['email'].invalid\">\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(email.value == '' && form.controls['email'].dirty)\">\r\n                    El campo es requerido\r\n                  </div>\r\n                  <div class=\"ng-invalid-feedback\"\r\n                       *ngIf=\"(email.value != '' && form.controls['email'].dirty)\">\r\n                    Ingrese un correo valido\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>-->\r\n\r\n\r\n        <!-- verificacion documental card -->\r\n        <div class=\"card mt-3\">\r\n          <div class=\"card-body \">\r\n            <b class=\"card-title\">Verificación documental</b>\r\n            <hr>\r\n            <!-- is cedula -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Cedula de ciudadania:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"documento\" id=\"isDocumentoy\"\r\n                         [value]=\"true\" formControlName=\"documento\">\r\n                  <label class=\"form-check-label\" for=\"isDocumentoy\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"documento\" id=\"isDocumenton\"\r\n                         [value]=\"false\" formControlName=\"documento\">\r\n                  <label class=\"form-check-label\" for=\"isDocumenton\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is libreta militar -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Libreta militar:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"libretaMilitar\" id=\"isLibretaMilitary\"\r\n                         [value]=\"true\" formControlName=\"libretaMilitar\">\r\n                  <label class=\"form-check-label\" for=\"isLibretaMilitary\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"libretaMilitar\" id=\"isLibretaMilitarn\"\r\n                         [value]=\"false\" formControlName=\"libretaMilitar\">\r\n                  <label class=\"form-check-label\" for=\"isLibretaMilitarn\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is licencia de conducion -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Licencia de conducción:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"licenciaConduccion\" id=\"isLicenciaConducciony\"\r\n                         [value]=\"true\" formControlName=\"licenciaConduccion\">\r\n                  <label class=\"form-check-label\" for=\"isLicenciaConducciony\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"licenciaConduccion\" id=\"isLicenciaConduccionn\"\r\n                         [value]=\"false\" formControlName=\"licenciaConduccion\">\r\n                  <label class=\"form-check-label\" for=\"isLicenciaConduccionn\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is tarjeta profecional -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Tarjeta profecional:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"tarjetaProfesional\" id=\"isTarjetaProfecionaly\"\r\n                         [value]=\"true\" formControlName=\"tarjetaProfesional\">\r\n                  <label class=\"form-check-label\" for=\"isTarjetaProfecionaly\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"tarjetaProfesional\" id=\"isTarjetaProfecionaln\"\r\n                         [value]=\"false\" formControlName=\"tarjetaProfesional\">\r\n                  <label class=\"form-check-label\" for=\"isTarjetaProfecionaln\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is Diploma bachiller -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Diploma bachiller:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaBachiller\" id=\"isDiplomaBachillery\"\r\n                         [value]=\"true\" formControlName=\"diplomaBachiller\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaBachillery\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaBachiller\" id=\"isDiplomaBachillern\"\r\n                         [value]=\"false\" formControlName=\"diplomaBachiller\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaBachillern\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is Diploma tecnico -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Diploma tecnico:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaTecnico\" id=\"isDiplomaTecnicoy\"\r\n                         [value]=\"true\" formControlName=\"diplomaTecnico\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaTecnicoy\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaTecnico\" id=\"isDiplomaTecnicon\"\r\n                         [value]=\"false\" formControlName=\"diplomaTecnico\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaTecnicon\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is Diploma pregrado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Diploma pregrado:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaTecnologo\" id=\"isDiplomaPregrado\"\r\n                         [value]=\"true\" formControlName=\"diplomaTecnologo\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaPregrado\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaTecnologo\" id=\"isDiplomaPregradon\"\r\n                         [value]=\"false\" formControlName=\"diplomaTecnologo\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaPregradon\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is Diploma postgrado -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Diploma postgrado:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaPregrado\" id=\"isDiplomaPostgradoy\"\r\n                         [value]=\"true\" formControlName=\"diplomaPregrado\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaPostgradoy\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaPregrado\" id=\"isDiplomaPostgradon\"\r\n                         [value]=\"false\" formControlName=\"diplomaPregrado\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaPostgradon\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- is Diploma cursos -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-4 col-form-label\">Diploma cursos:</label>\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaCursos\" id=\"isDiplomaCursos\"\r\n                         [value]=\"true\" formControlName=\"diplomaCursos\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaCursos\">Si</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\"\r\n                         name=\"diplomaCursos\" id=\"isDiplomaCursosn\"\r\n                         [value]=\"false\" formControlName=\"diplomaCursos\">\r\n                  <label class=\"form-check-label\" for=\"isDiplomaCursosn\">No</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- observaciones  -->\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-3 col-form-label\" for=\"observaciones\">Observaciones</label>\r\n              <div class=\"col-sm-9\">\r\n                <textarea class=\"form-control\" name=\"observaciones\" id=\"observaciones\" cols=\"30\" rows=\"3\" formControlName=\"observaciones\"></textarea>\r\n                <div class=\"ng-invalid-feedback\"\r\n                     *ngIf=\"(form.controls['observaciones'].invalid &&\r\n                     form.controls['observaciones'].dirty)\">\r\n                  El campo es requerido\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"card-footer bg-white\">\r\n        <div class=\"form-group text-center\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mx-auto\">\r\n              <button *ngIf=\"permissions.FRCE && estado == 'aceptado'\"\r\n                      class=\"btn btn-danger\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onSubmit()\">\r\n                <i class=\"fa fa-save\"></i>\r\n                Guardar\r\n              </button>\r\n              <button *ngIf=\"(permissions.FRCE && estado == 'proceso') || (permissions.AESP || permissions.ADG && estado == 'notificado')\"\r\n                      class=\"btn btn-warning\"\r\n                      [disabled]=\"form.invalid\"\r\n                      (click)=\"onUpdate()\">\r\n                <i class=\"fa fa-edit\"></i>\r\n                Actualizar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"permissions.AESP || permissions.ADG && actividad.estado == 'notificado'\">\r\n          <span class=\"text-primary d-block\">Fecha de notificacion: {{ actividad.timestamps.fechaActualizacion.date | date:'short' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SeguridadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadComponent", function() { return SeguridadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var _services_esp_actividades_visita_domiciliaria_seguridad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/esp/actividades/visita-domiciliaria/seguridad.service */ "./src/app/services/esp/actividades/visita-domiciliaria/seguridad.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeguridadComponent = /** @class */ (function (_super) {
    __extends(SeguridadComponent, _super);
    function SeguridadComponent(_actividades, dataService, _seguridad, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this.dataService = dataService;
        _this._seguridad = _seguridad;
        _this._ngxPermissions = _ngxPermissions;
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            /**nombreEvaluado                  : new FormControl('', Validators.required),
            documentoIdentidad              : new FormControl('', Validators.required),
            fechaExpedicion                 : new FormControl('', Validators.required),
            lugarExpedicion                 : new FormControl('', Validators.required),
            fechaNacimiento                 : new FormControl('', Validators.required),
            lugarNacimiento                 : new FormControl('', Validators.required),
            edad                            : new FormControl('', [Validators.required, Validators.max(120), Validators.min(0)]),
            libretaMilitar                  : new FormControl('', Validators.required),
            claseDistrito                   : new FormControl('', Validators.required),
            licenciaConduccion              : new FormControl('', Validators.required),
            categoriaClase                  : new FormControl('', Validators.required),
            estadoCivil                     : new FormControl('', Validators.required),
            celular                         : new FormControl('', Validators.required),
            telefono                        : new FormControl('', Validators.required),
            direccionActual                 : new FormControl('', Validators.required),
            barrio                          : new FormControl('', Validators.required),
            localidad                       : new FormControl('', Validators.required),
            ciudad                          : new FormControl('', Validators.required),
            email                           : new FormControl('', [Validators.required, Validators.email])*/
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            documento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            libretaMilitar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            licenciaConduccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tarjetaProfesional: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaBachiller: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaTecnico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaTecnologo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaPregrado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaPostgrado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            diplomaCursos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        _this.codigo = 'VDS';
        return _this;
    }
    SeguridadComponent.prototype.ngOnInit = function () {
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        this.getValue();
    };
    SeguridadComponent.prototype.getValue = function () {
        var _this = this;
        // Solicitud get al servidor
        this._seguridad.get(this.servicioEsp)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
        }, function () { return _this.estado = 'aceptado'; });
    };
    SeguridadComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = this.form.value;
        // se guarda la informacion
        this._seguridad.post(this.servicioEsp, data)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            alert('Se han guardado los datos exitosamente');
        }, function (err) { return alert('Ocurrio un error inesperado. Intentelo de nuevo'); });
    };
    SeguridadComponent.prototype.onUpdate = function () {
        var _this = this;
        var id = this.form.get('id').value;
        var data = this.form.value;
        // se guarda los datos
        this._seguridad.put(this.servicioEsp, id, data)
            .subscribe(function (value) {
            if (_this.permissions.FRCE) {
                _this.estado = value.servicios.estado;
            }
            _this.form.setValue(_this._actividades.transformResponse(value.servicios));
            alert('Se han actualizado los datos exitosamente');
        }, function (err) { return _this._actividades.handleError(err); });
    };
    SeguridadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seguridad',
            template: __webpack_require__(/*! ./seguridad.component.html */ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.html"),
            styles: [__webpack_require__(/*! ./seguridad.component.css */ "./src/app/pages/actividades/visita-domiciliaria/seguridad/seguridad.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_2__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_esp_actividades_visita_domiciliaria_seguridad_service__WEBPACK_IMPORTED_MODULE_6__["SeguridadService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]])
    ], SeguridadComponent);
    return SeguridadComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_5__["ActividadClass"]));



/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aWRhZGVzL3Zpc2l0YS1kb21pY2lsaWFyaWEvdmlzaXRhLWRvbWljaWxpYXJpYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- cuando la actividad a sido asignada y esta en espera de aceptacion-->\r\n<ng-template [ngxPermissionsOnly]=\"['ADG', 'DOPE', 'AESP']\">\r\n  <div *ngIf=\"actividad.estado == 'proceso'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad Asignada\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            Pendiente por: <b>{{ actividad.actividadAsignada.usuarioNombre }}</b>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- freelance view -->\r\n<ng-template ngxPermissionsOnly=\"FRCE\">\r\n\r\n\r\n  <!-- cuando la actividad se ha vencido -->\r\n  <div *ngIf=\"actividad.estado == 'alerta'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad vencida\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <div class=\"alert alert-danger\" role=\"alert\">\r\n              <span class=\"text-danger d-block\">La actividad se ha vencido. por favor pongase en contacto con Total Security Services</span>\r\n              <span class=\"text-danger d-block\">Fecha de vencimiento: {{ actividad.actividadAsignada.timestamps.fechaActualizacion }}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- aceptar actividad freelance -->\r\n  <div *ngIf=\"actividad.estado == 'asignado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Aceptar Actividad\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">Fecha de asignacion: {{ actividad.actividadAsignada.timestamps.fechaCreacion}}</span>\r\n          </div>\r\n          <div class=\"form-group text-center\">\r\n            <button class=\"btn btn-primary\" (click)=\"onAceptarActividad()\">\r\n              <i class=\"fa fa-check\"></i>\r\n              Aceptar actividad\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- cuando el freelance finaliza la actividad y la notifica al analista esp -->\r\n  <div *ngIf=\"actividad.estado == 'notificado'\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Actividad notificada al analista de servicios esp\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-title\">\r\n            <span class=\"text-info d-block\">\r\n              Fecha de notificacion:\r\n              <b>{{ actividad.timestamps.fechaActualizacion }}</b>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div *ngIf=\"(actividad.estado == 'aceptado' || actividad.estado == 'proceso' && permissions.FRCE) || ((permissions.ADG || permissions.DOPE || permissions.AESP) && (actividad.estado == 'aceptado' || actividad.estado == 'proceso' || actividad.estado == 'notificado' || actividad.estado == 'completado'))\">\r\n  <div class=\"card animated fade-in\" #vdsElement>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-2 col-form-label\">\r\n          <ul class=\"nav nav-pills flex-column bg-light\">\r\n            <li class=\"nav-item\" *ngFor=\"let item of visitaDomicialiariaMenu\">\r\n              <a class=\"nav-link\"\r\n                 routerLinkActive=\"active\"\r\n                 [routerLink]=\"item.path\">\r\n                {{ item.title }}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n\r\n          <div *ngIf=\"permissions.FRCE && estado == 'completado'\">\r\n            <div class=\"form-group mt-2 text-center\">\r\n              <button class=\"btn btn-success\" (click)=\"notificarAnalista()\">\r\n                <i class=\"fa fa-lightbulb\"></i>\r\n                Notificar\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-10\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer bg-white\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VisitaDomiciliariaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaDomiciliariaComponent", function() { return VisitaDomiciliariaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_actividades_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/actividades.service */ "./src/app/services/actividades.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classes_actividad_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@classes/actividad.class */ "./src/app/@classes/actividad.class.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VisitaDomiciliariaComponent = /** @class */ (function (_super) {
    __extends(VisitaDomiciliariaComponent, _super);
    function VisitaDomiciliariaComponent(_actividades, dataService, _ngxPermissions) {
        var _this = _super.call(this, _actividades) || this;
        _this._actividades = _actividades;
        _this.dataService = dataService;
        _this._ngxPermissions = _ngxPermissions;
        /**
         * menu de seleccion de actividad
         */
        _this.visitaDomicialiariaMenu = [
            {
                title: 'Visita Domiciliaria Seguridad',
                path: '../visita-domiciliaria/visita-domiciliaria-seguridad'
            },
            {
                title: 'Estado de Salubridad',
                path: '../visita-domiciliaria/salubridad'
            },
            {
                title: 'Informacion Familiar y Referencias',
                path: '../visita-domiciliaria/informacion-familiar'
            },
            {
                title: 'Entorno Habitacional',
                path: '../visita-domiciliaria/informe2'
            },
            {
                title: 'Modus vivendi',
                path: '../visita-domiciliaria/modus-vivendi'
            }
        ];
        _this.codigo = 'VDS';
        return _this;
    }
    VisitaDomiciliariaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissions = this._ngxPermissions.getPermissions();
        this.actividad = this._actividades.actividadProxy(this.codigo);
        // console.log(this.actividad);
        if (this._actividades.canLoadResource(this.actividad)) {
            this.getValue();
        }
        this.dataService.visitaDomiciliariaCompletada(this.servicioEsp)
            .subscribe(function (value) {
            _this.estado = value.servicios.estado;
            console.log(value);
        });
        if (this.actividad.estado === 'proceso' || this.actividad.estado === 'notificado' || this.actividad.estado === 'completado') {
            this.getValue();
            console.log('estado: proceso');
        }
    };
    VisitaDomiciliariaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.vdsElement.nativeElement, 'click').subscribe(function (event) {
            _this.dataService.visitaDomiciliariaCompletada(_this.servicioEsp)
                .subscribe(function (value) {
                _this.estado = value.servicios.estado;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vdsElement'),
        __metadata("design:type", Object)
    ], VisitaDomiciliariaComponent.prototype, "vdsElement", void 0);
    VisitaDomiciliariaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visita-domiciliaria',
            template: __webpack_require__(/*! ./visita-domiciliaria.component.html */ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.html"),
            styles: [__webpack_require__(/*! ./visita-domiciliaria.component.css */ "./src/app/pages/actividades/visita-domiciliaria/visita-domiciliaria.component.css")]
        }),
        __metadata("design:paramtypes", [_services_actividades_service__WEBPACK_IMPORTED_MODULE_1__["ActividadesService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsService"]])
    ], VisitaDomiciliariaComponent);
    return VisitaDomiciliariaComponent;
}(_classes_actividad_class__WEBPACK_IMPORTED_MODULE_4__["ActividadClass"]));



/***/ }),

/***/ "./src/app/services/esp/actividades/comun.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/esp/actividades/comun.service.ts ***!
  \***********************************************************/
/*! exports provided: ComunService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunService", function() { return ComunService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComunService = /** @class */ (function () {
    function ComunService(_http) {
        this._http = _http;
    }
    ComunService.prototype.getDecadactilar = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'decadactilar'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ComunService.prototype.postDecadactilar = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'decadactilar'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ComunService.prototype.putDecadactilar = function (servicioEsp, decadactilar, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'decadactilar'], [servicioEsp, decadactilar]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ComunService.prototype.getDictamenGrafologico = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'dictamen-grafologico'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ComunService.prototype.postDictamenGrafologico = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'dictamen-grafologico'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ComunService.prototype.putDictamenGrafologico = function (servicioEsp, dicamenGrafologico, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'dictamen-grafologico'], [servicioEsp, dicamenGrafologico]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ComunService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ComunService);
    return ComunService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/evaluacion-financiera.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/esp/actividades/evaluacion-financiera.service.ts ***!
  \***************************************************************************/
/*! exports provided: EvaluacionFinancieraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionFinancieraService", function() { return EvaluacionFinancieraService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EvaluacionFinancieraService = /** @class */ (function () {
    function EvaluacionFinancieraService(_http) {
        this._http = _http;
        this.cuentaBancariaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            tipoCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.obligacionVigenteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoCredito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            valorAprobado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            saldoActual: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            valorCuota: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.obligacionVigenteRealForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lineaCredito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            valorCargoFijo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.obligacionMoraForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoCredito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tiempoMora: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            montoMora: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.obligacionExtinguidaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaApertura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fechaCierre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            tipoCredito: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    // evaluacion financiera
    EvaluacionFinancieraService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'evaluacion-financiera'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'evaluacion-financiera'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.put = function (servicioEsp, evFinanciera, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'evaluacion-financiera'], [servicioEsp, evFinanciera]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.delete = function (servicioEsp, evFinanciera) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'cuentas-bancarias'], [servicioEsp, evFinanciera]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // Cuentas bancarias
    EvaluacionFinancieraService.prototype.getCuentasBancarias = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'cuentas-bancarias'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.postCuentaBancaria = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'cuentas-bancarias'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.putCuentaBancaria = function (servicioEsp, cuentaBancaria, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'cuentas-bancarias'], [servicioEsp, cuentaBancaria]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.deleteCuentaBancaria = function (servicioEsp, cuentaBancaria) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'cuentas-bancarias'], [servicioEsp, cuentaBancaria]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // obligaciones extinguidas
    EvaluacionFinancieraService.prototype.getObligacionesExtinguidas = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-extinguidas'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.postObligacionExtinguida = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-extinguidas'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.putObligacionExtinguida = function (servicioEsp, obgExtinguida, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-extinguidas'], [servicioEsp, obgExtinguida]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.deleteObligacionExtinguida = function (servicioEsp, obgExtinguida) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-extinguidas'], [servicioEsp, obgExtinguida]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // obligaciones mora
    EvaluacionFinancieraService.prototype.getObligacionesMora = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-mora'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.postObligacionMora = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-mora'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.putObligacionMora = function (servicioEsp, obgMora, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-mora'], [servicioEsp, obgMora]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.deleteObligacionMora = function (servicioEsp, obgMora) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-mora'], [servicioEsp, obgMora]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // obligaciones vigentes
    EvaluacionFinancieraService.prototype.getObligacionesVigentes = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-vigentes'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.postObligacionVigente = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-vigentes'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.putObligacionVigente = function (servicioEsp, obgVigente, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-vigentes'], [servicioEsp, obgVigente]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.deleteObligacionVigente = function (servicioEsp, obgVigente) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-vigentes'], [servicioEsp, obgVigente]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // obligaciones reales
    EvaluacionFinancieraService.prototype.getObligacionesReales = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-reales'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.postObligacionReal = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-reales'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.putObligacionReal = function (servicioEsp, obgReales, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-reales'], [servicioEsp, obgReales]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService.prototype.deleteObligacionReal = function (servicioEsp, obgReales) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'obligaciones-reales'], [servicioEsp, obgReales]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EvaluacionFinancieraService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EvaluacionFinancieraService);
    return EvaluacionFinancieraService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/historial-judicial.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/esp/actividades/historial-judicial.service.ts ***!
  \************************************************************************/
/*! exports provided: HistorialJudicialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialJudicialService", function() { return HistorialJudicialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistorialJudicialService = /** @class */ (function () {
    function HistorialJudicialService(_http) {
        this._http = _http;
    }
    HistorialJudicialService.prototype.getHistorialJudicial = function (servEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_3__["Helper"].route(['servicio-esp', 'historial-judicial'], servEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    HistorialJudicialService.prototype.postHistorialJudicial = function (servEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_3__["Helper"].route(['servicio-esp', 'historial-judicial'], servEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    HistorialJudicialService.prototype.putHistorialJudicial = function (servEsp, histJudicial, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_3__["Helper"].route(['servicio-esp', 'historial-judicial'], [servEsp, histJudicial]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    HistorialJudicialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistorialJudicialService);
    return HistorialJudicialService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/verificacion-academica.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/services/esp/actividades/verificacion-academica.service.ts ***!
  \****************************************************************************/
/*! exports provided: VerificacionAcademicaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionAcademicaService", function() { return VerificacionAcademicaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerificacionAcademicaService = /** @class */ (function () {
    function VerificacionAcademicaService(_http) {
        this._http = _http;
    }
    VerificacionAcademicaService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-academica'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    VerificacionAcademicaService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-academica'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    VerificacionAcademicaService.prototype.put = function (servicioEsp, verificacionDoc, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-academica'], [servicioEsp, verificacionDoc]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    VerificacionAcademicaService.prototype.delete = function (servicioEsp, verificacionDoc) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-academica'], [servicioEsp, verificacionDoc]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    VerificacionAcademicaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerificacionAcademicaService);
    return VerificacionAcademicaService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/verificacion-laboral.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/esp/actividades/verificacion-laboral.service.ts ***!
  \**************************************************************************/
/*! exports provided: VerificacionLaboralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionLaboralService", function() { return VerificacionLaboralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerificacionLaboralService = /** @class */ (function () {
    function VerificacionLaboralService(_http) {
        this._http = _http;
    }
    VerificacionLaboralService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'verificacion-laboral'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    VerificacionLaboralService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'verificacion-laboral'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    VerificacionLaboralService.prototype.put = function (servicioEsp, verificacionLab, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'verificacion-laboral'], [servicioEsp, verificacionLab]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    VerificacionLaboralService.prototype.delete = function (servicioEsp, verificacionLab) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'verificacion-laboral'], [servicioEsp, verificacionLab]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    VerificacionLaboralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], VerificacionLaboralService);
    return VerificacionLaboralService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/visita-domiciliaria/entono-habitacional.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/services/esp/actividades/visita-domiciliaria/entono-habitacional.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: EntonoHabitacionalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntonoHabitacionalService", function() { return EntonoHabitacionalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntonoHabitacionalService = /** @class */ (function () {
    function EntonoHabitacionalService(_http) {
        this._http = _http;
    }
    EntonoHabitacionalService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informe2'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EntonoHabitacionalService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informe2'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EntonoHabitacionalService.prototype.put = function (servicioEsp, entornoHbt, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informe2'], [servicioEsp, entornoHbt]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    EntonoHabitacionalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntonoHabitacionalService);
    return EntonoHabitacionalService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/visita-domiciliaria/estado-salubridad.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/services/esp/actividades/visita-domiciliaria/estado-salubridad.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: EstadoSalubridadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoSalubridadService", function() { return EstadoSalubridadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstadoSalubridadService = /** @class */ (function () {
    function EstadoSalubridadService(_http) {
        this._http = _http;
    }
    EstadoSalubridadService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'estado-salubridad'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    EstadoSalubridadService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'estado-salubridad'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    EstadoSalubridadService.prototype.put = function (servicioEsp, estadoSalubridad, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_1__["Helper"].route(['servicio-esp', 'estado-salubridad'], [servicioEsp, estadoSalubridad]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_2__["config"].httpOpts);
    };
    EstadoSalubridadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EstadoSalubridadService);
    return EstadoSalubridadService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/visita-domiciliaria/modus-vivendi.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/services/esp/actividades/visita-domiciliaria/modus-vivendi.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ModusVivendiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModusVivendiService", function() { return ModusVivendiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModusVivendiService = /** @class */ (function () {
    function ModusVivendiService(_http) {
        this._http = _http;
        // formularios
        this.modusVivendiForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            salario: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            otrosIngresos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            salarioConyugue: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            engresosMensuales: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            descripcionGastos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            personasDependientes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            analisisPatrimonial: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.bienInmuebleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            avaluo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            hipoteca: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.bienMuebleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            clase: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            modelo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            placa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            avaluo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pignorado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.refBancariaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tipoCuenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.capEndeudamientoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            entidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            estadoDeuda: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            valorMensual: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
    }
    // modus vivendi
    ModusVivendiService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'modus-vivendi'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'modus-vivendi'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.put = function (servicioEsp, modusVivendi, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'modus-vivendi'], [servicioEsp, modusVivendi]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // bienes inmuebles
    ModusVivendiService.prototype.getBienesInmuebles = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-inmuebles'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.postBienInmueble = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-inmuebles'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.putBienInmueble = function (servicioEsp, bienInmueble, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-inmuebles'], [servicioEsp, bienInmueble]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.deleteBienInmueble = function (servicioEsp, bienInmueble) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-inmuebles'], [servicioEsp, bienInmueble]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // bienes muebles
    ModusVivendiService.prototype.getBienesMuebles = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-muebles'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.postBienMueble = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-muebles'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.putBienMueble = function (servicioEsp, bienMueble, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-muebles'], [servicioEsp, bienMueble]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.deleteBienMueble = function (servicioEsp, bienMueble) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'bienes-muebles'], [servicioEsp, bienMueble]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // referencias bancarias
    ModusVivendiService.prototype.getRefBancarias = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias-bancarias'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.postRefBancaria = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias-bancarias'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.putRefBancaria = function (servicioEsp, refBancaria, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias-bancarias'], [servicioEsp, refBancaria]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.deleteRefBancaria = function (servicioEsp, refBancaria) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias-bancarias'], [servicioEsp, refBancaria]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // capacidad endeudamiento
    ModusVivendiService.prototype.getCapEndeudamiento = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'capacidad-endeudamiento'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.postCapEndeudamiento = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'capacidad-endeudamiento'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.putCapEndeudamiento = function (servicioEsp, capEndeudamiento, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'capacidad-endeudamiento'], [servicioEsp, capEndeudamiento]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService.prototype.deleteCapEndeudamiento = function (servicioEsp, capEndeudamiento) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'capacidad-endeudamiento'], [servicioEsp, capEndeudamiento]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    ModusVivendiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModusVivendiService);
    return ModusVivendiService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/visita-domiciliaria/nucleo-familiar.service.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/services/esp/actividades/visita-domiciliaria/nucleo-familiar.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: NucleoFamiliarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoFamiliarService", function() { return NucleoFamiliarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NucleoFamiliarService = /** @class */ (function () {
    function NucleoFamiliarService(_http) {
        this._http = _http;
        this.nucleoFamiliarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(120), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)),
            lugarExpedicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            fechaNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            lugarNacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            ocupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            empresa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)),
            tiempoLaborado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            fotografia: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.hijoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(120), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ocupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ubicacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.infoFamiliarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            parentesco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(120), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
            ocupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            viveConUd: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
        });
        this.referenciaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ocupacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]),
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            confirmacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    // nucleo familiar
    NucleoFamiliarService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'nucleo-familiar'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'nucleo-familiar'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.put = function (servicioEsp, nucleoFamiliar, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'nucleo-familiar'], [servicioEsp, nucleoFamiliar]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // hijos
    NucleoFamiliarService.prototype.getHijos = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'hijos'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.postHijo = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'hijos'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.putHijo = function (servicioEsp, hijo, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'hijos'], [servicioEsp, hijo]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.deleteHijo = function (servicioEsp, hijo) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'hijos'], [servicioEsp, hijo]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // informacion familiar
    NucleoFamiliarService.prototype.getInfoFamiliar = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informacion-familiar'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.postInfoFamiliar = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informacion-familiar'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.putInfoFamiliar = function (servicioEsp, infoFlia, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informacion-familiar'], [servicioEsp, infoFlia]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.deleteInfoFamiliar = function (servicioEsp, infoFlia) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'informacion-familiar'], [servicioEsp, infoFlia]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    // referencias
    NucleoFamiliarService.prototype.getReferencias = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias'], servicioEsp);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.postReferencia = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias'], servicioEsp);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.putReferencia = function (servicioEsp, referencia, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias'], [servicioEsp, referencia]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService.prototype.deleteReferencia = function (servicioEsp, referencia) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'referencias'], [servicioEsp, referencia]);
        return this._http.delete(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    NucleoFamiliarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NucleoFamiliarService);
    return NucleoFamiliarService;
}());



/***/ }),

/***/ "./src/app/services/esp/actividades/visita-domiciliaria/seguridad.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/services/esp/actividades/visita-domiciliaria/seguridad.service.ts ***!
  \***********************************************************************************/
/*! exports provided: SeguridadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadService", function() { return SeguridadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@classes/helper-class */ "./src/app/@classes/helper-class.ts");
/* harmony import */ var _models_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@models/app-settings */ "./src/app/@models/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeguridadService = /** @class */ (function () {
    function SeguridadService(_http) {
        this._http = _http;
    }
    SeguridadService.prototype.get = function (servicioEsp) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-documental'], [servicioEsp]);
        return this._http.get(url, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    SeguridadService.prototype.post = function (servicioEsp, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-documental'], [servicioEsp]);
        return this._http.post(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    SeguridadService.prototype.put = function (servicioEsp, seguridad, data) {
        var url = _classes_helper_class__WEBPACK_IMPORTED_MODULE_2__["Helper"].route(['servicio-esp', 'verificacion-documental'], [servicioEsp, seguridad]);
        return this._http.put(url, data, _models_app_settings__WEBPACK_IMPORTED_MODULE_3__["config"].httpOpts);
    };
    SeguridadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SeguridadService);
    return SeguridadService;
}());



/***/ })

}]);
//# sourceMappingURL=actividades-actividades-module.js.map