import { Injectable } from '@angular/core';
import { ClientEntity } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class ClientService extends CrudMockService<ClientEntity> {
  constructor(store: MockStoreService) { super(store, 'clients'); }}
