import { Injectable } from '@angular/core';
import { TypeAnalyse } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class TypeAnalyseService extends CrudMockService<TypeAnalyse> {
  constructor(store: MockStoreService) { super(store, 'typesAnalyse'); }}
