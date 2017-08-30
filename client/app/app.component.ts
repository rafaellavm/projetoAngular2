//transforma a classe em um componente
import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})

export class AppComponent{

    //atributo
    fotos: Object[] = [];

    constructor(http: Http){

        let stream = http.get('v1/fotos');

        //res => aero function = declaração resumida pra declarar função
        stream.subscribe(res =>{

            this.fotos = res.json();
            //console.log(this.fotos);
        });
        
    }
}
