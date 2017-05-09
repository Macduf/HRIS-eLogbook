import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserUpdate } from './user-update';

@NgModule({
  declarations: [
    UserUpdate,
  ],
  imports: [
    IonicPageModule.forChild(UserUpdate),
  ],
  exports: [
    UserUpdate
  ]
})
export class UserUpdateModule {}
