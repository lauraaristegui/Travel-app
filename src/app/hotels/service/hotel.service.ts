import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListHotels } from '../interfaces/hotels.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient) { }

    getHotels(): Observable<ListHotels[]> {
      return this.http.get<ListHotels[]>('http://localhost:3000/Hotels')
    }
}
