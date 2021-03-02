import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bestellijn } from '../bestellijn';
import { Bestelling } from '../bestelling';
import { BestellingService } from '../bestelling.service';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-bestellingnew',
  templateUrl: './bestellingnew.component.html',
  styleUrls: ['./bestellingnew.component.scss']
})
export class BestellingnewComponent implements OnInit {
  public klanten: Klant[] = [];
  public bestelling: Bestelling = new Bestelling();
  public formNotValid: boolean;

  constructor(private router:Router, private bs: BestellingService, private ks: KlantService) { }

  ngOnInit(): void {
    this.ks.getKlanten("").subscribe(data => {
      this.klanten = data;
    });
  }

  onSubmit(formulier: NgForm): void {
    if (formulier.valid) {
      this.bs.addBestelling(this.bestelling).subscribe(data => {
        this.router.navigateByUrl('bestellingen');
      })
    } else{
      this.formNotValid = true;
    }
  }

  addBestellijn() {
    this.bestelling.details.push(new Bestellijn())
  }

  removeBestellijn(id: number) {
    this.bestelling.details.splice(id, 1)
  }


  trackByItems(index: number): number {
    return index;
  }

}
