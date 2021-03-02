import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Klant } from './klant';

@Injectable({
  providedIn: 'root'
})
export class KlantService {

  constructor(private http: HttpClient) { }

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


}
