import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThankyouComponent } from '../thankyou/thankyou.component';

@Component({
  selector: 'app-ourservicess',
  standalone: true,
  imports: [ThankyouComponent],
  templateUrl: './ourservicess.component.html',
  styleUrl: './ourservicess.component.scss'
})
export class OurservicessComponent implements OnInit {
  
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // You can add analytics, scroll to top, or meta tags here if needed
  }

  onBackClick(): void {
    this.router.navigateByUrl('/');
  }
  onPriceClick(){
    this.router.navigateByUrl('/priceList')
  }
}
