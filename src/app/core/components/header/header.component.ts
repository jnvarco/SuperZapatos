import { AuthenticationService } from './../../services/authentication.service';
import { EventsHubService } from './../../services/events-hub.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SupZap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn:boolean;

  constructor(
    private eventsHubService: EventsHubService,
    private authenticationService: AuthenticationService
  ) { 
    this.isLoggedInSubscription();
  }

  ngOnInit() {
  }

  private isLoggedInSubscription(){
    this.eventsHubService.isLoggedIn$
    .subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

}
