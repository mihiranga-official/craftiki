import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})

export class PriceComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
 
  }
  onOurServiceClick() {
    this.router.navigateByUrl('/ourService');
  }
  onPriceClick(){
    this.router.navigateByUrl('/priceList')
  }
  onBackClick(): void {
    this.router.navigateByUrl('/');
  }
}
