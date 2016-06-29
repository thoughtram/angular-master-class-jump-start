import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: Http) {}

  getContact(id: string) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
                    .map(res => res.json().item);
  }

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
                    .map(res => res.json())
                    .map(data => data.items);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact);
  }
}
