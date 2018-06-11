import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { DetailPage } from '../detail/detail';
import { PaymentPage } from '../payment/payment';

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

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Instantiate a new Charity instance
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Smile Foundation";

    charity1.description = "Smile Foundation is a South African non-governmental \
          organisation with a comprehensive health care vision for children living \
          with facial conditions. Smile Foundation together with the country’s Academic \
          Hospitals work together to put the smile back onto children’s faces \
          with corrective facial reconstructive surgery and treatments.";
    charity1.goal = "R100,000.00";
    charity1.image = "/assets/imgs/smlieFoundation.png";
    charity1.preview = "Smile Foundation is a South African non-governmental \
        organisation...";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Bob's for Good Foundation";
    charity2.preview = "Bob's for Good Foundation provide leather school shoes for disadvantages children...";
    charity2.description = " This foundation provides leather school shoes for \
          disadvantaged children. Founders Bob Skinstad and Ron Rutland hope to \
          restore dignity to said children and their schools.";
    charity2.goal = "R40,000.00";
    charity2.image = "/assets/imgs/otherCharity.png";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Save the Children";
    charity3.preview = "Save The Children offers programmes such as Early Childhood Care and Development...";
    charity3.description = "Save The Children believes in doing whatever it takes \
      for children, and they need all the help they can get. They offer programmes \
      such as Early Childhood Care and Development, Health and Nutrition, Education, \
      Child Protection, and Children Rights Governance.";
    charity3.goal = "R50,000.000";
    charity3.image = "/assets/imgs/saveTheChildren.png";

    // push into array
    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityListPage');
  }

  toDetailPage(charity: Charity) {
    this.navCtrl.push(DetailPage, {
      charity: charity
    });
  }
}
