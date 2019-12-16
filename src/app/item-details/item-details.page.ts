import { Component, OnInit } from '@angular/core';

import { YakshadhwaniService } from '../services/yakshadhwani.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})


export class ItemDetailsPage implements OnInit {
  post: any;
 
  constructor(private route: ActivatedRoute, private wp: YakshadhwaniService) { }
 
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
    });
  }
 
  openOriginal() {
    // Add InAppBrowser for app if want
    window.open(this.post.link, '_blank');
  }
}