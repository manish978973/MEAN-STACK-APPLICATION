// here a class or blue print is created where we generally dont make use of it instead we feed the same to Angular

import {Component, EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';
import {Post} from '../post.model'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PostsService} from '../posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mimeType } from './mime-type.validator';
import {AuthService} from '../../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent implements OnInit,OnDestroy{

  polo = "";
  marco="";
  enteredValue;
  enteredTitle;
  private mode = 'create';
  private postid :string;
  postob:Post;
  isLoading = false;
  form: FormGroup;
  ImagePreview: any;
  private authsubscription:Subscription;
 // @Output() postCreated = new EventEmitter<Post>(); //@output is a decorator


  constructor (public postsservice: PostsService,public route:ActivatedRoute, private authservice:AuthService){}

  //Alerto(a : HTMLTextAreaElement){
  //Alerto(postform:NgForm  ){
    Alerto(){

    if(this.form.invalid){
      return;
    }
    this.isLoading = true;



  //const posts:Post = {title:postform.value.title, description:postform.value.description}

   // this.polo = this.enteredValue;
   // this.marco = this.enteredTitle;

   //this.postCreated.emit(posts);

   if (this.mode === 'create'){

    //this.postsservice.addPosts(postform.value.title,postform.value.description);
    this.postsservice.addPosts(this.form.value.title,this.form.value.description,this.form.value.image);

   }

   else {

     this.postsservice.updatePost(this.postid,this.form.value.title,this.form.value.description,this.form.value.image)

   }



   //postform.resetForm();

   this.form.reset();






  }




  ngOnInit(){

    this.authsubscription=this.authservice.getAuthstatuslistener().subscribe((res)=>{
      this.isLoading = false;
    })

    this.form = new FormGroup({title: new FormControl(null,{validators: [Validators.required,Validators.minLength(3)]}),description:new FormControl(null,{validators: [Validators.required]}),image:new FormControl(null,{validators: [Validators.required],asyncValidators: [mimeType]})});

    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if (paramMap.has('pid')){
        this.mode = 'edit';
        this.postid= paramMap.get('pid');
        this.isLoading = true;
        this.postsservice.getPost(this.postid).subscribe((respo)=>{

          this.isLoading = false;
          this.postob = {id: respo._id,title:respo.title,description:respo.description,image:respo.image,creator:respo.creator};
          this.form.setValue({title:this.postob.title,description:this.postob.description,image:this.postob.image});
        });



      }
      else{
        this.mode='create';
        this.postid= null;
      }
    }); // since params cn be changed keeping the same components and also data needs  to ne chnged and listen to changes

  }

  ngOnDestroy(){
     this.authsubscription.unsubscribe();
  }


  onImagePicked(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
   // console.log(file);
  //  console.log(this.form);
  const reader = new FileReader();
  reader.onload = ()=>{
    this.ImagePreview= reader.result as string;
  }

  reader.readAsDataURL(file);
}




}



// work on error handling spinners ..niot to put spinners if there is an error with post creation..just import subscription as done in post list..in the last vide of error topic
