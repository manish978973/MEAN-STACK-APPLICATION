import { Post } from './post.model'
import {Injectable} from '@angular/core'
import {Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http"
import {map} from 'rxjs/operators'

import {Router} from "@angular/router";

@Injectable({providedIn:"root"})
export class PostsService{

  private posts:Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor (private http:HttpClient, private router:Router){}



  getPosts(){

    this.http.get<{message: string, posts:any}>('http://localhost:3000/api/posts')

    .pipe(map((postData)=>{

      return postData.posts.map((postoop)=>{

        return ({
          title: postoop.title,
            description:postoop.description,
          id:postoop._id
        })

      })



    }))
    .subscribe((transformedpostData)=>{
              this.posts =  transformedpostData;
              this.postsUpdated.next([...this.posts])

    });

   // return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  getPost(id: string){
   // return {...this.posts.find(el => el.id===id)};
   return this.http.get<{_id:string,title:string,description:string}>('http://localhost:3000/api/posts/'+id);
  }

  addPosts(title:string,description:string){

   const poo:Post = {id:null, title:title,description:description};
   this.http.post<{message:string,id:string}>('http://localhost:3000/api/posts',poo).subscribe((response)=>{
           console.log(response.message);
           poo.id = response.id;
           this.posts.push(poo); //making it asynchronous
           this.postsUpdated.next([...this.posts])   //making it asynchronous
           this.router.navigate(["/"]);
   });

  }


  updatePost(id:string,title:string,descriptiono:string){



    const updatedpost:Post = {id:id,title:title,description:descriptiono};

    this.http.put(`http://localhost:3000/api/posts/${id}`,updatedpost).subscribe((res)=>{
      console.log(res);
      const upposted = [...this.posts];
      const indexuppost = upposted.findIndex(el => el.id===updatedpost.id);
      upposted[indexuppost]=updatedpost;
      this.posts = upposted;
      this.postsUpdated.next([...this.posts])
      this.router.navigate(["/"]);

    })


  }


  deletePost(delid:string){
    this.http.delete(`http://localhost:3000/api/posts/${delid}`).subscribe(()=>{
      console.log('Deleted');
      const updateposts = this.posts.filter(post=>post.id !== delid)
      this.posts=updateposts;
      this.postsUpdated.next([...this.posts]);

    })
  }


}

//GGSnBLGZicfSXwVX
