import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-green',
  templateUrl: './green.page.html',
  styleUrls: ['./green.page.scss'],
})
export class GreenPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/yellow');
  }

  next() {
    this.navController.navigateForward('/oolong');
  }
}
