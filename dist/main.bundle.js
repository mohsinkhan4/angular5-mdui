webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_dynamic_form_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__designer_root_designer_root_component__ = __webpack_require__("../../../../../src/app/designer/root/designer-root.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_3__components_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */] },
    { path: 'designer', component: __WEBPACK_IMPORTED_MODULE_4__designer_root_designer_root_component__["a" /* DesignerRootComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-left\">{{ 'fbt_dynamic_forms' | translate }}</h1>\n    <h6 class=\"text-right\"><i> v1.0 </i></h6>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_field_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form-field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_section_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dynamic_form_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(translate, dynamicFormService) {
        this.translate = translate;
        this.dynamicFormService = dynamicFormService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.dynamicFormService.initForm();
        // this.dynamicForm = this.dynamicFormService.getForm();
        this.handleTranslations();
    };
    AppComponent.prototype.handleTranslations = function () {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_field_service__["a" /* DynamicFormFieldService */], __WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_section_service__["a" /* DynamicFormSectionService */], __WEBPACK_IMPORTED_MODULE_4__services_dynamic_form_service__["a" /* DynamicFormService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__services_dynamic_form_service__["a" /* DynamicFormService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_dynamic_form_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dynamic_form_dynamic_form_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__designer_root_designer_root_component__ = __webpack_require__("../../../../../src/app/designer/root/designer-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dynamic_form_field_dynamic_form_field_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field/dynamic-form-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dynamic_form_field_types_text_text_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/text/text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dynamic_form_field_types_textarea_textarea_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textarea/textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dynamic_form_field_types_dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dynamic_form_field_types_date_date_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/date/date.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dynamic_form_field_types_range_range_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/range/range.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dynamic_form_field_types_button_button_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dynamic_form_field_types_toggle_toggle_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/toggle/toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dynamic_form_section_dynamic_form_section_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-section/dynamic-form-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dynamic_form_section_types_tabbed_tabbed_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-section-types/tabbed/tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dynamic_form_section_types_list_list_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-section-types/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dynamic_form_field_types_dependentlist_dependentlist_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/dependentlist/dependentlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dynamic_form_field_types_textappend_textappend_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textappend/textappend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dynamic_form_field_types_textother_textother_component__ = __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textother/textother.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dynamic_form_field_dynamic_form_field_component__["a" /* DynamicFormFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dynamic_form_field_types_text_text_component__["a" /* TextComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_dynamic_form_field_types_textarea_textarea_component__["a" /* TextAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dynamic_form_field_types_dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dynamic_form_field_types_date_date_component__["a" /* DateComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_dynamic_form_field_types_range_range_component__["a" /* RangeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dynamic_form_field_types_button_button_component__["a" /* ButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_dynamic_form_field_types_toggle_toggle_component__["a" /* ToggleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_dynamic_form_section_dynamic_form_section_component__["a" /* DynamicFormSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_dynamic_form_section_types_tabbed_tabbed_component__["a" /* SectionTabbedComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dynamic_form_section_types_list_list_component__["a" /* SectionListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__designer_root_designer_root_component__["a" /* DesignerRootComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dynamic_form_field_types_dependentlist_dependentlist_component__["a" /* DependentListComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_dynamic_form_field_types_textappend_textappend_component__["a" /* TextAppendComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_dynamic_form_field_types_textother_textother_component__["a" /* TextOtherComponent */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_dynamic_form_service__["a" /* DynamicFormService */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/button/button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <button \n        class=\"form-control btn btn-primary\" \n        type=\"button\"\n        (click)=\"onClick()\"\n        [id]=\"dfFormField.key\" \n        [name]=\"dfFormField.key\"\n        [disabled]=\"dfFormField.disabled\">\n        {{ dfFormField.label }}\n    </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.onClick = function () {
        console.log(this.dfFormField, this.dfForm);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], ButtonComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], ButtonComponent.prototype, "dfFormField", void 0);
    ButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-button',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/button/button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/button/button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/date/date.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/date/date.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <input \n        class=\"form-control\" \n        type=\"date\"\n        [id]=\"dfFormField.key\" \n        [name]=\"dfFormField.key\"\n        [formControlName]=\"dfFormField.key\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/date/date.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DateComponent = /** @class */ (function () {
    function DateComponent() {
    }
    DateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DateComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], DateComponent.prototype, "dfFormField", void 0);
    DateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/date/date.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/date/date.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DateComponent);
    return DateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/dependentlist/dependentlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/dependentlist/dependentlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [formGroup]=\"dfForm\">\n    <div class=\"col-md-6\">\n        <select \n            class=\"form-control\" \n            style=\"width: 100%;\"  \n            (change)=\"onSelectMaster()\" \n            [id]=\"dfFormField.key1\"\n            [name]=\"dfFormField.key1\"\n            [formControlName]=\"dfFormField.key\">\n                <option value=\"\" disabled selected>Select</option>\n                <option \n                    *ngFor=\"let masterOption of masterOptions\" \n                    [ngValue]=\"masterOption.key\">\n                        {{ masterOption.value }}\n                </option>\n        </select>\n    </div>\n    <div class=\"col-md-6\">\n        <select \n            class=\"form-control\" \n            style=\"width: 100%;\" \n            [id]=\"dfFormField.key\"\n            [name]=\"dfFormField.key\"\n            [formControlName]=\"dfFormField.key\">\n                <option value=\"\" disabled selected>Select</option>\n                <option \n                    *ngFor=\"let option of options\" \n                    [ngValue]=\"option.key\">\n                        {{ option.value }}\n                </option>\n        </select>\n    </div>\n</div>\n    \n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/dependentlist/dependentlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DependentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DependentListComponent = /** @class */ (function () {
    function DependentListComponent(dynamicFormService) {
        this.dynamicFormService = dynamicFormService;
        this.masterOptions = [];
        this.options = [];
    }
    DependentListComponent.prototype.ngOnInit = function () {
        this.masterOptions = this.dynamicFormService.getFormControlMasterMetadataJson();
    };
    DependentListComponent.prototype.onSelectMaster = function () {
        console.log(this.dfForm.value.dc_dependent);
        this.options = this.dynamicFormService.getFormControlMetadataJson(this.dfForm.value.dc_dependent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DependentListComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], DependentListComponent.prototype, "dfFormField", void 0);
    DependentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dependentlist',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/dependentlist/dependentlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/dependentlist/dependentlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_service__["a" /* DynamicFormService */]])
    ], DependentListComponent);
    return DependentListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/dropdown/dropdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <select \n        class=\"form-control\" \n        [id]=\"dfFormField.key\"\n        [name]=\"dfFormField.key\"\n        [formControlName]=\"dfFormField.key\">\n            <option \n                *ngFor=\"let option of dfFormField.selectorControl.options\" \n                [ngValue]=\"option.key\">\n                    {{ option.value }}\n            </option>\n    </select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DropdownComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], DropdownComponent.prototype, "dfFormField", void 0);
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dropdown',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/dropdown/dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/range/range.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/range/range.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <input \n        class=\"form-control\" \n        type=\"range\"\n        [id]=\"dfFormField.key\" \n        [name]=\"dfFormField.key\"\n        [formControlName]=\"dfFormField.key\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/range/range.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RangeComponent = /** @class */ (function () {
    function RangeComponent() {
    }
    RangeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], RangeComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], RangeComponent.prototype, "dfFormField", void 0);
    RangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-range',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/range/range.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/range/range.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RangeComponent);
    return RangeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/text/text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/text/text.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <input \n        class=\"form-control\" \n        type=\"text\"\n        disabled=\"dfFormField.disabled\"\n        [id]=\"dfFormField.key\" \n        [name]=\"dfFormField.key\"\n        [formControlName]=\"dfFormField.key\" />\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/text/text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], TextComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], TextComponent.prototype, "dfFormField", void 0);
    TextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-text',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/text/text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/text/text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textappend/textappend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [formGroup]=\"dfForm\" >\n    <div class=\"col-md-6\">\n        <select \n            class=\"form-control\"\n            style=\"width: 100%;\"\n            (change)=\"changecat(null)\" \n            [id]=\"dfFormField.key1\"\n            [name]=\"dfFormField.key\"\n            [formControlName]=\"dfFormField.key\">\n                <option\n                    *ngFor=\"let masterOption of masterOptions\" \n                    [ngValue]=\"masterOption.key\">\n                        {{ masterOption.value }}\n                </option>\n        </select>\n    </div>\n    <div class=\"col-md-6\">\n        <input \n            class=\"form-control\"\n            style=\"width: 100%;\"\n            type=\"text\" \n            value={{suffix}}>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textappend/textappend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAppendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextAppendComponent = /** @class */ (function () {
    function TextAppendComponent() {
        this.suffix = "<name>";
        this.masterOptions = [
            { key: 'Mr.', value: 'Mr.' },
            { key: 'Mrs.', value: 'Mrs.' },
            { key: 'Miss', value: 'Miss' },
        ];
    }
    TextAppendComponent.prototype.ngOnInit = function () { };
    TextAppendComponent.prototype.changecat = function (value) {
        this.suffix = this.dfForm.value.dc_textappend + " " + this.suffix;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], TextAppendComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], TextAppendComponent.prototype, "dfFormField", void 0);
    TextAppendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-textappend',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textappend/textappend.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TextAppendComponent);
    return TextAppendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textarea/textarea.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textarea/textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <textarea \n        class=\"form-control\" \n        [rows]=\"dfFormField.rows\"\n        [id]=\"dfFormField.key\" \n        [name]=\"dfFormField.key\"\n        [formControlName]=\"dfFormField.key\">\n    </textarea>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textarea/textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextAreaComponent = /** @class */ (function () {
    function TextAreaComponent() {
    }
    TextAreaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], TextAreaComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], TextAreaComponent.prototype, "dfFormField", void 0);
    TextAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-textarea',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textarea/textarea.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textarea/textarea.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextAreaComponent);
    return TextAreaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textother/textother.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [formGroup]=\"dfForm\">\n    <div class=\"col-md-6\">\n        <select \n            class=\"form-control\"\n            style=\"width: 100%;\"\n            (change)=\"changecat(null)\" \n            [id]=\"dfFormField.getKey()\"\n            [name]=\"dfFormField.getKey()\"\n            [formControlName]=\"dfFormField.getKey()\">\n                <!-- <option value=\"\" disabled selected>Select</option>\n                    <option value=\"BTech\">BTech</option>\n                    <option value=\"BSc\">BSc</option>\n                    <option value=\"BPharm\">BPharm</option>\n                    <option value=\"Other\">Other</option> -->\n                <option \n                    *ngFor=\"let masterOption of masterOptions\" \n                    [ngValue]=\"masterOption.key\">\n                        {{ masterOption.value }}\n                </option>\n        </select>\n    </div>\n    <div class=\"col-md-6\">\n        <input \n            class=\"form-control\" \n            style=\"width: 100%;\" \n            type={{needed}}>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/textother/textother.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextOtherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextOtherComponent = /** @class */ (function () {
    function TextOtherComponent(dynamicFormService) {
        this.dynamicFormService = dynamicFormService;
        this.needed = "hidden";
        this.masterOptions = [];
    }
    TextOtherComponent.prototype.ngOnInit = function () {
        this.masterOptions = this.dynamicFormService.getOtherList();
    };
    TextOtherComponent.prototype.changecat = function (value) {
        console.log(this.dfForm.value.dc_textother);
        if (this.dfForm.value.dc_textother == "Other") {
            this.needed = "text";
            console.log(this.needed);
            //var element = document.createElement("input");
            // var foo = document.getElementById("abc");
            //foo.appendChild(element);
            //document.getElementById("abc").innerHTML="<input type='text' value=''>";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], TextOtherComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_form_field__["a" /* FormField */])
    ], TextOtherComponent.prototype, "dfFormField", void 0);
    TextOtherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-textother',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/textother/textother.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_service__["a" /* DynamicFormService */]])
    ], TextOtherComponent);
    return TextOtherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/toggle/toggle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n.switch input {display:none;}\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .15s;\n    transition: .15s;\n}\ninput:checked + .slider {\n    background-color: #2196F3;\n}\ninput:focus + .slider {\n    -webkit-box-shadow: 0 0 1px #2196F3;\n            box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n    border-radius: 4px;\n}\n.slider.round:before {\n    border-radius: 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/toggle/toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"dfForm\">\n    <label class=\"switch\">\n        <input \n            class=\"form-control\" \n            type=\"checkbox\"\n            [id]=\"dfFormField.key\" \n            [name]=\"dfFormField.key\"\n            [formControlName]=\"dfFormField.key\" />\n        <span class=\"slider round\"></span>\n    </label>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field-types/toggle/toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], ToggleComponent.prototype, "dfForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], ToggleComponent.prototype, "dfFormField", void 0);
    ToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toggle',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field-types/toggle/toggle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-field-types/toggle/toggle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field/dynamic-form-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div \n            class=\"form-group\"\n            [ngSwitch]=\"dynamicFormField.type\"\n            [formGroup]=\"dfFormGroup\">\n\n            <label [for]=\"dynamicFormField.key\">{{ dynamicFormField.label }}</label>\n\n            <app-text \n                *ngSwitchCase=\"'TEXT'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-text>\n\n            <app-dropdown \n                *ngSwitchCase=\"'DROPDOWN'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-dropdown>\n\n            <app-date \n                *ngSwitchCase=\"'DATE'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-date>\n\n            <app-range \n                *ngSwitchCase=\"'RANGE'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-range>\n\n            <app-textarea \n                *ngSwitchCase=\"'TEXTAREA'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-textarea>\n\n            <app-button \n                *ngSwitchCase=\"'BUTTON'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-button>\n\n            <app-toggle \n                *ngSwitchCase=\"'TOGGLE'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-toggle>\n\n            <app-dependentlist \n                *ngSwitchCase=\"'DEPENDENTLIST'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-dependentlist>\n\n            <app-textappend \n                *ngSwitchCase=\"'TEXTAPPEND'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-textappend>\n\n            <app-textother \n                *ngSwitchCase=\"'TEXTOTHER'\" \n                [dfForm]=\"dfFormGroup\"\n                [dfFormField]=\"dynamicFormField\">\n            </app-textother>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-field/dynamic-form-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormFieldComponent = /** @class */ (function () {
    function DynamicFormFieldComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DynamicFormFieldComponent.prototype, "dfFormGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */])
    ], DynamicFormFieldComponent.prototype, "dynamicFormField", void 0);
    DynamicFormFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'df-form-field',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-field/dynamic-form-field.component.html")
        })
    ], DynamicFormFieldComponent);
    return DynamicFormFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section-types/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section-types/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n    *ngFor=\"let dynamicFormSection of dynamicForm.getSections()\">\n    <app-dynamic-form-section \n        [dynamicFormSection]=\"dynamicFormSection\" \n        [dfFormGroup]=\"dfFormGroup\">\n    </app-dynamic-form-section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section-types/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_df_form__ = __webpack_require__("../../../../../src/app/models/df-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_df_form_section__ = __webpack_require__("../../../../../src/app/models/df-form-section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionListComponent = /** @class */ (function () {
    function SectionListComponent() {
    }
    SectionListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_df_form__["a" /* DynamicForm */])
    ], SectionListComponent.prototype, "dynamicForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_df_form_section__["a" /* DynamicFormSection */])
    ], SectionListComponent.prototype, "dynamicFormSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], SectionListComponent.prototype, "dfFormGroup", void 0);
    SectionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-list',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-section-types/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-section-types/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section-types/tabbed/tabbed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section-types/tabbed/tabbed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\n    <li \n        *ngFor=\"let dynamicFormSection of dynamicForm.getSections(); let i = index\"\n        role=\"presentation\"\n        class=\"nav-link {{ i == selectedSectionIndex ? 'active' : '' }}\"\n        style=\"cursor: pointer;\"\n        (click)=\"selectSection(i)\">\n        {{ dynamicFormSection.label }}\n    </li>\n</ul>\n<app-dynamic-form-section \n    [dynamicFormSection]=\"dynamicForm.getSection(selectedSectionIndex)\" \n    [dfFormGroup]=\"dfFormGroup\">\n</app-dynamic-form-section>\n"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section-types/tabbed/tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionTabbedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_df_form__ = __webpack_require__("../../../../../src/app/models/df-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_df_form_section__ = __webpack_require__("../../../../../src/app/models/df-form-section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionTabbedComponent = /** @class */ (function () {
    function SectionTabbedComponent() {
    }
    SectionTabbedComponent.prototype.ngOnInit = function () {
        this.selectedSectionIndex = this.selectedSectionIndex ? this.selectedSectionIndex : 0;
    };
    SectionTabbedComponent.prototype.selectSection = function (i) {
        this.selectedSectionIndex = i;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_df_form__["a" /* DynamicForm */])
    ], SectionTabbedComponent.prototype, "dynamicForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_df_form_section__["a" /* DynamicFormSection */])
    ], SectionTabbedComponent.prototype, "dynamicFormSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], SectionTabbedComponent.prototype, "dfFormGroup", void 0);
    SectionTabbedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-section-tabbed',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-section-types/tabbed/tabbed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dynamic-form-section-types/tabbed/tabbed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionTabbedComponent);
    return SectionTabbedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section/dynamic-form-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div \n        class=\"card-header card-info\" \n        style=\"cursor: pointer; color: white;\" \n        (click)=\"toggleSectionDisplay()\">\n            {{ dynamicFormSection.label | translate }}\n    </div>\n    <div class=\"card-block\" *ngIf=\"displaySection\">\n        <div *ngFor=\"let dynamicFormField of dynamicFormSection.getFields()\">\n            <df-form-field [dynamicFormField]=\"dynamicFormField\" [dfFormGroup]=\"dfFormGroup\"></df-form-field>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form-section/dynamic-form-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_df_form_section__ = __webpack_require__("../../../../../src/app/models/df-form-section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormSectionComponent = /** @class */ (function () {
    function DynamicFormSectionComponent() {
        this.displaySection = true;
    }
    DynamicFormSectionComponent.prototype.ngOnInit = function () {
        this.displaySection = this.dynamicFormSection.getVisible();
    };
    DynamicFormSectionComponent.prototype.toggleSectionDisplay = function () {
        this.displaySection = !this.displaySection;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_df_form_section__["a" /* DynamicFormSection */])
    ], DynamicFormSectionComponent.prototype, "dynamicFormSection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */])
    ], DynamicFormSectionComponent.prototype, "dfFormGroup", void 0);
    DynamicFormSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dynamic-form-section',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form-section/dynamic-form-section.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormSectionComponent);
    return DynamicFormSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h3 class=\"text-left\"> Form </h3>\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"dfFormGroup\">\n\n            <div\n                [ngSwitch]=\"sectionDisplayType\">\n\n                <div\n                    *ngSwitchCase=\"'TABBED'\">\n                    <app-section-tabbed\n                        [dynamicForm]=\"dynamicForm\"\n                        [dynamicFormSection]=\"dynamicFormSection\" \n                        [dfFormGroup]=\"dfFormGroup\">\n                    </app-section-tabbed>\n                </div>\n\n                <div\n                    *ngSwitchCase=\"'LIST'\">\n                    <app-section-list\n                        [dynamicForm]=\"dynamicForm\"\n                        [dynamicFormSection]=\"dynamicFormSection\" \n                        [dfFormGroup]=\"dfFormGroup\">\n                    </app-section-list>\n                </div>\n                \n            </div>\n\n            <hr>\n\n            <button \n                type=\"submit\"\n                class=\"btn btn-info\">\n                Submit\n            </button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_field_control_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form-field-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(dynamicFormService, formFieldControlService) {
        this.dynamicFormService = dynamicFormService;
        this.formFieldControlService = formFieldControlService;
        this.dfFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({});
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicFormService.getFormMetadataJson()
            .subscribe(function (resp) {
            var metadata = resp.json();
            _this.dynamicFormService.initForm(metadata);
            _this.dynamicForm = _this.dynamicFormService.getForm();
            _this.initSections();
        }, function (err) {
            console.error(err);
        });
    };
    DynamicFormComponent.prototype.initSections = function () {
        var sections = this.dynamicForm.getSections();
        this.dfFormGroup = this.formFieldControlService.getFormGroups(sections);
        this.sectionDisplayType = 'LIST'; // TABBED, LIST;
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        console.log(this.dfFormGroup.value);
    };
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dynamic-form',
            template: __webpack_require__("../../../../../src/app/components/dynamic-form/dynamic-form.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_field_control_service__["a" /* DynamicFormFieldControlService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_service__["a" /* DynamicFormService */], __WEBPACK_IMPORTED_MODULE_2__services_dynamic_form_field_control_service__["a" /* DynamicFormFieldControlService */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/designer/root/designer-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right{\n    position: absolute;\n    width:50%;\n    height:900px;\n    right: 0px;\n}\n\n.row{\n    position: absolute;\n    width:50%;\n    height:900px;\n    left: 0px;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/designer/root/designer-root.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-left\"> Designer </h3>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label [for]=\"dynamicFormFieldTextArea.key\">{{ dynamicFormFieldTextArea.label }}</label>\n\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewSection()\">\n                    Add New Section\n            </button>\n\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewDropdown()\">\n                    Add New Dropdown\n            </button>\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewDate()\">\n                    Add New Date\n            </button>\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewRange()\">\n                    Add New Range\n            </button>\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewText()\">\n                    Add New Text Field\n            </button>\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewToggle()\">\n                    Add New Toggle Button\n            </button>\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewDependent()\">\n                    Add New Dependent List\n            </button>\n            <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewOther()\">\n                    Add New List with Other\n            </button>\n\n            <div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewsection==true\">\n                <br><br>\n               \n                Name: <input class=\"form-control\" formControlName=\"t1\" type=\"text\"><br><br>\n                Collapsed: <input id=\"section_collapsed\" type=\"checkbox\">\n                <br><br>\n                <!-- Type: <input id=\"t2\" type='text'><br> -->\n                <br><br><br><br><br><br>\n                \n                    <button \n                    class=\"form-control btn btn-primary\" \n                    type=\"button\"\n                    id=\"submitMetadata\" \n                    name=\"submitMetadata\"\n                    (click)=\"onNewSectionCreate()\">\n                        CREATE\n                </button>\n            </div>\n\n            <div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewdropdown==true\">\n                    <br><br>\n                    Section: \n                    <select \n                    class=\"form-control\" \n                    style=\"width: 100%;\"  \n                    formControlName=\"sectionno\"\n                    (change)=\"onSectionSelectChanged()\" \n                    \n                    >\n                        <option value=\"\" disabled selected>Select</option>\n                        <option \n                            *ngFor=\"let opt of Options\" \n                            [ngValue]=\"opt.key\">\n                                {{ opt.value }}\n                        </option>\n                </select><br><br>\n                    <!-- Type: <input id=\"t2\" type='text'><br> -->\n                    <br><br><br><br><br><br>\n                    Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br>\n                    Item: <input class=\"form-control\" formControlName=\"dropdownitem\" type=\"text\"><br><br>\n                \n                    <button \n                        class=\"form-control btn btn-primary\" \n                        type=\"button\"\n                        id=\"submitMetadata\" \n                        name=\"submitMetadata\"\n                        (click)=\"onNewItemAdded()\">\n                          Add Item\n                    </button>     <br><br>\n                   \n                   <button \n                        class=\"form-control btn btn-primary\" \n                        type=\"button\"\n                        id=\"submitMetadata\" \n                        name=\"submitMetadata\"\n                        (click)=\"onNewDropdownCreate()\">\n                            CREATE\n                    </button>\n                </div>\n        </div>\n\n        <div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewdate==true\">\n                <br><br>\n                Section: \n                <select \n                class=\"form-control\" \n                style=\"width: 100%;\"  \n                formControlName=\"sectionno\"\n                (change)=\"onSectionSelectChanged()\" \n                \n                >\n                    <option value=\"\" disabled selected>Select</option>\n                    <option \n                        *ngFor=\"let opt of Options\" \n                        [ngValue]=\"opt.key\">\n                            {{ opt.value }}\n                    </option>\n            </select><br><br>\n                <!-- Type: <input id=\"t2\" type='text'><br> -->\n                <br><br><br><br><br><br>\n                Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br><br>\n                    <button \n                    class=\"form-control btn btn-primary\" \n                    type=\"button\"\n                    id=\"submitMetadata\" \n                    name=\"submitMetadata\"\n                    (click)=\"onNewDateCreate()\">\n                        CREATE\n                </button>\n            </div>\n    </div>\n\n    <div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewrange==true\">\n            <br><br>\n            Section: \n            <select \n            class=\"form-control\" \n            style=\"width: 100%;\"  \n            formControlName=\"sectionno\"\n            (change)=\"onSectionSelectChanged()\" \n            \n            >\n                <option value=\"\" disabled selected>Select</option>\n                <option \n                    *ngFor=\"let opt of Options\" \n                    [ngValue]=\"opt.key\">\n                        {{ opt.value }}\n                </option>\n        </select><br><br>\n            <!-- Type: <input id=\"t2\" type='text'><br> -->\n            <br><br><br><br><br><br>\n            Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br>\n            Min: <input class=\"form-control\" formControlName=\"range_min\" type=\"text\"><br>\n            Max: <input class=\"form-control\" formControlName=\"range_max\" type=\"text\"><br>\n                <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewRangeCreate()\">\n                    CREATE\n            </button>\n        <!-- </div> -->\n</div>\n<div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewtext==true\">\n        <br><br>\n        Section: \n        <select \n        class=\"form-control\" \n        style=\"width: 100%;\"  \n        formControlName=\"sectionno\"\n        (change)=\"onSectionSelectChanged()\" \n        \n        >\n            <option value=\"\" disabled selected>Select</option>\n            <option \n                *ngFor=\"let opt of Options\" \n                [ngValue]=\"opt.key\">\n                    {{ opt.value }}\n            </option>\n    </select><br><br>\n        <!-- Type: <input id=\"t2\" type='text'><br> -->\n        <br><br><br><br><br><br>\n        Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br>\n        Default: <input class=\"form-control\" formControlName=\"text_default\" type=\"text\"><br>\n        Max: <input class=\"form-control\" formControlName=\"text_max\" type=\"text\"><br>\n        Disable: <input id=\"checkDisable\" type=\"checkbox\">\n            <button \n            class=\"form-control btn btn-primary\" \n            type=\"button\"\n            id=\"submitMetadata\" \n            name=\"submitMetadata\"\n            (click)=\"onNewTextCreate()\">\n                CREATE\n        </button>\n    <!-- </div> -->\n</div>\n<div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewtoggle==true\">\n        <br><br>\n        Section: \n        <select \n        class=\"form-control\" \n        style=\"width: 100%;\"  \n        formControlName=\"sectionno\"\n        (change)=\"onSectionSelectChanged()\" \n        \n        >\n            <option value=\"\" disabled selected>Select</option>\n            <option \n                *ngFor=\"let opt of Options\" \n                [ngValue]=\"opt.key\">\n                    {{ opt.value }}\n            </option>\n    </select><br><br>\n        <!-- Type: <input id=\"t2\" type='text'><br> -->\n        <br><br><br><br><br><br>\n        Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br>\n        Default True: <input id=\"toggleDefault\" type=\"checkbox\">\n            <button \n            class=\"form-control btn btn-primary\" \n            type=\"button\"\n            id=\"submitMetadata\" \n            name=\"submitMetadata\"\n            (click)=\"onNewToggleCreate()\">\n                CREATE\n        </button>\n    <!-- </div> -->\n</div>\n    <!-- </div> -->\n\n    <div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewrange==true\">\n            <br><br>\n            Section: \n            <select \n            class=\"form-control\" \n            style=\"width: 100%;\"  \n            formControlName=\"sectionno\"\n            (change)=\"onSectionSelectChanged()\" \n            \n            >\n                <option value=\"\" disabled selected>Select</option>\n                <option \n                    *ngFor=\"let opt of Options\" \n                    [ngValue]=\"opt.key\">\n                        {{ opt.value }}\n                </option>\n        </select><br><br>\n            <!-- Type: <input id=\"t2\" type='text'><br> -->\n            <br><br><br><br><br><br>\n            Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br>\n            Min: <input class=\"form-control\" formControlName=\"range_min\" type=\"text\"><br>\n            Max: <input class=\"form-control\" formControlName=\"range_max\" type=\"text\"><br>\n                <button \n                class=\"form-control btn btn-primary\" \n                type=\"button\"\n                id=\"submitMetadata\" \n                name=\"submitMetadata\"\n                (click)=\"onNewRangeCreate()\">\n                    CREATE\n            </button>\n        <!-- </div> -->\n</div>\n<div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewdependent==true\">\n    <br><br>\n    Section: \n    <select \n    class=\"form-control\" \n    style=\"width: 100%;\"  \n    formControlName=\"sectionno\"\n    (change)=\"onSectionSelectChanged()\" \n    \n    >\n        <option value=\"\" disabled selected>Select</option>\n        <option \n            *ngFor=\"let opt of Options\" \n            [ngValue]=\"opt.key\">\n                {{ opt.value }}\n        </option>\n</select><br><br>\n    <!-- Type: <input id=\"t2\" type='text'><br> -->\n    <br><br><br><br><br><br>\n    Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br><br>\n        <button \n        class=\"form-control btn btn-primary\" \n        type=\"button\"\n        id=\"submitMetadata\" \n        name=\"submitMetadata\"\n        (click)=\"onNewDependentCreate()\">\n            CREATE\n    </button>\n</div>\n\n<div [formGroup]=\"dfFormGroup\" *ngIf=\"wantnewtextother==true\">\n    <br><br>\n    Section: \n    <select \n    class=\"form-control\" \n    style=\"width: 100%;\"  \n    formControlName=\"sectionno\"\n    (change)=\"onSectionSelectChanged()\" \n    \n    >\n        <option value=\"\" disabled selected>Select</option>\n        <option \n            *ngFor=\"let opt of Options\" \n            [ngValue]=\"opt.key\">\n                {{ opt.value }}\n        </option>\n</select><br><br>\n    <!-- Type: <input id=\"t2\" type='text'><br> -->\n    <br><br><br><br><br><br>\n    Key: <input class=\"form-control\" formControlName=\"custom_key\" type=\"text\"><br><br>\n        <button \n        class=\"form-control btn btn-primary\" \n        type=\"button\"\n        id=\"submitMetadata\" \n        name=\"submitMetadata\"\n        (click)=\"onNewOtherCreate()\">\n            CREATE\n    </button>\n</div>\n\n    <div class=\"col-md-12 form-group\">\n        <button \n            class=\"form-control btn btn-primary\" \n            type=\"button\"\n            id=\"submitMetadata\" \n            name=\"submitMetadata\"\n            (click)=\"onSubmit()\">\n                Submit\n        </button>\n        <br>\n        <button \n            class=\"form-control btn btn-primary\" \n            type=\"button\"\n            id=\"submitMetadata\" \n            name=\"submitMetadata\"\n            (click)=\"onResetJSON()\">\n                RESET JSON\n        </button>\n    </div>\n</div>\n\n<iframe class=\"right\" src= \"http://localhost:3000/form\"> </iframe>\n"

/***/ }),

