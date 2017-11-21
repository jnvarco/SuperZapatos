import { LoggedGuard } from './guards/logged.guard';
import { MenuService } from './data-services/menu.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { StoreService } from './data-services/store.service';
import { LocalStorageService } from './services/local-storage.service';
import { EventsHubService } from './services/events-hub.service';
import { LoggerService } from './data-services/logger.service';
import { AuthenticationService } from './services/authentication.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [PageNotFoundComponent, HeaderComponent, MenuComponent],

  exports:[
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    PageNotFoundComponent,
    HeaderComponent
  ],

  providers:[
    LoggerService,
    EventsHubService,
    LocalStorageService,
    AuthenticationService,
    StoreService,
    MenuService,
    LoggedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ]

})
export class CoreModule { }
