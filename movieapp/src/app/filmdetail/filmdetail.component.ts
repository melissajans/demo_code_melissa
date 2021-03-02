import { Component, Input, OnInit } from '@angular/core';
import { FavorietenService } from '../favorieten.service';
import { iFilm } from '../iFilm';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.component.html',
  styleUrls: ['./filmdetail.component.scss']
})
export class FilmdetailComponent implements OnInit {
  @Input() filmdetail: iFilm;

  constructor(private favoService: FavorietenService) {
  }

  ngOnInit(): void {
  }

  CheckPoster(film: iFilm) {
    if (film.Poster != 'N/A') {
      return film.Poster;
    } else {
      return "https://static.thenounproject.com/png/3482632-200.png"
    }
  }

  setFavo(film: iFilm) {
    if (!this.filmdetail.Fav) {
      this.favoService.setFilm(film);
      this.filmdetail.Fav = !this.filmdetail.Fav;
    } else {
      this.favoService.delFilm(film);
      this.filmdetail = null;
    }
  }
}
