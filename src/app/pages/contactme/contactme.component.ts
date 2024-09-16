import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert('Form submitted.');
  }
}
