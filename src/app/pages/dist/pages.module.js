"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("./../shared/shared.module");
var components_module_1 = require("./../components/components.module");
var app_routing_module_1 = require("./../app-routing.module");
var pages_component_1 = require("./pages.component");
var grafica1_component_1 = require("./grafica1/grafica1.component");
var progress_component_1 = require("./progress/progress.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var account_settings_component_1 = require("./account-settings/account-settings.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                progress_component_1.ProgressComponent,
                grafica1_component_1.Grafica1Component,
                pages_component_1.PagesComponent,
                account_settings_component_1.AccountSettingsComponent
            ],
            exports: [
                dashboard_component_1.DashboardComponent,
                progress_component_1.ProgressComponent,
                grafica1_component_1.Grafica1Component,
                pages_component_1.PagesComponent,
                account_settings_component_1.AccountSettingsComponent
            ],
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                shared_module_1.SharedModule,
                app_routing_module_1.AppRoutingModule,
                components_module_1.ComponentsModule
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
