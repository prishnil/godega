import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const ROUTES: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
