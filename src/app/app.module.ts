import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'


import { LoginAuthComponent } from './login/login-auth/login-auth.component';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


import { SearhHotelComponent } from './search-hotel/search-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAuthComponent,
    SearhHotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
