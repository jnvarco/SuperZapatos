import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable()
export class LoggedGuard implements CanActivate, CanLoad {
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ){}

  public canLoad(){
    const isLoggedIn = this.authenticationService.getIsLoggedIn();

    if(!isLoggedIn){
      this.router.navigate(['/login']);
    }

    return isLoggedIn;
  }

  public canActivate(){
    const isLoggedIn = this.authenticationService.getIsLoggedIn();

    if(!isLoggedIn){
      this.router.navigate(['/login']);
    }

    return isLoggedIn;
  }
}
