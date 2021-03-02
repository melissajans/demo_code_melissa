import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  // user is ingelogd, die mag deze data krijgen!
  getData(): Observable<string>{
    return this.http.get<string>('https://authentication-database-16ab8-default-rtdb.firebaseio.com/data.json?auth=' + this.loginService.idToken);
  }

  // error!! {error: "Invalid data; couldn't parse JSON object, array, or value."} --> data omvormen naar string! dit is enkel wanneer je een string wil doorgeven, fout heb je niet bij een volledig object
  putData(data:string){
    return this.http.put('https://authentication-database-16ab8-default-rtdb.firebaseio.com/data.json?auth=' + this.loginService.idToken, JSON.stringify(data));
  }
}
