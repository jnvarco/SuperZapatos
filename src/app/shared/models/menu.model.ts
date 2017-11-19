export class Menu{
    textKey: string;
    link: string;
    icon: string;

    constructor(menu?: any){
        this.textKey = menu.textKey || null;
        this.link = menu.link || null;
        this.icon = menu.icon || null;
    }
}