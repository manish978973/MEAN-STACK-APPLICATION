import {Component,Input,OnInit, OnDestroy} from '@angular/core';
import {PostsService} from '../posts/posts.service';
import {Subscription} from 'rxjs';

import {Post} from '../posts/post.model'
import { MatExpansionPanel } from '@angular/material/expansion';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})

export class PostListComponent implements OnInit,OnDestroy {

 // posts = [{name:'Manish',place:'Kerala',food:'biriyani'},{name:'Abhi',place:'Kerala',food:'Dosa'},{name:'Pratap',place:'TamilNadu',food:'Idli'}];
 // @Input() posts:Post[] =[];
 posts:Post[] =[];
 isLoading = false;
 private postsSUb : Subscription;


  constructor (public postservice:PostsService){}

  ngOnInit(){
    this.isLoading = true;
    this.postservice.getPosts();
    this.postsSUb = this.postservice.getPostUpdateListener().subscribe((posts:Post[])=>{
      this.posts=posts;

    });
  }

  ngOnDestroy(){
    this.postsSUb.unsubscribe();
  }


  onDelete(id:string){

    this.postservice.deletePost(id);

  }



}
