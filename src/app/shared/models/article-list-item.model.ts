import { Article } from './article.model';

export class ArticleListItem extends Article{
    addressStore: string;

    constructor(article?: any, addressStore?: string){
        super(article);
        this.addressStore = addressStore || null;
    }
}