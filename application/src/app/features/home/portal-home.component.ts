import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Code2, Globe, Smartphone, BrainCircuit, GraduationCap,
  Lightbulb, Users, ClipboardCheck, BookOpen, ArrowRight,
  Star, Rocket, ShieldCheck, HeartHandshake, Zap, ChevronRight
} from 'lucide-angular';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-portal-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, NavbarComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './portal-home.component.html',
  styleUrl: './portal-home.component.css'
})
export class PortalHomeComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly ChevronRightIcon = ChevronRight;
  readonly RocketIcon = Rocket;
  readonly StarIcon = Star;

  stats = [
    { value: '50+', label: 'Projects Delivered', icon: Rocket },
    { value: '100+', label: 'Happy Clients', icon: HeartHandshake },
    { value: '5+', label: 'Years Experience', icon: ShieldCheck },
    { value: '10', label: 'Expert Services', icon: Zap }
  ];

  services = [
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'Modern, responsive websites that engage and convert your audience.',
      icon: Globe,
      color: '#3F72AF',
      bgColor: 'rgba(63, 114, 175, 0.1)'
    },
    {
      id: 'software-development',
      title: 'Desktop Applications',
      description: 'Powerful cross-platform desktop apps built for performance.',
      icon: Code2,
      color: '#112d4e',
      bgColor: 'rgba(17, 45, 78, 0.1)'
    },
    {
      id: 'mobile-apps',
      title: 'Android Applications',
      description: 'Native Android apps providing seamless mobile experiences.',
      icon: Smartphone,
      color: '#3F72AF',
      bgColor: 'rgba(63, 114, 175, 0.1)'
    },
    {
      id: 'consulting',
      title: 'Software Consulting',
      description: 'Expert strategic guidance for your technology initiatives.',
      icon: BrainCircuit,
      color: '#112d4e',
      bgColor: 'rgba(17, 45, 78, 0.1)'
    },
    {
      id: 'engineering-projects',
      title: 'Engineering Projects',
      description: 'Complete support for final year and academic projects.',
      icon: GraduationCap,
      color: '#3F72AF',
      bgColor: 'rgba(63, 114, 175, 0.1)'
    },
    {
      id: 'mentorship',
      title: 'Project Mentorship',
      description: 'One-on-one guidance throughout your entire project journey.',
      icon: Lightbulb,
      color: '#112d4e',
      bgColor: 'rgba(17, 45, 78, 0.1)'
    }
  ];

  testimonials = [
    {
      text: 'Arc-i-Tech transformed our business with innovative solutions and professional expertise. Highly recommended!',
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Startup Inc.'
    },
    {
      text: 'Outstanding mentorship and project support. The team truly understands modern software development.',
      name: 'Priya Sharma',
      role: 'Software Engineer, Fortune 500'
    }
  ];
}
