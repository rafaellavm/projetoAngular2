import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent{
    
    //atributo
      fotos: Object[] = [];
      
          constructor(http: Http){
      
              http
              .get('v1/fotos')
              /*.map(res => {
                  return res.json();
              })*/
              .map(res => res.json())
              .subscribe(fotos =>{
      
                  this.fotos = fotos;
                  console.log(this.fotos);
              },erro => console.log(erro));
              
          }
}