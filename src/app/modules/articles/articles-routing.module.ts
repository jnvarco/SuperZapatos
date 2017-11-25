import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticlesParentComponent } from './articles-parent/articles-parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedGuard } from '../../core/guards/logged.guard';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';

export const routedComponents = [ArticlesParentComponent,ArticleListComponent,ArticleCreateComponent];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'articles' },
  { 
    path:'articles', component: ArticlesParentComponent, canLoad: [LoggedGuard], canActivate: [LoggedGuard],
    children:[
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', component: ArticleListComponent },
      { path: 'create', component: ArticleCreateComponent }
    ]
 }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
