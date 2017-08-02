import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CpdActivities } from './cpd-activities';

@NgModule({
  declarations: [
    CpdActivities,
  ],
  imports: [
    IonicPageModule.forChild(CpdActivities),
  ],
  exports: [
    CpdActivities
  ]
})
export class CpdActivitiesModule {}
