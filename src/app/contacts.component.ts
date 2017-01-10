import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {
  private title: string;

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus
        .observe<string>('appTitleChange')
        .subscribe(title => this.title = title);
  }
}
