import { Injectable } from '@angular/core';
import { DemandeTest } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class DemandeTestService extends CrudMockService<DemandeTest> {
  constructor(store: MockStoreService) { super(store, 'demandesTest'); }
  nextNumero(): string {
    const count = this.snapshot().length + 1;
    return `DT-2026-${String(count).padStart(3, "0")}`;
  }
}
