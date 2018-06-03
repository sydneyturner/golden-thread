import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Events, ToastController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { DetailPage } from '../detail/detail';
import { CharityListPage } from '../charity-list/charity-list';
import { Cleave } from 'cleave.js';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public charity: Charity;

  // public num: string;
  // var donatedChar = new Charity();
  public name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController, public events: Events, private toastCtrl: ToastController) {


  }

  ionViewDidLoad() {
    console.log('ionViewDownload PaymentPage');
    this.name = this.navParams.get("charity.name");
    // this.charity.goal = this.navParams.get("charity.name");
  }

  dismiss() {
    // this.navCtrl.pop();
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }



  confirmDonate(charity: Charity) {
    const confirm = this.alertCtrl.create({
      title: 'Donation Confirmation',
      message: 'Are you sure you want to donate to _______?',
      // want to add charity info to the alert
      // add amount donated
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm clicked');
            // this.events.publish('donation confirmed', name);
            // // pass in amount donated and charity name
          }
        },
      ]
    });
    confirm.present();

  }


  // confirmation() {
  //   this.events.subscribe('donation confirmed', (name) => {
  //     console.log('donation sent to', name);
  //   });
  //   let toast = this.toastCtrl.create({
  //     message: 'You\'re doantion has been sent.',
  //     duration: 3000,
  //     position: 'middle'
  //   });

  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });

  //   toast.present();
  // }

  // // Card Info
  // cardNumber() {
  //   new Cleave('.my-input', {
  //     creditCard: true
  // });

  // }
}


