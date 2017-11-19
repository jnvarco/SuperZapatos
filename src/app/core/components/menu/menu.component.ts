import { MenuService } from './../../data-services/menu.service';
import { Menu } from './../../../shared/models/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SupZap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuList: Array<Menu>;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  private getMenu(){
    this.menuService.getMenu()
      .subscribe((menu) => {
        this.menuList = <Array<Menu>>menu;
      });
  }

}
