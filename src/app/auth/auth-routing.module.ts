import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthComponent } from './login-auth/login-auth.component';

  const routes: Routes = [
    {
      path: '', 
      children: [
        {
          path:'login' , component: LoginAuthComponent
        },
        {
          path: '**', redirectTo:'login'
        }
      ]
    }
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
