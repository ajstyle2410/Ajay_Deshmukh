import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-angular';
import { BrandComponent } from '../components/brand/brand.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LucideAngularModule, BrandComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcon = MapPin;
  readonly LinkedinIcon = Linkedin;
  readonly GithubIcon = Github;
  readonly TwitterIcon = Twitter;

  currentYear = new Date().getFullYear();
}
