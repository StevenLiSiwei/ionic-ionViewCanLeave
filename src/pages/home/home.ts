import { ItemPage } from './../item/item';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  GoToItem()
  {
    this.navCtrl.push(ItemPage);
  }

}
