import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsHubService {

  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public pageChanged$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  public setLoggedIn(login: boolean){
    this.isLoggedIn$.next(login);
  }

  public setPage(page: number){
    this.pageChanged$.next(page);
  }
}
