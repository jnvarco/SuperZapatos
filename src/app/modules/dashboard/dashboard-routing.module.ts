import { LoggedGuard } from './../../core/guards/logged.guard';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routedComponents = [DashboardComponent];

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canLoad: [LoggedGuard], canActivate: [LoggedGuard] }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class DashboardRoutingModule { }
