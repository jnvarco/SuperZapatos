import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsHubService {

  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public setLoggedIn(login: boolean){
    this.isLoggedIn$.next(login);
  }
}
