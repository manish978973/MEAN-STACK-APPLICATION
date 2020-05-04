import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header-create',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})


export class  HeaderComponent implements OnInit, OnDestroy {

  constructor(private authservice:AuthService){}

  isAuthenticated = false;
  private authsubscription : Subscription;

  ngOnInit(){
     this.isAuthenticated = this.authservice.getAuthenticationstatus();
     this.authsubscription=this.authservice.getAuthstatuslistener().subscribe((result)=>{
       this.isAuthenticated =  result;
     })
  }

  ngOnDestroy(){

    this.authsubscription.unsubscribe();

  }

  Logout(){
    this.authservice.logout();
  }

}
