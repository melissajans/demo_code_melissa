import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apikey = "AIzaSyA6C7e1fYz2-7ceXfmgFBI7_OXcvrPLd2I";
  // property om te kijken of we ingelogd zijn.
  idToken: string;
  loggedIn: boolean = false;
  localId: string;

  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    const data = { email: user, password: password, returnSecureToken: true };
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.apikey, data);
  }

  registreer(name:string, user: string, password: string) {
    const data = { email: user, password: password, returnSecureToken: true };
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apikey, data);
  }

  registreerUserName(name:string): Observable<User>{
    const user = new User()
    user.gebruiker = this.localId;
    user.nickname = name;
    return this.http.post<User>('https://authentication-database-16ab8-default-rtdb.firebaseio.com/users.json' + '?auth=' + this.idToken, user)

  }
  getUserName(localId:string):Observable<string> {
    // In dit opzet niet goed, want usernames worden elke keer opgehaald, niet nodig ... nog in locale array bijhouden in service!
      return this.http.get<User>('https://authentication-database-16ab8-default-rtdb.firebaseio.com/users.json' + '?' + 'orderBy="gebruiker"' + '&equalTo="' + localId + '"&auth=' + this.idToken)
      .pipe(map(users=>{
        let userName;
        for(let x in users){
          userName = users[x].nickname;
        }
        console.log(userName);

        return userName;
      }));
    }

    autoLogIn(){
      if(localStorage.getItem('logingegevens') != null){
        let gegevens = JSON.parse(localStorage.getItem('logingegevens'));
        this.idToken = gegevens.token;
        this.loggedIn = true;
        this.localId = gegevens.userid;
      }
    }

}
