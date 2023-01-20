import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { ListHotels } from '../../../models/hotels.model';
import { HotelService } from '../../../services/hotel.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { loadHotel } from '../../../store/actions/hotel.actions';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel: ListHotels;
  loading: boolean;
  error: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
    
    ) { }

  ngOnInit() {
    this.store.select('hotel').subscribe(
      ({hotel, loading, error}) => {
        this.hotel = hotel;
        this.loading = loading;
        this.error =  error
      } 
    )
   this.activatedRoute.params.subscribe(({id}) => {
      this.store.dispatch(loadHotel({id}))
   })

  }

   backList() {
    this.router.navigate(['./hotel/list-hotel'])
  }

}