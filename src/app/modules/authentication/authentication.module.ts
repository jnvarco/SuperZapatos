import { SharedModule } from './../../shared/shared.module';
import { AuthenticationRoutingModule, routedComponents } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [routedComponents]
})
export class AuthenticationModule { }
