import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObgynForms } from './obgyn-forms';

@NgModule({
  declarations: [
    ObgynForms,
  ],
  imports: [
    IonicPageModule.forChild(ObgynForms),
  ],
  exports: [
    ObgynForms
  ]
})
export class ObgynFormsModule {}
