import { Injectable } from '@angular/core';
import { DecisionQualite } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class DecisionQualiteService extends CrudMockService<DecisionQualite> {
  constructor(store: MockStoreService) { super(store, 'decisionsQualite'); }}
