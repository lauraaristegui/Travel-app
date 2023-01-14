import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAirLine , AirlineName} from 'src/app/models/airline.model';
import { AirLineService } from '../../services/airline.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})

export class LoginAuthComponent implements OnInit {


  loginForm: FormGroup;
  airlines :AirlineName[] = []
  constructor(
    private airlineService: AirLineService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.getListAir()

    this.loginForm = this.fb.group({
      name: [[] , Validators.required],
      username: ['', Validators.required],
      password: [124545, Validators.required],
      remember_me: ['', Validators.required]
    })
    
  
  }
getListAir() {
  this.airlineService.getAirLines().subscribe((data) => {
    this.airlines =  data;
  })
}
  

  Authentication(){
     if(this.loginForm.invalid){return;}
      const {name, username, password, remember_me} = this.loginForm.value
      const body = {
        name: name,
        username: username,
        password: password,
        remember_me: remember_me
      }
      this.airlineService.loginAirLines(body)
      .subscribe(data => data)
  }

}
