import { Component, OnInit } from '@angular/core';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public aantalMedewerkers: number;
  constructor(private medewerkerService: MedewerkerService) { }

  ngOnInit(): void {
    this.medewerkerService.getMedewerkers("").subscribe(
      data => {
        this.aantalMedewerkers = data.length;
      }
    )
  }

}
