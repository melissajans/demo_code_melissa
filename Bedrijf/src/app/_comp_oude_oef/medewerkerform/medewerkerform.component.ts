import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medewerkerform',
  templateUrl: './medewerkerform.component.html',
  styleUrls: ['./medewerkerform.component.scss'],
})
export class MedewerkerformComponent implements OnInit {
  public naam: string;
  public email: string;
  public afbeelding: string;
  public verbergInfo: boolean = true;
  public buttonTekst: string = 'Toon Gegevens';

  // disabled: boolean = false;

  constructor() {
    this.naam = '';
    this.email = '';
    this.afbeelding = '';
  }
  toonGegevens() {
    // code wanneer je niet met two way binding werkt
    //   this.naam = (document.getElementById("medewerker") as HTMLInputElement).value;
    //   this.email = (document.getElementById("email") as HTMLInputElement).value;
    //   this.afbeelding = (document.getElementById("afbeelding") as HTMLInputElement).value;

    if (this.verbergInfo) {
      this.buttonTekst = 'Verberg Gegevens';
      this.verbergInfo = false;
    } else {
      this.buttonTekst = 'Toon Gegevens';
      this.verbergInfo = true;
    }
  }

  resetGegevens() {
    this.naam = '';
    this.email = '';
    this.afbeelding = '';
  }
  disabledNietIngevuld() {
    if (this.naam != '' || this.email != '' || this.afbeelding != '') {
      return false;
    } else {
      return true;
    }
  }
  ngOnInit(): void {}
}
