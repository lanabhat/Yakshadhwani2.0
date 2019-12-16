import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { YakshadhwaniPage } from './yakshadhwani.page';
import { PostsListPreviewComponent } from '../posts-list-preview/posts-list-preview.component';
import { PostsListPreviewModule } from '../posts-list-preview/posts-lists-preview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsListPreviewModule,
    RouterModule.forChild([
      {
        path: '',
        component: YakshadhwaniPage
      }
    ])
  ],
  declarations: [YakshadhwaniPage]
})
export class YakshadhwaniPageModule {}
