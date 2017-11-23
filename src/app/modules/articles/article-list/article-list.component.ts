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
  public pageSize: number;
  public rotate: boolean;
  public boundaryLinks: boolean;

  constructor(
    private articleService: ArticleService,
    private eventsHubService: EventsHubService,
    private toastr: ToastrService
  ) {
    this.maxSize = 5;
    this.rotate = true;
    this.boundaryLinks = true;
    this.pageSize = 5;
    this.page = 1;
    this.getArticles();
   }

  ngOnInit() {
   
  }

  private getArticles(){
    this.articleService.getArticles()
      .subscribe(
        (articles) => {
          this.articlesList = <Array<Article>>articles;
          this.collectionSize = this.articlesList.length;
        }
      );
  }
}
