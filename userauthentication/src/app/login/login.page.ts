import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.loginService.autoLogIn()
    if(this.loginService.loggedIn){
      this.router.navigateByUrl('/home');
    }
  }

  login(formulier:NgForm) {
    let user= formulier.controls['email'].value;
    let password=formulier.controls['pass'].value;

    this.loginService.login(user, password).subscribe(
      data => {
        this.loginService.idToken = data['idToken'];
        this.loginService.localId = data['localId'];
        this.loginService.loggedIn = true;

        // INLOGGEGEVENS OPSLAAN IN LOCAL STORAGE
        let gegevens = {
          token: this.loginService.idToken,
          userid: this.loginService.localId
        }
        localStorage.setItem('logingegevens', JSON.stringify(gegevens));

        this.router.navigateByUrl('/home');
      },
      async error => {
        // FORM VALIDATION FEEDBACK VAN BACKEND VERWERKEN NAAR FORMULIER FRONT
        // Uit firebase komt maar 1 foutmeding, dus enkel de eerste wordt verwerkt.
        let bericht:string;
        if(error.error.error.message == "INVALID_EMAIL" || error.error.error.message == "EMAIL_NOT_FOUND" ){
          bericht = "E-mail ongeldig!";
          formulier.controls['email'].setErrors({'incorrect':true})
        } else if(error.error.error.message == "INVALID_PASSWORD"){
          bericht = "Wachtwoord ongeldig!";
          formulier.controls['pass'].setErrors({'incorrect':true})
        };

        // console.log('error: ' + JSON.stringify(error));
        // console.log('status: ' + error['status']);
        // console.log('error: ' + error['error']['error']['message']);

        // // ERROR ALERT
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Fout bij inloggen: ' + bericht,
          buttons: ['OK']
        });

        await alert.present();
      }
    );
  }
}
