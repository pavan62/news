import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class WordpressService {
  items: any[];
  public invokeEvent: Subject<any> = new Subject();
  news: any;
  news1: any = [];
  newdata: any = [];
  categories: any[];
  public wp_org: boolean = true;
  mainUrl: String =
    'https://public-api.wordpress.com/rest/v1.1/sites/unegatuaj.com/';

  constructor(private http: HttpClient) {
    if (this.wp_org == true) {
      this.mainUrl = 'https://frankfurtvalley.app/wp-json/wp/v2/';
    }
  }
  private fooSubject = new Subject<any>();

  publishSomeData(data: any) {
    this.fooSubject.next(data);
    console.log(data);
  }

  getObservable(): Subject<any> {
    return this.fooSubject;
  }
  public getPosts(page: number): any {
    return this.http.get(this.mainUrl + 'posts/?status=publish&page=' + page);
  }
  public getPosts1(page: number): any {
    return this.http.get(
      this.mainUrl + 'tribe_venue/?status=publish&page=' + page,
    );
  }

  public getPostsByCat(categoryName: string, page: number): any {
    if (this.wp_org) {
      return this.http.get(
        this.mainUrl +
          'posts/?status=publish&categories=' +
          categoryName +
          '&page=' +
          page,
      );
    }
    return this.http.get(
      this.mainUrl +
        'posts/?status=publish&category=' +
        categoryName +
        '&page=' +
        page,
    );
  }

  public getCategories(): any {
    if (this.wp_org) {
      return this.http.get(
        this.mainUrl + 'categories?order_by=count&order=desc',
      );
    }
    return this.http.get(this.mainUrl + 'categories?order_by=count&order=DESC');
  }

  public search(searchStr: string, page: number): any {
    return this.http.get(
      this.mainUrl +
        'posts/?status=publish&search=' +
        searchStr +
        '&page=' +
        page,
    );
  }

  public getPost(recipeId: string): any {
    return this.http.get(this.mainUrl + 'posts/' + recipeId);
  }

  public setdata(data) {
    this.news = data;
    console.log(this.news);
  }
  public getdata() {
    return this.news;
  }
}
