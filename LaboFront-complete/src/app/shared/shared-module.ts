import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { EntityCrudPageComponent } from './components/entity-crud-page/entity-crud-page.component';

@NgModule({
  declarations: [PageHeaderComponent, StatCardComponent, EntityCrudPageComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CommonModule, FormsModule, RouterModule, PageHeaderComponent, StatCardComponent, EntityCrudPageComponent]
})
export class SharedModule {}
