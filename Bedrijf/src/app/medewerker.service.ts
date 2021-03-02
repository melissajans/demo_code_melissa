import { HttpClient, HttpClientModule } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medewerker } from './medewerker';
import { map } from 'rxjs/operators';
import { Klant } from './klant';
import { Bestelling } from './bestelling';

@Injectable(
  // {providedIn: 'root'}
)
export class MedewerkerService {

  constructor(private http: HttpClient) { }

  public getMedewerkers(zoekterm:string): Observable<Medewerker[]> {
    // observable vb
    // this.http.get("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers.json").subscribe(data => {
    //   console.log(data);
    // });

    // met api
    return this.http.get<Medewerker[]>(`https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers.json?&orderBy="naam"&startAt="${zoekterm}"&endAt="${zoekterm}~"`)
      //  data binnen de observable aanpassen om en terug in array stoppen
      .pipe(map(data => {
        let arr: Medewerker[] = [];
        for (let x in data) {
          let m: Medewerker = new Medewerker(data[x]['naam'], data[x]['email'], data[x]['afb'], x);
          arr.push(m);
        }
        return arr;
      })
      );
  }

  public getMedewerker(id: string): Observable<Medewerker> {
    return this.http.get<Medewerker>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers/" + id + ".json");
  }

  public addMedewerker(naam: string, email: string, afb: string) :Observable<any> {
    let mw = new Medewerker(naam, email, afb);
    return this.http.post("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers.json", mw);
  }

  public deleteMedewerker(id: string): Observable<Medewerker> {
    return this.http.delete<Medewerker>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers/" + id + ".json");
  }

  public deleteMedewerkers(): Observable<Medewerker> {
    return this.http.delete<Medewerker>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers.json");
  }

  public getKlanten(zoekterm: string): Observable<Klant[]> {
    return this.http.get<Klant[]>(`https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/klanten.json?&orderBy="naam"&startAt="${zoekterm}"&endAt="${zoekterm}~"`)
    .pipe(map(data =>{
      let arr:Klant[] = [];
      for (let x in data){
        let klant:Klant = new Klant(data[x]['voornaam'], data[x]['naam'], data[x]['straat'], data[x]['postcode'], data[x]['plaats'],x);
        arr.push(klant);
        console.log(arr);

      }
      return arr;

    }))
  }

  public getKlanten2(zoekterm: string): Observable<Klant[]> {
    return this.http.get<Klant[]>(`https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/klanten.json?&orderBy="voornaam"&startAt="${zoekterm}"&endAt="${zoekterm}~"`)
    .pipe(map(data =>{
      let arr:Klant[] = [];
      for (let x in data){
        let klant:Klant = new Klant(data[x]['voornaam'], data[x]['naam'], data[x]['straat'], data[x]['postcode'], data[x]['plaats'],x);
        arr.push(klant);
        console.log(arr);

      }
      return arr;

    }))
  }

  public getKlant(id: string): Observable<Klant> {
    return this.http.get<Klant>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/klanten/" + id + ".json")
    .pipe(map(data => {
      data['id'] = id
      return data;
    }))
  }

  public addKlant(klant:Klant):Observable<any>{
    return this.http.post("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/klanten.json", klant)
  }

  public deleteKlant(id:string) :Observable<Klant>{
    return this.http.delete<Klant>("https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/klanten/" + id + ".json")
  }

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
