import { Menu } from './../../shared/models/menu.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  private menuPath = 'api/menu';

  constructor(
    private http: HttpClient
  ) { }

  public getMenu(){
    return this.http.get<Array<Menu>>(this.menuPath);
  }

}
