import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../../models/user';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public email: string;
  public password: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }

  login() {
    this.http.post("http://localhost:3000/login", {
      email: this.email,
      password: this.password
    })
      .subscribe(
        result => {
          console.log(result);

          this.navCtrl.setRoot(TabsPage, {
            email: this.email,
            password: this.password
          });
          // this.navCtrl.push(ProfilePage);
        },
        error => {
          console.log(error);
        }
      );

  }


}