import { Injectable } from '@angular/core';
import { Norme } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class NormeService extends CrudMockService<Norme> {
  constructor(store: MockStoreService) { super(store, 'normes'); }}
