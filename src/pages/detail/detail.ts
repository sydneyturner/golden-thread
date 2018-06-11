import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, Events } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';
import { FavoritesPage } from '../favorites/favorites';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {


  public charity: Charity = new Charity();

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private toastCtrl: ToastController, public events: Events) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDownload DetailPage');

  }

  navigateToPaymentModal(){
    let modal = this.modalCtrl.create(PaymentPage, { charity: this.charity });
    modal.present();
    this.navCtrl.push(PaymentPage, {
      charity: this.charity,
    });
  }

  presentToast() {
    let charity: Charity = this.charity;
    let toast = this.toastCtrl.create({
      message: 'Added to Favorites',
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    console.log('added to favorites')
    this.events.publish('added to favorites', charity)
  
  }

}
