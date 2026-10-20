import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferenceHomeComponent } from './reference-home.component';

@NgModule({ declarations: [ReferenceHomeComponent], imports: [SharedModule, ReferenceRoutingModule] })
export class ReferenceModule {}
