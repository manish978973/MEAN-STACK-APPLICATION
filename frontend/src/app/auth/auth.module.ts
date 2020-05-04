import { NgModule } from '@angular/core';
import {LoginComponent} from '../auth/login/login.component';
import {SignupComponent} from '../auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
 declarations:[LoginComponent,SignupComponent],
 imports:[ReactiveFormsModule,AngularMaterialModule,CommonModule,RouterModule,FormsModule,AuthRoutingModule]
})

export class AuthModule{

}
