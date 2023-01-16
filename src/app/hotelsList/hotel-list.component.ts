import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelModelList } from '../models/hotel.model';
import { BehaviorSubject,Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  
  searchTerm$ = new BehaviorSubject<string>('');
  listHotel:HotelModelList[] = [
   
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},
      {"id": "1", "name": "Hotel Riazor", "price": "1700000" , availability :true, "image":'', "description": "lorem"},

    
  ];
  listFilterHotel$ = new Observable<HotelModelList[]>();

  accessToken;
  constructor(
    private router: Router,
  ) { }

  
 async ngOnInit() {
 
  console.log(this.listHotel);
  
 
 }

  
  
  closeSession() {
  this.router.navigate(['/login']);
}


}