import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, Events, ToastController, LoadingController } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { DetailPage } from '../detail/detail';
import { CharityListPage } from '../charity-list/charity-list';
import { CharityDonation } from '../../models/charity-donation';
import { User } from '../../models/user';
// import { Cleave } from 'cleave.js';

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

  public charity: Charity = new Charity();
  public charityDonation: CharityDonation;
  public user: User;
  public amount: number;
  // var donatedChar = new Charity();
  // public name: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public alertCtrl: AlertController, public events: Events, private toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
      var newDonation = new CharityDonation();
      newDonation.amount += this.amount;
      this.charity = this.navParams.get('charity');
      // newDonation.charityID = this.charity.id;
      // newDonation.userID = this.user.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDownload PaymentPage');
    // this.name = this.navParams.get("charity");
    // this.charity.goal = this.navParams.get("charity.name");
  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  confirmDonate() {
    const confirm = this.alertCtrl.create({
      title: 'Donation Confirmation',
      message: 'Are you sure you want to donate $' + this.amount + '?',
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

            let loading = this.loadingCtrl.create({
              spinner: 'dots',
              content: 'Sending donation...',
              duration: 3000
            });
          
            loading.onDidDismiss(() => {
              console.log('Dismissed loading');
              let toast = this.toastCtrl.create({
                message: 'You\'re doantion has been sent.',
                duration: 3000,
                position: 'middle'
              });
  
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
                this.navCtrl.push(DetailPage, {
                  charity: this.charity,
                });
                
              });
  
              toast.present();
              
            });
          
            loading.present();
            

          }
        },
      ]
    });
    confirm.present();

  }





}


