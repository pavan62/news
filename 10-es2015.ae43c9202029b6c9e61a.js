(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{cnuz:function(t,e,s){"use strict";s.r(e),s.d(e,"BlackPageModule",function(){return g});var i=s("ofXK"),o=s("3Pt+"),n=s("tyNb"),r=s("TEn/"),a=s("MWij"),c=s("fXoL");function d(t,e){1&t&&c.Kb(0,"ion-progress-bar",4)}function h(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-card",5),c.Ub("click",function(){c.cc(t);const s=e.$implicit,i=c.Wb();return i.movedodisplay(i.thumbs.get(s))}),c.Mb(1,"ion-card-content",6),c.Kb(2,"img",7),c.Mb(3,"ion-card-header",8),c.Mb(4,"ion-card-title",8),c.gc(5),c.Lb(),c.gc(6),c.Lb(),c.Lb(),c.Lb()}if(2&t){const t=e.$implicit,s=c.Wb();c.zb(2),c.ac("src",s.thumbs.get(t).img[0].url,c.dc),c.zb(3),c.hc(" ",s.thumbs.get(t).title," "),c.zb(1),c.hc(" ",s.thumbs.get(t).date," ")}}function l(t,e){if(1&t){const t=c.Nb();c.Mb(0,"ion-button",9),c.Ub("click",function(){return c.cc(t),c.Wb().next()}),c.gc(1,"More posts"),c.Lb()}}const b=[{path:"",component:(()=>{class t{constructor(t,e,s){this.navCtrl=t,this.wordpressService=e,this.router=s,this.thumbs=new Map,this.datenew="2021-08-19T12:40:41+00:00",this.message="hello",this.array=[]}getKeys(t){return Array.from(t.keys())}loadPosts(){this.loading=!0,this.wordpressService.wp_org?this.wordpressService.getPosts(this.page).subscribe(t=>{this.items=t,this.olddate=t.id,console.log(this.items,"items");for(let e of t)this.thumbs.has(e.id)||(this.olddate=this.dates(e.yoast_head_json.article_published_time),this.thumbs.set(e.id,{id:e.id,title1:e.title.rendered,title:e.title.rendered,content:e.content.rendered,date:this.olddate.toString().slice(0,-27),publisher:e.yoast_head_json.og_site_name,img:e.yoast_head_json.og_image}),console.log(this.thumbs,"t"));this.loading=!1,this.loaded=!0}):this.wordpressService.getPosts(this.page).subscribe(t=>{this.items=t.posts;for(let e of t.posts)this.thumbs.has(e.ID)||this.thumbs.set(e.ID,{id:e.ID,title:e.title,content:e.content.replace('<li class="jetpack-recipe-print"><a href="#">Print</a></li>',"")});this.loading=!1,this.loaded=!0})}next(){this.page++,this.loadPosts()}ngOnInit(){this.loading=!1,this.page=1,this.loadPosts()}movedodisplay(t){this.router.navigate(["display"],t),this.wordpressService.publishSomeData(t),this.wordpressService.setdata(t),console.log(t),this.wordpressService.newdata=t,this.news=t.title,console.log(this.news)}dates(t){return this.date=new Date(t),this.date.toDateString(),this.date.getFullYear(),this.date.getMonth(),this.date.getDate(),this.date}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(r.v),c.Jb(a.a),c.Jb(n.f))},t.\u0275cmp=c.Db({type:t,selectors:[["app-black"]],decls:5,vars:3,consts:[[2,"padding-bottom","0%"],["type","indeterminate",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["color","tertiary",3,"click",4,"ngIf"],["type","indeterminate"],[3,"click"],[2,"text-align","center","padding-top","10px"],["height","200","width","300",3,"src"],[2,"text-align","left"],["color","tertiary",3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"ion-content",0),c.Kb(1,"br"),c.fc(2,d,1,0,"ion-progress-bar",1),c.fc(3,h,7,3,"ion-card",2),c.fc(4,l,2,0,"ion-button",3),c.Lb()),2&t&&(c.zb(2),c.Zb("ngIf",!0===e.loading),c.zb(1),c.Zb("ngForOf",e.getKeys(e.thumbs)),c.zb(1),c.Zb("ngIf",!0===e.loaded))},directives:[r.g,i.i,i.h,r.n,r.c,r.d,r.e,r.f,r.a],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({imports:[[i.b,o.a,r.t,n.h.forChild(b)]]}),t})()}}]);