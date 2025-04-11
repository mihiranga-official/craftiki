import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit{
  visitCount = 0;
  unixTimestamp: number = Date.now();

  ngOnInit(): void {
    this.handleUniqueVisit();
    this.updateUnixTimestamp();
  }

  handleUniqueVisit() {
    const isVisited = localStorage.getItem('hasVisited');
    const storedCount = localStorage.getItem('globalVisitCount');

    if (!isVisited) {
      // If user is visiting for the first time on this device
      this.visitCount = storedCount ? parseInt(storedCount) + 1 : 1;
      localStorage.setItem('globalVisitCount', this.visitCount.toString());
      localStorage.setItem('hasVisited', 'true');
    } else {
      // User has already visited before
      this.visitCount = storedCount ? parseInt(storedCount) : 1;
    }
  }

  updateUnixTimestamp() {
    setInterval(() => {
      this.unixTimestamp = Date.now();
    }, 1000);
  }

}
