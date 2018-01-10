import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
/**
 * Generated class for the SocialLoginsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-logins',
  templateUrl: 'social-logins.html',
})
export class SocialLoginsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialLoginsPage');
  }

  loginFacebook(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

}
