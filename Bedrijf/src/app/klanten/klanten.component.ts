import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-klanten',
  templateUrl: './klanten.component.html',
  styleUrls: ['./klanten.component.scss']
})
export class KlantenComponent implements OnInit {
  public klanten: Klant[] = [];

  constructor(private ks: KlantService, private router: Router) { }

  ngOnInit(): void {
    this.ks.getKlanten("").subscribe( data =>{
      this.klanten = data;
    });
  }

  naarNieuweKlant(){
    this.router.navigateByUrl('klanten/update/new');
  }

}
