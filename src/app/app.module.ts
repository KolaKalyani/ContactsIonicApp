import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Contacts } from '@ionic-native/contacts';
import { ContactsPage} from '../pages/contacts/contacts';

import{SocialLoginsPage}from '../pages/social-logins/social-logins';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    SocialLoginsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    SocialLoginsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Contacts,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
