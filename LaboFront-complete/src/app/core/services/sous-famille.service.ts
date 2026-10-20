import { Injectable } from '@angular/core';
import { SousFamille } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class SousFamilleService extends CrudMockService<SousFamille> {
  constructor(store: MockStoreService) { super(store, 'sousFamilles'); }}
