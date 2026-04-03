import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project-requirement',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-project-requirement.html',
  styleUrl: './add-project-requirement.css',
})
export class AddProjectRequirement {
projectForm: FormGroup;
  submitted = false;

  projectTypes = [
    'Web Application',
    'Mobile Application',
    'Admin Dashboard',
    'E-Commerce',
    'Portfolio Website',
    'CRM System',
    'LMS / E-Learning',
    'Custom Software'
  ];

  priorities = ['Low', 'Medium', 'High', 'Urgent'];

  technologies = [
    'Angular',
    'React',
    'Spring Boot',
    'Java',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Tailwind CSS',
    'Bootstrap',
    'Flutter'
  ];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      projectType: ['', Validators.required],
      technology: ['', Validators.required],
      deadline: ['', Validators.required],
      priority: ['', Validators.required],
      budget: [''],
      requirements: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.projectForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    console.log('Project Requirement Submitted:', this.projectForm.value);

    alert('Project requirement submitted successfully!');

    this.projectForm.reset();
    this.submitted = false;
  }
}