// here a class or blue print is created where we generally dont make use of it instead we feed the same to Angular

import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {Post} from '../post.model'
import { NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent implements OnInit{

  polo = "";
  marco="";
  enteredValue;
  enteredTitle;
  private mode = 'create';
  private postid :string;
  postob:Post;
  isLoading = false;
 // @Output() postCreated = new EventEmitter<Post>(); //@output is a decorator


  constructor (public postsservice: PostsService,public route:ActivatedRoute){}

  //Alerto(a : HTMLTextAreaElement){
  Alerto(postform:NgForm  ){

    if(postform.invalid){
      return;
    }




  //const posts:Post = {title:postform.value.title, description:postform.value.description}

   // this.polo = this.enteredValue;
   // this.marco = this.enteredTitle;

   //this.postCreated.emit(posts);

   if (this.mode === 'create'){
    this.isLoading = true;
    this.postsservice.addPosts(postform.value.title,postform.value.description);


   }

   else {
     this.isLoading = true;
     this.postsservice.updatePost(this.postid,postform.value.title,postform.value.description)

   }



   postform.resetForm();








  }

  ngOnInit(){

    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if (paramMap.has('pid')){
        this.mode = 'edit';
        this.postid= paramMap.get('pid');
        this.isLoading = true;
        this.postsservice.getPost(this.postid).subscribe((respo)=>{
          this.postob = {id: respo._id,title:respo.title,description:respo.description}
          this.isLoading = false;
        });



      }
      else{
        this.mode='create';
        this.postid= null;
      }
    }); // since params cn be changed keeping the same components and also data needs  to ne chnged and listen to changes

  }

}
