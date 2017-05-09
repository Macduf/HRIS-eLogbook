import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainGeneralInfo } from './domain-general-info';

@NgModule({
  declarations: [
    DomainGeneralInfo,
  ],
  imports: [
    IonicPageModule.forChild(DomainGeneralInfo),
  ],
  exports: [
    DomainGeneralInfo
  ]
})
export class DomainGeneralInfoModule {}
