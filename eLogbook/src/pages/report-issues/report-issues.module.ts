import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportIssues } from './report-issues';

@NgModule({
  declarations: [
    ReportIssues,
  ],
  imports: [
    IonicPageModule.forChild(ReportIssues),
  ],
  exports: [
    ReportIssues
  ]
})
export class ReportIssuesModule {}
