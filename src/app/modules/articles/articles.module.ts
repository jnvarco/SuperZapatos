import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, ArticlesRoutingModule } from './articles-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ArticlesParentComponent } from './articles-parent/articles-parent.component';

@NgModule({
  imports: [
    SharedModule,
    ArticlesRoutingModule
  ],
  declarations: [routedComponents]
})
export class ArticlesModule { }
