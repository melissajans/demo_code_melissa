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
// public id: string;
public medewerker: Medewerker;

  constructor(private activedRoute: ActivatedRoute, private medewerkerService: MedewerkerService) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (route:ParamMap) => {
        // this.id = route.get('id')
        this.medewerkerService.getMedewerker(route.get('id'))
        .subscribe(
          data =>{ this.medewerker = data;}
        )
      }
    )
  }

}
