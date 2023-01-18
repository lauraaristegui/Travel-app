import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserLogin } from '../models/airline.model';

@Injectable({
  providedIn: 'root'
})
export class AirLineService {

  private url = 'https://beta.id90travel.com'

  
  userActive;


  constructor(
    private http: HttpClient,
  
  ) {}


  getAirLines():Observable<any> {
    return this.http.get(`${this.url}/airlines`)    
  }

  loginAirLines(name: string, username: string, password: number, remember_me: number): Observable<UserLogin[]>{    
   return  this.http.post<UserLogin[]>(`${this.url}/session.json`, {name, username, password, remember_me})
    .pipe(
     map((data) => this.userActive = data['member'])
    )
   
  }

  initAuthListener() {
    const obj = {
      name: 'hawaiian airlines (ha)',
      username: 'hauser',
      password: 12345,
      remember_me: 1
    }
    return  this.loginAirLines(obj.name, obj.username, obj.password, obj.remember_me).pipe(
      map(data => data !=null)
    )
  }

}


