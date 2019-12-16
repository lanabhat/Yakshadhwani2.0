import { Component, OnInit } from '@angular/core';
import { YakshadhwaniService } from '../services/yakshadhwani.service';
import { LoadingController } from '@ionic/angular';
import {PostsListPreviewComponent} from '../posts-list-preview/posts-list-preview.component';

@Component({
  selector: 'app-yakshadhwani',
  templateUrl: 'yakshadhwani.page.html',
  styleUrls: ['yakshadhwani.page.scss']
})
export class YakshadhwaniPage  {
  pageCategory = 'Yakshadhwani';
}
