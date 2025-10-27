import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Set up starting style
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              width: '100%',
              opacity: 0,
              transform: 'translateY(10px)',
            }),
          ],
          { optional: true }
        ),

        // Animate old page out + new page in together
        group([
          query(
            ':leave',
            [animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))],
            { optional: true }
          ),
          query(
            ':enter',
            [animate('300ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class App {
  protected readonly title = signal('yesnaturefarm');

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
