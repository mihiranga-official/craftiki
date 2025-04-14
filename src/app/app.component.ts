import { Component, OnInit } from '@angular/core';
import {RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { OurservicessComponent } from "./ourservicess/ourservicess.component";

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare let gtag: Function; // 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      gtag('config', 'G-4YB3RWN6LN', {
        page_path: event.urlAfterRedirects,
      });
    });
  }
}
