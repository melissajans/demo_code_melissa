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
    return this.http.get<Medewerker[]>(`https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/medewerkers.json?&orderBy="naam"&startAt="${zoekterm}"&endAt="${zoekterm}~"`)
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
}
