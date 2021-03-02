import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Klant } from '../klant';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.scss']
})
export class KlantenComponent implements OnInit {
  public klanten: Klant[] = [];

  constructor(private medewerkerService: MedewerkerService, private router: Router) { }

  ngOnInit(): void {
    this.medewerkerService.getKlanten("").subscribe( data =>{
      this.klanten = data;
    });
  }

  naarNieuweKlant(){
    this.router.navigateByUrl('klanten/update/new');
  }

}
