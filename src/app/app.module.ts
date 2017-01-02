import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ContactsMaterialModule } from './contacts-material.module';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

import { ContactsService } from './contacts.service';

import { APP_ROUTES } from './app.routes';
import { API_ENDPOINT } from './app.tokens';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [
    ContactsService,
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' }
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
