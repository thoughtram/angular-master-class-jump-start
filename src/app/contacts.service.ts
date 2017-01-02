import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {

  constructor() {}

  getContact (id: string) {
    return this.getContacts().find(contact => contact.id.toString() === id);
  }

  getContacts () {
    return CONTACT_DATA;
  }
}
