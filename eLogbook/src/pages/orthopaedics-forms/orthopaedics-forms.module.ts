import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrthopaedicsForms } from './orthopaedics-forms';

@NgModule({
  declarations: [
    OrthopaedicsForms,
  ],
  imports: [
    IonicPageModule.forChild(OrthopaedicsForms),
  ],
  exports: [
    OrthopaedicsForms
  ]
})
export class OrthopaedicsFormsModule {}
