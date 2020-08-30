import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titlePage: string;
  public tituloSubs$: Subscription;

  constructor(private router: Router) { 

    this.tituloSubs$=this.getDataRuta()
                          .subscribe(datico=>{
                            this.titlePage= datico.titulo
                            document.title= `LaTienditaPro - ${this.titlePage}`
                          });
  }
  //garbage collector
  ngOnDestroy(): void {
    //borra la subscripcion que permite ubicar el titulo de los routings
    //pues en caso de que cierre sesion pueden crearse multibles subscripciones
    //de router.events get data.titulo 
    this.tituloSubs$.unsubscribe();
  }


  //extraer la el titulo de la data que esta en el page.routing
  getDataRuta(){
    
    return this.router.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild===null ),
        map ((event:ActivationEnd)=> event.snapshot.data )
      )
      
  }



 

}
