import { Injectable } from '@angular/core';
import { ReferenceMethode } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class ReferenceMethodeService extends CrudMockService<ReferenceMethode> {
  constructor(store: MockStoreService) { super(store, 'referencesMethodes'); }}
