export class Token {
    id: string;
    userId: number;
    token: string;
    password: string

    constructor(token?: any){
        this.id = token.id || null;
        this.userId = token.userId || null;
        this.token = token.token || null;
        this.password = token.password || null;
    }
}