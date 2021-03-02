import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bestelling } from '../bestelling';
import { Klant } from '../klant';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-bestellingen',
  templateUrl: './bestellingen.component.html',
  styleUrls: ['./bestellingen.component.scss']
})
export class BestellingenComponent implements OnInit {
  public bestellingen : Bestelling[] = [];

  constructor(private router: Router, private ms: MedewerkerService) { }

  // ngOnInit(): void {
  //   this.ms.getKlanten().subscribe(klanten => {
  //     this.ms.getBestellingen().subscribe(data=>{
  //       this.bestellingen = data;
  //       this.bestellingen.forEach((e)=>{
  //         let kl = klanten.filter((k) =>{
  //          return k.id == e.klantid
  //         })[0];
  //         e.klantOBJ = kl
  //       })
  //     });
  //   })

  // }

  ngOnInit(): void {
    this.ms.getKlanten("").subscribe(klanten => {
      this.ms.getBestellingen().subscribe(data=>{
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
