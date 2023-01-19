import { Component } from '@angular/core';
import { AirlineName } from './models/airline.model';
import { AirLineService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private authService: AirLineService){
    this.authService.initAuthListener()    
  }

}
