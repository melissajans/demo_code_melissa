import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:string ="";
  avatar: string = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Heather&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Light";
  datum:string;
  constructor(private dataService: DataService, private loginService: LoginService, private router:Router) {}

  ionViewWillEnter(){
    this.dataService.getData().subscribe(
      d =>{
        this.data = d;
        this.LogIntime();
      }
    )
  }

  save(){
    this.dataService.putData(this.data).subscribe(d=>{});
  }

  logOut(){
      this.loginService.idToken = "";
      this.loginService.localId = "";
      this.loginService.loggedIn = false;
      localStorage.removeItem('logingegevens')
      this.router.navigateByUrl('');
  }

  LogIntime(){
    this.datum =(new Date()).toString();
  }

  deleteData(){
    this.data = "";
  }
}
