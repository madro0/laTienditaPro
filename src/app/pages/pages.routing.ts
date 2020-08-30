import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        children:[
            {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'}},
            {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
            {path: 'grafica1', component: Grafica1Component, data: {titulo: 'Graficas'}},
            {path: 'acount-settings', component: AccountSettingsComponent, data:{titulo: 'Acount-settings'}},
            {path: 'promesas', component: PromesasComponent, data:{titulo: 'Promesas'}},
            {path: 'rxjs', component: RxjsComponent, data:{titulo: 'Rxjs'}},
            
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
