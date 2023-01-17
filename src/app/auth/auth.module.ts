import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginAuthComponent } from './login-auth/login-auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginAuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    
  ]
})
export class AuthModule { }
