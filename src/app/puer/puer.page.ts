import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-puer',
  templateUrl: './puer.page.html',
  styleUrls: ['./puer.page.scss'],
})
export class PuerPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/dark');
  }

  next() {
    this.navController.navigateForward('/herbal');
  }
}
