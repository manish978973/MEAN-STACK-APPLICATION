import {Component,Input,OnInit, OnDestroy} from '@angular/core';
import {PostsService} from '../posts/posts.service';
import {Subscription} from 'rxjs';

import {Post} from '../posts/post.model'
import { MatExpansionPanel } from '@angular/material/expansion';
import { PageEvent } from '@angular/material/paginator';

import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})

export class PostListComponent implements OnInit,OnDestroy {

 // posts = [{name:'Manish',place:'Kerala',food:'biriyani'},{name:'Abhi',place:'Kerala',food:'Dosa'},{name:'Pratap',place:'TamilNadu',food:'Idli'}];
 // @Input() posts:Post[] =[];
 posts:Post[] =[];
 totalposts = 0;
 pagesize = 2;
 pagesizeoptions = [1,3,5,10];
 isLoading = false;
 currentpage = 1;
 userid:string;
 isAuthenticated=false;
 private authenticationSubscription: Subscription;
 private postsSUb : Subscription;


  constructor (public postservice:PostsService,public authservice:AuthService){}

  ngOnInit(){
    this.isLoading = true;
    this.postservice.getPosts(this.pagesize,this.currentpage);
    this.userid = this.authservice.getUserid();
    this.postsSUb = this.postservice.getPostUpdateListener().subscribe((poo:{posts: Post[], postcount:number})=>{
      this.isLoading = false;
      this.posts=poo.posts;
      this.totalposts = poo.postcount;

    });

    this.isAuthenticated = this.authservice.getAuthenticationstatus();
    this.authenticationSubscription = this.authservice.getAuthstatuslistener().subscribe(result=>{
      this.isAuthenticated = result;
      this.userid = this.authservice.getUserid();
    })
  }

  ngOnDestroy(){
    this.postsSUb.unsubscribe();
    this.authenticationSubscription.unsubscribe();
  }

  onpagechanged(pagedata:PageEvent){
    this.isLoading=true;
    this.currentpage = pagedata.pageIndex + 1;
    this.pagesize = pagedata.pageSize;
    this.postservice.getPosts(this.pagesize,this.currentpage);


  }


  onDelete(id:string){
    this.isLoading=true;
    this.postservice.deletePost(id).subscribe(()=>{
      this.postservice.getPosts(this.pagesize,this.currentpage);


    },()=>{
      this.isLoading=false;
    });

  }



}
