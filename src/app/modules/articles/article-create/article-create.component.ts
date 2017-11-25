import { Router } from '@angular/router';
import { Article } from './../../../shared/models/article.model';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from './../../../core/data-services/article.service';
import { StoreService } from './../../../core/data-services/store.service';
import { Store } from './../../../shared/models/store.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SupZap-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  public storeList: Array<Store>;

  constructor(
    private storeService: StoreService,
    private articleService: ArticleService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStores();
  }

  private getStores(){
    this.storeService.getStores()
      .subscribe((stores) => {
        this.storeList = <Array<Store>>stores;
      });
  }

  public createArticle(article: any, isValid: boolean){
    if(!isValid){
      return false;
    }

    const newArticle: Article = new Article(article);

    this.articleService.createArticle(newArticle)
      .subscribe(
        () => {
          this.toastr.success('Se creó el artículo satisfactoriamente','Creación de artículo');
          this.router.navigate(['/articles']);
        },
        () => {
          this.toastr.error('No fue posible crear el artículo. Intente nuevamente!','Error de creación de artículo');
        }
      );
  }
}
