import { Component, HostListener, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { BrandComponent } from '../components/brand/brand.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, LucideAngularModule, BrandComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;

  isScrolled = signal(false);
  isMobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobile() {
    this.isMobileOpen.set(!this.isMobileOpen());
  }

  closeMobile() {
    this.isMobileOpen.set(false);
  }
}
