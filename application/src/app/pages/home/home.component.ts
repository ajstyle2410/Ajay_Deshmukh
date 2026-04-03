import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services = [
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs'
    },
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'Modern, responsive websites that engage your audience'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform Android and iOS applications'
    },
    {
      id: 'consulting',
      title: 'Software Consulting',
      description: 'Expert guidance for your technical projects'
    },
    {
      id: 'engineering-projects',
      title: 'Engineering Projects',
      description: 'Final year projects and technical implementation'
    },
    {
      id: 'mentorship',
      title: 'Project Mentorship',
      description: 'Guidance and support throughout your project journey'
    },
    {
      id: 'interviews',
      title: 'Mock Interviews',
      description: 'Prepare for your dream job with expert mock interviews'
    },
    {
      id: 'internship',
      title: 'Internship Programs',
      description: 'Hands-on learning opportunities with industry experience'
    },
    {
      id: 'tutoring',
      title: 'Technical Competency Program',
      description: 'Build your technical skills with our expert tutors'
    },
    {
      id: 'mock-tests',
      title: 'Mock Tests',
      description: 'Practice tests to assess and improve your knowledge'
    }
  ];
}
