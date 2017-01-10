import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService,
              private eventBus: EventBusService) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.eventBus
        .emit('appTitleChange', 'Contacts');
  }

}
