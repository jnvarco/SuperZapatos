import { LoggedGuard } from './../../core/guards/logged.guard';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoresParentComponent } from './stores-parent/stores-parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routedComponents = [StoresParentComponent,StoreListComponent];

const routes: Routes =[
  {path: '', pathMatch: 'full', redirectTo: 'stores'},
  {
    path: 'stores', component: StoresParentComponent, canLoad: [LoggedGuard], canActivate: [LoggedGuard],
    children: [
      {path:'', pathMatch: 'full', redirectTo: 'list'},
      {path: 'list', component: StoreListComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]

})
export class StoresRoutingModule { }
