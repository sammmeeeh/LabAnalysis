import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-statistiques', templateUrl: './statistiques.component.html', styleUrls: ['./statistiques.component.scss'], standalone: false })
export class StatistiquesComponent {
  constructor(public registry: EntityRegistryService) {}
  get total() { return this.registry.resultats.snapshot().length; }
  get nonConformes() { return this.registry.resultats.snapshot().filter((item) => !item.conforme).length; }
  get decisions() { return this.registry.decisionsQualite.snapshot().length; }
}
