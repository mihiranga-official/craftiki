import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterComponent } from "../counter/counter.component";
declare var bootstrap: any;
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit(): void { }


  currentYear: number = new Date().getFullYear();

  onOurServiceClick() {
    this.router.navigateByUrl('/ourService')
  }
}
