import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListHotels } from '../models/hotels.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl: string =  environment.baseUrl
  constructor(
    private http: HttpClient) { }

    getHotels():Observable<any> {
      return this.http.get(`${this.baseUrl}/Hotels`)
    }

    getHotelById(id:string):Observable<any> {
      return this.http.get(`${this.baseUrl}/Hotels/${id}`)
    }

    suggestionsHotels(term: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/hotels?q=${term}`);
    }
}
