import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-herbal',
  templateUrl: './herbal.page.html',
  styleUrls: ['./herbal.page.scss'],
})
export class HerbalPage {
  constructor(private navController: NavController) {}

  previous() {
    this.navController.navigateBack('/puer');
  }

  next() {
    this.navController.navigateForward('/white');
  }
}
