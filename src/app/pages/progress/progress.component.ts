import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls:['./progress.component.css']
  
})
export class ProgressComponent  {
  
  progreso1: number = 25;
  progreso2: number = 35;
  

  get geProgreso1(){
    return `${this.progreso1}%`
  }
  get geProgreso2(){
    return `${this.progreso2}%`
  }


}
