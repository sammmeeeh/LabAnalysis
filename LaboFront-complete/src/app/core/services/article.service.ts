import { Injectable } from '@angular/core';
import { Article } from '../models/app.models';
import { CrudMockService } from './crud-mock.service';
import { MockStoreService } from './mock-store.service';

@Injectable({ providedIn: 'root' })
export class ArticleService extends CrudMockService<Article> {
  constructor(store: MockStoreService) { super(store, 'articles'); }}
