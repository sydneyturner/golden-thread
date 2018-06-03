import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { CharityListPage } from '../charity-list/charity-list';
import { PortfolioPage  } from "../portfolio/portfolio";
import { HomePage } from '../home/home';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {

  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");
  }

  // logout
  navigateToHome() {
    this.navCtrl.popToRoot();
    this.app.getRootNav().setRoot(HomePage);
  }

  navigateToCharity() {
    this.navCtrl.push(CharityListPage);
  }

  navigateToPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }

}
