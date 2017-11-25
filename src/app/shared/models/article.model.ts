export class Article{
    id: number;
    description: string;
    price: number;
    size: string;
    total_in_shelf: number;
    total_in_vault: number;
    store_id: number;

    constructor(article?: any){
        this.id = article.id || null;
        this.description = article.description || null;
        this.price = article.price || null
        this.size = article.size || null;
        this.total_in_shelf = article.total_in_shelf || null;
        this.total_in_vault = article.total_in_vault || null;
        this.store_id = article.store_id || null;
    }
}