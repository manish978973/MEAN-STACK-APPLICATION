import { NgModule } from '@angular/core';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import { PostListComponent  } from '../post-lists/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[PostCreateComponent,PostListComponent],
  imports:[ReactiveFormsModule,AngularMaterialModule,CommonModule,RouterModule]
})
export class PostModule{

}
