import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharityListPage } from '../charity-list/charity-list';
import { PortfolioPage } from '../portfolio/portfolio';
import { FavoritesPage } from '../favorites/favorites';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  profileRoot = ProfilePage
  charitiesRoot = CharityListPage
  favoritesRoot = FavoritesPage
  portfolioRoot = PortfolioPage


  constructor(public navCtrl: NavController) {}

}
