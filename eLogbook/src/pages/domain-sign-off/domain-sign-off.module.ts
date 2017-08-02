import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainSignOff } from './domain-sign-off';

@NgModule({
  declarations: [
    DomainSignOff,
  ],
  imports: [
    IonicPageModule.forChild(DomainSignOff),
  ],
  exports: [
    DomainSignOff
  ]
})
export class DomainSignOffModule {}
