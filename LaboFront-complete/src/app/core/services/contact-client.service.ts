import { Injectable } from '@angular/core';
import { ContactClient } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class ContactClientService extends CrudMockService<ContactClient> {
  constructor(store: MockStoreService) { super(store, 'contactsClient'); }}
