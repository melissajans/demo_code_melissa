import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Klant } from '../klant';
import { KlantService } from '../klant.service';

@Component({
  selector: 'app-klantnew',
  templateUrl: './klantnew.component.html',
  styleUrls: ['./klantnew.component.scss']
})
export class KlantnewComponent implements OnInit {
  public klant = new Klant("", "", "", "" , "")
  public formNotValid: boolean;
  constructor(private ks: KlantService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formulier: NgForm):void{
    if(formulier.valid){
      this.ks.addKlant(formulier.value).subscribe(data => this.router.navigateByUrl('klanten'))
    } else{
      this.formNotValid = true;
    }
  }

}
