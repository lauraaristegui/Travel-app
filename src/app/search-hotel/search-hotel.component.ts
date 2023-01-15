import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchHotelService } from '../services/searchHotel.service';
import { HotelModelList } from '../models/hotel.model';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearhHotelComponent implements OnInit {

  listHotel:HotelModelList[] = [];
  listFilterHotel = []
  hotel;
  searchString: number;
  constructor(
    private router: Router,
    private serachService: SearchHotelService
  ) { }

  
  ngOnInit(): void {
    this.serachHotel()
  }


  serachHotel() {
  this.serachService.listHotels().subscribe(data => {
    const list = data;    
    const nueva = list.map(({id, name, availability, price, propertyImage}) => 
        ({
        id: id,
        name: name,
        availability: availability['available'],
        price: price['lead']['amount'],
        propertyImage: propertyImage['image']['url'],
      
      })
    )
    this.listHotel =  nueva.slice(0, 10)    
  })
}

  closeSession() {
  this.router.navigate(['/login']);
}
}
