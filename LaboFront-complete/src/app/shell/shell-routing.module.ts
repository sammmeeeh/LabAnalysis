import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { RoleGuard } from '../core/guards/role.guard';
import { ShellComponent } from './shell.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent, canActivate: [AuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'referentiel', loadChildren: () => import('../reference/reference.module').then((m) => m.ReferenceModule) },
      { path: 'gestion-clients', loadChildren: () => import('../clients/clients.module').then((m) => m.ClientsModule) },
      { path: 'workflow', loadChildren: () => import('../workflow/workflow.module').then((m) => m.WorkflowModule) },
      { path: 'administration', loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule), canActivate: [RoleGuard], data: { roles: ['Administrator'] } },
    ]
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class ShellRoutingModule {}
