import { Component } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  template: `
    <mat-toolbar color="primary">Contacts</mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {}
