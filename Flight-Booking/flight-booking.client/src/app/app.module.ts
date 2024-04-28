import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { RegisterPassengerComponent } from './register-passenger/register-passenger.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { LoginPassengerComponent } from './login-passenger/login-passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightsComponent,
    NavMenuComponent,
    BookFlightComponent,
    RegisterPassengerComponent,
    MyBookingsComponent,
    LoginPassengerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchFlightsComponent, pathMatch: 'full' },
      { path: 'search-flights', component: SearchFlightsComponent },
      { path: 'book-flight/:flightId', component: BookFlightComponent, canActivate: [AuthGuard] },
      { path: 'register-passenger', component: RegisterPassengerComponent },
      { path: 'my-bookings', component: MyBookingsComponent, canActivate: [AuthGuard] },
      { path: 'login-passenger', component: LoginPassengerComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
