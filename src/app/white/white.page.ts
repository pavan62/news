import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-white',
  templateUrl: 'white.page.html',
  styleUrls: ['white.page.scss'],
})
export class WhitePage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/herbal');
  }

  next() {
    this.navController.navigateForward('/yellow');
  }
}
