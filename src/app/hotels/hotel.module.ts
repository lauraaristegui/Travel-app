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
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FilterPriceComponent } from './pages/filter-price/filter-price.component';



@NgModule({
  declarations: [
    FormSearchHotelComponent,
    HotelListComponent,
    HotelComponent,
    HomeComponent,
    HotelCardComponentComponent,
    ImagenPipe,
    FilterPriceComponent,
    
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HotelModule { }
