import { ToastrService } from 'ngx-toastr';
import { EventsHubService } from './../../../core/services/events-hub.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'SupZap-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() collectionSize: number;
  @Input() maxSize: number;
  @Input() rotate: boolean;
  @Input() boundaryLinks: boolean;

  constructor(
    private eventsHubService: EventsHubService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.toastr.info(`size 2 ${this.collectionSize}`);
  }

  public pageChanged(page: number){
    this.toastr.info(`pagination ${page}`);
    this.eventsHubService.setPage(page);
  }

}