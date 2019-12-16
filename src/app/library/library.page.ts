import { Component, OnInit } from '@angular/core';
import { YakshadhwaniService } from '../services/yakshadhwani.service';
import { map } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss']
})
export class LibraryPage  {
  pageCategory = 'All';
}
