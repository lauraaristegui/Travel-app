import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAirLine , AirlineName} from 'src/app/models/airline.model';
import { AirLineService } from '../../services/airline.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})

export class LoginAuthComponent implements OnInit {


  loginForm: FormGroup;
  airlines :AirlineName[] = [];


  constructor(
    private airlineService: AirLineService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListAir()

    this.loginForm = this.fb.group({
      name: [[] , Validators.required],
      username: ['', Validators.required],
      password: [12345, Validators.required],
      remember_me: ['', Validators.required]
    })
  }
  getListAir() {
    this.airlineService.getAirLines().subscribe((data) => {
    this.airlines =  data
  console.log(this.airlines);
  
 
    
  });
}
  

  Authentication(){
     if(this.loginForm.invalid){return;}
      const {name, username, password, remember_me} = this.loginForm.value
      this.airlineService.loginAirLines(name, username, password, remember_me)
      .subscribe(data => {
        console.log(data, 'estoy en el ts');
        
        if(data) {
          this.router.navigate(['/hotel'])
        }
      })
  }


}
