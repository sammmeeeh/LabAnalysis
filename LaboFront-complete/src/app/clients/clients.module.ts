import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './clients-home.component';

@NgModule({ declarations: [ClientsHomeComponent], imports: [SharedModule, ClientsRoutingModule] })
export class ClientsModule {}
