import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routedComponents=[LoginComponent];

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuthenticationRoutingModule { }
