import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHotelService {

  private url = 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?domain=AE&sort_order=REVIEW&locale=en_GB&checkout_date=2023-09-27&region_id=2872&adults_number=1&checkin_date=2023-09-26&available_filter=SHOW_AVAILABLE_ONLY&meal_plan=FREE_BREAKFAST&guest_rating_min=8&price_min=10&page_number=1&children_ages=4%2C0%2C15&amenities=WIFI%2CPARKING&price_max=500&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL&payment_type=PAY_LATER%2CFREE_CANCELLATION&star_rating_ids=3%2C4%2C5'

  
  constructor(private http: HttpClient) {}


  listHotels(){

   return this.http.get(`${this.url}`, 
    { headers: new HttpHeaders({'X-RapidAPI-Key':'34e4b871acmsh8ff22fd5a9e5b7ap100181jsn0173ee461dfe ', 'X-RapidAPI-Host':'hotels-com-provider.p.r'})})
    .pipe(
        map(data => data['properties']),
        
    )
}
}

