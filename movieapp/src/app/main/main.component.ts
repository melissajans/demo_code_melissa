import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavorietenService } from '../favorieten.service';
import { FilmService } from '../film.service';
import { iFilm } from '../iFilm';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public films: iFilm[] = [];
  public SelectedFilm: iFilm;

  // public display: boolean = false;

  constructor(private filmService: FilmService, private router: Router, private favoService: FavorietenService) { }

  ngOnInit(): void {
  }
  zoekenFilms(searchReference: HTMLInputElement) {
    // voor de testarray, zonder api
    // this.films = this.fs.getFilms();
    this.filmService.getFilms(searchReference.value).subscribe(data => {
      this.films = data
    });
    this.SelectedFilm = undefined;
    searchReference.value = null;
  }

  CheckPoster(film: iFilm) {
    if (film.Poster != 'N/A') {
      return film.Poster;
    } else {
      return "https://static.thenounproject.com/png/3482632-200.png"
    }
  }
  zoekenPlot(filmid: string) {
    this.filmService.getPlot(filmid).subscribe(data => {
      this.SelectedFilm = data;
      this.SelectedFilm.Fav = false;
      // this.SelectedFilm = {Plot: data, Title: data , Year:data , Poster:"", imdbID:"" }
      this.favoService.getFilms().forEach(favodata => {
        if (favodata.imdbID == data.imdbID) {
          this.SelectedFilm.Fav = true;
        }
      })
    });
  }

  gaNaarFavo() {
    this.films = this.favoService.getFilms();
    this.SelectedFilm = null;
  }


}
