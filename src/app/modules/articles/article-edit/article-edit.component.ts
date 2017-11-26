import { Store } from './../../../shared/models/store.model';
import { StoreService } from './../../../core/data-services/store.service';
import { Article } from './../../../shared/models/article.model';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from './../../../core/data-services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'SupZap-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  public article;
  public storeList: Array<Store>;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private storeService: StoreService,
    private toastr: ToastrService,
    private router: Router
  )  { 
    
  }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params) => {
        const id = params['id'];

        this.getArticle(id);
      }        
    );

    this.getStores();    
  }

  private getStores(){
    this.storeService.getStores()
      .subscribe((stores) => {
        this.storeList = <Array<Store>>stores;
      });
  }

  private getArticle(id: number){
    this.articleService.getArticle(id)
      .subscribe(
        (article) => {
          this.article = new Article(article)
        }
      );
  }

  public editArticle(isValid: boolean){
    if(!isValid){
      return false;
    }

    this.articleService.updateArticle(this.article)
      .subscribe(
        () => {
          this.toastr.success('Se actualizó el artículo satisfactoriamente.','Actualización de artículo');
          this.router.navigate(['/articles']);
        },
        () => {
          this.toastr.error('No fue posible actualizar el artículo. Intente nuevamente!', 'Error');
        }
      );
  }

}
