import { Injectable } from '@angular/core';
import { Rapport } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class RapportService extends CrudMockService<Rapport> {
  constructor(store: MockStoreService) { super(store, 'rapports'); }
  nextReference(): string {
    const count = this.snapshot().length + 1;
    return `RPT-2026-${String(count).padStart(3, "0")}`;
  }
}
