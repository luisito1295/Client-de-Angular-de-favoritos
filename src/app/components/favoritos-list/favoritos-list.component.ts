import { Component, OnInit, DoCheck, OnChanges, SimpleChanges  } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Favorito } from '../../models/favorito';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: './favoritos-list.component.html',
  styleUrls: ['./favoritos-list.component.css'],
  providers: [FavoritoService]
})
export class FavoritosComponentList implements OnInit, OnChanges {

  public title:string;
  public loading:boolean;
  public favorito:Favorito[];
  public confirmado;

  public cambio;

  constructor(private _favoritoServices:FavoritoService, private _router:Router) {
    this.title = 'Lista de favoritos';
    this.loading = true;
  }

  ngOnInit() {
    this.getFavoritos();
  }

  ngOnChanges(changes: SimpleChanges){
    this.getFavoritos();
    console.log(changes);
    this.refresh();
  }


  getFavoritos(){
    this._favoritoServices.getFavoritos().subscribe(
      result => {
        this.favorito = result.favorito;

        if(!this.favorito){
          alert('Error');
        }else{
          this.loading = false;
          //console.log(result);
        }


      },
      error => {
        console.log(<any>error);
        alert('Error');
      }
    );
  }

  onBorrarConfirm(id){
    this.confirmado = id;
    this.getFavoritos();
  }

  onCancelarConfirm(id){
    this.confirmado = null;
    this.getFavoritos();
  }

  refresh(): void {
    window.location.reload();
  }

  onBorrarFavorito(id){
    this._favoritoServices.deleteFavorito(id).subscribe(
    res => {
      if(!res.favorito){

      }
      this.refresh();
      this.getFavoritos();

    },
    err => {
      console.log(<any>err);
    }
    );
  }
}
