import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

public Labels: string[]= ['Camisas', 'Zapatos', 'Chamarras']; 
public Labels2: string[]= ['Proveedores', 'Nominas', 'Servicios']; 
 
public data= [
  [68, 12, 10],
]
public colores = [
  {
    backgroundColor:
    [
      '#E65000', 
      '#F6C4AA', 
      '#19AFFF'
    ]
  }
]
 
}
  