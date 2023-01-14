import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';
import { AirlineName } from '../models/airline.model';

@Injectable({
  providedIn: 'root'
})
export class AirLineService {

  private url = 'https://beta.id90travel.com'
   airline: AirlineName[] = [];
   nueva;
  constructor(private http: HttpClient) {}



  getAirLines():Observable<any> {
    return this.http.get(`${this.url}/airlines`)    
  }

  loginAirLines(body){
  
  console.log(body, 'body');
  
    return this.http.post(`${this.url}/session.json`, body)
    
  }

 
}

