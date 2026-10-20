import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-non-conformes', templateUrl: './non-conformes.component.html', styleUrls: ['./non-conformes.component.scss'], standalone: false })
export class NonConformesComponent {
  notes: Record<number, string> = {};
  constructor(public registry: EntityRegistryService) {}
  get items() { return this.registry.resultats.snapshot().filter((item) => !item.conforme); }
  save(id: number): void { this.registry.resultats.update(id, { commentaireNutrition: this.notes[id] || '' }).subscribe(); }
}
