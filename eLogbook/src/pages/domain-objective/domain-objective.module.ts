import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainObjective } from './domain-objective';

@NgModule({
  declarations: [
    DomainObjective,
  ],
  imports: [
    IonicPageModule.forChild(DomainObjective),
  ],
  exports: [
    DomainObjective
  ]
})
export class DomainObjectiveModule {}
