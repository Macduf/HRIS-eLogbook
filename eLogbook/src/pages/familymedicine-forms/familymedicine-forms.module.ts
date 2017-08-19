import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilymedicineForms } from './familymedicine-forms';

@NgModule({
  declarations: [
    FamilymedicineForms,
  ],
  imports: [
    IonicPageModule.forChild(FamilymedicineForms),
  ],
  exports: [
    FamilymedicineForms
  ]
})
export class FamilymedicineFormsModule {}
