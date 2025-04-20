import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser'; // <-- Add these imports

declare var bootstrap: any;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  constructor(
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Set dynamic title and meta tags for SEO
    this.titleService.setTitle('Craftiki | Handmade Crafts in Sri Lanka');
    this.metaService.addTags([
      {
        name: 'description',
        content: 'Discover beautiful handmade crafts, personalized gifts, and custom creations. Island-wide delivery, 24/7 service, and 99% positive feedback!'
      },
      {
        name: 'keywords',
        content: 'Craftiki, handmade gifts, personalized gifts Sri Lanka, crafts shop, island wide delivery, Sri Lankan crafts, gift ideas, custom crafts'
      },
      {
        property: 'og:title',
        content: 'Craftiki | Handmade Crafts in Sri Lanka'
      },
      {
        property: 'og:description',
        content: 'Discover beautiful handmade crafts, personalized gifts, and custom creations.'
      },
      {
        property: 'og:image',
        content: 'https://craftiki.vercel.app/assets/images/images.png'
      },
      {
        property: 'og:url',
        content: 'https://craftiki.vercel.app/'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Craftiki | Handmade Crafts in Sri Lanka'
      },
      {
        name: 'twitter:description',
        content: 'Discover beautiful handmade crafts, personalized gifts, and custom creations.'
      },
      {
        name: 'twitter:image',
        content: 'https://craftiki.vercel.app/assets/images/images.png'
      }
    ]);
  }

  onOurServiceClick() {
    this.router.navigateByUrl('/ourService');
  }
  onPriceClick(){
    this.router.navigateByUrl('/priceList')
  }
}
