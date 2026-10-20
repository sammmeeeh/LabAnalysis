import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { DemandesComponent } from './demandes.component';
import { DemandeFormComponent } from './demande-form.component';
import { DemandeDetailComponent } from './demande-detail.component';
import { EchantillonsComponent } from './echantillons.component';
import { ResultEntryComponent } from './result-entry.component';
import { NonConformesComponent } from './non-conformes.component';
import { DecisionsQualiteComponent } from './decisions-qualite.component';
import { RapportsComponent } from './rapports.component';
import { StatistiquesComponent } from './statistiques.component';

@NgModule({ declarations: [DemandesComponent, DemandeFormComponent, DemandeDetailComponent, EchantillonsComponent, ResultEntryComponent, NonConformesComponent, DecisionsQualiteComponent, RapportsComponent, StatistiquesComponent], imports: [SharedModule, WorkflowRoutingModule] })
export class WorkflowModule {}
