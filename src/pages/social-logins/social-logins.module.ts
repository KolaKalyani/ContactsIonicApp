import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialLoginsPage } from './social-logins';

@NgModule({
  declarations: [
    SocialLoginsPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialLoginsPage),
  ],
})
export class SocialLoginsPageModule {}
