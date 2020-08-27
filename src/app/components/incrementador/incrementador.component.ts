import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  
  // @Input('valor') progreso: number = 50;
  @Input() progreso: number = 50;
  @Input() btnClass: string = ' btn-primary';


  @Output() valorSalida: EventEmitter<number> = new EventEmitter(); 
  
  
  scribirProgeso(valorInput: number){
    

    if(valorInput>=100){
      
      this.progreso= 100;

    }else if(valorInput<=0){
      this.progreso= 0;
    }else{
      this.progreso= valorInput;
    }
    
    this.valorSalida.emit(this.progreso);

  }

  cambiarValor( valor: number){
    
    
    if(this.progreso >=100 && valor >=0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    
    if(this.progreso <=0 && valor < 0){
      
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    
    
    this.progreso = this.progreso+valor;
    this.valorSalida.emit(this.progreso);
   
  }

}
