import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './models/contact';
import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) {}

  getContact(id: number | string) {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
                    .map(res => res.json().item);
  }

  getContacts() {
    return this.http.get(`${this.apiEndpoint}/contacts`)
                    .map(res => res.json())
                    .map(data => data.items);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }
}
