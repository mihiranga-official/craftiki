import { Component, OnInit } from '@angular/core';
import {RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { OurservicessComponent } from "./ourservicess/ourservicess.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomePageComponent, OurservicessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 
}
