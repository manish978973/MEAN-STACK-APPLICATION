import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from "@angular/common/http"
import {MatProgressSpinnerHarness} from '@angular/material/progress-spinner/testing';



import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent  } from './post-lists/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {PostsService} from './posts/posts.service'; ( the other option to go and mentio a word injectable in postservice class in postservice)

@NgModule({
  declarations: [
    PostCreateComponent,
    AppComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,


  ],
  //providers: [PostsService],
  providers: [],
  bootstrap: [AppComponent]     //tells angular to load index.html idenitifying the right app component
})
export class AppModule { }

//this is linked with main.ts
