import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserCreate } from './user-create';

@NgModule({
  declarations: [
    UserCreate,
  ],
  imports: [
    IonicPageModule.forChild(UserCreate),
  ],
  exports: [
    UserCreate
  ]
})
export class UserCreateModule {}
