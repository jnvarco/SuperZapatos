export class Store{
    id: number;
    address: string;
    phoneNumber: string;

    constructor(store?: any){
        this.id = store.id || null;
        this.address = store.address || null;
        this.phoneNumber = store.phoneNumber || null;
    }
}