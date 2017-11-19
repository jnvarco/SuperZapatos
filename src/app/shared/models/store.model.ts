export class Store{
    id: number;
    address: string;

    constructor(store?: any){
        this.id = store.id || null;
        this.address = store.address || null;
    }
}