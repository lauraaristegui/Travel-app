import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { ListHotels } from '../../../models/hotels.model';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-form-search-hotel',
  templateUrl: './form-search-hotel.component.html',
  styleUrls: ['./form-search-hotel.component.css']
})
export class FormSearchHotelComponent implements OnInit {

  searchTerm: string = '';

  hotels: ListHotels[] = [];

  hotelSelecction!: ListHotels;

  constructor(
    private serviceHotel: HotelService
  ) { }

  ngOnInit() {
   
  }

  search() {
    this.serviceHotel.suggestionsHotels(this.searchTerm)
    .subscribe((hotel) => {
      this.hotels = hotel;      
  })
}

 optionSelected(event: MatAutocompleteSelectedEvent) {

  const hotel: ListHotels =  event.option.value;
  
  this.searchTerm =  hotel.name;
  this.serviceHotel.getHotelById(hotel.id)
  .subscribe(hotel => this.hotelSelecction =  hotel)
}
  
}
