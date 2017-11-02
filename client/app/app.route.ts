import{RouterModule,Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

const appRoutes: Routes = [
    
    //default: localhost:3000
    {path:'', component: ListagemComponent},
    {path: 'cadastro',component: CadastroComponent},
    {path: '**',component: ListagemComponent}
];

//compila as rotas
//tem que guardar numa variável pra poder exportar
export const routing = RouterModule.forRoot(appRoutes);