import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { unSetUser } from '../../../store/actions/auth.actions';
import { unSetHotels } from '../../../store/actions/hotels.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: null;
  constructor(
    private router: Router,
    private store: Store<AppState>
    
    ){}

  closeSession() {
    this.store.dispatch(unSetUser())
    this.store.dispatch(unSetHotels())
    this.router.navigate(['./auth/login'])
  }
}
