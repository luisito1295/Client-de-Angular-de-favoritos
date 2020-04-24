import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Favorito } from '../models/favorito';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  public url:string;

  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:3000/api/';
  }

  getFavoritos(): Observable<any>{
    return this._http.get(this.url+'favoritos');
  }

  getFavorito(id:string): Observable<any>{
    return this._http.get(this.url+'favorito/'+id);
  }

  addFavorito(favorito: Favorito): Observable<any>{
    let json = JSON.stringify(favorito);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'addfavorito', params, {headers: headers});

  }

  editFavorito(id:string, favorito: Favorito): Observable<any>{
    let json = JSON.stringify(favorito);
    let params = json;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.put(this.url+'favorito/'+id, params, {headers: headers});

  }

  deleteFavorito(id:string): Observable<any>{

    return this._http.delete(this.url+'favorito/'+id);

  }

}
