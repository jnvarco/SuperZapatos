import { Store } from './../../shared/models/store.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {

  private storesPath = 'api/stores';

  constructor(
    private http: HttpClient
  ) { }

  public getStores(){
    return this.http.get<Array<Store>>(this.storesPath);
  }

  public createStore(store: Store){
    return this.http.post(this.storesPath, store);
  }

  public updateStore(store: Store){
    return this.http.put(`${this.storesPath}/${store.id}`, store);
  }

  public deleteStore(id: number){
    return this.http.delete(`${this.storesPath}/${id}`);
  }

}
