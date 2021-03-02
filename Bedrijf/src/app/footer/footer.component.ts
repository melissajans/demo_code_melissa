import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [`
  p{
    position: fixed ;
    bottom:0;
    width: 100%;
  }`]
})
export class FooterComponent implements OnInit {

  constructor() { };
  getYear() : number{
    let datum: Date = new Date();
    return datum.getFullYear();

  };

  ngOnInit(): void {
  }

}
