import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './pages/hotelsList/hotel-list.component';
import { FormSearchHotelComponent } from './pages/form-search-hotel/form-search-hotel.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list-hotel', component: HotelListComponent},
      { path: 'search', component: FormSearchHotelComponent},
      { path: ':id', component: HotelComponent},
      {path: '**', redirectTo: 'list-hotel'}
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
export class HotelsRoutingModule { }
