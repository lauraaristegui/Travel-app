import { Component, Input, OnInit } from '@angular/core';
import { ListHotels } from '../../../models/hotels.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-card-component',
  templateUrl: './hotel-card-component.component.html',
  styleUrls: ['./hotel-card-component.component.css']
})
export class HotelCardComponentComponent implements OnInit {
@Input() hotel!: ListHotels;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
