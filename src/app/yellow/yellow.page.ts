import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.page.html',
  styleUrls: ['./yellow.page.scss'],
})
export class YellowPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/white');
  }

  next() {
    this.navController.navigateForward('/green');
  }
}
