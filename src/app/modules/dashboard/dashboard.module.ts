import { SharedModule } from './../../shared/shared.module';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [routedComponents]
})
export class DashboardModule { }
