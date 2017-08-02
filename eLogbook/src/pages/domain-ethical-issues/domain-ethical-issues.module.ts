import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainEthicalIssues } from './domain-ethical-issues';

@NgModule({
  declarations: [
    DomainEthicalIssues,
  ],
  imports: [
    IonicPageModule.forChild(DomainEthicalIssues),
  ],
  exports: [
    DomainEthicalIssues
  ]
})
export class DomainEthicalIssuesModule {}
