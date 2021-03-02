import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemsService } from '../services/items.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: Item[] = [];
  titel: string = "";
  localId:string;

  constructor(private itemsService: ItemsService, private loginService: LoginService, private router:Router) { }

  ngOnInit() {
    this.loginService.autoLogIn()
    if(this.loginService.loggedIn){
      this.router.navigateByUrl('/items');
    }
  }

  ionViewWillEnter(){
    this.localId = this.loginService.localId;
  }

  getAlleItems() {
    this.itemsService.getAlleItems().subscribe(data => { this.items = data; })
  }

  getMijnItems() {
    this.itemsService.getMijnItems().subscribe(data => { this.items = data; })
  }

  voegToe(tekst: string) {
    let item = new Item();
    item.gebruiker = this.loginService.localId
    item.tekst = tekst;
    this.itemsService.postItem(item).subscribe(() => {
      this.refreshItems()
    });
  }

  verwijderItem(index: string) {
    this.itemsService.deleteItem(index).subscribe(() => {
      this.refreshItems();
    });
  }

  editItem(item:Item) {
    this.itemsService.updateItem(item).subscribe(() =>{
      this.refreshItems();
    });
  }


  refreshItems() {
    if (this.titel == "Alle items") {
      this.itemsService.getAlleItems().subscribe(data => { this.items = data; })
    } else if (this.titel == "Mijn items") {
      this.itemsService.getMijnItems().subscribe(data => { this.items = data; })
    }
  }

  segmentChanged(ev: any) {
    if(ev.detail.value == 'mine'){
      this.titel = "Mijn items";
      this.getMijnItems();
    } else if (ev.detail.value == 'all'){
      this.titel = "Alle items";
      this.getAlleItems();
    }
  }

}
