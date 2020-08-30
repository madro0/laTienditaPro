import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function costomInitFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit  {

  public year = new Date().getFullYear();
  

  constructor( private settingsServices: SettingsService) {
    costomInitFunction();
  }
  
  ngOnInit(): void {

    costomInitFunction();
  } 
  
}
