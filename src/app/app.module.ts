import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'


import { LoginAuthComponent } from './login/login-auth/login-auth.component';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule } from '@angular/forms';


import { HotelListComponent } from './hotelsList/hotel-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginAuthComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
