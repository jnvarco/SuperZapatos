import { INVALID_PASSWORD } from './../../shared/constants';
import { SharedModule } from './../../shared/shared.module';
import { Router } from '@angular/router';
import { LoggerService } from './../data-services/logger.service';
import { LocalStorageService } from './local-storage.service';
import { EventsHubService } from './events-hub.service';
import { Token } from './../../shared/models/token.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private token: Token;
  private isLoggedIn: boolean;

  constructor(
    private eventsHubService: EventsHubService,
    private localStorageService: LocalStorageService,
    private loggerService: LoggerService,
    private router: Router
  ) { 
    this.isLoggedIn = false;

    this.eventsHubService.isLoggedIn$
    .subscribe(
      (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      }
    );    
  }

  public login(credentials: any): Promise<any>{
    return new Promise((resolve,reject) => {
      this.loggerService.login(credentials)
      .subscribe(
        (response) => {
          this.token = <Token>response;

          //Se valida la contraseña
          if(`${credentials.contrasenna}`.localeCompare(this.token.password) == 0) {
            this.localStorageService.set('token',this.token);

            resolve(this.token);
          }
          else{
            resolve(INVALID_PASSWORD);
          }

        },
        (error) => {
          reject(error);
        }
      )
    }
    );
  }

  public getIsLoggedIn():boolean{
    return this.isLoggedIn;
  }

  public logout(){
    this.eventsHubService.setLoggedIn(false);
    this.localStorageService.deleteAll();
    this.router.navigate(['/login']);
  }

}
