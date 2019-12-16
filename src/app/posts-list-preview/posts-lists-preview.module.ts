import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PostsListPreviewComponent } from '../posts-list-preview/posts-list-preview.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [PostsListPreviewComponent],
  exports: [PostsListPreviewComponent]
})
export class PostsListPreviewModule {}
