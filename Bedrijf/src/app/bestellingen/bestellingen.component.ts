import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bestelling } from '../bestelling';
import { BestellingService } from '../bestelling.service';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.scss']
})
export class BestellingenComponent implements OnInit {
  public bestellingen : Bestelling[] = [];

  constructor(private router: Router, private ms: MedewerkerService, private bs: BestellingService, private ks: KlantService) { }

  ngOnInit(): void {
    this.ks.getKlanten("").subscribe(klanten => {
      this.bs.getBestellingen().subscribe(data=>{
       data.forEach((e)=>{
          let kl = klanten.filter((k) =>{
           return k.id == e.klantid
          })[0];
          if(kl == undefined){
            kl = new Klant("", "", "", "", "")
          }
          e.klantOBJ = kl
        })
        this.bestellingen = data;
      });
    })
  }

  naarNieuweBestelling(){
    this.router.navigateByUrl('bestellingen/update/new');
  }

}
