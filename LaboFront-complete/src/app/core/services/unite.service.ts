import { Injectable } from '@angular/core';
import { Unite } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class UniteService extends CrudMockService<Unite> {
  constructor(store: MockStoreService) { super(store, 'unites'); }}
