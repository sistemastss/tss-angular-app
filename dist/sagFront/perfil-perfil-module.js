(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./src/app/pages/perfil/perfil-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilRoutingModule", function() { return PerfilRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component */ "./src/app/pages/perfil/perfil.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"],
    }
];
var PerfilRoutingModule = /** @class */ (function () {
    function PerfilRoutingModule() {
    }
    PerfilRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PerfilRoutingModule);
    return PerfilRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/perfil/perfil.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/perfil/perfil.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"text-center\">Perfil</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <fieldset [disabled]=\"true\" [formGroup]=\"form\">\r\n            <div class=\"form-group\">\r\n              <label for=\"nombre\">Nombre</label>\r\n              <input formControlName=\"nombre\" type=\"text\" class=\"form-control\" id=\"nombre\" placeholder=\"Ingrese el nombre completo\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"direccion\">Direccion</label>\r\n              <input formControlName=\"direccion\" type=\"text\" class=\"form-control\" id=\"direccion\" placeholder=\"Ingrese la direccion de residencia\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"telefono\">Telefono</label>\r\n              <input formControlName=\"telefono\" type=\"number\" class=\"form-control\" id=\"telefono\" placeholder=\"Ingrese el telefono\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"celular\">Celular</label>\r\n              <input formControlName=\"celular\" type=\"text\" class=\"form-control\" id=\"celular\" placeholder=\"Ingrese el numero de celular\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"tipo_documento\">tipo de documento</label>\r\n              <select class=\"form-control\" formControlName=\"tipo_documento\" id=\"tipo_documento\">\r\n                <option [selected]=\"true\">Seleccione una opcion</option>\r\n                <option value=\"cc\">C.C. Cedula</option>\r\n                <option value=\"ti\">T.I. Tarjeta de identidad</option>\r\n                <option value=\"ce\">C.E. Cedula de extrangeria</option>\r\n                <option value=\"pa\">P.A. Pasaporte</option>\r\n                <option value=\"pep\">P.E.P. Permiso especial de permanencia</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"documento\">Documento</label>\r\n              <input formControlName=\"documento\" type=\"text\" class=\"form-control\" id=\"documento\" placeholder=\"Ingrese el numero de documento de identificación\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"ciudad\">Ciudad</label>\r\n              <input formControlName=\"ciudad\" type=\"text\" class=\"form-control\" id=\"ciudad\" placeholder=\"Ingrese la ciudad de residencia\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"rol\">Rol</label>\r\n              <input formControlName=\"rol\" type=\"text\" class=\"form-control\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Correo electronico</label>\r\n              <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Ingrese el correo electronico\">\r\n            </div>\r\n          </fieldset>\r\n          <!--<fieldset disabled>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput\">Nombre / Razon social</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Tipo de documento</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Numero de documento</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Direccion</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Telefono</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Celular</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Ciudad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Cuanta con un sistema de gestion</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Nombre de representante legal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Cedula representante legal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n\r\n\r\n          </fieldset>-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/perfil/perfil.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.ts ***!
  \**************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.form = this.fb.group({
            nombre: '',
            direccion: '',
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            tipo_documento: '',
            documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)],
            ciudad: '',
            rol: '',
            email: '',
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var usuario = this.auth.getUser().user;
        this.form.setValue({
            nombre: usuario.nombre,
            direccion: usuario.direccion,
            telefono: usuario.telefono,
            celular: usuario.celular,
            tipo_documento: usuario.tipo_documento,
            documento: usuario.documento,
            ciudad: usuario.ciudad,
            rol: usuario.rol.rol,
            email: usuario.email,
        });
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/pages/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/pages/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/pages/perfil/perfil.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/*! exports provided: PerfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilModule", function() { return PerfilModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.component */ "./src/app/pages/perfil/perfil.component.ts");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/pages/perfil/perfil-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PerfilModule = /** @class */ (function () {
    function PerfilModule() {
    }
    PerfilModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_perfil_component__WEBPACK_IMPORTED_MODULE_2__["PerfilComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], PerfilModule);
    return PerfilModule;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map