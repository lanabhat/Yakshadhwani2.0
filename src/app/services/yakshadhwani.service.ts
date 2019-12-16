import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from 'ionic-cache';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import {Categories} from './objects'
import { Dhwani } from '../Models/models';

@Injectable({
  providedIn: 'root'
})


export class YakshadhwaniService {
    CACHE_SIZE = 2;
    cache$: Observable<any[]>;
    //items: any[];
    mainUrl: String = "https://public-api.wordpress.com/wp/v2/sites/yakshadhwani.wordpress.com/";
    pages: any;
    totalPosts: any;
    items:Dhwani[];
    private categories = {
        Dhwanimudrana: 691344095,
        RecordingMela: 691344092,
        Uncategorized: 1,
        Yakshadhwani: [690975521, 1],
        Others: 559,
        ContactUs: 4018606,
        All: []
    };

    constructor(private http: HttpClient, private cache: CacheService) {
        this.categories.All = [this.categories.Dhwanimudrana, this.categories.RecordingMela, this.categories.Uncategorized, this.categories.Yakshadhwani, this.categories.Others]
    }

    public getPosts(page: number = 1, category = 'All'): Observable<Dhwani> {
        const categoryToGet = '&categories=' + this.categories[category]
        //console.log(categoryToGet)
        const options = {
            observe : 'response' as 'body',
            params:{
                per_page: '5',
                page: '' + page
            }
        }
        //
        let url = this.mainUrl + 'posts/?_embed' + categoryToGet
        //let searchUrl = 'https://public-api.wordpress.com/wp/v2/sites/yakshadhwani.wordpress.com/search?search=balipa'
        //let url = postsAllUrl
        let itemstoreturn = null
        itemstoreturn = this.http.get(url, options).pipe(
            map(resp => {
                let totalPages = resp['headers'].get('x-wp-totalpages');
                let totalPosts = resp['headers'].get('x-wp-total');

                let data = resp['body'];
                for (let post of data) {
                    const media = post['jetpack_featured_media_url']
                    if(media)
                    {
                        post['media_url'] = media //media[0]['media_details'].sizes['medium'].source_url;
                    }
                }
                return {TotalPosts: totalPosts, TotalPages:totalPages, PostData:data}
            })
          );
          return this.cache.loadFromObservable(url + '' + page, itemstoreturn);
    }
    
    public getCategories(): any {
            return this.http.get(this.mainUrl + "categories?order_by=count&order=desc");
    }

    public search(searchStr: string, page: number): Observable<Dhwani> {
        const options = {
            observe : 'response' as 'body',
            params:{
                per_page: '5',
                page: '' + page
            }
        }

        let url = this.mainUrl + "posts/?status=publish&search=" + searchStr // + "&page=" + page;
        let itemstoreturn = null;
        itemstoreturn = this.http.get(url, options).pipe(
            map(resp => {
                let totalPages = resp['headers'].get('x-wp-totalpages');
                let totalPosts = resp['headers'].get('x-wp-total');
                let data = resp['body'];
         
                for (let post of data) {
                    const media = post['jetpack_featured_media_url']
                    if(media)
                    {
                        post['media_url'] = media //media[0]['media_details'].sizes['medium'].source_url;
                    }

                  //post.media_url = post['embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
                }
                //itemstoreturn = data;

                return {TotalPosts: totalPosts, TotalPages:totalPages, PostData:data}
            })
          );

          return this.cache.loadFromObservable(url + '' + page, itemstoreturn);
    }

    public getPostContent(id: string): any {
        let url = `${this.mainUrl}posts/${id}?_embed`
        let itemstoreturn = this.http.get(url).pipe(
            map(post => {
            const media = post['jetpack_featured_media_url']
            if (media){
                post['media_url'] = media 
            }
            return post;
            }));
        return this.cache.loadFromObservable(url, itemstoreturn);
    }
}