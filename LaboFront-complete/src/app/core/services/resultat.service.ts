import { Injectable } from '@angular/core';
import { Resultat } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class ResultatService extends CrudMockService<Resultat> {
  constructor(store: MockStoreService) { super(store, 'resultats'); }}
