import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.css']
})
export class ErrorComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeSession() {
    this.router.navigate(['/auth/login'])
  }

}
