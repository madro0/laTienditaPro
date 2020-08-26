import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls:['./progress.component.css']
  
})
export class ProgressComponent  {
  
  progreso: number = 50;
  
  get getPorcentaje(){
    return `${ this.progreso}%`;
  }
  
  validarInputProgeso(valor:number){

    if(valor>100){
      return this.progreso = 100;
    }

    if(valor<0){
      return this.progreso = 0;
    }
  }

  cambiarValor( valor: number){

    if(this.progreso >=100 && valor >=0){
      return this.progreso = 100;
    }

    if(this.progreso <=0 && valor < 0){
      return this.progreso = 0;
    }


    this.progreso = this.progreso+valor;
  
  }

}
