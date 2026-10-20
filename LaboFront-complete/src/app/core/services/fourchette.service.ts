import { Injectable } from '@angular/core';
import { Fourchette } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class FourchetteService extends CrudMockService<Fourchette> {
  constructor(store: MockStoreService) { super(store, 'fourchettes'); }
  findByArticleAndTypeAnalyse(articleId: number, typeAnalyseId: number): Fourchette | undefined {
    return this.snapshot().find((item) => item.articleId === articleId && item.typeAnalyseId === typeAnalyseId);
  }
}
