import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage
{
  public lock: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ItemPage');
  }

  ionViewCanLeave()
  {
    if (this.lock)
    {
      return false;
    }
    else
    {
      return true;
    }

  }

}
