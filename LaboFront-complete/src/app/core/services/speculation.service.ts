import { Injectable } from '@angular/core';
import { Speculation } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class SpeculationService extends CrudMockService<Speculation> {
  constructor(store: MockStoreService) { super(store, 'speculations'); }}
