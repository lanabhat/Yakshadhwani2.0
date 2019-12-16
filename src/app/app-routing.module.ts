import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostsListPreviewModule } from './posts-list-preview/posts-lists-preview.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryPageModule)
  },
  {
    path: 'yakshadhwani',
    loadChildren: () => import('./yakshadhwani/yakshadhwani.module').then(m => m.YakshadhwaniPageModule)
  },
  {
    path: 'dhwanimudrana',
    loadChildren: () => import('./dhwanimudrana/dhwanimudrana.module').then(m => m.DhwanimudranaPageModule)
  },
  {
    path: 'recordingMela',
    loadChildren: () => import('./recordingMela/recordingMela.module').then(m => m.RecordingMelaPageModule)
  },
  {
    path: 'itemdetails/:id',
    loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
