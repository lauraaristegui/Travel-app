import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListHotels } from '../../interfaces/hotels.interface';
import { HotelService } from '../../service/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  
   hotels: ListHotels[] = [];
  constructor(
    private router: Router,
    private hotelService: HotelService
  ) { }

  
 async ngOnInit() {

  this.hotelService.getHotels()
  .subscribe(hotel => this.hotels = hotel
  )
 
  
 }

  closeSession() {
  this.router.navigate(['/login']);
}


}