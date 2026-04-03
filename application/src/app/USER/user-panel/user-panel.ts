import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css',
})
export class UserPanel {

 newTask = '';

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'Build a responsive admin dashboard for managing products, orders, and analytics.',
      deadline: '2026-04-15',
      status: 'In Progress',
      todos: [
        { id: 1, task: 'Create sidebar layout', completed: true },
        { id: 2, task: 'Build product listing page', completed: false },
        { id: 3, task: 'Connect dashboard API', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Learning Management System',
      description: 'Develop course, chapter, and assignment management system for students and admin.',
      deadline: '2026-05-01',
      status: 'Pending',
      todos: [
        { id: 1, task: 'Create course module UI', completed: false },
        { id: 2, task: 'Add assignment upload feature', completed: false }
      ]
    }
  ];

  selectedProject: Project = this.projects[0];

  selectProject(project: Project): void {
    this.selectedProject = project;
    this.newTask = '';
  }

  addTask(): void {
    const task = this.newTask.trim();

    if (!task) return;

    this.selectedProject.todos.push({
      id: Date.now(),
      task,
      completed: false
    });

    this.newTask = '';
  }

  toggleTask(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTask(id: number): void {
    this.selectedProject.todos = this.selectedProject.todos.filter(todo => todo.id !== id);
  }
}
