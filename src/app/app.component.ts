import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 unSubscrition: Subscription
  constructor(private authService: AuthService){
   this.authService.initAuthListener()  
  }

 

}
