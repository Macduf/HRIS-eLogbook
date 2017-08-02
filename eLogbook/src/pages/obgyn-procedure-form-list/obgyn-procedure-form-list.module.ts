import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObgynProcedureFormList } from './obgyn-procedure-form-list';

@NgModule({
  declarations: [
    ObgynProcedureFormList,
  ],
  imports: [
    IonicPageModule.forChild(ObgynProcedureFormList),
  ],
  exports: [
    ObgynProcedureFormList
  ]
})
export class ObgynProcedureFormListModule {}
