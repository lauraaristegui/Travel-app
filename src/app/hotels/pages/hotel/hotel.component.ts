import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListHotels } from '../../interfaces/hotels.interface';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  hotel!: ListHotels;
  ngOnInit(): void {

    this.activatedRoute.queryParams
    .subscribe(({id}) => console.log(id, 'data'))
  }

}
