import { Component, OnInit } from '@angular/core';
import { ListHotels } from '../../interfaces/hotels.interface';
import { Router } from '@angular/router';
import { HotelService } from '../../service/hotel.service';
import { filter } from 'rxjs/';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent implements OnInit {

  availability:ListHotels[] = [];
  availaTrue = true;

  constructor(
    private hotelService: HotelService 
  ) { }

  ngOnInit() {
   
    this.hotelService.getHotels()
    .subscribe(data => this.availability = data)
  }

    availabilityHotel() {
      
     this.availability.map(data => {
      data.availability = this.availaTrue
     })
      
    }
}
