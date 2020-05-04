import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-lists/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {LoginComponent} from './auth/login/login.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthGuard} from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [{path:'',component:PostListComponent},
{path:'create',component: PostCreateComponent,canActivate:[AuthGuard]},
{path:'edit/:pid',component: PostCreateComponent,canActivate:[AuthGuard]},
{path:'auth',loadChildren:"./auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
