import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as authActions from '../store/actions'
import { AppState } from '../store/app.reducer';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AirLineService {

  private url = 'https://beta.id90travel.com'
  userLog: Subscription;
  
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  
  ) {}

  initAuthListener(){
    const obj = {
      name: 'hawaiian airlines (ha)',
      username: 'hauser',
      password: 12345,
      remember_me: 1
    }
     this.loginAirLines(obj.name, obj.username, obj.password, obj.remember_me)
    .pipe(map(data => data))
    .subscribe((userLog) => {
       const {id90_user_id, first_name, username, last_name, airline} = userLog      
        if(userLog) {
        const user = User.FromId90({id90_user_id, first_name, username, last_name, airline})
        this.store.dispatch(authActions.setUser({user: user}))
       } 
        if(!userLog){
          this.store.dispatch(authActions.unSetUser())
       }
    }
    )
    
  }
  getAirLines():Observable<any> {
    return this.http.get(`${this.url}/airlines`)    
  }

  loginAirLines(name: string, username: string, password: number, remember_me: number): Observable<any>{    
   return  this.http.post(`${this.url}/session.json`, {name, username, password, remember_me})
    .pipe(
     map((data) => data['member'])
    )
  }



}


