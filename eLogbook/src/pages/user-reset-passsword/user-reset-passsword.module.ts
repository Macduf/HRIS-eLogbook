import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserResetPasssword } from './user-reset-passsword';

@NgModule({
  declarations: [
    UserResetPasssword,
  ],
  imports: [
    IonicPageModule.forChild(UserResetPasssword),
  ],
  exports: [
    UserResetPasssword
  ]
})
export class UserResetPassswordModule {}
