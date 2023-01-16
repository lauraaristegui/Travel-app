import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthComponent } from './login/login-auth/login-auth.component';
import { HotelListComponent } from './hotelsList/hotel-list.component';

const routes: Routes = [
  {path:'login', component: LoginAuthComponent},
  {path: 'hotel', component: HotelListComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
