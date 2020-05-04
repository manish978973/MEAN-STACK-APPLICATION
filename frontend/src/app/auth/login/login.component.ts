import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy {

  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authservice:AuthService){}

  ngOnInit(){

        this.authStatusSub = this.authservice.getAuthstatuslistener().subscribe(()=>{
          this.isLoading = false;
        })

  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }





  onLogin(form: NgForm){

    if (form.invalid){
      return;
    }
    this.isLoading = true;
    this.authservice.loginuser(form.value.email,form.value.password);

  }

}
