import { EventsHubService } from './../../../core/services/events-hub.service';
import { Article } from './../../../shared/models/article.model';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/data-services/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'SupZap-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  public articlesList: Array<Article>;
  public page: number;
  public collectionSize: number;
  public maxSize: number;
  public rotate: boolean;
  public boundaryLinks: boolean;
  public itemsPerPage: number;

  constructor(
    private articleService: ArticleService,
    private eventsHubService: EventsHubService,
    private toastr: ToastrService
  ) {
    this.maxSize = 5;
    this.rotate = true;
    this.boundaryLinks = true;
    this.itemsPerPage = 5;
    this.getArticles();
    this.pageChangedSubscription();
   }

  ngOnInit() {
   
  }

  private getArticles(){
    this.articleService.getArticles()
      .subscribe(
        (articles) => {
          this.articlesList = <Array<Article>>articles;
          this.collectionSize = this.articlesList.length;
          this.toastr.info(`size ${this.collectionSize}`);
        }
      );
  }

  private pageChangedSubscription(){
    this.eventsHubService.pageChanged$
      .subscribe(
        (page) => {
          this.page = page;
          this.toastr.info(`pagina ${this.page}`);
        }
      );
  }
}
