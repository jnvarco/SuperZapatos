import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../shared/models/article.model';

@Injectable()
export class ArticleService {

  private articlesPath = 'api/articles'

  constructor(
    private http: HttpClient
  ) { }

  public getArticles(){
    return this.http.get<Array<Article>>(this.articlesPath);
  }

  public createArticle(article: Article){
    return this.http.post(this.articlesPath,article);
  }

  public updateArticle(article: Article){
    return this.http.put(`${this.articlesPath}/${article.id}`, article);
  }

  public deleteArticle(id: number){
    return this.http.delete(`${this.articlesPath}/${id}`)
  }

}
