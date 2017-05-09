import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainDashboard } from './domain-dashboard';

@NgModule({
  declarations: [
    DomainDashboard,
  ],
  imports: [
    IonicPageModule.forChild(DomainDashboard),
  ],
  exports: [
    DomainDashboard
  ]
})
export class DomainDashboardModule {}
