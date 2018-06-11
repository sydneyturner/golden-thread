import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  public email: string;
  public password: string;
  public firstname: string;
  public lastname: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }

  register() {
    this.http.post("http://localhost:3000/registration", {
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      password: this.password
    })
      .subscribe(
        result => {
          console.log(result);

          this.navCtrl.push(LoginPage, {
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
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