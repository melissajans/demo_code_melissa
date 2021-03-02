import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bestelling } from './bestelling';

@Injectable({
  providedIn: 'root'
})
export class BestellingService {

  constructor(private http: HttpClient) { }

  public addBestelling(bestelling: Bestelling):Observable<any>{
    return this.http.post("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/bestellingen.json", bestelling);
  }

  public getBestellingen():Observable<Bestelling[]>{
    return this.http.get<Bestelling[]>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/bestellingen.json")
    .pipe(
      map(
        data =>{
          let arr : Bestelling[] = [];
          for(let key in data){
            let ticket: Bestelling = new Bestelling();
            ticket.id = key;
            ticket.klantid = data[key]['klantid'];
            ticket.details = data[key]['details'];
            arr.push(ticket)
          }
          return arr;
        }
      )
    )
  }

  getBestelling(id:string): Observable<Bestelling>{
    return this.http.get<Bestelling>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/bestellingen/" + id +".json")
    .pipe(map(data => {
      data['id'] = id
      return data;
    }))

  }
}
