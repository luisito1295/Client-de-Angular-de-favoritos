import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-favorito-add',
  templateUrl: './favorito-add.component.html',
  styleUrls: ['./favorito-add.component.css'],
  providers: [FavoritoService]
})
export class FavoritoAddComponent implements OnInit {

  title:string;
  public favorito: Favorito;


  constructor(private _favoritoService:FavoritoService,
              public  _route:ActivatedRoute,
              public  _router:Router) {
    this.title = "Crear favorito"
    this.favorito = new Favorito("","","","");
  }

  ngOnInit() {

  }

  onSubmit(form){
    this._favoritoService.addFavorito(this.favorito).subscribe(
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
    });
  }

}
