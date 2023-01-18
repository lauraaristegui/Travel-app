import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { ListHotels } from '../../../models/hotels.model';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel!: ListHotels;
  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelService,
    private router: Router
    
    ) { }

  ngOnInit() {

   this.activatedRoute.params
  .pipe(
    switchMap((id) => this.hotelService.getHotelById(id['id']))
  )
  .subscribe(hotel => this.hotel =  hotel
  )

}
   backList() {
    this.router.navigate(['./hotel/list-hotel'])
   }

}