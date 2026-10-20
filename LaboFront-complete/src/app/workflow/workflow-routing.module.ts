import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../core/guards/role.guard';
import { DemandesComponent } from './demandes.component';
import { DemandeFormComponent } from './demande-form.component';
import { DemandeDetailComponent } from './demande-detail.component';
import { EchantillonsComponent } from './echantillons.component';
import { ResultEntryComponent } from './result-entry.component';
import { NonConformesComponent } from './non-conformes.component';
import { DecisionsQualiteComponent } from './decisions-qualite.component';
import { RapportsComponent } from './rapports.component';
import { StatistiquesComponent } from './statistiques.component';

const routes: Routes = [
  { path: 'demandes', component: DemandesComponent, canActivate: [RoleGuard], data: { roles: ['Client'] } },
  { path: 'validation-demandes', component: DemandesComponent, canActivate: [RoleGuard], data: { roles: ['Administrator'], mode: 'validation' } },
  { path: 'nouvelle-demande', component: DemandeFormComponent, canActivate: [RoleGuard], data: { roles: ['Client'] } },
  { path: 'demandes/:id', component: DemandeDetailComponent, canActivate: [RoleGuard], data: { roles: ['Client', 'Administrator'] } },
  { path: 'echantillons', component: EchantillonsComponent, canActivate: [RoleGuard], data: { roles: ['Technician'] } },
  { path: 'saisie-resultats', component: ResultEntryComponent, canActivate: [RoleGuard], data: { roles: ['Technician'] } },
  { path: 'saisie-resultats/:sampleId', component: ResultEntryComponent, canActivate: [RoleGuard], data: { roles: ['Technician'] } },
  { path: 'non-conformes', component: NonConformesComponent, canActivate: [RoleGuard], data: { roles: ['NutritionManager'] } },
  { path: 'decisions-qualite', component: DecisionsQualiteComponent, canActivate: [RoleGuard], data: { roles: ['QualityManager'] } },
  { path: 'rapports', component: RapportsComponent, canActivate: [RoleGuard], data: { roles: ['Client', 'Administrator'] } },
  { path: 'statistiques', component: StatistiquesComponent, canActivate: [RoleGuard], data: { roles: ['QualityManager'] } }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class WorkflowRoutingModule {}
