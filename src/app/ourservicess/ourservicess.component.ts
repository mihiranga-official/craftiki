import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";
import { ThankyouComponent } from "../thankyou/thankyou.component";

@Component({
  selector: 'app-ourservicess',
  standalone: true,
  imports: [CarouselComponent, ThankyouComponent],
  templateUrl: './ourservicess.component.html',
  styleUrl: './ourservicess.component.scss'
})
export class OurservicessComponent implements OnInit{
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  
  }
  onBackClick(){
    this.router.navigateByUrl('/')
  }
  currentYear: number = new Date().getFullYear();
}
