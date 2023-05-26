import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AuthService,
    
    ) { }

  ngOnInit(){
    if(!this.service.getToken()){
      this.router.navigate(['./pesquisa']);
    }
  }
  
}
