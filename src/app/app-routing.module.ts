import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { AuthGuard } from './guards/auth.guard';
=======
import { AuthGuard } from './auth.guard';
>>>>>>> 99e08c8fd01b2b80352fcb07448646674fb140e5

const routes: Routes = [
  // { path: '', redirectTo: '/registration', pathMatch: 'full' },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'registration', component: SignupComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'profile', component: ProfileComponent },
  { path: 'profile/:username/:id', component: ProfileComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
