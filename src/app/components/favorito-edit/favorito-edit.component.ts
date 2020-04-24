import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';

@Component({
  selector: 'app-favorito-edit',
  templateUrl: './favorito-edit.component.html',
  providers: [FavoritoService]
})
export class FavoritoAEditComponent implements OnInit {

  title:string;
  public favorito: Favorito;


  constructor(private _favoritoService:FavoritoService,
              public  _route:ActivatedRoute,
              public  _router:Router) {
    this.title = "Crear favorito"
  }

  ngOnInit() {
    this.favorito = new Favorito("","","","");
    this.getFavorito();
  }

  getFavorito(){
    this._route.params.subscribe(params =>{

      let id = params['id'];

      this._favoritoService.getFavorito(id).subscribe(
        result => {

          if(!result.favorito){

            this._router.navigate(['/']);

          }else{

            this.favorito = result.favorito;
            console.log(result);

          }
        },
        err => {
          console.log(<any>err);
        }
      )
    });
  }

  onSubmit(){
    this._route.params.subscribe(params =>{

      let id = params['id'];

      this._favoritoService.editFavorito(id, this.favorito).subscribe(
        result => {

          if(!result.favorito){

            this._router.navigate(['/']);

          }else{

            this.favorito = result.favorito;
            this._router.navigate(['/', this.favorito._id]);
            console.log(result);

          }
        },
        err => {
          console.log(<any>err);
        }
      )
    });
    /*this._favoritoService.addFavorito(this.favorito).subscribe(
    result => {
      if(!result.favorito){
        alert('Error en el servidor');
      }else{
        this.favorito = result.favorito;
        this._router.navigate(['/marcador', this.favorito._id]);
        form.reset();
        console.log(result);
      }

    },
    err => {
      console.log(<any>err);
    });*/
  }

}
