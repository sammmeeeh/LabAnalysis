import { Injectable } from '@angular/core';
import { AppUser } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class UserService extends CrudMockService<AppUser> {
  constructor(store: MockStoreService) { super(store, 'users'); }}
