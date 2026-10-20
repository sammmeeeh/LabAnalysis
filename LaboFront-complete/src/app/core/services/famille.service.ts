import { Injectable } from '@angular/core';
import { Famille } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class FamilleService extends CrudMockService<Famille> {
  constructor(store: MockStoreService) { super(store, 'familles'); }}
