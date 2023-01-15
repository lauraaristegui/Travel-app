import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirLineService {

  private url = 'https://beta.id90travel.com'

  
  constructor(private http: HttpClient) {}

  getAirLines():Observable<any> {
    return this.http.get(`${this.url}/airlines`)    
  }

  loginAirLines(name: string, username: string, password: number, remember_me: number): Observable<any>{
    console.log(name, username, password, remember_me, 'service');
    
    return this.http.post(`${this.url}/session.json`, {name, username, password, remember_me})
  }

}

