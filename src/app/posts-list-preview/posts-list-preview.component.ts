import { Component, OnInit, Input } from '@angular/core';
import { YakshadhwaniService } from '../services/yakshadhwani.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-posts-list-preview',
  templateUrl: './posts-list-preview.component.html',
  styleUrls: ['./posts-list-preview.component.scss'],
})

export class PostsListPreviewComponent implements OnInit {
  @Input() pageCategory: string;
  posts = []
  page = 1;
  totalPages;
  totalPostsCount = null
  loadingText = 'ಕ್ಡಂ...ಡಡ್ದಂಗ್ರ..ಗ್ಡಂ...'
  //pageCategory: string = 'RecordingMela';
  isLastPage: boolean;
  constructor(private wpYaksha: YakshadhwaniService, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.loadPosts();
  }

  async loadPosts() {
    const loading = await this.loadingCtrl.create({
      message : this.loadingText
    });
    loading.present();
    this.wpYaksha.getPosts(this.page, this.pageCategory).subscribe(
       (dhwani) => {
        this.totalPostsCount = dhwani.TotalPosts;
        this.posts = dhwani.PostData;
        this.totalPages = dhwani.TotalPages;

        loading.dismiss();
        this.checkIfLastPage();
      });
  }

  checkIfLastPage(){
    this.isLastPage = this.page * 1 === this.totalPages * 1;
  }

  async loadMore(event) {
    if (this.isLastPage) {
      event.target.complete();
      event.target.disabled = true;
    } else {
      this.page++;
      this.wpYaksha.getPosts(this.page,this.pageCategory).subscribe(dhwani => {
        this.posts = [...this.posts, ...dhwani.PostData];
        event.target.complete();
        this.checkIfLastPage()
        if(this.isLastPage){
          event.target.disabled = true;
        }
      });
    }
  }

}
