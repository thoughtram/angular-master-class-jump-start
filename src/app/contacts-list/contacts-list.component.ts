import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
