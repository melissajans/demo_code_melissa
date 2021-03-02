import { Component, OnInit } from '@angular/core';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public aantalMedewerkers: number;
  constructor(private ms: MedewerkerService) { }

  ngOnInit(): void {
    this.ms.getMedewerkers("").subscribe(
      data => {
        this.aantalMedewerkers = data.length;
      }
    )
  }

}
