import { ToastrService } from 'ngx-toastr';
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
  public store: Store;
  public showCreate: boolean;
  public showEdit: boolean;
  public page: number;
  public collectionSize: number;
  public maxSize: number;
  public pageSize: number;
  public rotate: boolean;
  public boundaryLinks: boolean;

  constructor(
    private storeService: StoreService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.maxSize = 5;
    this.rotate = true;
    this.boundaryLinks = true;
    this.pageSize = 5;
    this.page = 1;
    this.showCreate = false;
    this.showCreate = false;
    this.showEdit = false;
    this.getStores();
  }

  public setShowEdit(storeSel: any){
    this.store = <Store>storeSel;
    this.showEdit = true;
  
  }

  private getStores(){
    this.storeService.getStores()
      .subscribe((stores) => {
        this.storesList = <Array<Store>>stores;
        this.collectionSize = this.storesList.length;
      });
  }

  public storeCreated(){
    this.showCreate = false;
    this.getStores();
  }

  public storeEdited(){
    this.showEdit = false;
    this.getStores();
  }

}
