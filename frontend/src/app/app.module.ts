import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"

import {MatProgressSpinnerHarness} from '@angular/material/progress-spinner/testing';
//import {AuthModule} from './auth/auth.module';

import {AuthInterceptor} from './auth/login/auth-interceptor';
import {ErrorComponent} from './error/error.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {PostModule} from './posts/posts.module';

import { AngularMaterialModule} from './angular-material.module';

// import {PostsService} from './posts/posts.service'; ( the other option to go and mentio a word injectable in postservice class in postservice)
import {ErrorInterceptor} from "./error-interceptor";
@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,


    ErrorComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PostModule,
   // AuthModule,
    AngularMaterialModule




  ],
  //providers: [PostsService],
  providers: [{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi: true}
  ],

  bootstrap: [AppComponent],     //tells angular to load index.html idenitifying the right app component,
  entryComponents: [ErrorComponent]
})
export class AppModule { }

//this is linked with main.ts
