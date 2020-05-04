import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit,OnDestroy {

  constructor(public userservice: AuthService){}

  isLoading = false;
  private subi : Subscription;

  ngOnInit(){
     this.subi=this.userservice.getAuthstatuslistener().subscribe((x)=>{
       console.log("The subscription for duplicate is " + x)
       this.isLoading = false;
     })
  }

  ngOnDestroy(){
      this.subi.unsubscribe();
  }

  onSignup(form: NgForm){


    if (form.invalid){
      return;
    }
    this.isLoading = true;

    this.userservice.inputuser(form.value.email,form.value.password);

  }

}
