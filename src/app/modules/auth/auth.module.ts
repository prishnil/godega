import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    AngularFireAuthModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule {}
