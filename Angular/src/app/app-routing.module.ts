import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

const routes: Routes = [
  // Other routes
  { path: '', component: AuthenticationComponent },
  {
    path: 'admin-main',
    component: AppLayoutComponent, // Use the LayoutComponent as the parent layout
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: AdminMainComponent, // The AdminMainComponent is displayed within the LayoutComponent
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
