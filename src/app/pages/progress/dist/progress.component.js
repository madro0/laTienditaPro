"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProgressComponent = void 0;
var core_1 = require("@angular/core");
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.progreso = 50;
    }
    Object.defineProperty(ProgressComponent.prototype, "getPorcentaje", {
        get: function () {
            return this.progreso + "%";
        },
        enumerable: false,
        configurable: true
    });
    ProgressComponent.prototype.validarInputProgeso = function (valor) {
        if (valor > 100) {
            return this.progreso = 100;
        }
        if (valor < 0) {
            return this.progreso = 0;
        }
    };
    ProgressComponent.prototype.cambiarValor = function (valor) {
        if (this.progreso >= 100 && valor >= 0) {
            return this.progreso = 100;
        }
        if (this.progreso <= 0 && valor < 0) {
            return this.progreso = 0;
        }
        this.progreso = this.progreso + valor;
    };
    ProgressComponent = __decorate([
        core_1.Component({
            selector: 'app-progress',
            templateUrl: './progress.component.html',
            styleUrls: ['./progress.component.css']
        })
    ], ProgressComponent);
    return ProgressComponent;
}());
exports.ProgressComponent = ProgressComponent;
