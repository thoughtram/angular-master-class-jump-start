import { ContactsListComponent } from './contacts-list';
import { Routes } from '@angular/router';
import { ContactsDetailComponent } from './contacts-detail';

export const ContactsAppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactsDetailComponent }
];
