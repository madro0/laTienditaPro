"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./auth/login/login.component");
var register_component_1 = require("./auth/register/register.component");
var nopagefound_component_1 = require("./pages/nopagefound/nopagefound.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var breadcrumbs_component_1 = require("./shared/breadcrumbs/breadcrumbs.component");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var header_component_1 = require("./shared/header/header.component");
var progress_component_1 = require("./pages/progress/progress.component");
var grafica1_component_1 = require("./pages/grafica1/grafica1.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                nopagefound_component_1.NopagefoundComponent,
                dashboard_component_1.DashboardComponent,
                breadcrumbs_component_1.BreadcrumbsComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                progress_component_1.ProgressComponent,
                grafica1_component_1.Grafica1Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
