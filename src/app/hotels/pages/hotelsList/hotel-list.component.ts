import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListHotels } from '../../../models/hotels.model';
import { AppState } from '../../../store/app.reducer';
import { loadHotels } from '../../../store/actions/hotels.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit, OnDestroy {
  
   hotels: ListHotels[] = [];
   loading: boolean =  false;
   error: any;
   unSubcribe: Subscription;

   constructor(
    private store: Store<AppState>
  ){}

  
  ngOnInit() {
   this.unSubcribe = this.store.select('hotels').subscribe(({hotels, loading, error}) => {
   this.hotels = hotels;
   this.loading = loading;
   this.error = error;
 })
   this.store.dispatch(loadHotels())
 }

 ngOnDestroy(){
   this.unSubcribe.unsubscribe()
 }
}