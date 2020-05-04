import { Component, OnInit } from '@angular/core';
//import {Post} from './posts/post.model'
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authservice: AuthService){}

  title = 'mean-course';
 // storedposts:Post[] = [];

 // onPostAdded(post){
  //  this.storedposts.push(post);
 ngOnInit(){
   this.authservice.autoAuthuser();
 }




  //}

}
