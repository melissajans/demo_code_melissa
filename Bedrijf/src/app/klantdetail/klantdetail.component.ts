import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Klant } from '../klant';
import { MedewerkerService } from '../medewerker.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-klantdetail',
  templateUrl: './klantdetail.component.html',
  styleUrls: ['./klantdetail.component.scss']
})
export class KlantdetailComponent implements OnInit {
public klant: Klant;
  constructor(private medewerkersService: MedewerkerService, private activatedRoute: ActivatedRoute, private router:Router, private _location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (route:ParamMap) => {
        this.medewerkersService.getKlant(route.get('id')).subscribe(
          data => {
            this.klant = data;
          }
        )
      }
    )
  }

  gaNaarKlanten(){
    this.router.navigateByUrl('klanten');
  }

  verwijderKlant(id:string){
    this.medewerkersService.deleteKlant(id).subscribe(data=>{
      this.router.navigateByUrl('klanten');
    })
  }

  terugNaarSearchResults(){
    this._location.back()
  }

}
