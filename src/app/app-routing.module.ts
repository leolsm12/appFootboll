import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


const routes: Routes = [
  { path: "", component: PaginaInicialComponent,pathMatch: 'prefix', canActivate: []},
  { path: "pagina-principal", component: PaginaInicialComponent,pathMatch: 'prefix', canActivate: []},
  { path: "pesquisa", component:PesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
