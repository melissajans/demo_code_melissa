import { Injectable } from '@angular/core';
import { iFilm } from './iFilm';

@Injectable({
  providedIn: 'root'
})
export class FavorietenService {
favofilms: iFilm[] = []
  constructor() {
    if(localStorage.getItem('data') != null){
      this.favofilms = JSON.parse(localStorage.getItem('data'));
    }
   }

  setFilm(film: iFilm) : void{
    this.favofilms.push(film);
    return localStorage.setItem('data', JSON.stringify(this.favofilms));
  }

  getFilms(){
    return this.favofilms;
  }

  delFilm(film: iFilm){
    for(let x in this.favofilms){
      if(this.favofilms[x].imdbID == film.imdbID){
        this.favofilms.splice(Number(x), 1)
      }
    }
  }
}
