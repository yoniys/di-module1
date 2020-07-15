(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/comps1/a/a.component */ "./src/app/comps1/a/a.component.ts");
/* harmony import */ var src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/comps2/b/b.component */ "./src/app/comps2/b/b.component.ts");




class AppComponent {
    constructor() {
        this.title = 'di-module1';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "a"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_1__["AComponent"], src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__["BComponent"]], styles: [".a[_ngcontent-%COMP%]{display: flex;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5he2Rpc3BsYXk6IGZsZXg7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _m_m_a_m_a_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./m/m-a/m-a.module */ "./src/app/m/m-a/m-a.module.ts");
/* harmony import */ var _m_m_b_m_b_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./m/m-b/m-b.module */ "./src/app/m/m-b/m-b.module.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _m_m_b_m_b_module__WEBPACK_IMPORTED_MODULE_4__["MBModule"],
            _m_m_a_m_a_module__WEBPACK_IMPORTED_MODULE_3__["MAModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_m_m_b_m_b_module__WEBPACK_IMPORTED_MODULE_4__["MBModule"],
        _m_m_a_m_a_module__WEBPACK_IMPORTED_MODULE_3__["MAModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _m_m_b_m_b_module__WEBPACK_IMPORTED_MODULE_4__["MBModule"],
                    _m_m_a_m_a_module__WEBPACK_IMPORTED_MODULE_3__["MAModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comps1/a/a.component.ts":
/*!*****************************************!*\
  !*** ./src/app/comps1/a/a.component.ts ***!
  \*****************************************/
/*! exports provided: AComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AComponent", function() { return AComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var src_app_comps1_a_a1_a1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/comps1/a/a1/a1.component */ "./src/app/comps1/a/a1/a1.component.ts");
/* harmony import */ var src_app_comps1_a_a2_a2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/comps1/a/a2/a2.component */ "./src/app/comps1/a/a2/a2.component.ts");






class AComponent {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
}
AComponent.ɵfac = function AComponent_Factory(t) { return new (t || AComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
AComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AComponent, selectors: [["app-a"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"]])], decls: 10, vars: 1, template: function AComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-a1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-a2");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.s.counter);
    } }, directives: [src_app_comps1_a_a1_a1_component__WEBPACK_IMPORTED_MODULE_2__["A1Component"], src_app_comps1_a_a2_a2_component__WEBPACK_IMPORTED_MODULE_3__["A2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzMS9hL2EuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-a',
                templateUrl: './a.component.html',
                styleUrls: ['./a.component.css'],
                providers: [src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"]]
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps1/a/a1/a1.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comps1/a/a1/a1.component.ts ***!
  \*********************************************/
/*! exports provided: A1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A1Component", function() { return A1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");



class A1Component {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
    add() { this.s.counter++; }
}
A1Component.ɵfac = function A1Component_Factory(t) { return new (t || A1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
A1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: A1Component, selectors: [["app-a1"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function A1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function A1Component_Template_button_click_0_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzMS9hL2ExL2ExLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-a1',
                templateUrl: './a1.component.html',
                styleUrls: ['./a1.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps1/a/a2/a2.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comps1/a/a2/a2.component.ts ***!
  \*********************************************/
/*! exports provided: A2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A2Component", function() { return A2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");



class A2Component {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
    minus() { this.s.counter--; }
}
A2Component.ɵfac = function A2Component_Factory(t) { return new (t || A2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
A2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: A2Component, selectors: [["app-a2"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function A2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function A2Component_Template_button_click_0_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "minus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzMS9hL2EyL2EyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-a2',
                templateUrl: './a2.component.html',
                styleUrls: ['./a2.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps2/b/b.component.ts":
/*!*****************************************!*\
  !*** ./src/app/comps2/b/b.component.ts ***!
  \*****************************************/
/*! exports provided: BComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BComponent", function() { return BComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");
/* harmony import */ var src_app_comps2_b_c1_c1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/comps2/b/c1/c1.component */ "./src/app/comps2/b/c1/c1.component.ts");
/* harmony import */ var src_app_comps2_b_c2_c2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/comps2/b/c2/c2.component */ "./src/app/comps2/b/c2/c2.component.ts");






class BComponent {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
}
BComponent.ɵfac = function BComponent_Factory(t) { return new (t || BComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
BComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BComponent, selectors: [["app-b"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"]])], decls: 10, vars: 1, template: function BComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-c1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-c2");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.s.counter);
    } }, directives: [src_app_comps2_b_c1_c1_component__WEBPACK_IMPORTED_MODULE_2__["C1Component"], src_app_comps2_b_c2_c2_component__WEBPACK_IMPORTED_MODULE_3__["C2Component"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzMi9iL2IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-b',
                templateUrl: './b.component.html',
                styleUrls: ['./b.component.css'],
                providers: [src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"]]
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps2/b/c1/c1.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comps2/b/c1/c1.component.ts ***!
  \*********************************************/
/*! exports provided: C1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C1Component", function() { return C1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");



class C1Component {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
    add() { this.s.counter++; }
}
C1Component.ɵfac = function C1Component_Factory(t) { return new (t || C1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
C1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C1Component, selectors: [["app-c1"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function C1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C1Component_Template_button_click_0_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzMi9iL2MxL2MxLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c1',
                templateUrl: './c1.component.html',
                styleUrls: ['./c1.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comps2/b/c2/c2.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comps2/b/c2/c2.component.ts ***!
  \*********************************************/
/*! exports provided: C2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C2Component", function() { return C2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/s/s1.service */ "./src/app/s/s1.service.ts");



class C2Component {
    constructor(s) {
        this.s = s;
    }
    ngOnInit() {
    }
    minus() { this.s.counter--; }
}
C2Component.ɵfac = function C2Component_Factory(t) { return new (t || C2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"])); };
C2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: C2Component, selectors: [["app-c2"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function C2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C2Component_Template_button_click_0_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "minus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzMi9iL2MyL2MyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-c2',
                templateUrl: './c2.component.html',
                styleUrls: ['./c2.component.css']
            }]
    }], function () { return [{ type: src_app_s_s1_service__WEBPACK_IMPORTED_MODULE_1__["S1Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/m/m-a/m-a.module.ts":
/*!*************************************!*\
  !*** ./src/app/m/m-a/m-a.module.ts ***!
  \*************************************/
/*! exports provided: MAModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAModule", function() { return MAModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/comps1/a/a.component */ "./src/app/comps1/a/a.component.ts");
/* harmony import */ var src_app_comps1_a_a2_a2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/comps1/a/a2/a2.component */ "./src/app/comps1/a/a2/a2.component.ts");
/* harmony import */ var src_app_comps1_a_a1_a1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/comps1/a/a1/a1.component */ "./src/app/comps1/a/a1/a1.component.ts");






class MAModule {
}
MAModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MAModule });
MAModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MAModule_Factory(t) { return new (t || MAModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MAModule, { declarations: [src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_2__["AComponent"], src_app_comps1_a_a1_a1_component__WEBPACK_IMPORTED_MODULE_4__["A1Component"], src_app_comps1_a_a2_a2_component__WEBPACK_IMPORTED_MODULE_3__["A2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_2__["AComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MAModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_2__["AComponent"], src_app_comps1_a_a1_a1_component__WEBPACK_IMPORTED_MODULE_4__["A1Component"], src_app_comps1_a_a2_a2_component__WEBPACK_IMPORTED_MODULE_3__["A2Component"]],
                exports: [src_app_comps1_a_a_component__WEBPACK_IMPORTED_MODULE_2__["AComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/m/m-b/m-b.module.ts":
/*!*************************************!*\
  !*** ./src/app/m/m-b/m-b.module.ts ***!
  \*************************************/
/*! exports provided: MBModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MBModule", function() { return MBModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/comps2/b/b.component */ "./src/app/comps2/b/b.component.ts");
/* harmony import */ var src_app_comps2_b_c1_c1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/comps2/b/c1/c1.component */ "./src/app/comps2/b/c1/c1.component.ts");
/* harmony import */ var src_app_comps2_b_c2_c2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/comps2/b/c2/c2.component */ "./src/app/comps2/b/c2/c2.component.ts");






class MBModule {
}
MBModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MBModule });
MBModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MBModule_Factory(t) { return new (t || MBModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MBModule, { declarations: [src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__["BComponent"], src_app_comps2_b_c1_c1_component__WEBPACK_IMPORTED_MODULE_3__["C1Component"], src_app_comps2_b_c2_c2_component__WEBPACK_IMPORTED_MODULE_4__["C2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__["BComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MBModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__["BComponent"], src_app_comps2_b_c1_c1_component__WEBPACK_IMPORTED_MODULE_3__["C1Component"], src_app_comps2_b_c2_c2_component__WEBPACK_IMPORTED_MODULE_4__["C2Component"]],
                exports: [src_app_comps2_b_b_component__WEBPACK_IMPORTED_MODULE_2__["BComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/s/s1.service.ts":
/*!*********************************!*\
  !*** ./src/app/s/s1.service.ts ***!
  \*********************************/
/*! exports provided: S1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S1Service", function() { return S1Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class S1Service {
    constructor() {
        this.counter = 0;
    }
}
S1Service.ɵfac = function S1Service_Factory(t) { return new (t || S1Service)(); };
S1Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: S1Service, factory: S1Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](S1Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\new\di\di-module1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map