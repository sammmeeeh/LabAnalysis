import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-demande-form', templateUrl: './demande-form.component.html', styleUrls: ['./demande-form.component.scss'], standalone: false })
export class DemandeFormComponent {
  model: any = { articleId: undefined, usineId: undefined, natureEchantillonId: undefined, dateDemande: '2026-08-12', commentaire: '', echantillonInfo: '' };
  constructor(public registry: EntityRegistryService, private auth: AuthService, private router: Router) {}
  get usines() { return this.registry.usines.snapshot().filter((item) => item.clientId === this.auth.currentUser()?.clientId); }
  save(statut: 'Brouillon' | 'Soumise'): void {
    const clientId = this.auth.currentUser()?.clientId || this.usines[0]?.clientId || 1;
    const numero = this.registry.demandesTest.nextNumero();
    this.registry.demandesTest.create({ ...this.model, clientId, numero, statut }).subscribe((demande: any) => {
      const sampleIndex = this.registry.echantillons.snapshot().length + 1;
      this.registry.echantillons.create({ code: `ECH-${String(sampleIndex).padStart(3, '0')}`, demandeTestId: demande.id, natureEchantillonId: this.model.natureEchantillonId, dateReception: this.model.dateDemande, statut: 'A analyser' }).subscribe(() => this.router.navigate(['/app/workflow/demandes']));
    });
  }
}
