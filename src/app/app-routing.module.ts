import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';
import { FavoritosComponentList } from './components/favoritos-list/favoritos-list.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritoAddComponent } from './components/favorito-add/favorito-add.component';
import { FavoritoAEditComponent } from './components/favorito-edit/favorito-edit.component';

const routes: Routes = [
  {path: '', component: FavoritosComponentList},
  {path: 'home', component: FavoritosComponentList},
  {path: 'marcador/:id', component: FavoritoDetailComponent},
  {path: 'crear-marcador', component: FavoritoAddComponent},
  {path: 'editar-marcador/:id', component: FavoritoAEditComponent},
  {path: '**', component: FavoritosComponentList},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
