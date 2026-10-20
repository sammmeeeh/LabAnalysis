import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Role } from '../core/models/app.models';

interface NavItem { label: string; route: string; roles: Role[]; }

@Component({ selector: 'app-shell', templateUrl: './shell.component.html', styleUrls: ['./shell.component.scss'], standalone: false })
export class ShellComponent {
  readonly allRoles: Role[] = ['Client', 'Administrator', 'Technician', 'QualityManager', 'NutritionManager'];
  navItems: NavItem[] = [
    { label: 'Tableau de bord', route: '/app/dashboard', roles: this.allRoles },
    { label: 'Mes demandes de test', route: '/app/workflow/demandes', roles: ['Client'] },
    { label: 'Nouvelle demande', route: '/app/workflow/nouvelle-demande', roles: ['Client'] },
    { label: 'Mes rapports', route: '/app/workflow/rapports', roles: ['Client'] },
    { label: 'Gestion des utilisateurs', route: '/app/administration/utilisateurs', roles: ['Administrator'] },
    { label: 'Gestion du referentiel complet', route: '/app/referentiel', roles: ['Administrator'] },
    { label: 'Validation des demandes', route: '/app/workflow/validation-demandes', roles: ['Administrator'] },
    { label: 'Echantillons a traiter', route: '/app/workflow/echantillons', roles: ['Technician'] },
    { label: 'Saisie des resultats', route: '/app/workflow/saisie-resultats', roles: ['Technician'] },
    { label: 'Fourchettes', route: '/app/referentiel/fourchettes', roles: ['QualityManager'] },
    { label: 'Decisions qualite en attente', route: '/app/workflow/decisions-qualite', roles: ['QualityManager'] },
    { label: 'Statistiques', route: '/app/workflow/statistiques', roles: ['QualityManager'] },
    { label: 'Resultats hors fourchette a interpreter', route: '/app/workflow/non-conformes', roles: ['NutritionManager'] }
  ];

  constructor(public authService: AuthService) {}
  get visibleNav(): NavItem[] { return this.navItems.filter((item) => item.roles.includes(this.authService.currentRole() as Role)); }
}
