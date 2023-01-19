import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { unSetUser } from '../../../store/actions/auth.actions';

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
    this.router.navigate(['./auth/login'])
  }
}
