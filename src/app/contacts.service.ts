import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Contact } from './models/contact';

interface ContactResponse  { item  : Contact    }
interface ContactsResponse { items : Contact[]  }


@Injectable()
export class ContactsService {

  constructor(private http: HttpClient, @Inject('API_ENDPOINT') private apiEndpoint) {}


  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.apiEndpoint}/contacts/${id}`)
        .pipe(map(data => data.item));
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/contacts`)
        .pipe(map(data => data.items));
  }

}
