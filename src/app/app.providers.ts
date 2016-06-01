import { ContactsService } from './contacts.service';
import { API_ENDPOINT } from './app.tokens';

export const APP_PROVIDERS = [
    ContactsService, 
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' }
]
