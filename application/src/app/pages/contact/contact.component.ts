import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      // Reset form after 2 seconds
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        this.submitted = false;
      }, 2000);
    }
  }
}
