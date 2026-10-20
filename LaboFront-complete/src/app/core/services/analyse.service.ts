import { Injectable } from '@angular/core';
import { Analyse } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class AnalyseService extends CrudMockService<Analyse> {
  constructor(store: MockStoreService) { super(store, 'analyses'); }}
