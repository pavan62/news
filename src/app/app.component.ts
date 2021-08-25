import { Component, NgZone, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private navController: NavController, private zone: NgZone) {}

  ngOnInit() {
    const { App } = Plugins;
    App.addListener('appUrlOpen', (data: { url: string }) =>
      this.zone.run(() => this.handleDeeplink(data.url)),
    );
  }

  private handleDeeplink(link: string) {
    const path = this.getPath(link);
    if (path) {
      this.navController.navigateRoot(['/', path]);
    }
  }

  private getPath(link: string): string {
    const url = new URL('https://ionic-hats.com/hats/very-nice-hat');
console.log(url)
    const paths = url.pathname.split('/');
    return (
      paths[paths.length - 1] ||
      (url.protocol === 'csdldemo:' ? url.hostname : '')
    );
  }
}
