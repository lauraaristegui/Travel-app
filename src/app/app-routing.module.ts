import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthComponent } from './login/login-auth/login-auth.component';
import { SearhHotelComponent } from './search-hotel/search-hotel.component';
import { SearchComponent } from './shared/search/search.component';

const routes: Routes = [
  {path:'login', component: LoginAuthComponent},
  {path: 'hotel', component: SearhHotelComponent},
  {path: '**', redirectTo: 'LoginAuthComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
