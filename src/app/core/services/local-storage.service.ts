import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public set(name: string, elem: any){
    localStorage.setItem(name, JSON.stringify(elem));
  }

  public get(name: string){
    return JSON.parse(localStorage.getItem(name));
  }

  public delete(name: string){
    localStorage.removeItem(name);
  }

  public deleteAll(){
    localStorage.clear();
  }

}
