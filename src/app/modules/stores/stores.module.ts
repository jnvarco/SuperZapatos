import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresParentComponent } from './stores-parent/stores-parent.component';
import { StoreListComponent } from './store-list/store-list.component';
import { routedComponents, StoresRoutingModule } from './stores-routing.module';
import { StoreCreateComponent } from './store-create/store-create.component';
import { StoreEditComponent } from './store-edit/store-edit.component';

@NgModule({
  imports: [
    SharedModule,
    StoresRoutingModule
  ],
  declarations: [routedComponents, StoreCreateComponent, StoreEditComponent]
})
export class StoresModule { }
