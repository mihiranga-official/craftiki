import { Routes } from '@angular/router';
import { OurservicessComponent } from './ourservicess/ourservicess.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PriceComponent } from './price/price.component';

export const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'ourService', component: OurservicessComponent },
  { path: 'priceList', component: PriceComponent },

];
