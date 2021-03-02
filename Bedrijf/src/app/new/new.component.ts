import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public naam = "";
  public email = "";
  public afb = "";

  constructor(private medewerkerService: MedewerkerService, private router:Router) { }

  ngOnInit(): void {
  }

  inServiceOpslaan() {
    this.medewerkerService.addMedewerker(this.naam, this.email, this.afb).subscribe(data => this.router.navigateByUrl('medewerkers'))
  }

  reset() {
    this.naam = "";
    this.email = "";
    this.afb = "";
  }

  veldenLeeg() {
    if (this.naam == "" && this.email == "" && this.afb == "") {
      return true;
    } else {
      return false;
    }
  }

}
