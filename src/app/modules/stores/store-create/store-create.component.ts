import { Store } from './../../../shared/models/store.model';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from './../../../core/data-services/store.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'SupZap-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.scss']
})
export class StoreCreateComponent implements OnInit {

  @Output() storeCreated: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private storeService: StoreService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  private createStore(store:any, isValid:boolean){
    if(!isValid){
      return false;
    }

    const newStore: Store = new Store(store);

    this.storeService.createStore(newStore)
      .subscribe(
        () => {
          this.toastr.success('Se creó la tienda exitosamente.','Creación de tienda');
          this.storeCreated.emit(true);
        },
        () => {
          this.toastr.error('No fue posible crear la tienda.¡Intente nuevamente!','Error');          
        }
      );
  }

  public setStoreCreated(value: boolean){
    this.storeCreated.emit(value);
  }

}
