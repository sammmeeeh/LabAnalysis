import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { EntityRegistryService } from '../core/services/entity-registry.service';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.scss'], standalone: false })
export class DashboardComponent {
  constructor(public auth: AuthService, public registry: EntityRegistryService) {}
  get dashboardSubtitle(): string { return `Vue d'ensemble role ${this.auth.currentRole() || ''}`; }
  get demandes() { return this.registry.demandesTest.snapshot(); }
  get echantillons() { return this.registry.echantillons.snapshot(); }
  get resultats() { return this.registry.resultats.snapshot(); }
  get actions(): string[] {
    const role = this.auth.currentRole();
    return {
      Client: ['Suivre les DemandesTest en cours', 'Soumettre un nouvel echantillon', 'Consulter les Rapports'],
      Administrator: ['Mettre a jour les utilisateurs', 'Maintenir le referentiel', 'Valider les demandes soumises'],
      Technician: ['Traiter les echantillons recus', 'Saisir les Resultat', 'Fermer les analyses terminees'],
      QualityManager: ['Verifier les Fourchette', 'Prendre les DecisionQualite', 'Suivre les indicateurs'],
      NutritionManager: ['Interpreter les ecarts', 'Completer les commentaires', 'Escalader vers la qualite']
    }[role || 'Client'] || [];
  }
}
