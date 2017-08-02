import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObgynProcedureForm } from './obgyn-procedure-form';

@NgModule({
  declarations: [
    ObgynProcedureForm,
  ],
  imports: [
    IonicPageModule.forChild(ObgynProcedureForm),
  ],
  exports: [
    ObgynProcedureForm
  ]
})
export class ObgynProcedureFormModule {}
