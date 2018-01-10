import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
  }
contact:Contact;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
  
  SaveContact() {
    this.contact= this.contacts.create();

    this.contact.name = new ContactName(null, 'Smith', 'John');
    this.contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    this.contact.save().then(
      () => console.log('Contact saved!', this.contact),
      (error: any) => console.error('Error saving contact.', error)
    );

    console.log('Save Contact')
  }

}
