import { Component, Input,  } from '@angular/core';
import { ChartType } from "chart.js";
import { MultiDataSet, Label, Color } from "ng2-charts";

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent  {
  
  @Input() titulo: string = 'Grafica';
  @Input() doughnutChartLabels: Label[]= ['Indicador1 ', 'Indicador2', 'Indicador3'];
  @Input() doughnutChartData: MultiDataSet= [
    [350, 450, 100],
  ];
  @Input() colors: Color[]= [
    {
      backgroundColor:
      [
        '#9E120E', 
        '#FF5800', 
        '#FFB5414'
      ]
    }
  ]
}
