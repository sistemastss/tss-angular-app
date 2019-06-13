(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["investigacion-investigacion-module"],{

/***/ "./src/app/pages/investigacion/investigacion-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/investigacion/investigacion-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: InvestigacionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigacionRoutingModule", function() { return InvestigacionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _investigacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investigacion.component */ "./src/app/pages/investigacion/investigacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _investigacion_component__WEBPACK_IMPORTED_MODULE_2__["InvestigacionComponent"] },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var InvestigacionRoutingModule = /** @class */ (function () {
    function InvestigacionRoutingModule() {
    }
    InvestigacionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], InvestigacionRoutingModule);
    return InvestigacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/investigacion/investigacion.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/investigacion/investigacion.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content-wrapper\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center mt-3\">\r\n        <div class=\"btn-group\">\r\n           <button *ngFor=\"let actividad of actividades\"\r\n                  [hidden]=\"!isActividadAsignada(actividad.codigo)\"\r\n                  [ngClass]=\"(actividadesService.getEstadoActividad(actividad.codigo) == 'notificado') ? 'btn btn-danger' : 'btn btn-primary'\"\r\n                  type=\"button\"\r\n                  routerLinkActive=\"active\"\r\n                  [routerLink]=\"actividad.path\">\r\n            {{ actividad.nombre}}\r\n          </button>\r\n          <button *ngFor=\"let actividad of actividades\"\r\n                  [hidden]=\"!isActividadAsignada(actividad.codigo)\"\r\n                  [ngClass]=\"(actividadesService.getEstadoActividad(actividad.codigo) == 'notificado') ? 'btn btn-danger' : 'btn btn-primary'\"\r\n                  type=\"button\"\r\n                  routerLinkActive=\"active\"\r\n                  [routerLink]=\"actividad.path\">\r\n            {{ actividad.nombre}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 mt-3\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"content-wrapper\">\r\n    <div class=\"container mt-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 mx-auto\">\r\n          <form [formGroup]=\"form\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h4 class=\"text-center\">InvestigacionInterface</h4>\r\n              </div>\r\n              <div class=\"card-body\">\r\n\r\n                <div class=\"form-group row\">\r\n                  <label for=\"anexo\" class=\"col-sm-3 col-form-label\">\r\n                    Informe\r\n                  </label>\r\n                  <div class=\"col-sm-9\">\r\n                    <input type=\"file\" id=\"anexo\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"mt-3\">\r\n                    <button class=\"btn btn-warning\">Agregar actividad</button>\r\n                </div>\r\n                <div class=\"form-group row mt-3\">\r\n                    <table class=\"table table-bordered\">\r\n                      <tr>\r\n                        <td>Actividad</td>\r\n                        <td>Novedades</td>\r\n                        <td>Acciones</td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>Hurto</td>\r\n                          <td>robo agrabado de celulares</td>\r\n                          <td><div>\r\n                            <button class=\"btn btn-primary\">Editar</button>\r\n                            <button class=\"btn btn-danger\">Eliminar</button>\r\n                          </div></td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                  </div>\r\n                <div class=\"mt-3\">\r\n                    <button class=\"btn btn-success\">Finalizar</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/investigacion/investigacion.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/investigacion/investigacion.component.ts ***!
  \****************************************************************/
/*! exports provided: InvestigacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigacionComponent", function() { return InvestigacionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvestigacionComponent = /** @class */ (function () {
    function InvestigacionComponent() {
        /**
         *
         *  Control Logístico	                  CL
            Investigación Corporativa	          IC
            Investigación Marcaria	            IM
            Investigación Perdida Total Hurto	  PTH
            Investigación Perdida Parcial Hurto	PPH
            Investigación Perdida Total Daños	  PTD
            Investigación Perdida Parcial Daños	PPD
            Investigación Siniestros	          IS
         *
         *
         */
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            ciudad: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            anexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.investigaciones = [
            {
                title: 'Control Logístico',
                codigo: 'CL',
                path: ''
            },
            {
                title: 'Investigación Corporativa',
                codigo: 'IC',
                path: ''
            },
            {
                title: 'Investigación Marcaria',
                codigo: 'IM',
                path: ''
            },
            {
                title: 'Investigación Perdida Total Hurto',
                codigo: 'PTH',
                path: ''
            },
            {
                title: 'Investigación Perdida Parcial Hurto',
                codigo: 'PPH',
                path: ''
            },
            {
                title: 'Investigación Perdida Total Daños',
                codigo: 'PTD',
                path: ''
            },
            {
                title: 'nvestigación Perdida Parcial Daños',
                codigo: 'PPD',
                path: ''
            },
            {
                title: 'Investigación Siniestros',
                codigo: 'IS',
                path: ''
            }
        ];
    }
    InvestigacionComponent.prototype.ngOnInit = function () {
    };
    InvestigacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-investigacion',
            template: __webpack_require__(/*! ./investigacion.component.html */ "./src/app/pages/investigacion/investigacion.component.html"),
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], InvestigacionComponent);
    return InvestigacionComponent;
}());



/***/ }),

/***/ "./src/app/pages/investigacion/investigacion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/investigacion/investigacion.module.ts ***!
  \*************************************************************/
/*! exports provided: InvestigacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigacionModule", function() { return InvestigacionModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _investigacion_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./investigacion-routing.module */ "./src/app/pages/investigacion/investigacion-routing.module.ts");
/* harmony import */ var _investigacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./investigacion.component */ "./src/app/pages/investigacion/investigacion.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InvestigacionModule = /** @class */ (function () {
    function InvestigacionModule() {
    }
    InvestigacionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _investigacion_component__WEBPACK_IMPORTED_MODULE_4__["InvestigacionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _investigacion_routing_module__WEBPACK_IMPORTED_MODULE_3__["InvestigacionRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
            ]
        })
    ], InvestigacionModule);
    return InvestigacionModule;
}());



/***/ })

}]);
//# sourceMappingURL=investigacion-investigacion-module.js.map