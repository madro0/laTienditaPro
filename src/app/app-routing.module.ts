import { AuthRoutingModule } from './auth/auth.routing';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//sub modulos.
import { PagesRoutingModule } from './pages/pages.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  
  //path: '/dashboard' PagesRouting || '' PagesRouting
  //path: '/auth' AuthRouting

  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component: NopagefoundComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
