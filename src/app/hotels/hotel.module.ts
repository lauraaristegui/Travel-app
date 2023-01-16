import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormSearchHotelComponent } from './pages/form-search-hotel/form-search-hotel.component'
import { HotelListComponent } from './pages/hotelsList/hotel-list.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelCardComponentComponent } from './components/hotel-card-component/hotel-card-component.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    FormSearchHotelComponent,
    HotelListComponent,
    HotelComponent,
    HomeComponent,
    HotelCardComponentComponent,
    ImagenPipe,
    
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    FlexLayoutModule,
  ]
})
export class HotelModule { }