/***/ "../../../../../src/app/designer/root/designer-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesignerRootComponent = /** @class */ (function () {
    /* Options=[
        {
            "key": 1,
            "value": 1
        },
        {
            "key":2,
            "value": 2
        }
    ] */ // Default 2 sections
    function DesignerRootComponent(dynamicFormService) {
        this.dynamicFormService = dynamicFormService;
        this.dfFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'md': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            't1': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'dropdownitem': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'custom_key': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'range_min': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'range_max': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'text_default': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'text_max': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            'sectionno': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]() //Section Number selected currently
        });
        this.dynamicFormFieldTextArea = new __WEBPACK_IMPORTED_MODULE_2__models_form_field__["a" /* FormField */]({
            'id': 'md',
            'key': 'md',
            'label': 'Metadata',
            'type': 'textarea',
            'rows': 25
        });
        // These variables toggle when the add new..... button is clicked   
        this.wantnewsection = false;
        this.wantnewdate = false;
        this.wantnewdropdown = false;
        this.wantnewrange = false;
        this.wantnewtext = false;
        this.wantnewtoggle = false;
        this.wantnewdependent = false;
        this.wantnewtextother = false;
        this.wantnewtextappend = false;
        this.wantnewbutton = false;
        //Control counts
        this.section_count = 2;
        this.dropdown_count = 1;
        this.date_count = 1;
        this.text_count = 1;
        this.range_count = 1;
        this.toggle_count = 1;
        this.dependent_count = 1;
        this.textappend_count = 1;
        this.textother_count = 1;
        this.button_count = 1;
        this.source = "http://localhost:4201/form";
        //Initial Reading
        this.is_first_time = true;
        this.is_disabled = false;
        this.meta = {};
        this.ddlist = {};
        this.xx = {};
        //Current Section
        this.current_section = 1;
        //Options for section selection
        this.Options = [];
    }
    DesignerRootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicFormService.getFormMetadataJson()
            .subscribe(function (resp) {
            var metadata = JSON.stringify(resp.json(), null, 4);
            _this.dfFormGroup.setControl('md', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](metadata));
            _this.section_count = 0;
            var metaresp = JSON.parse(metadata);
            for (var _i = 0, _a = metaresp['containers']; _i < _a.length; _i++) {
                var sec = _a[_i];
                console.log(sec);
                _this.Options.push({
                    "key": _this.section_count + 1,
                    "value": _this.section_count + 1
                });
                _this.section_count++;
            }
            _this.meta = metaresp;
            //this.xx.push()
            //console.log(metadata);
        }, function (err) {
            console.error(err);
        });
    };
    DesignerRootComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dynamicFormService.setFormMetadataJson(JSON.stringify(this.meta))
            .subscribe(function (resp) {
            console.log(resp);
            _this.source = "http://localhost:4201/form";
            window.location.reload();
        }, function (err) {
            console.error(err);
        });
    };
    DesignerRootComponent.prototype.onNewSection = function () {
        this.makeAllControlsInvisible();
        this.wantnewsection = true;
    };
    DesignerRootComponent.prototype.onNewDropdown = function () {
        this.makeAllControlsInvisible();
        this.wantnewdropdown = true;
        this.ddlist_count = 0;
    };
    DesignerRootComponent.prototype.onNewDate = function () {
        this.makeAllControlsInvisible();
        this.wantnewdate = true;
    };
    DesignerRootComponent.prototype.onNewRange = function () {
        this.makeAllControlsInvisible();
        this.wantnewrange = true;
    };
    DesignerRootComponent.prototype.onNewText = function () {
        this.makeAllControlsInvisible();
        this.wantnewtext = true;
    };
    DesignerRootComponent.prototype.onNewToggle = function () {
        this.makeAllControlsInvisible();
        this.wantnewtoggle = true;
    };
    DesignerRootComponent.prototype.makeAllControlsInvisible = function () {
        this.wantnewsection = false;
        this.wantnewdate = false;
        this.wantnewdropdown = false;
        this.wantnewrange = false;
        this.wantnewtext = false;
        this.wantnewtoggle = false;
        this.wantnewbutton = false;
        this.wantnewtextappend = false;
        this.wantnewtextother = false;
    };
    DesignerRootComponent.prototype.onNewDependent = function () {
        this.makeAllControlsInvisible();
        this.wantnewdependent = true;
    };
    DesignerRootComponent.prototype.onNewOther = function () {
        this.makeAllControlsInvisible();
        this.wantnewtextother = true;
    };
    DesignerRootComponent.prototype.onNewSectionCreate = function () {
        var _this = this;
        this.dynamicFormService.getFormMetadataJson()
            .subscribe(function (resp) {
            var metadata = JSON.stringify(resp.json(), null, 4);
            _this.dfFormGroup.setControl('md', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](metadata));
            // NEWLY ADDED CODE BEGINS
            if (_this.is_first_time == true) {
                var jsonContent = JSON.parse(metadata);
                _this.meta = jsonContent;
                _this.is_first_time = false;
            }
            var v = true;
            var collapse = document.getElementById("section_collapsed");
            if (collapse.checked) {
                v = false;
            }
            _this.meta['containers'][_this.section_count] = { "key": _this.dfFormGroup.value.t1, "type": "SECTION", "controllist": [], "visible": v };
            console.log(_this.meta);
            _this.wantnewsection = false;
            _this.section_count++;
            _this.Options.push({ "key": _this.section_count, "value": _this.section_count });
            // NEWLY ADDED CODE ENDS
        }, function (err) {
            console.error(err);
        });
    };
    DesignerRootComponent.prototype.onNewDropdownCreate = function () {
        this.dropdown_count++;
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_type_" + this.dropdown_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_type_" + this.dropdown_count,
            "key": "dc_type_" + this.dropdown_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "DROPDOWN",
            "disabled": false,
            "selectorControl": {
                "defaultValue": "LOCAL_FILE",
                "options": this.ddlist /* {
                    "LOCAL_FILE": "fbt_option_local_file",
                    "PULL": "fbt_option_pull",
                    "SMBPULL": "fbt_option_smbpull",
                    "SCRIPTPULL": "fbt_option_scriptpull",
                    "LOCAL_SCRIPTPULL": "fbt_option_local_scriptpull",
                    "WBEM_PULL": "fbt_option_wbem_pull",
                    "LOCAL_WINDOWS_EVENTS": "fbt_option_local_windows_events",
                    "INTEGRATION": "fbt_option_integration",
                    "PORT_PUSH": "fbt_option_port_push",
                    "REST_END_POINT": "fbt_option_rest_end_point",
                    "FILE_UPLOAD": "fbt_option_file_upload"
                } */
            },
            "mandatory": true,
            "path": "."
        });
        console.log(this.meta);
        this.wantnewdropdown = false;
    };
    DesignerRootComponent.prototype.onNewDateCreate = function () {
        this.date_count++;
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_date_" + this.date_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_date_" + this.section_count,
            "key": "dc_date_" + this.section_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "DATE",
            "disabled": false,
            "mandatory": true,
            "value": null
        });
        //this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_date","type":"field"});
        console.log(this.meta);
        this.wantnewdate = false;
    };
    DesignerRootComponent.prototype.onNewRangeCreate = function () {
        this.range_count++;
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_range_" + this.range_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_range_" + this.range_count,
            "key": "dc_range_" + this.range_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "RANGE",
            "minlength": this.dfFormGroup.value.range_min,
            "maxlength": this.dfFormGroup.value.range_max,
            "value": 60
        });
        console.log(this.meta);
        this.wantnewrange = false;
    };
    DesignerRootComponent.prototype.onNewTextCreate = function () {
        this.text_count++;
        this.is_disabled = false;
        var a = document.getElementById("checkDisable");
        if (a.checked) {
            this.is_disabled = true;
        }
        console.log(a.checked);
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_name_" + this.text_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_name_" + this.text_count,
            "key": "dc_name_" + this.text_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "TEXT",
            "disabled": this.is_disabled,
            "mandatory": true,
            "maxlength": this.dfFormGroup.value.text_max,
            "path": ".",
            "value": this.dfFormGroup.value.text_default,
            "errorMessages": {
                "REQUIRED_ERROR": "fbt_REQUIRED_ERROR_instance_name"
            }
        });
        console.log(this.meta);
        this.wantnewtext = false;
    };
    DesignerRootComponent.prototype.onNewToggleCreate = function () {
        this.toggle_count++;
        var b = false;
        var a = document.getElementById("toggleDefault");
        if (a.checked) {
            b = true;
        }
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_toggle_" + this.toggle_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_toggle_" + this.toggle_count,
            "key": "dc_toggle_" + this.toggle_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "TOGGLE",
            "disabled": true,
            "value": b
        });
        console.log(this.meta);
        this.wantnewtoggle = false;
    };
    DesignerRootComponent.prototype.onNewDependentCreate = function () {
        this.dependent_count++;
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_dependent_" + this.dependent_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_dependent_" + this.dependent_count,
            "key": "dc_dependent_" + this.dependent_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "DEPENDENTLIST",
            "disabled": false
        });
    };
    DesignerRootComponent.prototype.onNewOtherCreate = function () {
        this.textother_count++;
        this.meta['containers'][this.current_section - 1]['controllist'].push({ "key": "dc_textother_" + this.dependent_count, "type": "field" });
        this.meta['controls'].push({
            "id": "dc_textother_" + this.textother_count,
            "key": "dc_textother_" + this.textother_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "TEXTOTHER",
            "disabled": false
        });
    };
    DesignerRootComponent.prototype.onSectionSelectChanged = function () {
        this.current_section = this.dfFormGroup.value.sectionno;
    };
    DesignerRootComponent.prototype.onNewItemAdded = function () {
        var a = "key" + this.ddlist_count;
        console.log(a);
        this.ddlist[a] = this.dfFormGroup.value.dropdownitem;
        this.ddlist_count++;
        console.log(this.ddlist);
    };
    DesignerRootComponent.prototype.onResetJSON = function () {
        var original = {
            "containers": [
                {
                    "key": "dc_create_data_collector1",
                    "type": "SECTION",
                    "controllist": [
                        {
                            "key": "dc_name",
                            "type": "field"
                        },
                        {
                            "key": "dc_type",
                            "type": "field"
                        },
                        {
                            "key": "dc_dependent",
                            "type": "field"
                        },
                        {
                            "key": "dc_textother",
                            "type": "field"
                        },
                        {
                            "key": "dc_toggle",
                            "type": "field"
                        }
                    ],
                    "label": "fbt_create_data_collector1",
                    "visible": true
                },
                {
                    "key": "dc_create_data_collector2",
                    "type": "SECTION",
                    "controllist": [
                        {
                            "key": "dc_date",
                            "type": "field"
                        },
                        {
                            "key": "dc_range",
                            "type": "field"
                        },
                        {
                            "key": "dc_textappend",
                            "type": "field"
                        },
                        {
                            "key": "dc_button",
                            "type": "field"
                        }
                    ],
                    "visible": false
                }
            ],
            "controls": [
                {
                    "id": "dc_name",
                    "key": "dc_name",
                    "label": "fbt_name",
                    "type": "TEXT",
                    "disabled": false,
                    "mandatory": true,
                    "maxlength": 100,
                    "path": ".",
                    "value": "Hello World !!",
                    "errorMessages": {
                        "REQUIRED_ERROR": "fbt_REQUIRED_ERROR_instance_name"
                    }
                },
                {
                    "id": "dc_type",
                    "key": "dc_type",
                    "label": "fbt_type",
                    "type": "DROPDOWN",
                    "disabled": false,
                    "selectorControl": {
                        "defaultValue": "LOCAL_FILE",
                        "options": {
                            "LOCAL_FILE": "fbt_option_local_file",
                            "PULL": "fbt_option_pull",
                            "SMBPULL": "fbt_option_smbpull",
                            "SCRIPTPULL": "fbt_option_scriptpull",
                            "LOCAL_SCRIPTPULL": "fbt_option_local_scriptpull",
                            "WBEM_PULL": "fbt_option_wbem_pull",
                            "LOCAL_WINDOWS_EVENTS": "fbt_option_local_windows_events",
                            "INTEGRATION": "fbt_option_integration",
                            "PORT_PUSH": "fbt_option_port_push",
                            "REST_END_POINT": "fbt_option_rest_end_point",
                            "FILE_UPLOAD": "fbt_option_file_upload"
                        }
                    },
                    "mandatory": true,
                    "path": "."
                },
                {
                    "id": "dc_date",
                    "key": "dc_date",
                    "label": "fbt_date",
                    "type": "DATE",
                    "disabled": false,
                    "mandatory": true,
                    "value": null
                },
                {
                    "id": "dc_range",
                    "key": "dc_range",
                    "label": "fbt_range",
                    "type": "RANGE",
                    "minlength": 0,
                    "maxlength": 100,
                    "value": 60
                },
                {
                    "id": "dc_button",
                    "key": "dc_button",
                    "label": "fbt_button",
                    "type": "BUTTON",
                    "disabled": false
                },
                {
                    "id": "dc_dependent",
                    "key": "dc_dependent",
                    "label": "fbt_dependentlist",
                    "type": "DEPENDENTLIST",
                    "disabled": false
                },
                {
                    "id": "dc_textappend",
                    "key": "dc_textappend",
                    "label": "fbt_textappend",
                    "type": "TEXTAPPEND",
                    "disabled": false
                },
                {
                    "id": "dc_textother",
                    "key": "dc_textother",
                    "label": "fbt_textother",
                    "type": "TEXTOTHER",
                    "disabled": false
                },
                {
                    "id": "dc_toggle",
                    "key": "dc_toggle",
                    "label": "fbt_toggle",
                    "type": "TOGGLE",
                    "disabled": true,
                    "value": false
                }
            ]
        };
        this.dynamicFormService.setFormMetadataJson(JSON.stringify(original))
            .subscribe(function (resp) {
            window.location.reload();
        }, function (err) {
            console.error(err);
        });
    };
    DesignerRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-designer-root',
            template: __webpack_require__("../../../../../src/app/designer/root/designer-root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/designer/root/designer-root.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_dynamic_form_service__["a" /* DynamicFormService */]])
    ], DesignerRootComponent);
    return DesignerRootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/df-form-section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormSection; });
