import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'auth', loadChildren: './modules/authentication/authentication.module#AuthenticationModule' },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'stores', loadChildren: './modules/stores/stores.module#StoresModule' },
  { path: 'articles', loadChildren: './modules/articles/articles.module#ArticlesModule' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
