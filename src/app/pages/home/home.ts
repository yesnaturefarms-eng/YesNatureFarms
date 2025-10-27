import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MaterialModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        animate(
          '1s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(10px)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class Home implements OnInit {
  journeyImages = [
    { src: '/assets/images/journey-1.png', alt: 'Natural Farming' },
    { src: '/assets/images/journey-2.png', alt: 'Eco Sustainability' },
    { src: '/assets/images/journey-3.png', alt: 'Healthy Living' },
  ];

  features = [
    {
      title: '100% Pure Honey',
      description: 'Natural honey harvested with care to retain nutrients and authentic taste.',
    },
    {
      title: 'Premium Dry Fruits',
      description: 'High-quality dry fruits sourced for freshness and rich flavor.',
    },
    {
      title: 'Dehydrated Goodness',
      description: 'Healthy dehydrated fruits & vegetables preserving taste and nutrients.',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  exploreProducts() {
    this.router.navigate(['/products']);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const content = document.querySelector('.hero-content');
    if (window.scrollY > 50) {
      content?.classList.add('scrolled');
    } else {
      content?.classList.remove('scrolled');
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const triggerPoint = window.innerHeight * 0.85;
    elements.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerPoint) el.classList.add('visible');
    });
  }
}
