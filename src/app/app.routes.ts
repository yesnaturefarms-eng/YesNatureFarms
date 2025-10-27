import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { animation: 'Home' },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    data: { animation: 'Products' },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    data: { animation: 'Contact' },
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
