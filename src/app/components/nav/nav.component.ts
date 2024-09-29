import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, NavigationEnd, Router, Route } from '@angular/router';
import { routes, RouteWithDisplay } from '../../app.routes';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, RouterLink, NgClass, NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.menuVisible = false;
      }
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  routes: RouteWithDisplay[] = routes;
}
