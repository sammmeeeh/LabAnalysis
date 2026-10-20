import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../core/guards/role.guard';
import { EntityCrudPageComponent } from '../shared/components/entity-crud-page/entity-crud-page.component';
import { ClientsHomeComponent } from './clients-home.component';

const routes: Routes = [
  { path: '', component: ClientsHomeComponent, canActivate: [RoleGuard], data: { roles: ['Administrator'] } },
  { path: 'clients', component: EntityCrudPageComponent, canActivate: [RoleGuard], data: { roles: ['Administrator'], config: { entityKey: 'clients', title: 'Clients', subtitle: 'Entreprises externes qui demandent des tests.', fields: [{ key: 'raisonSociale', label: 'Raison sociale', required: true }, { key: 'code', label: 'Code', required: true }, { key: 'secteur', label: 'Secteur', required: true }] } } },
  { path: 'contacts-client', component: EntityCrudPageComponent, canActivate: [RoleGuard], data: { roles: ['Administrator'], config: { entityKey: 'contactsClient', title: 'ContactsClient', subtitle: 'Personnes de contact chez chaque client.', fields: [{ key: 'clientId', label: 'Client', type: 'select', optionKey: 'clients', optionLabel: 'raisonSociale', required: true }, { key: 'nom', label: 'Nom', required: true }, { key: 'email', label: 'Email', required: true }, { key: 'telephone', label: 'Telephone', required: true }] } } },
  { path: 'usines', component: EntityCrudPageComponent, canActivate: [RoleGuard], data: { roles: ['Administrator'], config: { entityKey: 'usines', title: 'Usines', subtitle: 'Sites de production lies a un Client.', fields: [{ key: 'clientId', label: 'Client', type: 'select', optionKey: 'clients', optionLabel: 'raisonSociale', required: true }, { key: 'nom', label: 'Nom', required: true }, { key: 'ville', label: 'Ville', required: true }, { key: 'pays', label: 'Pays', required: true }] } } }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ClientsRoutingModule {}
