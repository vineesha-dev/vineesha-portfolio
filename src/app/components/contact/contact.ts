import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly emailAddress = 'vineesha2609@gmail.com';

  model = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  sent = false;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    const subject = encodeURIComponent(
      this.model.subject?.trim() || `Portfolio enquiry from ${this.model.name}`,
    );
    const body = encodeURIComponent(
      `Hi Vineesha,\n\n${this.model.message}\n\n— ${this.model.name}\n${this.model.email}`,
    );

    window.location.href = `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
    this.sent = true;
  }
}
