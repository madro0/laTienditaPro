"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountSettingsComponent = void 0;
var core_1 = require("@angular/core");
var AccountSettingsComponent = /** @class */ (function () {
    function AccountSettingsComponent(settingsServices) {
        this.settingsServices = settingsServices;
        //theme es el id que tiene en el index la etiqueta: <link href="./assets/css/colors/default-dark.css" id="theme" rel="stylesheet">
        //Es importante revisar el page.component.ts, pues es este la parte donde primero inicia el href de la hoja de estilo por defecto,
        //o la extrae del local storage, de la variable 'theme' 
        this.linkTheme = document.querySelector('#theme');
    }
    AccountSettingsComponent.prototype.ngOnInit = function () {
        //el selector es la clase que tiene cada uno de los botones de colores
        //con la inscrucction querySelectorAll selecciono todos etiquetas del documento que tengan esta class
        this.links = document.querySelectorAll('.selector');
        this.checkCurrentTheme();
    };
    //cuando hago click en una parte del html donde se encuentre esta clase se activa 
    AccountSettingsComponent.prototype.changeTheme = function (theme) {
        this.settingsServices.changeTheme(theme);
        //actualizo la ubicacion de la palomita en el boardColor (tablero de colores :V)
        this.checkCurrentTheme();
    };
    AccountSettingsComponent.prototype.checkCurrentTheme = function () {
        var _this = this;
        //despues de haber obtenido todos las etiquetas que tienen la class '.selector'
        //obtengo un lista de elementos y la recorro
        this.links.forEach(function (element) {
            //elimino la clase 'working' de cada una de las etiquetas que tengan en cada class 
            element.classList.remove('working');
            //extraigo el nombre del tema en la posicion del arry acual
            var btnTheme = element.getAttribute('data-theme');
            //lo anexo a la ubicacion del url donde esta ubicado la hoja de stilo
            var btnThemeUrl = "./assets/css/colors/" + btnTheme + ".css";
            //extraigo el href de la hoja de stilo del tema seleccionado 
            var currentTheme = _this.linkTheme.getAttribute('href');
            // comparo si son iguales
            if (btnThemeUrl === currentTheme) {
                //si son iguales simplemente le coloco la etiqueta 'worging' en el class del html del boton de color que corresponda el tema 
                element.classList.add('working');
            }
            //ya ubiqué la palomita donde era perro!!!
        });
    };
    AccountSettingsComponent = __decorate([
        core_1.Component({
            selector: 'app-account-settings',
            templateUrl: './account-settings.component.html',
            styles: []
        })
    ], AccountSettingsComponent);
    return AccountSettingsComponent;
}());
exports.AccountSettingsComponent = AccountSettingsComponent;
