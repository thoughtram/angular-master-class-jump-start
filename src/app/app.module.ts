import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';
import { ContactsService } from './contacts.service';
import { ContactsAppRoutes } from './app.routes';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule
  ],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
