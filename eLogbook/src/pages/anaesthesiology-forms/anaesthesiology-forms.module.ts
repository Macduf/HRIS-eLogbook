import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnaesthesiologyForms } from './anaesthesiology-forms';

@NgModule({
  declarations: [
    AnaesthesiologyForms,
  ],
  imports: [
    IonicPageModule.forChild(AnaesthesiologyForms),
  ],
  exports: [
    AnaesthesiologyForms
  ]
})
export class AnaesthesiologyFormsModule {}
