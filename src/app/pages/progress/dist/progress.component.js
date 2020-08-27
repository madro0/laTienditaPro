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
        this.progreso1 = 25;
        this.progreso2 = 35;
    }
    Object.defineProperty(ProgressComponent.prototype, "geProgreso1", {
        get: function () {
            return this.progreso1 + "%";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressComponent.prototype, "geProgreso2", {
        get: function () {
            return this.progreso2 + "%";
        },
        enumerable: false,
        configurable: true
    });
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
