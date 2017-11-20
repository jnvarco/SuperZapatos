import { StoreService } from './../../../core/data-services/store.service';
import { Store } from './../../../shared/models/store.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SupZap-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  public storesList: Array<Store>;
  public showCreate: boolean;

  constructor(
    private storeService: StoreService
  ) { 
    this.showCreate = false;
    this.getStores();
  }

  ngOnInit() {
  }

  private getStores(){
    this.storeService.getStores()
      .subscribe((stores) => {
        this.storesList = <Array<Store>>stores;
      });
  }

  public storeCreated(){
    this.showCreate = false;
    this.getStores();
  }

}
