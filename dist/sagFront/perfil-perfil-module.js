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

module.exports = "<div class=\"container mt-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"text-center\">Perfil</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <fieldset disabled>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput\">Nombre / Razon social</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Tipo de documento</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Numero de documento</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Direccion</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Telefono</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Celular</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Ciudad</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Email</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Cuanta con un sistema de gestion</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Nombre de representante legal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"formGroupExampleInput2\">Cedula representante legal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\">\r\n            </div>\r\n\r\n\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
    function PerfilComponent() {
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/pages/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/pages/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
                _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRoutingModule"]
            ]
        })
    ], PerfilModule);
    return PerfilModule;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map