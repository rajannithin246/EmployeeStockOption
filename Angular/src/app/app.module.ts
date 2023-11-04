import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { HeaderComponent } from './app-layout/header/header.component';
import { FooterComponent } from './app-layout/footer/footer.component';
import { PolicyLegalComponent } from './hr-admin/policy-legal/policy-legal.component';
import { AcknowledgementStatusComponent } from './hr-admin/acknowledgement-status/acknowledgement-status.component';
import { VestingDetailsComponent } from './hr-admin/vesting-details/vesting-details.component';
import { ApprovedNominationsComponent } from './hr-admin/approved-nominations/approved-nominations.component';
import { EmployeeStockOptionComponent } from './employee/employee-stock-option/employee-stock-option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AdminMainComponent,
    AppLayoutComponent,
    SidebarMenuComponent,
    HeaderComponent,
    FooterComponent,
    PolicyLegalComponent,
    AcknowledgementStatusComponent,
    VestingDetailsComponent,
    ApprovedNominationsComponent,
    EmployeeStockOptionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
