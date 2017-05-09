import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteInfo } from './site-info';

@NgModule({
  declarations: [
    SiteInfo,
  ],
  imports: [
    IonicPageModule.forChild(SiteInfo),
  ],
  exports: [
    SiteInfo
  ]
})
export class SiteInfoModule {}
