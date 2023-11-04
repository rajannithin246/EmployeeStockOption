import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AcknowledgementStatusComponent } from './hr-admin/acknowledgement-status/acknowledgement-status.component';
import { ApprovedNominationsComponent } from './hr-admin/approved-nominations/approved-nominations.component';
import { PolicyLegalComponent } from './hr-admin/policy-legal/policy-legal.component';
import { VestingDetailsComponent } from './hr-admin/vesting-details/vesting-details.component';
import { EmployeeStockOptionComponent } from './employee/employee-stock-option/employee-stock-option.component';

const routes: Routes = [
  // Other routes
  { path: '', component: AuthenticationComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: AppLayoutComponent, 
    children: [
           {
        path: 'acknowledgement',
        component: AcknowledgementStatusComponent, 
      },
      {
        path: 'approved-nomination',
        component: ApprovedNominationsComponent, 
      },
      {
        path: 'policy',
        component: PolicyLegalComponent,
      },
      {
        path: 'vesting-details',
        component: VestingDetailsComponent, 
      },
      {
        path: 'stock-options',
        component: EmployeeStockOptionComponent, 
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
