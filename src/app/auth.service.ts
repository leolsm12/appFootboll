import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.api-futebol.com.br/v1/';

  private token = localStorage.getItem('token');

  constructor(
    private httpClient: HttpClient,
  ) { }
  getToken(){
    if(this.token != undefined){
      return true;
    }else{
      return false;
    }
  }
  autenticar(token: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'content type': 'application/json',
        Authorization: 'Bearer' + token,
      })
    };
    return this.httpClient.get(this.baseUrl + 'me' , { headers: httpOptions.headers});
  }
}
