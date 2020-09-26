import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OverviewComponent } from './views/overview/overview.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { SetupComponent } from './views/setup/setup.component';
import { SignInComponent } from './views/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'overview', component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
