import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  serviceId: string = '';
  service: ServiceDetail | null = null;

  services: Record<string, ServiceDetail> = {
    'software-development': {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs',
      fullDescription: 'We develop comprehensive software solutions that solve complex business problems and scale with your organization.',
      features: [
        'Custom application development',
        'System architecture design',
        'API development and integration',
        'Cloud-based solutions',
        'Enterprise software solutions'
      ],
      benefits: [
        'Tailored solutions for your specific needs',
        'Scalable and maintainable code',
        'Ongoing support and maintenance',
        'Cost-effective development'
      ]
    },
    'website-development': {
      id: 'website-development',
      title: 'Website Development',
      description: 'Modern, responsive websites that engage your audience',
      fullDescription: 'We create stunning, responsive websites that not only look great but also drive business results.',
      features: [
        'Responsive web design',
        'E-commerce platforms',
        'Content management systems',
        'SEO optimization',
        'Performance optimization'
      ],
      benefits: [
        'Mobile-first design',
        'Fast loading times',
        'User-friendly interfaces',
        'Scalable architecture'
      ]
    },
    'mobile-apps': {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      description: 'Native and cross-platform Android and iOS applications',
      fullDescription: 'Native iOS and Android applications that provide seamless user experiences.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform development',
        'App store deployment',
        'Performance optimization'
      ],
      benefits: [
        'Native performance',
        'Offline functionality',
        'Push notifications',
        'Seamless integration'
      ]
    },
    'consulting': {
      id: 'consulting',
      title: 'Software Consulting',
      description: 'Expert guidance for your technical projects',
      fullDescription: 'Our experienced consultants provide strategic guidance for your technical initiatives.',
      features: [
        'Technology assessment',
        'Architecture consulting',
        'Best practices guidance',
        'Risk analysis',
        'Team training'
      ],
      benefits: [
        'Expert insights',
        'Risk mitigation',
        'Optimized solutions',
        'Knowledge transfer'
      ]
    },
    'engineering-projects': {
      id: 'engineering-projects',
      title: 'Engineering Projects',
      description: 'Final year projects and technical implementation',
      fullDescription: 'Complete support for engineering projects from conceptualization to implementation.',
      features: [
        'Project planning and design',
        'Technical implementation',
        'Testing and quality assurance',
        'Documentation',
        'Deployment support'
      ],
      benefits: [
        'Professional guidance',
        'Quality assurance',
        'Timely delivery',
        'Best practices'
      ]
    },
    'mentorship': {
      id: 'mentorship',
      title: 'Project Mentorship',
      description: 'Guidance and support throughout your project journey',
      fullDescription: 'One-on-one mentorship to guide you through your project challenges.',
      features: [
        '1-on-1 guidance sessions',
        'Code reviews',
        'Architecture guidance',
        'Problem solving support',
        'Best practices training'
      ],
      benefits: [
        'Expert knowledge',
        'Personalized guidance',
        'Faster learning',
        'Improved project quality'
      ]
    },
    'interviews': {
      id: 'interviews',
      title: 'Mock Interviews',
      description: 'Prepare for your dream job with expert mock interviews',
      fullDescription: 'Realistic mock interview experiences with industry professionals.',
      features: [
        'Technical interviews',
        'HR round simulations',
        'Aptitude tests',
        'Feedback and guidance',
        'Interview tips and tricks'
      ],
      benefits: [
        'Build confidence',
        'Identify weak areas',
        'Improve communication',
        'Better job prospects'
      ]
    },
    'internship': {
      id: 'internship',
      title: 'Internship Programs',
      description: 'Hands-on learning opportunities with industry experience',
      fullDescription: 'Structured internship programs that provide real-world experience.',
      features: [
        'Hands-on project work',
        'Mentorship program',
        'Industry exposure',
        'Certificate upon completion',
        'Potential full-time offers'
      ],
      benefits: [
        'Real-world experience',
        'Portfolio building',
        'Networking opportunities',
        'Career guidance'
      ]
    },
    'tutoring': {
      id: 'tutoring',
      title: 'Technical Competency Program',
      description: 'Build your technical skills with our expert tutors',
      fullDescription: 'Comprehensive programs designed to build professional technical competencies.',
      features: [
        'Structured curriculum',
        'Hands-on projects',
        'Expert trainers',
        'Flexible scheduling',
        'Lifetime access to materials'
      ],
      benefits: [
        'Enhanced skills',
        'Industry-relevant knowledge',
        'Certification',
        'Career advancement'
      ]
    },
    'mock-tests': {
      id: 'mock-tests',
      title: 'Mock Tests',
      description: 'Practice tests to assess and improve your knowledge',
      fullDescription: 'Comprehensive test series to evaluate your preparation level.',
      features: [
        'Multiple difficulty levels',
        'Detailed explanations',
        'Performance analytics',
        'Timed assessments',
        'Leaderboards'
      ],
      benefits: [
        'Self-assessment',
        'Progress tracking',
        'Improved scores',
        'Confidence building'
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.service = this.services[this.serviceId] || null;
    });
  }
}
