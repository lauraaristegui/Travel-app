import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search-hotel',
  templateUrl: './form-search-hotel.component.html',
  styleUrls: ['./form-search-hotel.component.css']
})
export class FormSearchHotelComponent implements OnInit {

  constructor(
    private router : Router
  ) { }
  searchTerm$ = new BehaviorSubject<string>('');
  ngOnInit(): void {
  }

  serach() {
  
    this.router.navigate(['/hotel'])
  
  }
}
