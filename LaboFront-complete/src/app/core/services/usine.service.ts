import { Injectable } from '@angular/core';
import { Usine } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class UsineService extends CrudMockService<Usine> {
  constructor(store: MockStoreService) { super(store, 'usines'); }}
