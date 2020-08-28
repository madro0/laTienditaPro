import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  
  

  constructor(private settingsServices: SettingsService) { }

  ngOnInit(): void {
    
    this.settingsServices.checkCurrentTheme();
  }

  //cuando hago click en una parte del html donde se encuentre esta clase se activa 
  changeTheme(theme: string){  

    this.settingsServices.changeTheme(theme);
  
  }


  

}
