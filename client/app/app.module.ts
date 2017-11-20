import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.route';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [BrowserModule, 
              FotoModule, 
              HttpModule, 
              PainelModule,
              FormsModule,
              routing],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent] //inicia primeiro
})

export class AppModule{

}