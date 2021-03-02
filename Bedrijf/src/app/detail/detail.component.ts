import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
public medewerker: Medewerker;

  constructor(private activedRoute: ActivatedRoute, private ms: MedewerkerService) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (route:ParamMap) => {
        this.ms.getMedewerker(route.get('id'))
        .subscribe(
          data =>{ this.medewerker = data;}
        )
      }
    )
  }

}
