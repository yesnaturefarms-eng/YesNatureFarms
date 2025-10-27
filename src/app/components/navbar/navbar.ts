import { CommonModule, NgFor } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MaterialModule, RouterLink, RouterLinkActive, NgFor],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  menuOpen = false;
  loading = false;
  appName = 'YesNature';
  appName2 = 'Farms';
  scrolled: any;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.menuOpen = false; // Close mobile menu when navigating
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
