import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Klant } from '../klant';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  medewerkers: Medewerker [] = [];
  klanten: Klant [] = [];
  state$:Observable<Object>
  zoekterm: string;


  constructor(private ms: MedewerkerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state))
    this.state$.subscribe(data => {
      this.zoekterm = data['zoekterm'];
     })
    this.ms.getMedewerkers(this.zoekterm).subscribe( data => {
      this.medewerkers = data;
    })
    this.klanten = [];
    this.ms.getKlanten(this.zoekterm).subscribe( data => {
      this.klanten.push(...data);
    })
    this.ms.getKlanten2(this.zoekterm).subscribe( data => {
      this.klanten.push(...data);
    })
  }
}
