import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let contact of contacts; trackBy:trackByContactId">
        <img mat-list-avatar [src]="contact.image" alt="Picture of {{contact.name}}" class="circle">
        <h3 mat-line>{{contact.name}}</h3>
      </mat-list-item>
    </mat-list>
  `,
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Array<Contact>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit () {
    this.contacts = this.contactsService.getContacts();
  }

  trackByContactId(index, contact) {
    return contact.id;
  }
}
