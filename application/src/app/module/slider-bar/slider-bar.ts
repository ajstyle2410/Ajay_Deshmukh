import { Component } from '@angular/core';
import {  HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconData,
  LayoutDashboard,
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  Globe,
  Instagram,
  Facebook,
  Settings,
  ChevronDown
} from 'lucide-angular';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-slider-bar',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './slider-bar.html',
  styleUrl: './slider-bar.css',
})
export class SliderBar {
  isMobileOpen = false;
  openMenu: string | null = null;

  icons: { [key: string]: LucideIconData } = {
    dashboard: LayoutDashboard,
    orders: ShoppingCart,
    products: Package,
    reports: BarChart3,
    customers: Users,
    website: Globe,
    instagram: Instagram,
    facebook: Facebook,
    settings: Settings,
    arrow: ChevronDown
  };

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Orders', icon: 'orders', route: '/orders', badge: 18 },
    {
      label: 'Products',
      icon: 'products',
      children: [
        { label: 'All Products', route: '/products/all' },
        { label: 'Add Product', route: '/products/add' }
      ]
    },
    {
      label: 'Reports',
      icon: 'reports',
      children: [
        { label: 'Sales Report', route: '/reports/sales' },
        { label: 'Revenue Report', route: '/reports/revenue' }
      ]
    },
    {
      label: 'Customers',
      icon: 'customers',
      children: [
        { label: 'All Customers', route: '/customers/all' },
        { label: 'Feedback', route: '/customers/feedback' }
      ]
    }
  ];

  salesChannels = [
    { label: 'Website', icon: 'website', route: '/website' },
    { label: 'Instagram', icon: 'instagram', route: '/instagram' },
    { label: 'Facebook', icon: 'facebook', route: '/facebook' }
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