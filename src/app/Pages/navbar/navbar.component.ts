import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() showLoginBtn!: boolean;

  constructor(
    private route: Router
  ) {}

  navigateTo() {
    this.route.navigate(['/login']);
  }

}
