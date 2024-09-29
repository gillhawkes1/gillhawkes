import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, RouterLink, NgClass],
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
}
