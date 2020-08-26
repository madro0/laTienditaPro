import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  exports: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
