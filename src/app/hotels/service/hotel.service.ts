import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListHotels } from '../interfaces/hotels.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl: string =  environment.baseUrl
  constructor(
    private http: HttpClient) { }

    getHotels(): Observable<ListHotels[]> {
      return this.http.get<ListHotels[]>(`${this.baseUrl}/Hotels`)
    }

    getHotelById(id:string):Observable<ListHotels> {
      return this.http.get<ListHotels>(`${this.baseUrl}/Hotels/${id}`)
    }

    suggestionsHotels(term: string): Observable<ListHotels[]> {
      return this.http.get<ListHotels[]>(`${this.baseUrl}/hotels?q=${term}`);
    }
}
