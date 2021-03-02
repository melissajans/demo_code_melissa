import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TellerComponent } from './_comp_oude_oef/teller/teller.component';
import { MedewerkerformComponent } from './_comp_oude_oef/medewerkerform/medewerkerform.component';
import { FormsModule } from '@angular/forms';
import { MedewerkerlijstComponent } from './medewerkerslijst/medewerkerslijst.component';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { MedewerkerService } from './medewerker.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './_comp_oude_oef/home/home.component';
import { DetailComponent } from './detail/detail.component';
import { KlantenComponent } from './klanten/klanten.component';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainOudeOefComponent } from './_comp_oude_oef/main-oude-oef/main-oude-oef.component';
import { NewComponent } from './new/new.component';
import { KlantdetailComponent } from './klantdetail/klantdetail.component';
import { KlantnewComponent } from './klantnew/klantnew.component';
import { BestellingnewComponent } from './bestellingnew/bestellingnew.component';
import { BestellingDetailComponent } from './bestelling-detail/bestelling-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TellerComponent,
    MedewerkerformComponent,
    MedewerkerlijstComponent,
    MedewerkerComponent,
    HomeComponent,
    DetailComponent,
    KlantenComponent,
    BestellingenComponent,
    DashboardComponent,
    MainOudeOefComponent,
    NewComponent,
    KlantdetailComponent,
    KlantnewComponent,
    BestellingnewComponent,
    BestellingDetailComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  // als niet bij Injectable proveded in root, dan hier bij providers!
  providers: [MedewerkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
