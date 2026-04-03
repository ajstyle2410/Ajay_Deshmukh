import { Component } from '@angular/core';
import {  HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-slider-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './slider-bar.html',
  styleUrl: './slider-bar.css',
})
export class SliderBar {
  isMobileOpen = false;
  openMenu: string | null = null;


  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Orders', route: '/orders', badge: 18 },
    {
      label: 'Products',
      children: [
        { label: 'All Products', route: '/products/all' },
        { label: 'Add Product', route: '/products/add' }
      ]
    },
    {
      label: 'Reports',
      children: [
        { label: 'Sales Report', route: '/reports/sales' },
        { label: 'Revenue Report', route: '/reports/revenue' }
      ]
    },
    {
      label: 'Customers',
      children: [
        { label: 'All Customers', route: '/customers/all' },
        { label: 'Feedback', route: '/customers/feedback' }
      ]
    }
  ];

  salesChannels = [
    { label: 'Website', route: '/website' },
    { label: 'Instagram', route: '/instagram' },
    { label: 'Facebook', route: '/facebook' }
  ];

  constructor(private router: Router) {
    // auto expand based on active route
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.autoExpand());
  }

  toggleMenu(label: string) {
    this.openMenu = this.openMenu === label ? null : label;
  }

  autoExpand() {
    const current = this.router.url;

    for (let item of this.menuItems) {
      if (item.children) {
        const match = item.children.some(c => current.includes(c.route));
        if (match) {
          this.openMenu = item.label;
        }
      }
    }
  }

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  // close on resize (avoid broken UI)
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768) {
      this.isMobileOpen = false;
    }
  }
}