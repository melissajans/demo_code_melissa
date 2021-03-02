import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.page.html',
  styleUrls: ['./registreer.page.scss'],
})
export class RegistreerPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  registreer(name: string, user: string, password: string) {
    this.loginService.registreer(name, user, password).subscribe(
        data => {
          this.loginService.idToken = data['idToken'];
          this.loginService.localId = data['localId'];
          this.loginService.loggedIn = true;
          this.loginService.registreerUserName(name).subscribe(() => {
            this.router.navigateByUrl('/home');
          })

        },
        error => {
          console.log('error: ' + JSON.stringify(error));
          console.log('status: ' + error['status']);
          console.log('error: ' + error['error']['error']['message']);
          console.log('error: ' + error.error.error.message);
        }

        );

    }

}
