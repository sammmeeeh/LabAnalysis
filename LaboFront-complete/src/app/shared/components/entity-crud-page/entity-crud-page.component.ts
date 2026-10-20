import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntityRegistryService } from '../../../core/services/entity-registry.service';
import { FieldConfig, ManagementPageConfig } from '../../../core/models/app.models';

@Component({ selector: 'app-entity-crud-page', templateUrl: './entity-crud-page.component.html', styleUrls: ['./entity-crud-page.component.scss'], standalone: false })
export class EntityCrudPageComponent implements OnInit {
  config!: ManagementPageConfig;
  items: any[] = [];
  model: any = {};
  options: Record<string, any[]> = {};

  constructor(private route: ActivatedRoute, private registry: EntityRegistryService) {}

  ngOnInit(): void {
    this.config = this.route.snapshot.data['config'];
    this.config.fields.filter((field) => field.optionKey).forEach((field) => {
      this.options[field.key] = this.registry.getOptions(field.optionKey!);
    });
    this.reset();
    this.load();
  }

  load(): void { this.registry.getService(this.config.entityKey).getAll().subscribe((items: any[]) => this.items = items); }
  reset(): void { this.model = {}; }
  edit(item: any): void { this.model = { ...item }; }
  save(): void {
    const service = this.registry.getService(this.config.entityKey);
    const action = this.model.id ? service.update(this.model.id, this.model) : service.create(this.model);
    action.subscribe(() => { this.reset(); this.load(); });
  }
  remove(id: number): void { this.registry.getService(this.config.entityKey).delete(id).subscribe(() => this.load()); }
  display(item: any, field: FieldConfig): string | number {
    if (field.optionKey) {
      const option = (this.options[field.key] || []).find((entry) => entry.id === item[field.key]);
      return option ? option[field.optionLabel || 'nom'] ?? option['libelle'] ?? option['designation'] ?? option['raisonSociale'] : item[field.key];
    }
    return item[field.key];
  }
}
