import { Component, OnInit } from '@angular/core';
import { YakshadhwaniService } from '../services/yakshadhwani.service';
import { LoadingController } from '@ionic/angular';
import { Dhwani } from '../Models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  posts: Dhwani[];
  pagesLoaded = 0;
  pageCategory = 'All';
  totalPagesCount;
  totalPostsCount;
  isLastPage: boolean;
  loadingText = 'ಕ್ಡಂ...ಡಡ್ದಂಗ್ರ..ಗ್ಡಂ...'
  constructor(private wpYaksha: YakshadhwaniService, private loadingCtrl: LoadingController) {
  }

  searchTerm: string;

  startSearch(event){
    this.pagesLoaded = 0;
    this.totalPagesCount = 0
    this.totalPostsCount = 0
    this.searchTerm = event.target.value.toLowerCase();
    if(!(this.searchTerm)){
      this.posts = null;
      this.totalPagesCount = null
    } else {
      this.pagesLoaded++;
      //console.log(this.searchTerm)
      this.loadPosts(this.searchTerm)
    }
     
  }

  async loadPosts(searchTerm:string) {
    const loading = await this.loadingCtrl.create({
      message : this.loadingText
    });
    loading.present();

    this.wpYaksha.search(searchTerm, this.pagesLoaded).subscribe(
       (dhwani) => {
          this.posts = dhwani.PostData;
          this.totalPostsCount = dhwani.TotalPosts;
          this.totalPagesCount = dhwani.TotalPages;
          loading.dismiss();
          this.checkIfLastPage();
      }
    );
  }

  checkIfLastPage(){
    this.isLastPage = this.pagesLoaded * 1 === this.totalPagesCount * 1;
  }

  async loadMore(event) {
    if (this.isLastPage) {
      event.target.complete();
      event.target.disabled = true;
    } else {
      //console.log("inside else")
      this.pagesLoaded++;
      this.wpYaksha.search(this.searchTerm, this.pagesLoaded).subscribe(dhwani => {
        this.posts = [...this.posts, ...dhwani.PostData];
        event.target.complete();
        this.checkIfLastPage()
        if (this.isLastPage) {
          event.target.disabled = true;
        }
      });
    }
  }
}
