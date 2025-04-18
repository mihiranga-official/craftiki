import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Thank You - Craftiki');
    this.metaService.updateTag({ name: 'description', content: 'Thank you for visiting Craftiki! Explore more handmade crafts and DIY ideas.' });
    this.metaService.updateTag({ name: 'keywords', content: 'thank you, craftiki, handmade crafts, DIY' });
  }
}
