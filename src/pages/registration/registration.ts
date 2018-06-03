import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  register() {
    this.navCtrl.setRoot(TabsPage, {
      username: this.username,
      password: this.password
    });
  }

}