import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  //theme es el id que tiene en el index la etiqueta: <link href="./assets/css/colors/default-dark.css" id="theme" rel="stylesheet">
  //Es importante revisar el page.component.ts, pues es este la parte donde primero inicia el href de la hoja de estilo por defecto,
  //o la extrae del local storage, de la variable 'theme' 
  public linkTheme = document.querySelector('#theme');

  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', url);
   
  }

  changeTheme(theme: string){
    // const linkTheme = document.querySelector('!#theme');
    const url = `./assets/css/colors/${theme}.css`;
    
    this.linkTheme.setAttribute('href', url);

    //mando al local storage el nombre del tema seleccionado
    localStorage.setItem('theme', url); 

    //actualizo la ubicacion de la palomita en el boardColor (tablero de colores :V)
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
     //el selector es la clase que tiene cada uno de los botones de colores
    //con la inscrucction querySelectorAll selecciono todos etiquetas del documento que tengan esta class
    const links =  document.querySelectorAll('.selector');
    
    //despues de haber obtenido todos las etiquetas que tienen la class '.selector'
    //obtengo un lista de elementos y la recorro
    links.forEach(element =>{

      //elimino la clase 'working' de cada una de las etiquetas que tengan en cada class 
      element.classList.remove('working');

      //extraigo el nombre del tema en la posicion del arry acual
      const btnTheme = element.getAttribute('data-theme');

      //lo anexo a la ubicacion del url donde esta ubicado la hoja de stilo
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      //extraigo el href de la hoja de stilo del tema seleccionado 
      const currentTheme = this.linkTheme.getAttribute('href');

      // comparo si son iguales
      if(btnThemeUrl === currentTheme){
        //si son iguales simplemente le coloco la etiqueta 'worging' en el class del html del boton de color que corresponda el tema 
        element.classList.add('working');

      }
      //ya ubiqué la palomita donde era perro!!!
    });
    
  }
}
