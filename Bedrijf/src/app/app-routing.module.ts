import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './_comp_oude_oef/home/home.component';
import { KlantenComponent } from './klanten/klanten.component';
import { Medewerker } from './medewerker';
import { MedewerkerformComponent } from './_comp_oude_oef/medewerkerform/medewerkerform.component';
import { MedewerkerlijstComponent } from './medewerkerslijst/medewerkerslijst.component';
import { NewComponent } from './new/new.component';
import { KlantdetailComponent } from './klantdetail/klantdetail.component';
import { KlantnewComponent } from './klantnew/klantnew.component';
import { BestellingnewComponent } from './bestellingnew/bestellingnew.component';
import { BestellingDetailComponent } from './bestelling-detail/bestelling-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
{
  path: '', pathMatch: 'full',
  component: DashboardComponent
},
{
  path: 'klanten',
  component: KlantenComponent
},
{
  path: 'klanten/:id',
  component: KlantdetailComponent
},
{
  path: 'klanten/update/new',
  component: KlantnewComponent
},
{
  path: 'bestellingen',
  component: BestellingenComponent
},
{
  path: 'bestellingen/update/new',
  component: BestellingnewComponent
},
{
  path: 'bestellingen/:id',
  component: BestellingDetailComponent
},
{
  path: 'medewerkers',
  component: MedewerkerlijstComponent
},
{
  path: 'medewerkers/update/new',
  component: NewComponent
},
{
  path: 'medewerkers/:id',
  component: DetailComponent
},
{
  path: 'search',
  component: SearchResultsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
