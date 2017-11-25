import { StoreService } from './../../../core/data-services/store.service';
import { Store } from './../../../shared/models/store.model';
import { EventsHubService } from './../../../core/services/events-hub.service';
import { Article } from './../../../shared/models/article.model';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/data-services/article.service';
import { ToastrService } from 'ngx-toastr';
import { ArticleListItem } from '../../../shared/models/article-list-item.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'SupZap-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public articlesListItem: Array<ArticleListItem> = new Array<ArticleListItem>();
  public articlesList: Array<Article>;
  public storesList: Array<Store>;
  public page: number;
  public collectionSize: number;
  public maxSize: number;
  public pageSize: number;
  public rotate: boolean;
  public boundaryLinks: boolean;
  public showCreate: boolean;

  constructor(
    private articleService: ArticleService,
    private storeService: StoreService,
    private eventsHubService: EventsHubService,
    private toastr: ToastrService
  ) {
   }

  ngOnInit() {    
    this.maxSize = 5;
    this.rotate = true;
    this.boundaryLinks = true;
    this.pageSize = 5;
    this.page = 1;
    this.showCreate = false;
    this.getArticles();
    //this.getStores();
    //setTimeout(() => {
      //this.getArticlesListItems();
    //},500);       
  }

  private getArticles(){
    this.articleService.getArticles()
      .subscribe(
        (articles) => {
          this.articlesList = <Array<Article>>articles;
          this.collectionSize = this.articlesList.length;

          this.getStores();
        }
      );
  }

  private getStores(){
    this.storeService.getStores()
      .subscribe((stores) => {
        this.storesList = <Array<Store>>stores;
        this.getArticlesListItems();
      });
  }

  private getArticlesListItems(){
    
    for(let article of this.articlesList){
      let addressStoreTemp = this.storesList.find((s) => {
        return s.id == article.store_id;
      });

      let articleLI: ArticleListItem = new ArticleListItem(article, addressStoreTemp.address);

      this.articlesListItem.push(articleLI);
    }
  }
}