var DynamicFormSection = /** @class */ (function () {
    function DynamicFormSection(dfsc) {
        this.fields = dfsc.fields;
        this.key = dfsc.key;
        this.label = dfsc.label ? dfsc.label : dfsc.key;
        this.type = dfsc.type;
        this.visible = dfsc.visible !== undefined ? dfsc.visible : true;
    }
    DynamicFormSection.prototype.getFields = function () {
        return this.fields;
    };
    DynamicFormSection.prototype.getKey = function () {
        return this.key;
    };
    DynamicFormSection.prototype.getLabel = function () {
        return this.label;
    };
    DynamicFormSection.prototype.getVisible = function () {
        return this.visible;
    };
    return DynamicFormSection;
}());



/***/ }),

/***/ "../../../../../src/app/models/df-form.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicForm; });
var DynamicForm = /** @class */ (function () {
    function DynamicForm(dfc) {
        this.sections = dfc.sections;
    }
    DynamicForm.prototype.getSections = function () {
        return this.sections;
    };
    DynamicForm.prototype.getSection = function (i) {
        return this.sections[i];
    };
    return DynamicForm;
}());



/***/ }),

/***/ "../../../../../src/app/models/form-field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormField; });
var FormField = /** @class */ (function () {
    function FormField(ffg) {
        this.disabled = ffg.disabled !== undefined ? !!ffg.disabled : false;
        this.errorMessages = ffg.errorMessages || {};
        this.id = ffg.id;
        this.key = ffg.key;
        this.label = ffg.label;
        this.mandatory = ffg.mandatory !== undefined ? !!ffg.mandatory : false;
        this.maxlength = ffg.maxlength || 256;
        this.minlength = ffg.minlength || 0;
        this.path = ffg.path || '';
        this.rows = ffg.rows || 5;
        this.selectorControl = ffg.selectorControl ? this.getSelectorControl(ffg.selectorControl) : { 'defaultValue': null, 'options': [] };
        this.type = ffg.type;
        this.value = (ffg.type === 'DATE' ? this.getDateValue(ffg.value) : ffg.value) || '';
    }
    FormField.prototype.getId = function () {
        return this.id;
    };
    FormField.prototype.getKey = function () {
        return this.key;
    };
    FormField.prototype.getMandatory = function () {
        return this.mandatory;
    };
    FormField.prototype.getSelectorDefaultValue = function () {
        return this.selectorControl.defaultValue;
    };
    FormField.prototype.getValue = function () {
        return this.value;
    };
    FormField.prototype.getType = function () {
        return this.type;
    };
    FormField.prototype.getSelectorControl = function (sc) {
        return {
            defaultValue: sc.defaultValue,
            options: Object.keys(sc.options).map(function (key) { return ({ 'key': key, 'value': sc.options[key] }); })
        };
    };
    FormField.prototype.getDateValue = function (value) {
        var date = value ? new Date(value) : new Date();
        var m = date.getMonth() + 1; // offset for date month starting from 0 instead of 1 for january
        var d = {
            yyyy: date.getFullYear(),
            mm: m < 10 ? ('0' + m) : m,
            dd: date.getDate()
        };
        return (d.yyyy + '-' + d.mm + '-' + d.dd);
    };
    return FormField;
}());



