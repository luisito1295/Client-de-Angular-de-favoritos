import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoritoService } from '../../services/favorito.service'
import { Favorito } from '../../models/favorito';

@Component({
  selector: 'app-favorito-detail',
  templateUrl: './favorito-detail.component.html',
  styleUrls: ['./favorito-detail.component.css'],
  providers: [FavoritoService]
})
export class FavoritoDetailComponent implements OnInit {

  public favorito: Favorito;

  constructor(private _favoritoService:FavoritoService,
              private _route: ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {
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

}
