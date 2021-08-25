import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.page.html',
  styleUrls: ['./dark.page.scss'],
})
export class DarkPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/black');
  }

  next() {
    this.navController.navigateForward('/puer');
  }
}
