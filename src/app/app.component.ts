import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  template: `
    <mat-toolbar color="primary">Contacts</mat-toolbar>
    <mat-list>
      <mat-list-item *ngFor="let contact of contacts; trackBy:trackByContactId">
        <img mat-list-avatar [src]="contact.image" alt="Picture of {{contact.name}}" class="circle">
        <h3 mat-line>{{contact.name}}</h3>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  contacts: Array<Contact> = CONTACT_DATA;

  trackByContactId(index, contact) {
    return contact.id;
  }
}
