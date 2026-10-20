import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-decisions-qualite', templateUrl: './decisions-qualite.component.html', styleUrls: ['./decisions-qualite.component.scss'], standalone: false })
export class DecisionsQualiteComponent {
  model: any = { demandeTestId: undefined, decision: 'Deblocage', motif: '' };
  constructor(public registry: EntityRegistryService, private auth: AuthService) {}
  get pending() {
    const decided = this.registry.decisionsQualite.snapshot().map((item) => item.demandeTestId);
    const analyseIds = this.registry.resultats.snapshot().filter((item) => !item.conforme).map((item) => item.analyseId);
    const echantillonIds = this.registry.analyses.snapshot().filter((item) => analyseIds.includes(item.id)).map((item) => item.echantillonId);
    const demandeIds = this.registry.echantillons.snapshot().filter((item) => echantillonIds.includes(item.id)).map((item) => item.demandeTestId);
    return this.registry.demandesTest.snapshot().filter((item) => demandeIds.includes(item.id) && !decided.includes(item.id));
  }
  save(): void { this.registry.decisionsQualite.create({ ...this.model, qualityManagerId: this.auth.currentUser()?.id || 3, dateDecision: '2026-08-12' }).subscribe(() => this.registry.demandesTest.update(Number(this.model.demandeTestId), { statut: 'Cloturee' }).subscribe()); }
}
