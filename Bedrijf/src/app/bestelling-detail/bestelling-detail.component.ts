import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Bestelling } from '../bestelling';
import { Klant } from '../klant';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-bestelling-detail',
  templateUrl: './bestelling-detail.component.html',
  styleUrls: ['./bestelling-detail.component.scss']
})
export class BestellingDetailComponent implements OnInit {
  public bestelling: Bestelling;
  public klant: Klant;
  constructor(private activatedRoute: ActivatedRoute, private medewerkersService: MedewerkerService) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(
        (route:ParamMap) => {
          this.medewerkersService.getBestelling(route.get('id')).subscribe(
            data =>{
              this.bestelling = data;
              this.medewerkersService.getKlant(this.bestelling.klantid).subscribe(
                data => {
                  this.klant = data;
                }
              )
            }
          )
        }
      )


  //   this.ms.getKlanten().subscribe(klanten => {
  //     this.ms.getBestellingen().subscribe(data=>{
  //      data.forEach((e)=>{
  //         let kl = klanten.filter((k) =>{
  //          return k.id == e.klantid
  //         })[0];
  //         if(kl == undefined){
  //           kl = new Klant("", "", "", "", "")
  //         }
  //         e.klantOBJ = kl
  //       })
  //       this.bestellingen = data;
  //     });
  //   })
  // }


  }
}

