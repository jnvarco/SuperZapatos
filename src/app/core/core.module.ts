import { LocalStorageService } from './services/local-storage.service';
import { EventsHubService } from './services/events-hub.service';
import { LoggerService } from './data-services/logger.service';
import { AuthenticationService } from './services/authentication.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [PageNotFoundComponent],

  exports:[
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    PageNotFoundComponent
  ],

  providers:[
    LoggerService,
    EventsHubService,
    LocalStorageService,
    AuthenticationService
  ]

})
export class CoreModule { }
