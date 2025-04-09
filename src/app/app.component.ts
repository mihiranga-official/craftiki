import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare var bootstrap: any; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  currentYear: number = new Date().getFullYear();
  ngAfterViewInit(): void {
    const carouselElement = document.querySelector('#carouselExample');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,  // Change this to whatever duration (ms)
        ride: 'carousel'
      });
    }
  }
}
