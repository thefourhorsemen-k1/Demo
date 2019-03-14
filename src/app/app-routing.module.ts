import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {RegisterFormComponent} from './user/register-form/register-form.component';
import {MusicComponent} from './music/music.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardGuard as AuthGuard} from './auth/auth-guard.guard';
import {RoleGuardService} from './auth/role-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'signup', component: RegisterFormComponent
  },
  {
    path: 'music', component: MusicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [RoleGuardService],
    data: {expectedRole: 'ROLE_ADMIN'}
  },
  {
    path: 'signin', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
