import { ToastrService } from 'ngx-toastr';
import { StoreService } from './../../../core/data-services/store.service';
import { Store } from './../../../shared/models/store.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'SupZap-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.scss']
})
export class StoreEditComponent implements OnInit {

  @Input() store: Store;
  @Output() storeEdited: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private storeService: StoreService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  public editStore(isValid: boolean){
    if(!isValid){
      return false;
    }

    this.storeService.updateStore(this.store)
      .subscribe(
        () => {
          this.toastr.success('Se actualizó la tienda satisfactoriamente.', 'Actualización de Tienda');
          this.storeEdited.emit(true);
        },
        () => {
          this.toastr.error('No fue posible actualizar la tienda.¡Intente nuevamente!', 'Error');
        }
      );
  }

  public setStoreEdited(value: boolean){
    this.storeEdited.emit(value);
  }

}
