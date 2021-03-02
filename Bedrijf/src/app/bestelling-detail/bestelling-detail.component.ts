import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Bestelling } from '../bestelling';
import { BestellingService } from '../bestelling.service';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-bestelling-detail',
  templateUrl: './bestelling-detail.component.html',
  styleUrls: ['./bestelling-detail.component.scss']
})
export class BestellingDetailComponent implements OnInit {
  public bestelling: Bestelling;
  public klant: Klant;
  constructor(private activatedRoute: ActivatedRoute, private bs: BestellingService, private ks: KlantService) { }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(
        (route:ParamMap) => {
          this.bs.getBestelling(route.get('id')).subscribe(
            data =>{
              this.bestelling = data;
              this.ks.getKlant(this.bestelling.klantid).subscribe(
                data => {
                  this.klant = data;
                }
              )
            }
          )
        }
      )
  }
}

