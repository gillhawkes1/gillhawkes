import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {

  contactMe: string = "Contact Me - I like email!";
  contactAlt: string = "You can reach me a different way (or take a look at my other links) here:";
  thanksForContacting: string = "Thanks! I will get back to you as soon as I can."
  showForm: Boolean = true;
  contact = {
    name: null,
    email: null,
    message: null
  };

  onSubmit(e: Event) {
    e.preventDefault();
    if(environment.production) {
      if(this.contact.email)
      emailjs.sendForm(environment.emailJsServiceId, environment.emailJsTemplateId, e.target as HTMLFormElement, environment.emailJsUserId)
      .then((result: EmailJSResponseStatus) => {
        console.log(result);
        alert('Email sent successfully!');
        this.showForm = false;
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });      
    } else {
      alert('Email sent successfully! (this is a local response)');
      this.showForm = false
    }

  };

}
