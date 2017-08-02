import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainConditionsExposed } from './domain-conditions-exposed';

@NgModule({
  declarations: [
    DomainConditionsExposed,
  ],
  imports: [
    IonicPageModule.forChild(DomainConditionsExposed),
  ],
  exports: [
    DomainConditionsExposed
  ]
})
export class DomainConditionsExposedModule {}
