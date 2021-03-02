import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.scss']
})
export class TellerComponent implements OnInit {
  public teller: number = 1;
  // JavaScript functie waarbij we een meegegeven functie herhaaldelijk kunnen laten uitvoeren. Hierbij ga je gebruik moeten maken van arrow functies i.p.v. een gewone functie declaratie. (gewone functies meegeven zorgt er voor dat this binnen de functie niet meer gekend is!)
  constructor() {
    // setInterval(() => {
    //   this.teller++;
    //   }, 1000);
   this.verhoogTeller();

  }
  public verhoogTeller() {
     setInterval(() => {
      this.teller++;
      }, 1000);

    }
  ngOnInit(): void {
  }

}
