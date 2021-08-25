import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { WordpressService } from '../services/wordpress.service';

@Component({
  selector: 'app-black',
  templateUrl: './black.page.html',
  styleUrls: ['./black.page.scss'],
})
export class BlackPage implements OnInit {
  items: any[];
  attachs: any[];
  news: any;
  date;
  olddate;
  thumbs = new Map();
  thumbsArr: any[];
  page: number;
  datenew = '2021-08-19T12:40:41+00:00';
  message = 'hello';
  loaded: boolean;
  loading: boolean;
  array: any = [];
  constructor(
    public navCtrl: NavController,
    public wordpressService: WordpressService,
    private router: Router,
  ) {}

  getKeys(map) {
    return Array.from(map.keys());
  }

  loadPosts() {
    this.loading = true;
    if (this.wordpressService.wp_org) {
      this.wordpressService.getPosts(this.page).subscribe(data => {
        this.items = data;
        this.olddate = data.id;

        console.log(this.items, 'items');

        for (let res of data) {
          if (!this.thumbs.has(res.id)) {
            this.olddate = this.dates(
              res.yoast_head_json.article_published_time,
            );
            this.thumbs.set(res.id, {
              id: res.id,
              title1: res.title.rendered,
              title: res.title.rendered,
              content: res.content.rendered,
              date: this.olddate.toString().slice(0, -27),
              publisher: res.yoast_head_json.og_site_name,
              img: res.yoast_head_json.og_image,
            });
            console.log(this.thumbs, 't');
          }
        }
        this.loading = false;
        this.loaded = true;
      });
    } else {
      this.wordpressService.getPosts(this.page).subscribe(data => {
        this.items = data.posts;

        for (let res of data.posts) {
          if (!this.thumbs.has(res.ID)) {
            this.thumbs.set(res.ID, {
              id: res.ID,
              title: res.title,
              content: res.content.replace(
                '<li class="jetpack-recipe-print"><a href="#">Print</a></li>',
                '',
              ),
            });
          }
        }
        this.loading = false;
        this.loaded = true;
      });
    }
  }

  next() {
    this.page++;
    this.loadPosts();
  }

  ngOnInit() {
    this.loading = false;
    this.page = 1;
    this.loadPosts();
  }
  movedodisplay(data) {
    let NavigartionExtras = {
      specia: 'kamams',
    };
    this.router.navigate(['display'], data);

    this.wordpressService.publishSomeData(data);
    this.wordpressService.setdata(data);

    console.log(data);
    this.wordpressService.newdata = data;
    this.news = data.title;
    console.log(this.news);
    // this.storage.set()
    //this.router.navigate(['display']);
  }

  // pushToNextScreenWithParams(pageUrl: any, params: any) {
  //   this.nav.navigateForward(pageUrl, { state: params });
  // }

  dates(daten) {
    this.date = new Date(daten);
    this.date.toDateString();
    this.date.getFullYear() +
      '-' +
      (this.date.getMonth() + 1) +
      '-' +
      this.date.getDate();
    return this.date;
    // console.log(this.date);
    // this.array.push({
    //   date:this.date
    // });
    // console.log(this.array)
  }
}