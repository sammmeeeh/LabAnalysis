import { Injectable } from '@angular/core';
import { Echantillon } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class EchantillonService extends CrudMockService<Echantillon> {
  constructor(store: MockStoreService) { super(store, 'echantillons'); }}
