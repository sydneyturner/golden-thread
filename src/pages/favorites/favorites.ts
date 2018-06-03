import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { User } from '../../models/user';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public charity: Charity;
  public user: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.charity = this.navParams.get("charity");

    events.subscribe('added to favorites', (charity) => {
      console.log(charity, 'has been added');
    });
    
    this.user.favorites.push(this.charity);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
