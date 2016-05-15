import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent
  ],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
