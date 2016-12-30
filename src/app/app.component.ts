import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
  selector: 'trm-contacts-app',
  template: `
    <mat-toolbar color="primary">Contacts</mat-toolbar>
    <mat-list>
      <mat-list-item>
        <img mat-list-avatar [src]="contact.image" alt="Picture of {{contact.name}}" class="circle">
        <h3 mat-line>{{contact.name}}</h3>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  contact: Contact = {
    id: 7,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  };
}
