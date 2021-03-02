import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-medewerkerlijst',
  templateUrl: './medewerkerlijst.component.html',
  styleUrls: ['./medewerkerlijst.component.scss']
})
export class MedewerkerlijstComponent implements OnInit {
  public medewerkers: Medewerker[] = [];

  constructor(private medewerkerService: MedewerkerService, private router: Router) {
  }

  ngOnInit(): void {
    this.medewerkerService.getMedewerkers("").subscribe(data => {
      this.medewerkers = data;
    });
  }

  lijstWissen() {
    this.medewerkerService.deleteMedewerkers().subscribe(data => {
      this.medewerkers = [];
    });
  }

  legelijst() {
    if (this.medewerkers.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  naarNieuweMedewerker() {
    this.router.navigateByUrl('medewerkers/update/new');
  }

  refreshLijst(VerwijderMedewerker:boolean){
    this.medewerkerService.getMedewerkers("").subscribe(data => {
      this.medewerkers = data;
    });
  }

}
