import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const APP_ROUTES: Routes = [
  { path: '', component: ContactsListComponent },
  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  { path: '**', redirectTo: '/' }
];

