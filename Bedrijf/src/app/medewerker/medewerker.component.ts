import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Medewerker } from '../medewerker';
import { MedewerkerService } from '../medewerker.service';

@Component({
  selector: 'app-medewerker',
  templateUrl: './medewerker.component.html',
  styleUrls: ['./medewerker.component.scss']
})
export class MedewerkerComponent implements OnInit {
  @Input() persoon: Medewerker = new Medewerker("", "", "");
  @Output() verwijderdeMedewerker = new EventEmitter<boolean>();

  constructor(private ms: MedewerkerService) { }

  ngOnInit(): void {
  }

  geefAlert(){
    alert(this.persoon.naam + " " + this.persoon.email)
  }

  VerwijderMedewerker(id:string){
    this.ms.deleteMedewerker(id).subscribe(data =>{
      this.verwijderdeMedewerker.emit(true)
    });
  }

}
