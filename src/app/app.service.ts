import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = "https://v3.football.api-sports.io/status";

  constructor(private http: HttpClient) { }

  geturl(){
    return this.http.get(this.url);
  }
}
