import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the IntegrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-integration',
  templateUrl: 'integration.html',
})
export class IntegrationPage {

  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
    },
    err => {
      console.log("Oops!");
  }
);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntegrationPage');
  }

}
