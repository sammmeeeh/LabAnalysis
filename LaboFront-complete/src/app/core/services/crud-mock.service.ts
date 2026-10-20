import { Observable, of } from 'rxjs';
import { BaseEntity } from '../models/app.models';
import { MockStoreService } from './mock-store.service';

export abstract class CrudMockService<T extends BaseEntity> {
  protected constructor(protected store: MockStoreService, protected tableKey: string) {}

  getAll(): Observable<T[]> { return of(this.store.getTable<T>(this.tableKey)); }
  getById(id: number): Observable<T | undefined> { return of(this.store.getTable<T>(this.tableKey).find((item) => item.id === id)); }
  create(payload: Omit<T, 'id'> | T): Observable<T> { return of(this.store.create<T>(this.tableKey, payload)); }
  update(id: number, payload: Partial<T>): Observable<T | undefined> { return of(this.store.update<T>(this.tableKey, id, payload)); }
  delete(id: number): Observable<boolean> { return of(this.store.delete(this.tableKey, id)); }
  snapshot(): T[] { return this.store.getTable<T>(this.tableKey); }
}
