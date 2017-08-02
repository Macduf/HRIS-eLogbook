import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainMortalityMobidity } from './domain-mortality-mobidity';

@NgModule({
  declarations: [
    DomainMortalityMobidity,
  ],
  imports: [
    IonicPageModule.forChild(DomainMortalityMobidity),
  ],
  exports: [
    DomainMortalityMobidity
  ]
})
export class DomainMortalityMobidityModule {}
