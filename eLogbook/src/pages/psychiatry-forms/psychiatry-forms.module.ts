import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PsychiatryForms } from './psychiatry-forms';

@NgModule({
  declarations: [
    PsychiatryForms,
  ],
  imports: [
    IonicPageModule.forChild(PsychiatryForms),
  ],
  exports: [
    PsychiatryForms
  ]
})
export class PsychiatryFormsModule {}
