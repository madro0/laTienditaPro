import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy  {

  public intervalSub: Subscription;

  constructor() {
                                           
    // this.retornaObservable().pipe(
    //   //sirve para reintentar alguna acción en caso de que se encuentre
    //   //con algun error
    //   retry()
    //   //Podemos indicar el numero de intentos que se quieren realizar 
    //   //con el rin de no mantener un proceso en posibles infitos intentos fallidos
    //   //retry(4)
    // )
    // .subscribe(
    //   valor => console.log('Sub:', valor),
    //   error=> console.warn('error', error),
    //   ()=>console.info('Obs termineitor ')
    // );


    this.intervalSub= this.retornaIntervalo().subscribe( console.log );
  }
  ngOnDestroy(): void {
    //con esto podemos canselar la subsicripcion al salirnos de la pagina de rxjs
    this.intervalSub.unsubscribe();
  }

    retornaIntervalo(): Observable<number> {

      const interval$ = interval(100)
                        .pipe(
                          map(valorsito => {
                            return  valorsito + 1;
                          }),
                          filter(valor =>(valor%2===0) ? true: false),
                          //como el filter evita que los numeros impares los imprima
                          //el take no los cuenta parcero. 
                          //take(10),
                        );
      return interval$;
    }
    
    
    retornaObservable(): Observable<number> {
    let i = -1;

    const obs$ =new Observable<number>( observer=>{

      const intervalito = setInterval( ()=>{

        i++;
        observer.next(i);

        if(i=== 4){
          clearInterval(intervalito);
          observer.complete();
        }

        if(i=== 2){
          console.error('error llegamos a 2, reintenemos a ver si safamos');
         
          observer.error('i llego al valor de 2');
        }
        
      }, 1000);

    }); 

    return obs$;
  }

  

}
