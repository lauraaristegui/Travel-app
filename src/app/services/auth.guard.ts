import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AirLineService } from './airline.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private user: AirLineService) {}
  canActivate():Observable<boolean> {
  return this.user.initAuthListener()
  }
}
