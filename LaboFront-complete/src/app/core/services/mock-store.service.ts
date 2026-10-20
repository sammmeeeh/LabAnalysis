import { Injectable } from '@angular/core';
import { MockDatabase, initialMockDatabase } from '../data/mock-data';
import { BaseEntity } from '../models/app.models';

@Injectable({ providedIn: 'root' })
export class MockStoreService {
  private db: MockDatabase = structuredClone(initialMockDatabase);

  getTable<T>(key: string): T[] { return structuredClone((this.db as any)[key] ?? []); }
  rawTable<T>(key: string): T[] { return ((this.db as any)[key] ?? []) as T[]; }

  create<T extends BaseEntity>(key: string, payload: Omit<T, 'id'> | T): T {
    const table = this.rawTable<T>(key);
    const nextId = table.length ? Math.max(...table.map((item) => item.id)) + 1 : 1;
    const entity = { ...payload, id: nextId } as T;
    table.push(entity);
    return structuredClone(entity);
  }

  update<T extends BaseEntity>(key: string, id: number, payload: Partial<T>): T | undefined {
    const table = this.rawTable<T>(key);
    const index = table.findIndex((item) => item.id === id);
    if (index < 0) { return undefined; }
    table[index] = { ...table[index], ...payload, id } as T;
    return structuredClone(table[index]);
  }

  delete(key: string, id: number): boolean {
    const table = this.rawTable<BaseEntity>(key);
    const index = table.findIndex((item) => item.id === id);
    if (index < 0) { return false; }
    table.splice(index, 1);
    return true;
  }
}
