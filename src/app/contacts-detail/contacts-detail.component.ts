import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit, OnDestroy {

  contact: Contact;
  private _titleSubscription: Subscription;

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private eventBus: EventBusService) {}

  ngOnInit() {
    this.contactsService
        .getContact(this.route.snapshot.params['id'])
        .subscribe(contact => {
          this.contact = contact;
          // This should output the previous screen's title then the current screen's title
          this._titleSubscription = this.eventBus
                                        .observe<string>('appTitleChange', true)
                                        .subscribe(title => console.log(`Emitted title: ${title}`));
          this.eventBus
              .emit('appTitleChange', contact.name);
        });
  }

  ngOnDestroy() {
    if (this._titleSubscription) {
      this._titleSubscription.unsubscribe();
    }
  }
}
