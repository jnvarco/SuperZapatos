import { EventsHubService } from './../../../core/services/events-hub.service';
import { AuthenticationService } from './../../../core/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'SupZap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private evetsHubService: EventsHubService,
    private router: Router
  ) { }  

  ngOnInit() {
  }

  public login(credentials: any, isValid: boolean){

    //this.toastr.info('Validando',null,{progressBar: true});

    if(!isValid){
      return false;
    }

    this.authenticationService.login(credentials)
    .then(() => {      
      this.toastr.success('Bienvenido (a)','Sesión Iniciada');
      this.evetsHubService.setLoggedIn(true);
      this.router.navigate(['/dashboard']);     
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
