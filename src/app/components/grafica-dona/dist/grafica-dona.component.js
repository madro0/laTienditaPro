"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GraficaDonaComponent = void 0;
var core_1 = require("@angular/core");
var GraficaDonaComponent = /** @class */ (function () {
    function GraficaDonaComponent() {
        this.titulo = 'Grafica';
        this.doughnutChartLabels = ['Indicador1 ', 'Indicador2', 'Indicador3'];
        this.doughnutChartData = [
            [350, 450, 100],
        ];
        this.colors = [
            {
                backgroundColor: [
                    '#9E120E',
                    '#FF5800',
                    '#FFB5414'
                ]
            }
        ];
    }
    __decorate([
        core_1.Input()
    ], GraficaDonaComponent.prototype, "titulo");
    __decorate([
        core_1.Input()
    ], GraficaDonaComponent.prototype, "doughnutChartLabels");
    __decorate([
        core_1.Input()
    ], GraficaDonaComponent.prototype, "doughnutChartData");
    __decorate([
        core_1.Input()
    ], GraficaDonaComponent.prototype, "colors");
    GraficaDonaComponent = __decorate([
        core_1.Component({
            selector: 'app-grafica-dona',
            templateUrl: './grafica-dona.component.html',
            styles: []
        })
    ], GraficaDonaComponent);
    return GraficaDonaComponent;
}());
exports.GraficaDonaComponent = GraficaDonaComponent;
