import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralsurgeryForms } from './generalsurgery-forms';

@NgModule({
  declarations: [
    GeneralsurgeryForms,
  ],
  imports: [
    IonicPageModule.forChild(GeneralsurgeryForms),
  ],
  exports: [
    GeneralsurgeryForms
  ]
})
export class GeneralsurgeryFormsModule {}
