import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LibraryPage } from './library.page';
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
        component: LibraryPage
      }
    ])
  ],
  declarations: [LibraryPage]
})
export class LibraryPageModule {}
