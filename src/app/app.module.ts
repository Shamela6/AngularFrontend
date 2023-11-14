import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAttendeeComponent } from './board-attendee/board-attendee.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { SeatingComponent } from './seating/seating.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { WebcheckComponent } from './webcheck/webcheck.component';
import { SortflightsComponent } from './sortflights/sortflights.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagequeriesComponent } from './managequeries/managequeries.component';
import { ManageusersComponent } from './manageusers/manageusers.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardAttendeeComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CancelBookingComponent,
    SeatingComponent,
    PaymentComponent,
    AdminloginComponent,
    WebcheckComponent,
    SortflightsComponent,
    DashboardComponent,
    ManagequeriesComponent,
    ManageusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }