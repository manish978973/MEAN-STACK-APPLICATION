import { Post } from './post.model'
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http"
import {map} from 'rxjs/operators'

import {Router} from "@angular/router";
import {environment} from '../../environments/environment';
//"http://localhost:3000/api/"

const backendurl = environment.mainurl + "posts"
@Injectable({providedIn:"root"})
export class PostsService{

  private posts:Post[] = [];
  private postsUpdated = new Subject<{posts: Post[], postcount:number}>();

  constructor (private http:HttpClient, private router:Router){}



  getPosts(pagesize:number,page:number){

    const queryparams = `?pagesize=${pagesize}&page=${page}`;

    this.http.get<{message: string, posts:any,maxposts:number}>(backendurl + queryparams)

    .pipe(map((postData)=>{

      return { posts: postData.posts.map((postoop)=>{


        return ({
          title: postoop.title,
            description:postoop.description,
          id:postoop._id,
          image:postoop.image,
          creator:postoop.creator
        })

      }) ,

      maxposts:postData.maxposts }



    }))
    .subscribe((transformedpostData)=>{
      console.log(transformedpostData);
              this.posts =  transformedpostData.posts;
              this.postsUpdated.next({posts: [...this.posts],postcount:transformedpostData.maxposts});

    });

   // return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPost(id: string){
   // return {...this.posts.find(el => el.id===id)};
   return this.http.get<{_id:string,title:string,description:string,image:string,creator:string}>(backendurl+'/'+id);
  }

  addPosts(title:string,description:string,image:File){

    const postData = new FormData();
    postData.append("title",title);
    postData.append("description",description);
    postData.append("image",image,title);

  // const poo:Post = {id:null, title:title,description:description};
   this.http.post<{message:string,post:Post}>(backendurl,postData).subscribe((response)=>{

   /*
           console.log(response.message);
          const poo:Post = {id:response.post.id, title:response.post.title,description:response.post.description,image:response.post.image};
         // const poo:Post = response.post;
           this.posts.push(poo); //making it asynchronous
           this.postsUpdated.next([...this.posts])   //making it asynchronous
           */
         // console.log(response)
           this.router.navigate(["/"]);
   });

  }


  updatePost(id:string,title:string,descriptiono:string,image: File | string){

    let updatedpost: Post | FormData;

    if (typeof(image) === 'object'){
       updatedpost = new FormData();
       updatedpost.append("id",id);
       updatedpost.append("title",title);
       updatedpost.append("description",descriptiono);
       updatedpost.append("image",image,title);

    }

    else{
        updatedpost = {id:id,title:title,description:descriptiono,image:image,creator:null};

    }





    this.http.put(`${backendurl}/${id}`,updatedpost).subscribe((res)=>{

    /*
      console.log(res);
      const upposted = [...this.posts];
      const indexuppost = upposted.findIndex(el => el.id===id);
      const temp:Post = {id:id,title:title,description:descriptiono,image:""};
      upposted[indexuppost]=temp;
      this.posts = upposted;
      this.postsUpdated.next([...this.posts])
      */

      this.router.navigate(["/"]);

    },(err)=>{
      console.log("There is some problem with update");
    })


  }


  deletePost(delid:string){
    return this.http.delete(`${backendurl}/${delid}`)

    /* .subscribe(()=>{
      console.log('Deleted');
      const updateposts = this.posts.filter(post=>post.id !== delid)
      this.posts=updateposts;
      this.postsUpdated.next([...this.posts]);

    }) */
  }


}

//GGSnBLGZicfSXwVX
