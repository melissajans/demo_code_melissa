import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iFilm } from './iFilm';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  // testarray van films voor communicatie tussen componenten & service
  // public films: iFilm[] = [
  //       {"Title":"Frozen","Year" : "2018", "Poster":'https://www.pop-culture.biz/play/0182FR.jpg'},
  //       {"Title":"Pirates","Year" : "2018", "Poster":'https://www.pop-culture.biz/play/0182FR.jpg'}
  //     ];

  public films: iFilm[] = [];

  constructor(private http: HttpClient) { }

  // getFilms(searchReference: string): Observable<iFilm[]> {
  //   return this.http.get<iFilm[]>(`http://www.omdbapi.com/?apikey=4355203e&s=${searchReference}`)
  //     .pipe(map(data => {
  //       return data['Search']
  //     }
  //     ))
  // }

  getFilms(searchReference: string): Observable<iFilm[]> {
    return this.http.get<iFilm[]>(`http://www.omdbapi.com/?apikey=4355203e&s=${searchReference}`).pipe(map((data: any) => {
      let filmsArray: iFilm[] = [];
      for (let key in data['Search']) {
        // data manipuleren die uit de server komt (als je werkt met een class, kan je het volgende doen)
            // let film: iFilm = new iFilm(data['Search'][key]['Title'], data['Search'][key]['Year'], data['Search'][key]['Poster'])
            // filmsArray.push(film);
        // ook data manipuleren, maar zonder class, met interface
        filmsArray.push( {Title: data['Search'][key]['Title'], Year: data['Search'][key]['Year'], Poster: data['Search'][key]['Poster'], imdbID:data['Search'][key]['imdbID']} )
      }
        return filmsArray;

    }
    ))
  }

  // getplot(film:iFilm): Observable<iFilm[]> {
  //   return this.http.get<iFilm[]>(`http://www.omdbapi.com/?apikey=4355203e&s=${film.imdbID}`).pipe(map((data: any) => {
  //     let filmsArray: iFilm[] = [];
  //     for (let key in data['Plot']) {
  //       filmsArray.push( {Title: data['Search'][key]['Title'], Year: data['Search'][key]['Year'], Poster: data['Search'][key]['Poster'], imdbID:data['Search'][key]} )
  //     }
  //       return data['Plot']

  //   }
  //   ))

    getPlot(filmid: string){
    return this.http.get<iFilm>(`http://www.omdbapi.com/?apikey=4355203e&i=${filmid}`)
  }
}
