import { NgModule } from '@angular/core';
import { ShellRoutingModule } from './shell-routing.module';
import { SharedModule } from '../shared/shared-module';
import { ShellComponent } from './shell.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({ declarations: [ShellComponent, DashboardComponent], imports: [SharedModule, ShellRoutingModule] })
export class ShellModule {}
