import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralmedicineForms } from './generalmedicine-forms';

@NgModule({
  declarations: [
    GeneralmedicineForms,
  ],
  imports: [
    IonicPageModule.forChild(GeneralmedicineForms),
  ],
  exports: [
    GeneralmedicineForms
  ]
})
export class GeneralmedicineFormsModule {}
