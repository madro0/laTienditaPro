import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   
    this.getUsuarios().then(usuarios=>{
      
      console.log(usuarios);
      
    })

    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('hola mundo');
    //   } else {
    //     reject('algo salio mal');
    //   }

    // });

    // promesa.then((argumento)=>{

    //   console.log(argumento);

    // })
    // .catch((reject)=>{

    //   console.log(reject)

    // });

    // console.log('end of Init');
  }

  getUsuarios() {

    const promesa = new Promise( resolve=>{
      
      fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then(body=>body.data)
      .then(data=>resolve(data));
    
    });

    return promesa;

    
  
  }

}