/***/ }),

/***/ "../../../../../src/app/services/dynamic-form-field-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormFieldControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

var DynamicFormFieldControlService = /** @class */ (function () {
    function DynamicFormFieldControlService() {
    }
    DynamicFormFieldControlService.prototype.getFormGroups = function (dynamicFormSections) {
        var _this = this;
        var formGroupConfig = {};
        dynamicFormSections.forEach(function (dynamicFormSection) {
            var formArray = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormArray */]([]);
            dynamicFormSection.getFields().forEach(function (field) {
                formGroupConfig[field.getKey()] = _this.getFormControl(field);
            });
        });
        var formGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */](formGroupConfig);
        return formGroup;
    };
    DynamicFormFieldControlService.prototype.getFormControl = function (dff) {
        var validators = [];
        if (dff.getMandatory())
            validators.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required);
        var formControl = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](dff.getValue() || dff.getSelectorDefaultValue() || '', validators);
        return formControl;
    };
    return DynamicFormFieldControlService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dynamic-form-field.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormFieldService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_form_field__ = __webpack_require__("../../../../../src/app/models/form-field.ts");

var DynamicFormFieldService = /** @class */ (function () {
    function DynamicFormFieldService() {
        this.formFields = [];
        this.formFieldsMap = {};
    }
    DynamicFormFieldService.prototype.initControls = function (controls) {
        var _this = this;
        this.formFields = controls.map(function (control) {
            var formField = new __WEBPACK_IMPORTED_MODULE_0__models_form_field__["a" /* FormField */]({
                'disabled': control['disabled'],
                'errorMessages': control['errorMessages'],
                'id': control['id'],
                'key': control['key'],
                'label': control['label'],
                'mandatory': control['mandatory'],
                'maxlength': control['maxlength'],
                'path': control['path'],
                'rows': control['rows'],
                'selectorControl': control['selectorControl'],
                'type': control['type'],
                'value': control['value'],
            });
            _this.formFieldsMap[control['key']] = formField;
            return formField;
        });
    };
    DynamicFormFieldService.prototype.getFormFields = function (controllist) {
        var _this = this;
        return controllist.map(function (control) {
            var key = control['key'];
            var type = control['type'];
            if (type !== 'field') { }
            return _this.formFieldsMap[key];
        });
    };
    return DynamicFormFieldService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dynamic-form-section.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormSectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_df_form_section__ = __webpack_require__("../../../../../src/app/models/df-form-section.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_form_field_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form-field.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormSectionService = /** @class */ (function () {
    function DynamicFormSectionService(dynamicFormFieldService) {
        this.dynamicFormFieldService = dynamicFormFieldService;
        this.formSections = [];
    }
    ;
    DynamicFormSectionService.prototype.getFormSections = function (containers) {
        var _this = this;
        this.formSections = containers.map(function (container) {
            var fields = _this.dynamicFormFieldService.getFormFields(container['controllist']);
            var formSection = new __WEBPACK_IMPORTED_MODULE_1__models_df_form_section__["a" /* DynamicFormSection */]({
                'fields': fields,
                'key': container['key'],
                'label': container['label'],
                'type': container['type'],
                'visible': container['visible']
            });
            return formSection;
        });
        return this.formSections;
    };
    DynamicFormSectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dynamic_form_field_service__["a" /* DynamicFormFieldService */]])
    ], DynamicFormSectionService);
    return DynamicFormSectionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/dynamic-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_df_form__ = __webpack_require__("../../../../../src/app/models/df-form.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamic_form_section_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form-section.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamic_form_field_service__ = __webpack_require__("../../../../../src/app/services/dynamic-form-field.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var headerJson = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
var DynamicFormService = /** @class */ (function () {
    function DynamicFormService(http, dynamicFormSectionService, dynamicFormFieldService) {
        this.http = http;
        this.dynamicFormSectionService = dynamicFormSectionService;
        this.dynamicFormFieldService = dynamicFormFieldService;
    }
    DynamicFormService.prototype.initForm = function (metadata) {
        this.metadata = metadata;
        this.dynamicFormFieldService.initControls(metadata['controls']);
        this.form = new __WEBPACK_IMPORTED_MODULE_2__models_df_form__["a" /* DynamicForm */]({
            'sections': this.dynamicFormSectionService.getFormSections(metadata['containers'])
        });
    };
    DynamicFormService.prototype.getForm = function () {
        return this.form;
    };
    DynamicFormService.prototype.getMetadata = function () {
        return this.metadata;
    };
    DynamicFormService.prototype.getFormMetadataJson = function () {
        // const { HOST, PORT } = this.envService.getConnectionDetails();
        var HOST = 'localhost', PORT = 3000;
        var url = (HOST && PORT) ? 'http://' + HOST + ':' + PORT : '';
        return this.http.get(url + '/df/api/formmetadata');
    };
    DynamicFormService.prototype.setFormMetadataJson = function (metadata) {
        // const { HOST, PORT } = this.envService.getConnectionDetails();
        var HOST = 'localhost', PORT = 3000;
        var url = (HOST && PORT) ? 'http://' + HOST + ':' + PORT : '';
        return this.http.post(url + '/df/api/formmetadata', metadata, { headers: headerJson });
    };
    DynamicFormService.prototype.getOtherList = function () {
        return [{
                'key': 'BTech',
                'value': 'BTech'
            },
            {
                'key': 'MBBS',
                'value': 'MBBS'
            }, {
                'key': 'BA',
                'value': 'BA'
            },
            {
                'key': 'Other',
                'value': 'Other'
            }];
    };
    DynamicFormService.prototype.getFormControlMasterMetadataJson = function () {
        return [{
                'key': 'A',
                'value': 'Pune University'
            }, {
                'key': 'B',
                'value': 'Mumbai University'
            }, {
                'key': 'C',
                'value': 'Autonomous Institute'
            }];
    };
    DynamicFormService.prototype.getFormControlMetadataJson = function (option) {
        var someFormControlMetadata = {
            "A": [
                {
                    'key': '001',
                    'value': 'PICT'
                },
                {
                    'key': '002',
                    'value': 'MIT'
                },
                {
                    'key': '003',
                    'value': 'SKNCOE'
                }
            ],
            "B": [
                {
                    'key': '001',
                    'value': 'K J Somaiyya'
                },
                {
                    'key': '002',
                    'value': 'Father Agnell '
                },
                {
                    'key': '003',
                    'value': 'D Y Patil'
                }
            ],
            "C": [
                {
                    'key': '001',
                    'value': 'COEP'
                },
                {
                    'key': '002',
                    'value': 'VIT'
                },
                {
                    'key': '003',
                    'value': 'Bharati Vidyapeeth'
                }
            ]
        };
        return someFormControlMetadata[option];
    };
    DynamicFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__dynamic_form_section_service__["a" /* DynamicFormSectionService */], __WEBPACK_IMPORTED_MODULE_4__dynamic_form_field_service__["a" /* DynamicFormFieldService */]])
    ], DynamicFormService);
    return DynamicFormService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map