import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-echantillons', templateUrl: './echantillons.component.html', styleUrls: ['./echantillons.component.scss'], standalone: false })
export class EchantillonsComponent {
  constructor(public registry: EntityRegistryService) {}
  get items() { return this.registry.echantillons.snapshot().filter((item) => item.statut !== 'Analyse terminee'); }
  demandeNumero(id: number) { return this.registry.demandesTest.snapshot().find((item) => item.id === id)?.numero || '-'; }
}
