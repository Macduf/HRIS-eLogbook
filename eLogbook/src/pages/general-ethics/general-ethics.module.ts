import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralEthics } from './general-ethics';

@NgModule({
  declarations: [
    GeneralEthics,
  ],
  imports: [
    IonicPageModule.forChild(GeneralEthics),
  ],
  exports: [
    GeneralEthics
  ]
})
export class GeneralEthicsModule {}
