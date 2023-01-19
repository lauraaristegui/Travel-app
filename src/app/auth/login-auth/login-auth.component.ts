import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as uiActions from '../../store/actions/ui.actions';

import { Subscription } from 'rxjs';

import { AirlineName} from 'src/app/models/airline.model';
import { AirLineService } from '../../services/auth.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.scss']
})

export class LoginAuthComponent implements OnInit, OnDestroy {


  loginForm: FormGroup;
  loading: boolean = false;
  
  airlines :AirlineName[] = [];

  uiSubscriptions: Subscription;

  constructor(
    private airlineService: AirLineService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
   
  ) { }

  ngOnInit(): void {
    this.getListAir();
  
    this.loginForm = this.fb.group({
      name: [[] , Validators.required],
      username: ['', Validators.required],
      password: [12345, Validators.required],
      remember_me: ['', Validators.required]
    })
  
  this.uiSubscriptions = this.store.select('ui').subscribe(data => {
      this.loading = data.isLoading;
  })
}

  ngOnDestroy() {
    this.uiSubscriptions.unsubscribe()
  }

  getListAir() {
    this.airlineService.getAirLines().subscribe((data) => {
    this.airlines =  data
  });
}

  Authentication(){
     if(this.loginForm.invalid){return;}
     this.store.dispatch(uiActions.isLoading())
      const {name, username, password, remember_me} = this.loginForm.value
      this.airlineService.loginAirLines(name, username, password, remember_me)
      .subscribe(data => {        
        if(data) {    
          this.store.dispatch(uiActions.stopLoading())
          this.router.navigate(['/hotel/list-hotel'])
        }
        
      })
  }

  
  
}
