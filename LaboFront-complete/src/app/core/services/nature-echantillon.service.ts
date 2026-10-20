import { Injectable } from '@angular/core';
import { NatureEchantillon } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class NatureEchantillonService extends CrudMockService<NatureEchantillon> {
  constructor(store: MockStoreService) { super(store, 'naturesEchantillon'); }}
