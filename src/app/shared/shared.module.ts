import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule
  ],
  declarations: [],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
