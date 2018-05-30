import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the CharityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charity-list',
  templateUrl: 'charity-list.html',
})
export class CharityListPage {

  charities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.charities = [
      {
        name: "Smile Foundation",
        description: "Smile Foundation is a South African non-governmental \
          organisation with a comprehensive health care vision for children living \
          with facial conditions. Smile Foundation together with the country’s Academic \
          Hospitals work together to put the smile back onto children’s faces with corrective \
          facial reconstructive surgery and treatments.",
        goal: "R100,000.00"},
      { name: "Bob's for Good Foundation", 
        description: "Provides leather school shoes for \
          disadvantaged children. Founders Bob Skinstad and Ron Rutland hope to restore dignity to \
          said children and their schools.", 
        goal: "R40,000.00"},
      { name: "Save the Children", 
        description: "Save The Children believes in doing whatever it takes \
       for children, and they need all the help they can get. They offer programmes such as Early \
       Childhood Care and Development, Health and Nutrition, Education, Child Protection, and Children \
       Rights Governance.", 
       goal: "R50,000.000"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  toDetailPage(charity: object) {
    this.navCtrl.push(DetailPage, {
      charity: charity
    });
  }


}
