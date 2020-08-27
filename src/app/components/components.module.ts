import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ChartsModule, } from "ng2-charts";

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';


@NgModule({
  declarations: [
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports: [
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  imports: [
    CommonModule,

    ChartsModule,

    FormsModule
  ]
})
export class ComponentsModule { }
