import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  // we need to initialize since we can't use ?. operator with ngModel
  contact: Contact = <Contact>{ address: {}};

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute,
              private eventBus: EventBusService) {}

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
                        .subscribe(contact => {
                          this.contact = contact;
                          this.eventBus
                              .emit('appTitleChange', `Edit: ${contact.name}`);
                        });
  }

  cancel (contact: Contact) {
    this.goToDetails(contact);
  }

  save (contact: Contact) {
   this.contactsService.updateContact(contact)
                       .subscribe(() => this.goToDetails(contact));
  }

  private goToDetails (contact: Contact) {
    this.router.navigate(['/contact', contact.id ]);
  }

}
