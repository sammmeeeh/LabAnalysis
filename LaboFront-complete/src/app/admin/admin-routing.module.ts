import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityCrudPageComponent } from '../shared/components/entity-crud-page/entity-crud-page.component';

const routes: Routes = [
  { path: 'utilisateurs', component: EntityCrudPageComponent, data: { config: { entityKey: 'users', title: 'Utilisateurs', subtitle: 'Administration des comptes et roles backend.', fields: [{ key: 'nom', label: 'Nom', required: true }, { key: 'email', label: 'Email', required: true }, { key: 'motDePasse', label: 'Mot de passe', required: true }, { key: 'role', label: 'Role', required: true }] } } }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AdminRoutingModule {}
