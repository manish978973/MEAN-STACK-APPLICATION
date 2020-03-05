import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-lists/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';


const routes: Routes = [{path:'',component:PostListComponent},
{path:'create',component: PostCreateComponent},
{path:'edit/:pid',component: PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
