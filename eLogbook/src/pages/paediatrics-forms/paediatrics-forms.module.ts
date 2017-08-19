import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaediatricsForms } from './paediatrics-forms';

@NgModule({
  declarations: [
    PaediatricsForms,
  ],
  imports: [
    IonicPageModule.forChild(PaediatricsForms),
  ],
  exports: [
    PaediatricsForms
  ]
})
export class PaediatricsFormsModule {}
