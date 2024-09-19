import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {

  contactMe = "Contact Me - I like email!"
  contactAlt = "You can reach me a different way (or take a look at my other links) here:"

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm(environment.emailJsServiceId, environment.emailJsTemplateId, e.target as HTMLFormElement, environment.emailJsUserId)
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email.');
    });
  };

}
