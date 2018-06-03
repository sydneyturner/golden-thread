import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // create new user

  constructor(public navCtrl: NavController) {
    // this.navCtrl.setRoot()

    // Home --> Login --> Tabs (root) 
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToRegister(){
    this.navCtrl.push(RegistrationPage);
  }
  

}