import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainSetting } from './domain-setting';

@NgModule({
  declarations: [
    DomainSetting,
  ],
  imports: [
    IonicPageModule.forChild(DomainSetting),
  ],
  exports: [
    DomainSetting
  ]
})
export class DomainSettingModule {}
