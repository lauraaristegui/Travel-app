import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListHotels } from '../../../models/hotels.model';
import { HotelService } from '../../../services/hotel.service';
import { AppState } from '../../../store/app.reducer';
import { loadHotels } from '../../../store/actions/hotels.actions';
import { HotelsEffects } from '../../../store/effects/hotels.effects';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  
   hotels: ListHotels[] = [];
   loading: boolean =  false;
   error: any;

   constructor(
    private store: Store<AppState>
  ){}

  
 async ngOnInit() {

  this.store.select('hotels').subscribe(({hotels, loading, error}) => {
  this.hotels = hotels;
  this.loading = loading;
  this.error = error;
    
 })

  this.store.dispatch(loadHotels())
 }
}