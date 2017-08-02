import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainRelevantProcedures } from './domain-relevant-procedures';

@NgModule({
  declarations: [
    DomainRelevantProcedures,
  ],
  imports: [
    IonicPageModule.forChild(DomainRelevantProcedures),
  ],
  exports: [
    DomainRelevantProcedures
  ]
})
export class DomainRelevantProceduresModule {}
