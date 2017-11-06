import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventsHubService {

  public isLoggedIn$: Subject<boolean> = new Subject();

  constructor() { }

  public setLoggedIn(login: boolean){
    this.isLoggedIn$.next(login);
  }
}
