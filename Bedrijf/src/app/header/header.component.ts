import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Klant } from "../klant";
import { Medewerker } from "../medewerker";
import { MedewerkerService } from "../medewerker.service";

@Component(
    {
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    }
)

export class HeaderComponent {
    public naam: string;
    medewerkers: Medewerker [] = [];
    klanten: Klant [] = [];

    constructor(private ms: MedewerkerService, private router: Router){
      this.naam = 'Bedrijf & Co';
    }
    search(zoekterm:string){
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigateByUrl('/search', {state:{zoekterm: zoekterm}})
    );
    }
}
