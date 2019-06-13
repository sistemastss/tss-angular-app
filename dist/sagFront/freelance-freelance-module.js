(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freelance-freelance-module"],{

/***/ "./src/app/pages/freelance/components/main.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/freelance/components/main.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 text-center mt-3\">\r\n      <div class=\"btn-group mx-auto\">\r\n        <ng-container *ngFor=\"let item of sections\">\r\n          <button type=\"button\"\r\n                  class=\"btn btn-primary\"\r\n                  routerLinkActive=\"active\"\r\n                  [routerLink]=\"item.path\">\r\n            {{ item.title }}\r\n          </button>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 mt-3\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/freelance/components/main.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/freelance/components/main.component.ts ***!
  \**************************************************************/
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
        this.sections = [
            { path: 'programacion', title: 'Programación' },
            { path: 'viaticos', title: 'Viaticos' },
            { path: 'seguimiento', title: 'Seguimiento' },
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-informe',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/freelance/components/main.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pages/freelance/freelance-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/freelance/freelance-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FreelanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceRoutingModule", function() { return FreelanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _freelance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freelance.component */ "./src/app/pages/freelance/freelance.component.ts");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/pages/freelance/components/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _freelance_component__WEBPACK_IMPORTED_MODULE_2__["FreelanceComponent"] },
    {
        path: 'informe',
        component: _components_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
    },
];
var FreelanceRoutingModule = /** @class */ (function () {
    function FreelanceRoutingModule() {
    }
    FreelanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FreelanceRoutingModule);
    return FreelanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/freelance/freelance.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/freelance/freelance.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZyZWVsYW5jZS9mcmVlbGFuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/freelance/freelance.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/freelance/freelance.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fluid\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-table\"></i>\n    </div>\n    <button routerLink=\"./informe\">informe</button>\n    <div class=\"card-body\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-bordered\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Handle</th>\n          </tr>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">First</th>\n            <th scope=\"col\">Last</th>\n            <th scope=\"col\">Handle</th>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <div class=\"card-footer\"></div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/freelance/freelance.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/freelance/freelance.component.ts ***!
  \********************************************************/
/*! exports provided: FreelanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceComponent", function() { return FreelanceComponent; });
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

var FreelanceComponent = /** @class */ (function () {
    function FreelanceComponent() {
    }
    FreelanceComponent.prototype.ngOnInit = function () {
    };
    FreelanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-freelance',
            template: __webpack_require__(/*! ./freelance.component.html */ "./src/app/pages/freelance/freelance.component.html"),
            styles: [__webpack_require__(/*! ./freelance.component.css */ "./src/app/pages/freelance/freelance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FreelanceComponent);
    return FreelanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/freelance/freelance.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/freelance/freelance.module.ts ***!
  \*****************************************************/
/*! exports provided: FreelanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceModule", function() { return FreelanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/pages/freelance/components/main.component.ts");
/* harmony import */ var _freelance_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./freelance-routing.module */ "./src/app/pages/freelance/freelance-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_reducers_freelance_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers/freelance.reducer */ "./src/app/pages/freelance/store/reducers/freelance.reducer.ts");
/* harmony import */ var _store_effects_freelance_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/freelance.effects */ "./src/app/pages/freelance/store/effects/freelance.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FreelanceModule = /** @class */ (function () {
    function FreelanceModule() {
    }
    FreelanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                // FreelanceComponent,
                // ProgramacionComponent,
                // SeguimientoComponent,
                // ViaticosComponent,
                _components_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _freelance_routing_module__WEBPACK_IMPORTED_MODULE_4__["FreelanceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('freelance', _store_reducers_freelance_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_effects_freelance_effects__WEBPACK_IMPORTED_MODULE_9__["FreelanceEffects"]])
            ]
        })
    ], FreelanceModule);
    return FreelanceModule;
}());



/***/ }),

/***/ "./src/app/pages/freelance/store/actions/freelance.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/freelance/store/actions/freelance.actions.ts ***!
  \********************************************************************/
/*! exports provided: FreelanceActionTypes, LoadFreelances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceActionTypes", function() { return FreelanceActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFreelances", function() { return LoadFreelances; });
var FreelanceActionTypes;
(function (FreelanceActionTypes) {
    FreelanceActionTypes["LoadFreelances"] = "[Freelance] Load Freelances";
    FreelanceActionTypes["LoadFreelancesSuccess"] = "[Freelance] Load Freelances Success";
    FreelanceActionTypes["LoadFreelancesError"] = "[Freelance] Load Freelances Success";
})(FreelanceActionTypes || (FreelanceActionTypes = {}));
var LoadFreelances = /** @class */ (function () {
    function LoadFreelances() {
        this.type = FreelanceActionTypes.LoadFreelances;
    }
    return LoadFreelances;
}());



/***/ }),

/***/ "./src/app/pages/freelance/store/effects/freelance.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/freelance/store/effects/freelance.effects.ts ***!
  \********************************************************************/
/*! exports provided: FreelanceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceEffects", function() { return FreelanceEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_freelance_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/freelance.actions */ "./src/app/pages/freelance/store/actions/freelance.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FreelanceEffects = /** @class */ (function () {
    function FreelanceEffects(actions$) {
        this.actions$ = actions$;
        this.loadFreelances$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_freelance_actions__WEBPACK_IMPORTED_MODULE_4__["FreelanceActionTypes"].LoadFreelances), 
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], FreelanceEffects.prototype, "loadFreelances$", void 0);
    FreelanceEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], FreelanceEffects);
    return FreelanceEffects;
}());



/***/ }),

/***/ "./src/app/pages/freelance/store/reducers/freelance.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/freelance/store/reducers/freelance.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_freelance_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/freelance.actions */ "./src/app/pages/freelance/store/actions/freelance.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_freelance_actions__WEBPACK_IMPORTED_MODULE_0__["FreelanceActionTypes"].LoadFreelances:
            return state;
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=freelance-freelance-module.js.map