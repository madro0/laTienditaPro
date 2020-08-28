import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      title: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu:[
        {titulo:'Main', url: '/'},
        {titulo:'ProgresBar', url: '/progress'},
        {titulo:'Graficos', url: '/grafica1'}
      ]
    }
  ];

  constructor() { }
}
