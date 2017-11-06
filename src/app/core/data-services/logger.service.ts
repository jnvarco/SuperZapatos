import { Token } from './../../shared/models/token.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoggerService {

  constructor(
    private http: HttpClient
  ) { }

  public login(credentials: any){
    return this.http.get<Token>(`api/token/${credentials.usuario}`);
  }
}
