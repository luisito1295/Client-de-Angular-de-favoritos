import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponentList } from './components/favoritos-list/favoritos-list.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FavoritoDetailComponent } from './components/favorito-detail/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add/favorito-add.component';
import { FavoritoAEditComponent } from './components/favorito-edit/favorito-edit.component';

import { FavoritoService } from './services/favorito.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponentList,
    FavoritoDetailComponent,
    FavoritoAddComponent,
    FavoritoAEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule,FavoritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
