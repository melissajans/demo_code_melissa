import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../item';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAlleItems() :Observable<Item[]> {
    return this.http.get<Item[]>('https://authentication-database-16ab8-default-rtdb.firebaseio.com/items.json' + '?auth=' + this.loginService.idToken)
    .pipe(map(data=>{
      const items: Item[] = [];
      for(let x in data){
        let item = new Item();
        item.gebruiker = data[x].gebruiker;
        item.tekst = data[x].tekst;
        item.id = x;
        this.loginService.getUserName(item.gebruiker).subscribe((data)=>{
          item.userName = data
          items.push(item);
        });
      }
      return items;
    }));
  }

  getMijnItems() :Observable<Item[]> {
    return this.http.get<Item[]>('https://authentication-database-16ab8-default-rtdb.firebaseio.com/items.json' + '?' + 'orderBy="gebruiker"' + '&equalTo="' + this.loginService.localId + '"&auth=' + this.loginService.idToken)
    .pipe(map(data=>{

      const items: Item[] = [];
      for(let x in data){
        let item = new Item();
        item.gebruiker = data[x].gebruiker;
        item.tekst = data[x].tekst;
        item.id = x;
        this.loginService.getUserName(item.gebruiker).subscribe((data)=>{
          item.userName = data
          items.push(item);
        });
      }
      return items;
    }));
  }

  postItem(item:Item):Observable<any>{
    return this.http.post('https://authentication-database-16ab8-default-rtdb.firebaseio.com/items.json' + '?auth=' + this.loginService.idToken, item)

  }

  deleteItem(id:string):Observable<any>{
    return this.http.delete('https://authentication-database-16ab8-default-rtdb.firebaseio.com/items/'+ id +'.json' + '?auth=' + this.loginService.idToken);

  }

  updateItem(item:Item):Observable<Item>{
    return this.http.put<Item>('https://authentication-database-16ab8-default-rtdb.firebaseio.com/items/'+ item.id +'.json' + '?auth=' + this.loginService.idToken, item);
  }

}

