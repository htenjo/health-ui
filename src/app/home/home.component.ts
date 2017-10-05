import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared_services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    let page:string = 'error';

    if (this.auth.isCurrentUserRoot()) {
      page = 'company';
    } else if (this.auth.isCurrentUserAdmin()) {
      page = 'specialty';
    } else if (this.auth.isCurrentUserOperator()) {
      page = 'patient';
    } 

    this.router.navigate([page])
      .catch(error => console.log('Error redirectign to ', page));
  }
}