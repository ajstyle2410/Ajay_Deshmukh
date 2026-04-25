import { Routes } from '@angular/router';
import { HOME_ROUTES } from './features/home/home.routes';
import { SERVICES_ROUTES } from './features/services/services.routes';
import { ABOUT_ROUTES } from './features/about/about.routes';
import { CONTACT_ROUTES } from './features/contact/contact.routes';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';

export const routes: Routes = [
  { path: '', loadChildren: () => HOME_ROUTES },
  { path: 'services', loadChildren: () => SERVICES_ROUTES },
  { path: 'service/:id', component: ServiceDetailComponent },
  { path: 'about', loadChildren: () => ABOUT_ROUTES },
  { path: 'contact', loadChildren: () => CONTACT_ROUTES },
  { path: '**', redirectTo: '' }
];
